import { getAuthSettings } from './storage';

// Create a worker for API operations
let apiWorker: Worker | null = null;

// Initialize the API worker
export function initApiWorker(): Worker | null {
  if (typeof window === 'undefined') return null;
  
  if (!apiWorker) {
    const workerCode = `
      let socket = null;
      let serverUrl = '';
      let credentials = null;
      let wsConfig = {
        enabled: true,
        autoReconnect: true,
        reconnectInterval: 3000
      };
      let reconnectTimeout = null;
      let clientId = null;
      
      // Generate a unique client ID
      function generateClientId() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          const r = Math.random() * 16 | 0;
          const v = c === 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
      
      // Initialize client ID if not already set
      function ensureClientId() {
        if (!clientId) {
          clientId = generateClientId();
        }
        return clientId;
      }
      
      // Helper for HTTP requests
      async function fetchWithAuth(endpoint, options = {}) {
        const url = serverUrl + endpoint;
        
        if (credentials) {
          options.headers = {
            ...options.headers,
            'Authorization': 'Basic ' + btoa(credentials.username + ':' + credentials.password)
          };
        }
        
        return fetch(url, options);
      }

      /**
       * Detects if a Blob contains PNG or JPEG data and returns a new Blob with the correct MIME type
       * @param blob The input Blob to analyze
       * @returns Promise that resolves to a new Blob with the correct MIME type
       */
      async function detectAndCreateTypedImageBlob(data) {
        let uint8Array;
        
        // Handle different input types
        if (data instanceof Blob) {
          // For Blob input: slice and convert to ArrayBuffer
          const arrayBuffer = await data.slice(0, 8).arrayBuffer();
          uint8Array = new Uint8Array(arrayBuffer);
        } else if (data instanceof ArrayBuffer) {
          // For ArrayBuffer input: directly create Uint8Array
          uint8Array = new Uint8Array(data, 0, Math.min(8, data.byteLength));
        } else {
          // If we can't determine the type, return a generic blob
          return new Blob([data], { type: 'application/octet-stream' });
        }
        
        // Check for PNG signature (89 50 4E 47 0D 0A 1A 0A)
        if (
          uint8Array[0] === 0x89 &&
          uint8Array[1] === 0x50 &&
          uint8Array[2] === 0x4E &&
          uint8Array[3] === 0x47 &&
          uint8Array[4] === 0x0D &&
          uint8Array[5] === 0x0A &&
          uint8Array[6] === 0x1A &&
          uint8Array[7] === 0x0A
        ) {
          return new Blob([data], { type: 'image/png' });
        }
        
        // Check for JPEG signature (FF D8 FF)
        if (
          uint8Array[0] === 0xFF &&
          uint8Array[1] === 0xD8 &&
          uint8Array[2] === 0xFF
        ) {
          return new Blob([data], { type: 'image/jpeg' });
        }
        
        // If not recognized, return the original blob with a generic image type
        return new Blob([data], { type: 'image/jpeg' });
      } 

      // Handle messages from the main thread
      self.onmessage = async function(e) {
        const { type, data } = e.data;
        
        switch (type) {
          case 'init':
            serverUrl = data.serverUrl;
            credentials = data.credentials;
            wsConfig = data.wsConfig || wsConfig;
            break;
            
          case 'update_ws_config':
            wsConfig = data.wsConfig;
            // If connection is enabled but socket is not connected, try to connect
            if (wsConfig.enabled && !socket) {
              connectWebSocket();
            } 
            // If connection is disabled but socket is connected, disconnect
            else if (!wsConfig.enabled && socket) {
              disconnectWebSocket();
            }
            break;
            
          case 'connect_ws':
            if (wsConfig.enabled) {
              connectWebSocket();
            } else {
              self.postMessage({ type: 'ws_disabled' });
            }
            break;
            
          case 'disconnect_ws':
            disconnectWebSocket();
            break;
            
          case 'send_workflow':
            try {
              const result = await sendWorkflow(data.workflow, data.inputs);
              self.postMessage({ type: 'workflow_sent', data: result });
              
              // After the workflow is sent, make sure we're connected to the WebSocket
              // to receive progress updates for this workflow
              if (wsConfig.enabled && !socket) {
                connectWebSocket();
              }
            } catch (error) {
              self.postMessage({ type: 'error', error: error.message });
            }
            break;
            
          case 'get_history':
            try {
              const history = await getHistory();
              self.postMessage({ type: 'history', data: history });
            } catch (error) {
              self.postMessage({ type: 'error', error: error.message });
            }
            break;
        }
      };
      
      // Connect to WebSocket with our client ID
      function connectWebSocket() {
        try {
          // Clear any existing reconnect timeout
          if (reconnectTimeout) {
            clearTimeout(reconnectTimeout);
            reconnectTimeout = null;
          }
          
          if (socket) {
            disconnectWebSocket();
          }
          
          // Ensure we have a client ID
          ensureClientId();
          
          // Connect to the websocket with our client ID
          const wsUrl = serverUrl.replace('http', 'ws') + '/ws?clientId=' + clientId;
          socket = new WebSocket(wsUrl);
          
          socket.onopen = function() {
            self.postMessage({ type: 'ws_connected' });
          };
          
          socket.onclose = function(event) {
            self.postMessage({ type: 'ws_disconnected', data: { code: event.code, reason: event.reason } });
            socket = null;
            
            // Auto reconnect if enabled
            if (wsConfig.enabled && wsConfig.autoReconnect) {
              reconnectTimeout = setTimeout(() => {
                connectWebSocket();
                self.postMessage({ type: 'ws_reconnecting' });
              }, wsConfig.reconnectInterval);
            }
          };
          
          socket.onerror = function(error) {
            self.postMessage({ type: 'ws_error', error: error.message });
          };
          
          socket.onmessage = function(event) {
            if (event.data instanceof Blob || event.data instanceof ArrayBuffer) {
              // Skip the first 8 bytes of binary data
              let processedData;
              if (event.data instanceof Blob) {
                // For Blob, slice from the 8th byte onwards
                processedData = event.data.slice(8);
              } else if (event.data instanceof ArrayBuffer) {
                // For ArrayBuffer, create a new view starting from the 8th byte
                const byteLength = event.data.byteLength - 8;
                if (byteLength > 0) {
                  processedData = event.data.slice(8);
                } else {
                  // Handle case where data is less than 8 bytes
                  processedData = event.data;
                }
              }
              
              // Process the data after skipping the first 8 bytes
              detectAndCreateTypedImageBlob(processedData).then((blob) => {
                self.postMessage({ type: 'ws_binary', data: blob });
              });
            } else {
              try {
                const message = JSON.parse(event.data);
                self.postMessage({ type: 'ws_message', data: message });
              } catch (error) {
                self.postMessage({ type: 'error', error: 'Invalid WebSocket message format' });
              }
            }
          };
        } catch (error) {
          self.postMessage({ type: 'error', error: error.message });
        }
      }
      
      // Disconnect WebSocket
      function disconnectWebSocket() {
        if (reconnectTimeout) {
          clearTimeout(reconnectTimeout);
          reconnectTimeout = null;
        }
        
        if (socket) {
          socket.close();
          socket = null;
        }
      }
      
      // Send workflow to ComfyUI
      async function sendWorkflow(workflow, inputs) {
        // Ensure we have a client ID
        ensureClientId();
        
        const prompt = transformWorkflowWithInputs(workflow, inputs);
        
        const response = await fetchWithAuth('/prompt', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            prompt: prompt,
            client_id: clientId 
          })
        });
        
        if (!response.ok) {
          throw new Error('Failed to send workflow: ' + response.statusText);
        }
        
        return await response.json();
      }
      
      // Get generation history
      async function getHistory() {
        const response = await fetchWithAuth('/history');
        
        if (!response.ok) {
          throw new Error('Failed to get history: ' + response.statusText);
        }
        
        return await response.json();
      }
      
      // Transform workflow with user inputs
      function transformWorkflowWithInputs(workflow, userInputs) {
        const result = JSON.parse(JSON.stringify(workflow));
        
        // Apply user inputs to the workflow
        for (const nodeId in userInputs) {
          if (result[nodeId] && result[nodeId].inputs) {
            for (const inputKey in userInputs[nodeId].inputs) {
              if (result[nodeId].inputs.hasOwnProperty(inputKey)) {
                result[nodeId].inputs[inputKey] = userInputs[nodeId].inputs[inputKey];
              }
            }
          }
        }
        
        return result;
      }
    `;
    
    const blob = new Blob([workerCode], { type: 'application/javascript' });
    apiWorker = new Worker(URL.createObjectURL(blob));
  }
  
  if (apiWorker) {
    // Initialize worker with auth settings
    const authSettings = getAuthSettings();
    apiWorker.postMessage({
      type: 'init',
      data: {
        serverUrl: authSettings.serverUrl,
        credentials: {
          username: authSettings.username,
          password: authSettings.password
        },
        wsConfig: {
          enabled: authSettings.wsEnabled,
          autoReconnect: authSettings.wsAutoReconnect,
          reconnectInterval: authSettings.wsReconnectInterval
        }
      }
    });
  }
  
  return apiWorker;
}

// Connect to WebSocket
export function connectWebSocket() {
  if (!apiWorker) {
    apiWorker = initApiWorker();
  }
  
  if (apiWorker) {
    apiWorker.postMessage({
      type: 'connect_ws'
    });
  }
}

// Disconnect from WebSocket
export function disconnectWebSocket() {
  if (apiWorker) {
    apiWorker.postMessage({ type: 'disconnect_ws' });
  }
}

// Update WebSocket configuration
export function updateWebSocketConfig(config: { enabled: boolean, autoReconnect: boolean, reconnectInterval: number }) {
  if (!apiWorker) {
    apiWorker = initApiWorker();
  }
  
  if (apiWorker) {
    apiWorker.postMessage({
      type: 'update_ws_config',
      data: { wsConfig: config }
    });
  }
}

// Send workflow to ComfyUI
export function sendWorkflow(workflow: any, inputs: any): Promise<any> {
  return new Promise((resolve, reject) => {
    if (!apiWorker) {
      apiWorker = initApiWorker();
    }
    
    if (!apiWorker) {
      reject(new Error('Failed to initialize API worker'));
      return;
    }
    
    const messageHandler = (e: MessageEvent) => {
      const { type, data, error } = e.data;
      
      if (type === 'workflow_sent') {
        apiWorker?.removeEventListener('message', messageHandler);
        resolve(data);
      } else if (type === 'error') {
        apiWorker?.removeEventListener('message', messageHandler);
        reject(new Error(error));
      }
    };
    
    apiWorker.addEventListener('message', messageHandler);
    
    apiWorker.postMessage({
      type: 'send_workflow',
      data: { workflow, inputs }
    });
  });
}

// Add listener for WebSocket events
export function addWebSocketListener(callback: (event: any) => void): () => void {
  if (!apiWorker) {
    apiWorker = initApiWorker();
  }
  
  if (!apiWorker) {
    return () => {}; // Return a no-op function if worker initialization failed
  }
  
  const messageHandler = (e: MessageEvent) => {
    const { type, data, error } = e.data;
    
    if (type === 'ws_message' || type === 'ws_connected' || 
        type === 'ws_disconnected' || type === 'ws_error' || type === 'ws_binary') {
      callback({ type, data, error });
    } else {
      console.log('unknown message type', type);
    }
  };
  
  apiWorker.addEventListener('message', messageHandler);
  
  // Return a function to remove the listener
  return () => {
    if (apiWorker) {
      apiWorker.removeEventListener('message', messageHandler);
    }
  };
}

// Extract image inputs from a workflow
export function extractWorkflowInputs(workflow: any): any {
  const result: any = {};
  
  // Iterate through each key in the workflow
  for (const key in workflow) {
    if (workflow.hasOwnProperty(key) && workflow[key].inputs) {
      // Create a new entry for this key with an empty inputs object
      result[key] = { inputs: {} };
      
      // Get the inputs object for this key
      const inputs = workflow[key].inputs;
      
      // Iterate through each field in the inputs object
      for (const inputKey in inputs) {
        if (inputs.hasOwnProperty(inputKey)) {
          const value = inputs[inputKey];
          
          // Check if the value is a string or number (not an array)
          if (typeof value === 'string' || typeof value === 'number') {
            // Add this field to the result
            result[key].inputs[inputKey] = value;
          }
        }
      }
    }
  }
  
  return result;
}
