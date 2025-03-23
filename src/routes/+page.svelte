<script lang="ts">
  import { onMount } from 'svelte';
  import WorkflowUploader from '$lib/components/WorkflowUploader.svelte';
  import DynamicForm from '$lib/components/DynamicForm.svelte';
  import ImageViewer from '$lib/components/ImageViewer.svelte';
  import ImageHistory from '$lib/components/ImageHistory.svelte';
  import AuthSettings from '$lib/components/AuthSettings.svelte';
  import { getStoredWorkflows, getAuthSettings } from '$lib/services/storage';
  
  let currentWorkflow: any = null;
  let workflows: any[] = [];
  let generatedImages: any[] = [];
  let showSettings = false;
  
  onMount(() => {
    workflows = getStoredWorkflows();
    if (workflows.length > 0) {
      currentWorkflow = workflows[0];
    }
  });
  
  function handleWorkflowUpload(event: CustomEvent) {
    currentWorkflow = event.detail.workflow;
    workflows = getStoredWorkflows();
  }
  
  function handleImageGenerated(event: CustomEvent) {
    generatedImages = [event.detail.image, ...generatedImages];
  }
</script>

<main>
  <header>
    <h1>ComfyWeb</h1>
    <button on:click={() => showSettings = !showSettings}>
      {showSettings ? 'Close Settings' : 'Settings'}
    </button>
  </header>
  
  {#if showSettings}
    <section class="settings">
      <AuthSettings />
    </section>
  {/if}
  
  <div class="app-container">
    <section class="workflow-section">
      <h2>Workflow</h2>
      <WorkflowUploader on:workflow-uploaded={handleWorkflowUpload} {workflows} />
      
      {#if currentWorkflow}
        <DynamicForm workflow={currentWorkflow} on:image-generated={handleImageGenerated} />
      {/if}
    </section>
    
    <section class="result-section">
      <h2>Generated Image</h2>
      {#if generatedImages.length > 0}
        <ImageViewer image={generatedImages[0]} />
      {/if}
    </section>
    
    <section class="history-section">
      <h2>History</h2>
      <ImageHistory images={generatedImages} />
    </section>
  </div>
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f5f5f5;
  }
  
  main {
    padding: 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ddd;
  }
  
  h1 {
    margin: 0;
    color: #333;
  }
  
  button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  .app-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .workflow-section {
    flex: 1;
    min-width: 300px;
    background-color: white;
    padding: 0.75rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .result-section, .history-section {
    background-color: white;
    padding: 0.75rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .result-section {
    flex: 1;
    min-width: 300px;
  }
  
  .history-section {
    flex: 1;
    min-width: 300px;
  }
  
  h2 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: #444;
    font-size: 1.1rem;
  }
  
  .settings {
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  /* Responsive styles */
  @media (max-width: 768px) {
    .app-container {
      flex-direction: column;
    }
    
    .workflow-section, .result-section, .history-section {
      width: 100%;
    }
  }
</style>
