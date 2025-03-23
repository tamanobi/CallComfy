<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { saveWorkflow, deleteWorkflow } from '$lib/services/storage';
  
  export let workflows: any[] = [];
  
  const dispatch = createEventDispatcher();
  let fileInput: HTMLInputElement;
  let selectedWorkflow: any = null;
  let dragging = false;
  let errorMessage = '';
  
  async function handleFileUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;
    
    const file = input.files[0];
    await processWorkflowFile(file);
    input.value = ''; // Reset input
  }
  
  async function handleDrop(event: DragEvent) {
    event.preventDefault();
    dragging = false;
    
    if (!event.dataTransfer?.files || event.dataTransfer.files.length === 0) return;
    
    const file = event.dataTransfer.files[0];
    await processWorkflowFile(file);
  }
  
  async function processWorkflowFile(file: File) {
    try {
      if (!file.name.endsWith('.json')) {
        throw new Error('Please upload a JSON file');
      }
      
      const content = await file.text();
      const workflow = JSON.parse(content);
      
      // Generate a unique ID for the workflow
      const workflowId = Date.now().toString();
      const workflowName = file.name.replace('.json', '');
      
      const workflowObj = {
        id: workflowId,
        name: workflowName,
        content: workflow
      };
      
      // Save workflow to localStorage
      saveWorkflow(workflowObj);
      
      // Set as selected workflow
      selectedWorkflow = workflowObj;
      
      // Dispatch event to notify parent component
      dispatch('workflow-uploaded', { workflow: workflowObj.content });
      
      errorMessage = '';
    } catch (error) {
      console.error('Error processing workflow file:', error);
      errorMessage = error instanceof Error ? error.message : 'Failed to process workflow file';
    }
  }
  
  function selectWorkflow(workflow: any) {
    selectedWorkflow = workflow;
    dispatch('workflow-uploaded', { workflow: workflow.content });
  }
  
  function removeWorkflow(id: string, event: Event) {
    event.stopPropagation();
    deleteWorkflow(id);
    
    // If the deleted workflow was selected, reset selection
    if (selectedWorkflow && selectedWorkflow.id === id) {
      selectedWorkflow = null;
    }
    
    // Trigger re-render
    workflows = workflows.filter(w => w.id !== id);
  }
  
  function handleDragOver(event: DragEvent) {
    event.preventDefault();
    dragging = true;
  }
  
  function handleDragLeave(event: DragEvent) {
    event.preventDefault();
    dragging = false;
  }
  
  $: selectedWorkflowId = selectedWorkflow?.id;
</script>

<div class="workflow-uploader">
  <div 
    class="dropzone" 
    class:dragging={dragging}
    on:dragover={handleDragOver}
    on:dragleave={handleDragLeave}
    on:drop={handleDrop}
  >
    <input 
      bind:this={fileInput}
      type="file" 
      accept=".json" 
      on:change={handleFileUpload}
      style="display: none;"
    />
    <div class="upload-icon">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    </div>
    <p>Drop workflow JSON file here or <button on:click={() => fileInput.click()}>browse</button></p>
    {#if errorMessage}
      <p class="error">{errorMessage}</p>
    {/if}
  </div>
  
  {#if workflows.length > 0}
    <div class="saved-workflows">
      <h3>Saved Workflows</h3>
      <ul>
        {#each workflows as workflow (workflow.id)}
          <li 
            class:selected={workflow.id === selectedWorkflowId}
            on:click={() => selectWorkflow(workflow)}
            on:keydown={(e) => e.key === 'Enter' && selectWorkflow(workflow)}
            tabindex="0"
          >
            <span>{workflow.name}</span>
            <button 
              class="delete-btn"
              on:click={(e) => removeWorkflow(workflow.id, e)}
              aria-label="Delete workflow"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style>
  .workflow-uploader {
    width: 100%;
    margin-bottom: 1.5rem;
  }
  
  .dropzone {
    border: 2px dashed #ccc;
    border-radius: 8px;
    padding: 2rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .dropzone.dragging {
    border-color: #4caf50;
    background-color: rgba(76, 175, 80, 0.1);
  }
  
  .upload-icon {
    color: #666;
    margin-bottom: 1rem;
  }
  
  .dropzone p {
    margin: 0;
    color: #666;
  }
  
  .dropzone button {
    background: none;
    border: none;
    color: #4caf50;
    cursor: pointer;
    font-weight: bold;
    padding: 0;
    text-decoration: underline;
  }
  
  .error {
    color: #f44336;
    margin-top: 0.5rem;
  }
  
  .saved-workflows {
    margin-top: 1.5rem;
  }
  
  .saved-workflows h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .saved-workflows ul {
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 200px;
    overflow-y: auto;
  }
  
  .saved-workflows li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border-radius: 4px;
    margin-bottom: 0.25rem;
    cursor: pointer;
    border: 1px solid #eee;
    transition: background-color 0.2s ease;
  }
  
  .saved-workflows li:hover {
    background-color: #f5f5f5;
  }
  
  .saved-workflows li.selected {
    background-color: #e3f2fd;
    border-color: #90caf9;
  }
  
  .delete-btn {
    background: none;
    border: none;
    color: #999;
    cursor: pointer;
    padding: 5px;
  }
  
  .delete-btn:hover {
    color: #f44336;
  }
</style> 