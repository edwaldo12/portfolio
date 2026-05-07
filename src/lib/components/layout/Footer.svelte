<script lang="ts">
  import { Heart } from 'lucide-svelte';
  import { personalInfo } from '$lib/data/personal';

  const currentYear = new Date().getFullYear();
</script>

<footer class="terminal-footer">
  <span>&copy; {currentYear} {personalInfo.name} -- All rights reserved.</span>
  <span>Built with passion. Ships with care. <Heart size={16} fill="currentColor" /></span>
</footer>

<style>
  .terminal-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    min-height: 64px;
    padding: 0 clamp(20px, 3.5vw, 48px);
    border-top: 1px solid rgba(143, 165, 189, 0.18);
    color: #8e9caf;
    background: #05090d;
    font-family:
      'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
    font-size: 0.86rem;
  }

  .terminal-footer span:last-child {
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }

  :global(.terminal-footer svg) {
    color: #39d98a;
  }

  @media (max-width: 720px) {
    .terminal-footer {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      min-height: 92px;
      padding: 18px 16px;
    }
  }
</style>
