<script lang="ts">
  import { activeDiagramNodes, projects } from '$lib/data/projects';
  import { personalInfo } from '$lib/data/personal';
</script>

<svelte:head>
  <title>Projects - {personalInfo.name}</title>
  <meta
    name="description"
    content="Project archive for {personalInfo.name}, Senior Full-Stack Software Engineer."
  />
</svelte:head>

<main class="projects-page">
  <section class="page-head">
    <p class="command">$ ls projects/</p>
    <h1>Project Archive</h1>
    <p>Selected systems, product work, automation, services, and integration builds.</p>
  </section>

  <section class="project-grid">
    {#each projects as project, index}
      <article class="project-card">
        <div class="project-top">
          <h2>{String(index + 1).padStart(2, '0')} / {project.title}</h2>
          <div><i></i><i></i><i></i></div>
        </div>
        <div class="diagram">
          {#each project.diagram as row, rowIndex}
            <div class="diagram-row">
              {#each row as box}
                <span class:active={rowIndex === 1 && activeDiagramNodes.includes(box)}>{box}</span>
              {/each}
            </div>
          {/each}
        </div>
        <p>{project.description}</p>
        <div class="tag-row">
          {#each project.tags as tag}
            <span>{tag}</span>
          {/each}
        </div>
      </article>
    {/each}
  </section>
</main>

<style>
  :global(html),
  :global(body),
  :global(main.min-h-screen) {
    background: #05090d !important;
  }

  .projects-page {
    min-height: 100vh;
    padding: 86px clamp(22px, 3.4vw, 42px) 42px;
    color: #d5deea;
    background:
      linear-gradient(rgba(255, 255, 255, 0.018) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.014) 1px, transparent 1px),
      #05090d;
    background-size: 28px 28px;
    font-family:
      'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
  }

  .page-head {
    border-bottom: 1px solid rgba(143, 165, 189, 0.18);
    padding-bottom: 26px;
  }

  .command {
    color: #39d98a;
  }

  h1 {
    margin: 8px 0;
    color: #f7f7f5;
    font-size: clamp(2.4rem, 5vw, 4.4rem);
    letter-spacing: 0;
  }

  .page-head p,
  .project-card p {
    color: #a9b7ca;
    line-height: 1.55;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
    padding-top: 24px;
  }

  .project-card {
    overflow: hidden;
    border: 1px solid rgba(143, 165, 189, 0.25);
    border-radius: 8px;
    background: linear-gradient(145deg, rgba(12, 17, 24, 0.94), rgba(5, 9, 13, 0.92));
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 24px 70px rgba(0, 0, 0, 0.24);
  }

  .project-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 34px;
    border-bottom: 1px solid rgba(143, 165, 189, 0.18);
    padding: 0 16px;
  }

  .project-top h2 {
    margin: 0;
    color: #39d98a;
    font-size: 0.78rem;
  }

  .project-top div {
    display: flex;
    gap: 8px;
  }

  .project-top i {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: #8ea0b5;
  }

  .diagram {
    display: grid;
    gap: 8px;
    min-height: 132px;
    padding: 18px 16px;
  }

  .diagram-row {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
    align-items: center;
  }

  .diagram span {
    display: grid;
    place-items: center;
    min-height: 26px;
    border: 1px solid rgba(143, 165, 189, 0.35);
    color: #dce6f4;
    font-size: 0.58rem;
    text-align: center;
  }

  .diagram span.active {
    color: #39d98a;
    border-color: rgba(57, 217, 138, 0.55);
  }

  .project-card p {
    min-height: 76px;
    padding: 0 16px;
  }

  .tag-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 0 16px 16px;
  }

  .tag-row span {
    min-height: 28px;
    border: 1px solid rgba(57, 217, 138, 0.36);
    border-radius: 4px;
    padding: 5px 9px;
    color: #39d98a;
    background: rgba(57, 217, 138, 0.04);
    font-size: 0.68rem;
  }

  @media (max-width: 1180px) {
    .project-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 760px) {
    .projects-page {
      padding: 78px 18px 34px;
    }

    .project-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
