<script lang="ts">
  export let image: any;
  
  let fullscreenMode = false;
  
  function downloadImage() {
    if (!image || !image.url) return;
    
    const fullUrl = image.url;
    
    // Determine the appropriate file extension based on the image type
    let defaultExtension = 'png';
    if (image.type) {
      if (image.type === 'image/jpeg') {
        defaultExtension = 'jpg';
      } else if (image.type === 'image/png') {
        defaultExtension = 'png';
      }
    }
    
    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = fullUrl;
    a.download = image.filename || `generated-image.${defaultExtension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  
  function toggleFullscreen() {
    fullscreenMode = !fullscreenMode;
  }
  
  function getImageUrl() {
    if (!image || !image.url) return '';
    
    return image.url;
  }
  
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };
</script>

<div class="image-viewer" class:fullscreen={fullscreenMode}>
  {#if image && image.url}
    <div class="image-container">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img 
        src={getImageUrl()} 
        alt="Generated Image" 
        on:click={toggleFullscreen}
      />
      
      <div class="image-info">
        <span>{image.filename || 'Untitled'}</span>
        <span>{formatDate(image.timestamp)}</span>
      </div>
      
      <div class="image-actions">
        <button on:click={downloadImage} class="download-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download
        </button>
        <button on:click={toggleFullscreen} class="fullscreen-btn">
          {#if fullscreenMode}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
            </svg>
            Exit Fullscreen
          {:else}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
            </svg>
            Fullscreen
          {/if}
        </button>
      </div>
    </div>
  {:else}
    <div class="no-image">
      <p>No image generated yet</p>
    </div>
  {/if}
</div>

{#if fullscreenMode}
  <div class="fullscreen-overlay" on:click={toggleFullscreen} role="dialog" aria-modal="true">
    <div class="fullscreen-content" on:click|stopPropagation={() => {}}>
      <img src={getImageUrl()} alt="Generated Image (Fullscreen)" />
      <button class="close-btn" on:click={toggleFullscreen}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  </div>
{/if}

<style>
  .image-viewer {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .image-container {
    position: relative;
    width: 100%;
    min-height: 200px;
    border-radius: 8px;
    overflow: hidden;
    background-color: #f0f0f0;
  }
  
  img {
    width: 100%;
    height: auto;
    max-height: 300px;
    object-fit: contain;
    cursor: pointer;
    display: block;
  }
  
  .image-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 0.8rem;
  }
  
  .image-actions {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    gap: 8px;
  }
  
  .download-btn, .fullscreen-btn {
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 0.8rem;
    transition: background-color 0.2s ease;
  }
  
  .download-btn:hover, .fullscreen-btn:hover {
    background-color: rgba(255, 255, 255, 1);
  }
  
  .no-image {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    background-color: #f0f0f0;
    border-radius: 8px;
    color: #999;
  }
  
  .fullscreen-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .fullscreen-content {
    position: relative;
    width: 90%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .fullscreen-content img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
  }
  
  .close-btn:hover {
    background: rgba(0, 0, 0, 0.8);
  }
</style> 