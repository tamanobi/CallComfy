interface AuthSettings {
  username: string;
  password: string;
  serverUrl: string;
  // WebSocket settings
  wsEnabled: boolean;
  wsAutoReconnect: boolean;
  wsReconnectInterval: number;
}

interface Workflow {
  id: string;
  name: string;
  content: any;
}

// Storage keys
const WORKFLOWS_KEY = 'comfyweb_workflows';
const AUTH_SETTINGS_KEY = 'comfyweb_auth';
const HISTORY_KEY = 'comfyweb_history';

// Get stored workflows from localStorage
export function getStoredWorkflows(): Workflow[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const storedWorkflows = localStorage.getItem(WORKFLOWS_KEY);
    return storedWorkflows ? JSON.parse(storedWorkflows) : [];
  } catch (error) {
    console.error('Error getting stored workflows:', error);
    return [];
  }
}

// Save workflow to localStorage
export function saveWorkflow(workflow: Workflow): void {
  if (typeof window === 'undefined') return;
  
  try {
    const workflows = getStoredWorkflows();
    
    // Check if the workflow already exists
    const existingIndex = workflows.findIndex(w => w.id === workflow.id);
    
    if (existingIndex >= 0) {
      // Update existing workflow
      workflows[existingIndex] = workflow;
    } else {
      // Add new workflow
      workflows.push(workflow);
    }
    
    localStorage.setItem(WORKFLOWS_KEY, JSON.stringify(workflows));
  } catch (error) {
    console.error('Error saving workflow:', error);
  }
}

// Delete workflow from localStorage
export function deleteWorkflow(id: string): void {
  if (typeof window === 'undefined') return;
  
  try {
    let workflows = getStoredWorkflows();
    workflows = workflows.filter(w => w.id !== id);
    localStorage.setItem(WORKFLOWS_KEY, JSON.stringify(workflows));
  } catch (error) {
    console.error('Error deleting workflow:', error);
  }
}

// Get authentication settings from localStorage
export function getAuthSettings(): AuthSettings {
  if (typeof window === 'undefined') {
    return { 
      username: '', 
      password: '', 
      serverUrl: '',
      wsEnabled: true,
      wsAutoReconnect: true,
      wsReconnectInterval: 3000
    };
  }
  
  try {
    const storedSettings = localStorage.getItem(AUTH_SETTINGS_KEY);
    const defaultSettings = { 
      username: '', 
      password: '', 
      serverUrl: 'http://127.0.0.1:8188',
      wsEnabled: true,
      wsAutoReconnect: true,
      wsReconnectInterval: 3000
    };

    if (!storedSettings) return defaultSettings;
    
    // Merge with default settings to handle missing fields in stored settings
    const parsedSettings = JSON.parse(storedSettings);
    return { ...defaultSettings, ...parsedSettings };
  } catch (error) {
    console.error('Error getting auth settings:', error);
    return { 
      username: '', 
      password: '', 
      serverUrl: 'http://127.0.0.1:8188',
      wsEnabled: true,
      wsAutoReconnect: true,
      wsReconnectInterval: 3000
    };
  }
}

// Save authentication settings to localStorage
export function saveAuthSettings(settings: AuthSettings): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(AUTH_SETTINGS_KEY, JSON.stringify(settings));
  } catch (error) {
    console.error('Error saving auth settings:', error);
  }
}

// Save generated image to history
export function saveImageToHistory(image: any): void {
  if (typeof window === 'undefined') return;
  
  try {
    const history = getImageHistory();
    history.unshift(image);
    
    // Limit history size to 50 items
    if (history.length > 50) {
      history.pop();
    }
    
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch (error) {
    console.error('Error saving image to history:', error);
  }
}

// Get image history from localStorage
export function getImageHistory(): any[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const storedHistory = localStorage.getItem(HISTORY_KEY);
    return storedHistory ? JSON.parse(storedHistory) : [];
  } catch (error) {
    console.error('Error getting image history:', error);
    return [];
  }
}

// Clear image history
export function clearImageHistory(): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify([]));
  } catch (error) {
    console.error('Error clearing image history:', error);
  }
} 