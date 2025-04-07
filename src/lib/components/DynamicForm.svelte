<script lang="ts">
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';
  import { extractWorkflowInputs, sendWorkflow, addWebSocketListener, connectWebSocket, disconnectWebSocket } from '$lib/services/comfyApi';
  import { saveImageToHistory, getAuthSettings } from '$lib/services/storage';
  
  export let workflow: any;
  
  // Define event types for the dispatcher
  interface DynamicFormEvents {
    'image-generated': { image: { url: string, filename: string, type: string, timestamp: number } };
  }
  
  const dispatch = createEventDispatcher<DynamicFormEvents>();
  let workflowInputs: any = {};
  let formData: any = {};
  let nodeCollapsedState: { [nodeId: string]: boolean } = {}; // State for each node's collapsed status
  let isGenerating = false;
  let progress = 0;
  let currentNodeName = '';
  let errorMessage = '';
  let removeWebSocketListener: (() => void) | null = null;
  let wsEnabled = true;
  let promptId: string | null = null;
  
  onMount(() => {
    // Get WebSocket settings
    const authSettings = getAuthSettings();
    wsEnabled = authSettings.wsEnabled;
    
    // Extract editable inputs from the workflow
    workflowInputs = extractWorkflowInputs(workflow);
    
    // Initialize form data with default values from workflow
    initFormData();
    initCollapsedState(); // Initialize collapsed state when workflow changes
    
    // Setup WebSocket listener for progress updates if enabled
    if (wsEnabled) {
      setupWebSocketListener();
    }
  });
  
  onDestroy(() => {
    if (removeWebSocketListener) {
      removeWebSocketListener();
    }
  });
  
  // When workflow changes, update inputs and form data
  $: if (workflow) {
    workflowInputs = extractWorkflowInputs(workflow);
    initFormData();
    initCollapsedState(); // Initialize collapsed state when workflow changes
  }
  
  function initFormData() {
    formData = {};
    
    // Initialize form data from workflow inputs
    for (const nodeId in workflowInputs) {
      if (!formData[nodeId]) {
        formData[nodeId] = { inputs: {} };
      }
      
      for (const inputKey in workflowInputs[nodeId].inputs) {
        formData[nodeId].inputs[inputKey] = workflowInputs[nodeId].inputs[inputKey];
      }
    }
  }
  
  // Initialize the collapsed state for each node (default to not collapsed)
  function initCollapsedState() {
    nodeCollapsedState = {};
    for (const nodeId in workflowInputs) {
      nodeCollapsedState[nodeId] = false; // Start expanded
    }
  }
  
  function setupWebSocketListener() {
    // Connect to WebSocket
    connectWebSocket();
    
    // Add listener for progress updates
    removeWebSocketListener = addWebSocketListener((event) => {
      if (event.type === 'ws_message') {
        handleWebSocketMessage(event.data);
      } else if (event.type === 'ws_error') {
        errorMessage = 'WebSocket error: ' + event.error;
      } else if (event.type === 'ws_disabled') {
        console.log('WebSocket is disabled in settings');
      } else if (event.type === 'ws_reconnecting') {
        console.log('Attempting to reconnect WebSocket...');
      } else if (event.type === 'ws_connected') {
        console.log('WebSocket connected successfully');
        errorMessage = '';
      } else if (event.type === 'ws_disconnected') {
        console.log('WebSocket disconnected:', event.data);
      } else if (event.type === 'ws_binary') {
        handleBinaryData(event.data);
      }
    });
  }
  
  function handleWebSocketMessage(message: any) {
    // Handle progress updates during execution
    if (message.type === 'executing') {
      const data = message.data;
      
      // Only process messages for our current prompt ID
      if (promptId && data.prompt_id === promptId) {
        if (data.node === null) {
          // Execution is complete
          console.log('Workflow execution complete');
        } else {
          // Update the current node being processed
          currentNodeName = data.node || '';
        }
      }
    }
    // Handle progress percentage updates
    else if (message.type === 'progress') {
      // Update progress percentage
      progress = Math.floor(message.data.value * 100);
      if (message.data.node_name) {
        currentNodeName = message.data.node_name;
      }
    }
    // Handle completed node execution (for images)
    else if (message.type === 'executed') {
      const data = message.data;
      
      // When a SaveImage or other image node has completed
      if (data.node_type === 'SaveImage' || 
          data.node_type === 'SaveImageWebsocket' || 
          (data.node_type && data.node_type.includes('Image'))) {
        
        // Extract image data if available
        const images = data.images;
        if (images && images.length > 0) {
          console.log("image url", images[0].url);
          
          // Determine the correct image type and extension based on the filename
          let imageType = 'image/png';
          if (images[0].filename) {
            const filename = images[0].filename.toLowerCase();
            if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) {
              imageType = 'image/jpeg';
            } else if (filename.endsWith('.png')) {
              imageType = 'image/png';
            }
          }
          
          const imageData = {
            url: images[0].url,
            filename: images[0].filename,
            type: images[0].type || imageType, // Use server-provided type or determine from filename
            timestamp: Date.now()
          };
          
          // Save to history
          saveImageToHistory(imageData);
          
          // Dispatch event to notify parent component
          dispatch('image-generated', { image: imageData });
          
          // Reset generation state
          isGenerating = false;
          progress = 0;
          currentNodeName = '';
        }
      }
    } 
    // Handle overall status messages
    else if (message.type === 'status') {
      if (message.data.status === 'error') {
        errorMessage = 'Generation error: ' + message.data.message;
        isGenerating = false;
      } else if (message.data.status === 'success') {
        // Generation completed successfully
        console.log('Generation completed successfully');
      }
    }
  }
  
  async function handleBinaryData(binaryData: Blob | ArrayBuffer) {
    try {
      // Detect the image type (PNG or JPEG) from the binary data
      let blob: Blob;
      let imageType: string;
      let fileExtension: string;
      
      if (binaryData instanceof ArrayBuffer) {
        const uint8Array = new Uint8Array(binaryData, 0, Math.min(8, binaryData.byteLength));
        
        // Check for PNG signature
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
          imageType = 'image/png';
          fileExtension = 'png';
        } 
        // Check for JPEG signature
        else if (
          uint8Array[0] === 0xFF &&
          uint8Array[1] === 0xD8 &&
          uint8Array[2] === 0xFF
        ) {
          imageType = 'image/jpeg';
          fileExtension = 'jpg';
        } 
        // Default to JPEG if unrecognized
        else {
          imageType = 'image/jpeg';
          fileExtension = 'jpg';
        }
        
        // Create a blob with the correct MIME type
        blob = new Blob([binaryData], { type: imageType });
      } else {
        // For blobs, check content type or inspect first bytes to detect the type
        if (binaryData.type === 'image/png') {
          imageType = 'image/png';
          fileExtension = 'png';
          blob = binaryData;
        } else if (binaryData.type === 'image/jpeg') {
          imageType = 'image/jpeg';
          fileExtension = 'jpg';
          blob = binaryData;
        } else {
          // If type is not specified in the blob, get a small slice to check the signature
          const arrayBuffer = await binaryData.slice(0, 8).arrayBuffer();
          const uint8Array = new Uint8Array(arrayBuffer);
          
          // Check for PNG signature
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
            imageType = 'image/png';
            fileExtension = 'png';
          } 
          // Check for JPEG signature
          else if (
            uint8Array[0] === 0xFF &&
            uint8Array[1] === 0xD8 &&
            uint8Array[2] === 0xFF
          ) {
            imageType = 'image/jpeg';
            fileExtension = 'jpg';
          } 
          // Default to JPEG if unrecognized
          else {
            imageType = 'image/jpeg';
            fileExtension = 'jpg';
          }
          
          blob = new Blob([binaryData], { type: imageType });
        }
      }
      
      // Create a URL for the image
      const imageUrl = URL.createObjectURL(blob);
      console.log("blob length", blob.size);
      console.log("detected image type", imageType);
      
      // Create image data object with the correct file extension
      const imageData = {
        url: imageUrl,
        filename: `image_${Date.now()}.${fileExtension}`,
        type: imageType,
        timestamp: Date.now()
      };
      console.log("image data", imageData);
      
      // Save to history
      saveImageToHistory(imageData);
      
      // Dispatch event to notify parent component
      dispatch('image-generated', { image: imageData });
      
      // Reset generation state
      isGenerating = false;
      progress = 0;
      currentNodeName = '';
    } catch (error) {
      console.error('Error processing binary data:', error);
      errorMessage = 'Failed to process image data';
    }
  }
  
  async function handleSubmit() {
    errorMessage = '';
    
    try {
      isGenerating = true;
      progress = 0;
      currentNodeName = 'Starting...';
      
      // Send workflow to ComfyUI and get the prompt ID
      const result = await sendWorkflow(workflow, formData);
      promptId = result.prompt_id;
      
      console.log('Workflow sent, prompt ID:', promptId);
      
      // If WebSocket is disabled, we need to poll for results
      if (!wsEnabled) {
        errorMessage = 'WebSocket is disabled. Generation has started, but progress updates are not available. Results will appear when completed.';
        
        // TODO: In a future enhancement, implement polling for generation results when WebSocket is disabled
      }
      
    } catch (error) {
      errorMessage = error instanceof Error ? error.message : 'Failed to start generation';
      isGenerating = false;
      progress = 0;
      currentNodeName = '';
      console.error('Error sending workflow:', error);
    }
  }
  
  function getInputType(value: any): string {
    if (typeof value === 'number') {
      return 'number';
    } else if (typeof value === 'string') {
      // Check if it might be a file path or seed
      if (/\.(png|jpg|jpeg|webp)$/i.test(value)) {
        return 'file';
      } else {
        return 'text';
      }
    }
    return 'text';
  }
  
  function getNodeName(nodeId: string): string {
    if (!workflow) return nodeId;
    
    const node = workflow[nodeId];
    if (node && node.class_type) {
      return `${node.class_type} (${nodeId})`;
    }
    
    return nodeId;
  }
  
  function getInputLabel(key: string): string {
    // Convert camelCase or snake_case to Title Case
    return key
      .replace(/_/g, ' ')
      .replace(/([A-Z])/g, ' $1')
      .replace(/^\w/, c => c.toUpperCase());
  }
  
  function toggleNodeCollapse(nodeId: string) {
    nodeCollapsedState[nodeId] = !nodeCollapsedState[nodeId];
  }
</script>

<div class="dynamic-form">
  {#if Object.keys(workflowInputs).length === 0}
    <p>No editable inputs found in this workflow.</p>
  {:else}
    <form on:submit|preventDefault={handleSubmit}>
      {#each Object.keys(workflowInputs) as nodeId}
        <div 
          class="form-group collapsible-group"
          class:collapsed={nodeCollapsedState[nodeId]}
        >
          <div class="collapsible-header" on:click={() => toggleNodeCollapse(nodeId)} role="button" tabindex="0" aria-expanded={!nodeCollapsedState[nodeId]}>
            <span class="collapse-icon">{nodeCollapsedState[nodeId] ? '►' : '▼'}</span>
            <h4>{getNodeName(nodeId)}</h4>
          </div>
          {#if !nodeCollapsedState[nodeId]}
            <div class="collapsible-content">
              {#each Object.keys(workflowInputs[nodeId].inputs) as inputKey}
                {@const inputValue = workflowInputs[nodeId].inputs[inputKey]}
                {@const inputType = getInputType(inputValue)}
                
                <div class="form-field">
                  <label for={`${nodeId}-${inputKey}`}>
                    {getInputLabel(inputKey)}
                  </label>
                  
                  {#if inputType === 'number'}
                    <input 
                      type="number" 
                      id={`${nodeId}-${inputKey}`}
                      bind:value={formData[nodeId].inputs[inputKey]}
                      step="any"
                    />
                  {:else if inputType === 'file'}
                    <input 
                      type="text" 
                      id={`${nodeId}-${inputKey}`}
                      bind:value={formData[nodeId].inputs[inputKey]}
                      placeholder="File path"
                    />
                  {:else}
                    <textarea 
                      id={`${nodeId}-${inputKey}`}
                      bind:value={formData[nodeId].inputs[inputKey]}
                      rows="16"
                    ></textarea>
                  {/if}
                </div>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
      
      <div class="form-actions">
        <button 
          type="submit" 
          class="generate-btn"
          disabled={isGenerating}
        >
          {isGenerating ? 'Generating...' : 'Generate Image'}
        </button>
      </div>
    </form>
    
    {#if isGenerating}
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress-fill" style="width: {progress}%"></div>
        </div>
        <div class="progress-info">
          <span>{progress}%</span>
          {#if currentNodeName}
            <span>Processing: {currentNodeName}</span>
          {/if}
        </div>
      </div>
    {/if}
    
    {#if errorMessage}
      <div class="error-message">
        {errorMessage}
      </div>
    {/if}
  {/if}
</div>

<style>
  .dynamic-form {
    width: 100%;
    padding-bottom: 70px;
  }
  
  .form-group {
    /* margin-bottom: 1.5rem; */ /* Removed as collapsible-group handles margin */
    padding: 0; /* Removed as collapsible-group handles padding */
    border: none; /* Removed as collapsible-group handles border */
    border-radius: 0; /* Removed */
    background-color: transparent; /* Removed */
  }
  
  .collapsible-group {
    margin-bottom: 1.5rem;
    padding: 0.3rem 1rem;
    border: 1px solid #eee;
    border-radius: 8px;
    background-color: #f9f9f9;
    transition: padding 0.2s ease-out, margin-bottom 0.2s ease-out;
  }

  /* Styles for collapsed state */
  .collapsible-group.collapsed {
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    margin-bottom: 0.2rem;
  }

  .collapsible-header {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 10px;
    user-select: none;
    transition: margin-bottom 0.2s ease-out;
  }

  .collapsible-group.collapsed .collapsible-header {
    margin-bottom: 0.2rem;
  }
  
   .collapsible-header:focus {
     outline: 2px solid #4caf50; /* Use theme color for focus */
     outline-offset: 2px;
   }

  .collapsible-header .collapse-icon {
    margin-right: 10px;
    font-size: 1em;
    width: 1em;
    text-align: center;
    color: #555;
  }

  .collapsible-header h4 {
    margin: 0;
    padding: 0;
    border: none;
    font-weight: 600;
    flex-grow: 1;
    transition: font-size 0.2s ease-out;
  }
    
  .collapsible-content {
     padding-left: calc(1em + 10px); /* Indent content */
  }

  h4 {
    /* These styles are now applied within .collapsible-group h4 */
    /* margin-top: 0;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #eee;
    color: #333; */
  }
  
  .form-field {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #555;
  }
  
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 0.9rem;
    box-sizing: border-box;
  }
  
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 0.9rem;
    resize: vertical;
    box-sizing: border-box;
  }
  
  input:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
  }
  
  textarea:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
  }
  
  .form-actions {
    margin-top: 1.5rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    background-color: #fff;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
    display: flex;
    justify-content: center;
  }
  
  .generate-btn {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 0.7rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s ease;
    width: 100%;
    max-width: 300px;
  }
  
  .generate-btn:hover {
    background-color: #45a049;
  }
  
  .generate-btn:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
  
  .progress-container {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .progress-bar {
    width: 100%;
    height: 10px;
    background-color: #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
  }
  
  .progress-fill {
    height: 100%;
    background-color: #4caf50;
    transition: width 0.3s ease;
  }
  
  .progress-info {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
    font-size: 0.8rem;
    color: #666;
  }
  
  .error-message {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    padding: 0.8rem;
    background-color: #ffebee;
    border-left: 4px solid #f44336;
    color: #d32f2f;
    border-radius: 4px;
  }
</style> 