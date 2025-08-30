<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  let { isLoading = $bindable(true), onComplete = () => {} } = $props();

  let progress = $state(0);
  let showContent = $state(false);

  onMount(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(progressInterval);
        
        // Wait a bit then start fade out
        setTimeout(() => {
          showContent = true;
          setTimeout(() => {
            isLoading = false;
            onComplete();
          }, 800);
        }, 500);
      }
    }, 100);

    return () => clearInterval(progressInterval);
  });
</script>

{#if isLoading}
  <div 
    class="loading-screen" 
    class:fade-out={showContent}
    transition:fade={{ duration: 800 }}
  >
    <div class="loading-container">
      <!-- Main Logo/Name Animation -->
      <div class="logo-container">
        <div class="logo-text">
          <span class="first-name">Edwaldo</span>
          <span class="last-name">Utama</span>
        </div>
        <div class="logo-subtitle">Fullstack Engineer</div>
      </div>

      <!-- Loading Animation -->
      <div class="loading-animation">
        <div class="spinner">
          <div class="spinner-ring"></div>
          <div class="spinner-ring"></div>
          <div class="spinner-ring"></div>
        </div>
      </div>

      <!-- Progress Bar -->
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress-fill" style="width: {progress}%"></div>
        </div>
        <div class="progress-text">{Math.round(progress)}%</div>
      </div>
    </div>

    <!-- Background Animation -->
    <div class="bg-animation">
      <div class="floating-shapes">
        {#each Array(6) as _, i}
          <div class="shape shape-{i + 1}"></div>
        {/each}
      </div>
    </div>
  </div>
{/if}

<style>
  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    overflow: hidden;
  }

  .loading-screen.fade-out {
    opacity: 0;
    transition: opacity 0.8s ease-out;
  }

  .loading-container {
    text-align: center;
    position: relative;
    z-index: 2;
  }

  .logo-container {
    margin-bottom: 3rem;
    animation: logoFadeIn 1s ease-out;
  }

  .logo-text {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    margin-bottom: 0.5rem;
    position: relative;
  }

  .first-name {
    color: #ffffff;
    display: inline-block;
    animation: slideInLeft 0.8s ease-out;
  }

  .last-name {
    color: #00d4aa;
    display: inline-block;
    margin-left: 0.5rem;
    animation: slideInRight 0.8s ease-out 0.2s both;
  }

  .logo-subtitle {
    font-size: 1.2rem;
    color: #888;
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: uppercase;
    animation: fadeInUp 1s ease-out 0.4s both;
  }

  .loading-animation {
    margin: 2rem 0;
    display: flex;
    justify-content: center;
  }

  .spinner {
    position: relative;
    width: 80px;
    height: 80px;
  }

  .spinner-ring {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-radius: 50%;
    animation: spin 2s linear infinite;
  }

  .spinner-ring:nth-child(1) {
    border-top-color: #00d4aa;
    animation-duration: 1.5s;
  }

  .spinner-ring:nth-child(2) {
    border-right-color: #ffffff;
    animation-duration: 2s;
    animation-direction: reverse;
    width: 70%;
    height: 70%;
    top: 15%;
    left: 15%;
  }

  .spinner-ring:nth-child(3) {
    border-bottom-color: #00d4aa;
    animation-duration: 2.5s;
    width: 40%;
    height: 40%;
    top: 30%;
    left: 30%;
  }

  .progress-container {
    margin-top: 2rem;
    animation: fadeInUp 1s ease-out 0.6s both;
  }

  .progress-bar {
    width: 200px;
    height: 2px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 1px;
    margin: 0 auto 1rem;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #00d4aa, #ffffff);
    border-radius: 1px;
    transition: width 0.3s ease;
  }

  .progress-text {
    color: #888;
    font-size: 0.9rem;
    font-weight: 300;
  }

  .bg-animation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
  }

  .floating-shapes {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .shape {
    position: absolute;
    background: rgba(0, 212, 170, 0.1);
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
  }

  .shape-1 {
    width: 100px;
    height: 100px;
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }

  .shape-2 {
    width: 60px;
    height: 60px;
    top: 60%;
    right: 15%;
    animation-delay: 1s;
  }

  .shape-3 {
    width: 80px;
    height: 80px;
    bottom: 20%;
    left: 20%;
    animation-delay: 2s;
  }

  .shape-4 {
    width: 40px;
    height: 40px;
    top: 30%;
    right: 30%;
    animation-delay: 3s;
  }

  .shape-5 {
    width: 120px;
    height: 120px;
    bottom: 30%;
    right: 10%;
    animation-delay: 4s;
  }

  .shape-6 {
    width: 70px;
    height: 70px;
    top: 10%;
    left: 50%;
    animation-delay: 5s;
  }

  /* Animations */
  @keyframes logoFadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
      opacity: 0.1;
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
      opacity: 0.3;
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .logo-text {
      font-size: 2.5rem;
    }
    
    .logo-subtitle {
      font-size: 1rem;
    }
    
    .spinner {
      width: 60px;
      height: 60px;
    }
    
    .progress-bar {
      width: 150px;
    }
  }

  @media (max-width: 480px) {
    .logo-text {
      font-size: 2rem;
    }
    
    .first-name, .last-name {
      display: block;
      margin: 0;
    }
    
    .last-name {
      margin-top: 0.2rem;
    }
  }
</style>