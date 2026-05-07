<script lang="ts">
  import { experiences, personalInfo } from '$lib/data/personal';
</script>

<svelte:head>
  <title>Experience - {personalInfo.name}</title>
  <meta
    name="description"
    content="Full professional experience for {personalInfo.name}, Senior Full-Stack Software Engineer."
  />
</svelte:head>

<main class="experience-page">
  <section class="page-head">
    <p class="command">$ cat experience.log</p>
    <h1>Full Experience</h1>
    <p>Senior Full-Stack Software Engineer with backend, platform, frontend, and infrastructure work.</p>
  </section>

  <section class="experience-list">
    {#each experiences as exp, index}
      <article>
        <div class="line-no">{String(index + 1).padStart(2, '0')}</div>
        <div class="content">
          <div class="topline">
            <div>
              <h2>{exp.company}</h2>
              <p class="role">{exp.position}</p>
            </div>
            <div class="meta">
              <span>{exp.duration}</span>
              <span>{exp.location}</span>
            </div>
          </div>
          <p class="description">{exp.description}</p>
          {#if exp.achievements?.length}
            <ul>
              {#each exp.achievements as item}
                <li>{item}</li>
              {/each}
            </ul>
          {/if}
          <div class="tags">
            {#each exp.technologies as tech}
              <span>{tech}</span>
            {/each}
          </div>
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

  .experience-page {
    position: relative;
    display: block;
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

  .command,
  .role {
    color: #39d98a;
  }

  h1 {
    margin: 8px 0;
    color: #f7f7f5;
    font-size: clamp(2.4rem, 5vw, 4.4rem);
    letter-spacing: 0;
  }

  .page-head p,
  .description,
  li,
  .meta {
    color: #a9b7ca;
    line-height: 1.6;
  }

  .experience-list {
    display: grid;
    gap: 18px;
    padding-top: 24px;
  }

  article {
    display: grid;
    grid-template-columns: 48px 1fr;
    border: 1px solid rgba(143, 165, 189, 0.25);
    border-radius: 8px;
    background: linear-gradient(145deg, rgba(12, 17, 24, 0.94), rgba(5, 9, 13, 0.92));
  }

  .line-no {
    border-right: 1px solid rgba(143, 165, 189, 0.18);
    padding-top: 20px;
    text-align: center;
    color: #697789;
  }

  .content {
    padding: 20px;
  }

  .topline {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 12px;
  }

  h2 {
    margin: 0 0 4px;
    color: #f7f7f5;
    font-size: 1.12rem;
  }

  .role {
    margin: 0;
  }

  .meta {
    display: grid;
    justify-items: end;
    gap: 4px;
    min-width: 170px;
    font-size: 0.82rem;
  }

  ul {
    margin: 14px 0 0;
    padding-left: 18px;
  }

  li {
    margin: 7px 0;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 16px;
  }

  .tags span {
    border: 1px solid rgba(57, 217, 138, 0.36);
    border-radius: 4px;
    padding: 4px 8px;
    color: #39d98a;
    background: rgba(57, 217, 138, 0.04);
    font-size: 0.72rem;
  }

  @media (max-width: 760px) {
    article,
    .topline {
      grid-template-columns: 1fr;
      display: block;
    }

    .line-no {
      border-right: 0;
      border-bottom: 1px solid rgba(143, 165, 189, 0.18);
      padding: 10px;
      text-align: left;
    }

    .meta {
      justify-items: start;
      margin-top: 10px;
    }
  }
</style>
