<script lang="ts">
  import { onMount } from 'svelte';
  import { getImageHistory, clearImageHistory } from '$lib/services/storage';
  
  export let images: any[] = [];
  
  let localHistory: any[] = [];
  let confirmClear = false;
  
  onMount(() => {
    // Load history from local storage
    localHistory = getImageHistory();
  });
  
  // When images prop changes, update localHistory
  $: {
    if (images.length > 0) {
      // Combine new images with existing history
      const newHistory = [...images];
      
      // Update local storage
      localHistory = newHistory;
    }
  }
  
  function getImageUrl(image: any) {
    if (!image || !image.url) return '';
    
    return image.url;
  }
  
  function formatDate(timestamp: number) {
    return new Date(timestamp).toLocaleString();
  }
  
  function handleClearHistory() {
    if (confirmClear) {
      clearImageHistory();
      localHistory = [];
      confirmClear = false;
    } else {
      confirmClear = true;
      setTimeout(() => {
        confirmClear = false;
      }, 3000);
    }
  }
</script>

<div class="image-history">
  <div class="history-header">
    <h3>Image History</h3>
    {#if localHistory.length > 0}
      <button 
        on:click={handleClearHistory} 
        class="clear-btn"
        class:confirm={confirmClear}
      >
        {confirmClear ? 'Confirm Clear' : 'Clear History'}
      </button>
    {/if}
  </div>
  
  {#if localHistory.length === 0}
    <p class="no-history">No images in history</p>
  {:else}
    <div class="history-list">
      {#each localHistory as image, index (image.timestamp)}
        <div class="history-item">
          <img 
            src={getImageUrl(image)} 
            alt={`Generated image ${index + 1}`}
            loading="lazy"
          />
          <div class="image-meta">
            <span class="image-name">{image.filename || 'Untitled'}</span>
            <span class="image-date">{formatDate(image.timestamp)}</span>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .image-history {
    width: 100%;
    height: 100%;
  }
  
  .history-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  h3 {
    margin: 0;
    font-size: 1rem;
  }
  
  .clear-btn {
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .clear-btn:hover {
    background-color: #e0e0e0;
  }
  
  .clear-btn.confirm {
    background-color: #ffcdd2;
    border-color: #ef5350;
    color: #d32f2f;
  }
  
  .no-history {
    color: #999;
    text-align: center;
    padding: 2rem 0;
  }
  
  .history-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
    overflow-y: auto;
  }
  
  .history-item {
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  
  .history-item img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    display: block;
  }
  
  .image-meta {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 0.5rem;
    color: white;
    font-size: 0.7rem;
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  
  .history-item:hover .image-meta {
    opacity: 1;
  }
  
  .image-name {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0.2rem;
  }
  
  .image-date {
    display: block;
    font-size: 0.6rem;
    opacity: 0.8;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .history-list {
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }
    
    .image-meta {
      opacity: 1;
      padding: 0.3rem;
    }
  }
</style> 