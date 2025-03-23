<script lang="ts">
  import { onMount } from 'svelte';
  import { getAuthSettings, saveAuthSettings } from '$lib/services/storage';
  import { initApiWorker, connectWebSocket, disconnectWebSocket, updateWebSocketConfig } from '$lib/services/comfyApi';
  
  let serverUrl = '';
  let username = '';
  let password = '';
  let showPassword = false;
  let saveSuccess = false;
  let testingConnection = false;
  let connectionStatus: 'connected' | 'error' | 'untested' | 'testing' = 'untested';
  let connectionError = '';
  
  // WebSocket settings
  let wsEnabled = true;
  let wsAutoReconnect = true;
  let wsReconnectInterval = 3000;
  
  // UI state
  let showAdvancedSettings = false;
  
  onMount(() => {
    const settings = getAuthSettings();
    serverUrl = settings.serverUrl;
    username = settings.username;
    password = settings.password;
    
    // WebSocket settings
    wsEnabled = settings.wsEnabled;
    wsAutoReconnect = settings.wsAutoReconnect;
    wsReconnectInterval = settings.wsReconnectInterval;
  });
  
  async function saveSettings() {
    if (!serverUrl) {
      serverUrl = 'http://127.0.0.1:8188';
    }
    
    // Validate reconnect interval
    if (wsReconnectInterval < 500) {
      wsReconnectInterval = 500;
    }
    
    // Save to local storage
    saveAuthSettings({
      serverUrl,
      username,
      password,
      wsEnabled,
      wsAutoReconnect,
      wsReconnectInterval
    });
    
    // Show success message briefly
    saveSuccess = true;
    setTimeout(() => {
      saveSuccess = false;
    }, 3000);
    
    // Reinitialize API worker with new settings
    disconnectWebSocket();
    initApiWorker();
    
    // Update WebSocket configuration
    updateWebSocketConfig({
      enabled: wsEnabled,
      autoReconnect: wsAutoReconnect,
      reconnectInterval: wsReconnectInterval
    });
  }
  
  async function testConnection() {
    testingConnection = true;
    connectionStatus = 'testing';
    connectionError = '';
    
    try {
      // Save current settings first
      await saveSettings();
      
      // Create a timeout promise
      const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error('Connection timeout')), 5000);
      });
      
      // Try to connect to the server
      const fetchPromise = fetch(`${serverUrl}/system_stats`);
      
      // Race the fetch against the timeout
      const response = await Promise.race([fetchPromise, timeoutPromise]);
      
      if (response.ok) {
        connectionStatus = 'connected';
        // Try connecting WebSocket as well if enabled
        if (wsEnabled) {
          connectWebSocket();
        }
      } else {
        throw new Error(`HTTP Error: ${response.status}`);
      }
    } catch (error) {
      connectionStatus = 'error';
      connectionError = error instanceof Error ? error.message : 'Unknown connection error';
      console.error('Connection test failed:', error);
    } finally {
      testingConnection = false;
    }
  }
  
  function togglePasswordVisibility() {
    showPassword = !showPassword;
  }
  
  function toggleAdvancedSettings() {
    showAdvancedSettings = !showAdvancedSettings;
  }
</script>

<div class="auth-settings">
  <h3>ComfyUI Connection Settings</h3>
  
  <form on:submit|preventDefault={saveSettings}>
    <div class="form-group">
      <label for="server-url">Server URL</label>
      <input 
        type="url" 
        id="server-url" 
        bind:value={serverUrl} 
        placeholder="http://127.0.0.1:8188"
        required
      />
    </div>
    
    <div class="form-group">
      <label for="username">Username (optional)</label>
      <input 
        type="text" 
        id="username" 
        bind:value={username}
        placeholder="Username if required"
      />
    </div>
    
    <div class="form-group password-group">
      <label for="password">Password (optional)</label>
      <div class="password-input">
        <input 
          type={showPassword ? 'text' : 'password'}
          id="password" 
          bind:value={password}
          placeholder="Password if required"
        />
        <button 
          type="button"
          class="toggle-password"
          on:click={togglePasswordVisibility}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {#if showPassword}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
              <line x1="1" y1="1" x2="23" y2="23" />
            </svg>
          {:else}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          {/if}
        </button>
      </div>
    </div>
    
    <div class="toggle-section">
      <button type="button" class="toggle-btn" on:click={toggleAdvancedSettings}>
        {showAdvancedSettings ? '▼' : '►'} WebSocket Settings
      </button>
    </div>
    
    {#if showAdvancedSettings}
      <div class="advanced-settings">
        <div class="websocket-info">
          <p>ComfyUI uses WebSocket connections to provide real-time progress updates during image generation. The application will:</p>
          <ol>
            <li>Generate a unique client ID for your session</li>
            <li>Send your workflow with this client ID to ComfyUI</li>
            <li>Connect to WebSocket using the same client ID to receive progress updates</li>
          </ol>
        </div>
      
        <div class="form-group checkbox-group">
          <label class="checkbox-label">
            <input type="checkbox" bind:checked={wsEnabled} />
            <span>Enable WebSocket Connection</span>
          </label>
          <div class="hint">WebSocket is used for real-time generation progress updates. Disable only if you're experiencing connection issues.</div>
        </div>
        
        {#if wsEnabled}
          <div class="form-group checkbox-group">
            <label class="checkbox-label">
              <input type="checkbox" bind:checked={wsAutoReconnect} />
              <span>Auto Reconnect if Disconnected</span>
            </label>
            <div class="hint">Automatically attempts to reconnect if the WebSocket connection is lost</div>
          </div>
          
          <div class="form-group">
            <label for="reconnect-interval">Reconnect Interval (ms)</label>
            <input 
              type="number" 
              id="reconnect-interval" 
              bind:value={wsReconnectInterval} 
              min="500"
              max="30000"
              step="500"
            />
            <div class="hint">Time to wait before reconnecting (500ms minimum, 30000ms maximum)</div>
          </div>
        {/if}
      </div>
    {/if}
    
    <div class="actions">
      <button type="submit" class="save-btn">Save Settings</button>
      <button type="button" class="test-btn" on:click={testConnection} disabled={testingConnection}>
        {testingConnection ? 'Testing...' : 'Test Connection'}
      </button>
    </div>
  </form>
  
  {#if saveSuccess}
    <div class="success-message">
      Settings saved successfully!
    </div>
  {/if}
  
  {#if connectionStatus !== 'untested'}
    <div class="connection-status" class:error={connectionStatus === 'error'} class:success={connectionStatus === 'connected'}>
      {#if connectionStatus === 'testing'}
        Testing connection...
      {:else if connectionStatus === 'connected'}
        ✓ Connected successfully to ComfyUI
      {:else if connectionStatus === 'error'}
        ✗ Connection failed: {connectionError}
      {/if}
    </div>
  {/if}
</div>

<style>
  .auth-settings {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
  
  h3 {
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 1.2rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #555;
  }
  
  input {
    width: 100%;
    padding: 0.7rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 0.9rem;
  }
  
  input:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
  }
  
  .password-group {
    position: relative;
  }
  
  .password-input {
    position: relative;
  }
  
  .toggle-password {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: #666;
    padding: 5px;
  }
  
  .toggle-password:hover {
    color: #333;
  }
  
  .actions {
    display: flex;
    gap: 10px;
    margin-top: 1.5rem;
  }
  
  .save-btn, .test-btn {
    padding: 0.7rem 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s ease;
  }
  
  .save-btn {
    background-color: #4caf50;
    color: white;
  }
  
  .save-btn:hover {
    background-color: #45a049;
  }
  
  .test-btn {
    background-color: #2196f3;
    color: white;
  }
  
  .test-btn:hover {
    background-color: #0b7dda;
  }
  
  .test-btn:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
  
  .success-message {
    margin-top: 1rem;
    padding: 0.7rem;
    background-color: #dff0d8;
    color: #3c763d;
    border-radius: 4px;
    text-align: center;
  }
  
  .connection-status {
    margin-top: 1rem;
    padding: 0.7rem;
    border-radius: 4px;
    text-align: center;
  }
  
  .connection-status.success {
    background-color: #dff0d8;
    color: #3c763d;
  }
  
  .connection-status.error {
    background-color: #f2dede;
    color: #a94442;
  }

  /* Advanced settings toggle */
  .toggle-section {
    margin-bottom: 1rem;
  }
  
  .toggle-btn {
    background: none;
    border: none;
    color: #2196f3;
    cursor: pointer;
    text-align: left;
    padding: 0.5rem 0;
    font-weight: 500;
    width: 100%;
  }
  
  .toggle-btn:hover {
    text-decoration: underline;
  }
  
  .advanced-settings {
    margin-bottom: 1.5rem;
    padding: 1rem;
    background-color: #f9f9f9;
    border-radius: 4px;
    border-left: 3px solid #2196f3;
  }
  
  /* Checkbox styles */
  .checkbox-group {
    margin-bottom: 1rem;
  }
  
  .checkbox-label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  
  .checkbox-label input[type="checkbox"] {
    width: auto;
    margin-right: 10px;
  }
  
  .hint {
    margin-top: 0.3rem;
    font-size: 0.8rem;
    color: #777;
  }
  
  /* WebSocket info styles */
  .websocket-info {
    margin-bottom: 1.2rem;
    padding: 0.8rem;
    background-color: #e8f4f8;
    border-radius: 4px;
    font-size: 0.9rem;
  }
  
  .websocket-info p {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  
  .websocket-info ol {
    margin: 0;
    padding-left: 1.2rem;
  }
  
  .websocket-info li {
    margin-bottom: 0.3rem;
  }
</style> 