<script lang="ts">
  import { Menu, X } from 'lucide-svelte';

  let isMenuOpen = false;

  const menuItems = [
    { label: '_HOME', href: '/#home' },
    { label: 'EXPERIENCE', href: '/#experience' },
    { label: 'PROJECTS', href: '/#projects' },
    { label: 'STACK', href: '/#stack' },
    { label: 'ABOUT', href: '/#about' },
    { label: 'CONTACT', href: '/#contact' }
  ];

  function closeMenu() {
    isMenuOpen = false;
  }
</script>

<nav class="terminal-nav">
  <a href="/#home" class="terminal-logo" on:click={closeMenu}>
    <span>eu</span>@devbox:~
  </a>

  <div class="desktop-menu">
    {#each menuItems as item, index}
      <a href={item.href} class:active={index === 0}>{item.label}</a>
    {/each}
  </div>

  <button class="mobile-toggle" on:click={() => (isMenuOpen = !isMenuOpen)} aria-label="Toggle menu">
    {#if isMenuOpen}
      <X size={22} />
    {:else}
      <Menu size={22} />
    {/if}
  </button>

  {#if isMenuOpen}
    <div class="mobile-menu">
      {#each menuItems as item}
        <a href={item.href} on:click={closeMenu}>{item.label}</a>
      {/each}
    </div>
  {/if}
</nav>

<style>
  .terminal-nav {
    position: fixed;
    inset: 0 0 auto;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 46px;
    padding: 0 clamp(22px, 3.4vw, 42px);
    border-bottom: 1px solid rgba(143, 165, 189, 0.2);
    background: rgba(5, 9, 13, 0.88);
    backdrop-filter: blur(18px);
    font-family:
      'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
  }

  .terminal-logo {
    color: #d5deea;
    font-size: 0.86rem;
    font-weight: 800;
    letter-spacing: 0;
  }

  .terminal-logo span {
    color: #39d98a;
  }

  .desktop-menu {
    display: flex;
    align-items: center;
    gap: clamp(28px, 5vw, 58px);
  }

  .desktop-menu a {
    position: relative;
    display: grid;
    min-height: 46px;
    place-items: center;
    color: #96a4b8;
    font-size: 0.72rem;
    font-weight: 700;
  }

  .desktop-menu a.active,
  .desktop-menu a:hover {
    color: #39d98a;
  }

  .desktop-menu a.active::after,
  .desktop-menu a:hover::after {
    content: '';
    position: absolute;
    inset: auto 0 -1px;
    height: 2px;
    background: #39d98a;
    box-shadow: 0 0 18px rgba(57, 217, 138, 0.55);
  }

  .mobile-toggle {
    display: none;
    color: #d5deea;
    border: 1px solid rgba(143, 165, 189, 0.28);
    border-radius: 4px;
    padding: 8px;
    background: rgba(11, 17, 24, 0.82);
  }

  .mobile-menu {
    position: absolute;
    inset: 46px 12px auto;
    display: grid;
    gap: 4px;
    border: 1px solid rgba(143, 165, 189, 0.24);
    border-radius: 8px;
    padding: 10px;
    background: rgba(5, 9, 13, 0.96);
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.45);
  }

  .mobile-menu a {
    color: #d5deea;
    padding: 12px;
  }

  .mobile-menu a:hover {
    color: #39d98a;
  }

  @media (max-width: 820px) {
    .terminal-nav {
      min-height: 52px;
      padding: 0 16px;
    }

    .desktop-menu {
      display: none;
    }

    .mobile-toggle {
      display: inline-grid;
      place-items: center;
    }
  }
</style>
