<script lang="ts">
  import {
    BarChart3,
    Cloud,
    Code2,
    Cpu,
    Github,
    Linkedin,
    Mail,
    MapPin,
    Rocket,
    Server,
    ShieldCheck,
    Terminal
  } from 'lucide-svelte';
  import { experiences, personalInfo } from '$lib/data/personal';
  import { activeDiagramNodes, projects } from '$lib/data/projects';
  import golangSvg from '$lib/assets/golang.svg';
  import phpSvg from '$lib/assets/php.svg';
  import typescriptSvg from '$lib/assets/typescript.svg';
  import nestSvg from '$lib/assets/nest-js.svg';
  import rabbitMqSvg from '$lib/assets/rabbit-mq.svg';
  import kafkaSvg from '$lib/assets/kafka.svg';
  import grpcSvg from '$lib/assets/grpc.svg';
  import postgresSvg from '$lib/assets/postgres.svg';
  import mysqlSvg from '$lib/assets/mysql.svg';
  import redisSvg from '$lib/assets/redis.svg';
  import gcpSvg from '$lib/assets/gcp.svg';
  import k8sSvg from '$lib/assets/k8s.svg';
  import ddogSvg from '$lib/assets/ddog.svg';
  import natsSvg from '$lib/assets/nats.svg';
  import codeigniterSvg from '$lib/assets/codeigniter.svg';
  import reactSvg from '$lib/assets/react.svg';
  import solidSvg from '$lib/assets/solid-js.svg';
  import jwtSvg from '$lib/assets/jwt.svg';
  import arangodbSvg from '$lib/assets/arangodb.svg';

  const techIcon = (file: string) => `/icons/tech/${file}`;

  const featuredExperiences = experiences.slice(0, 3).map((experience) => ({
    ...experience,
    summary: `${experience.description.split('.')[0]}.`
  }));

  const companyLogos: Record<string, string> = {
    'exp-digital-rox': '/icons/company/golrox.png',
    'exp-bfi': '/icons/company/bfi.png',
    'exp-amani': '/icons/company/amani-mark.png'
  };

  const expertise = [
    { label: 'Backend Systems', icon: Server },
    { label: 'Cloud Architecture', icon: Cloud },
    { label: 'Developer Experience', icon: Code2 },
    { label: 'Performance', icon: Cpu }
  ];

  const skills = [
    { label: 'Backend Engineering', score: '9.5/10', level: 19 },
    { label: 'System Design', score: '9.0/10', level: 18 },
    { label: 'Cloud & DevOps', score: '8.5/10', level: 17 },
    { label: 'Frontend Development', score: '8.0/10', level: 16 },
    { label: 'Performance Tuning', score: '8.5/10', level: 17 }
  ];

  const skillSegments = Array.from({ length: 20 });

  const impacts = [
    {
      label: 'Manual Work Reduced',
      value: '90%',
      detail: 'Built Admin v2 workflow automation that sharply reduced manual processing time.',
      icon: Terminal
    },
    {
      label: 'Infra Cost Reduction',
      value: '70%+',
      detail: 'Optimized resources, consolidated services, and improved architecture.',
      icon: BarChart3
    },
    {
      label: 'Revenue Impact',
      value: '15%',
      detail: 'Shipped a system feature that contributed to company revenue growth.',
      icon: ShieldCheck
    },
    {
      label: 'Projects Shipped',
      value: '40+',
      detail: 'From bespoke client apps to distributed enterprise platforms.',
      icon: Rocket
    }
  ];

  const featuredProjects = projects.slice(0, 3);

  const techGroups = [
    {
      label: 'Languages',
      items: [
        { name: 'Go', icon: golangSvg },
        { name: 'TypeScript', icon: typescriptSvg },
        { name: 'Python', icon: techIcon('python.svg') },
        { name: 'JavaScript', icon: techIcon('javascript.svg') },
        { name: 'PHP', icon: phpSvg },
        { name: 'HTML', icon: techIcon('html5.svg') },
        { name: 'CSS', icon: techIcon('css.svg') },
        { name: 'SCSS', icon: techIcon('sass.svg') }
      ]
    },
    {
      label: 'Backend',
      items: [
        { name: 'Golang', icon: golangSvg },
        { name: 'Gin', icon: techIcon('gin.svg') },
        { name: 'Node.js', icon: techIcon('nodejs.svg') },
        { name: 'Express', icon: techIcon('express.svg') },
        { name: 'NestJS', icon: nestSvg },
        { name: 'Django', icon: techIcon('django.svg') },
        { name: 'Laravel', icon: techIcon('laravel.svg') },
        { name: 'CodeIgniter', icon: codeigniterSvg },
        { name: 'gRPC', icon: grpcSvg },
        { name: 'Microservices', icon: techIcon('serverless.svg') }
      ]
    },
    {
      label: 'Frontend',
      items: [
        { name: 'React', icon: reactSvg },
        { name: 'Next.js', icon: techIcon('nextjs.svg') },
        { name: 'SolidJS', icon: solidSvg },
        { name: 'Redux', icon: techIcon('redux.svg') },
        { name: 'Bootstrap', icon: techIcon('bootstrap.svg') },
        { name: 'jQuery', icon: techIcon('jquery.svg') },
        { name: 'WebSocket', icon: techIcon('socketio.svg') },
        { name: 'Webpack', icon: techIcon('webpack.svg') }
      ]
    },
    {
      label: 'Data & Messaging',
      items: [
        { name: 'PostgreSQL', icon: postgresSvg },
        { name: 'MySQL', icon: mysqlSvg },
        { name: 'SQL Server', icon: techIcon('sqlserver.svg') },
        { name: 'Redis', icon: redisSvg },
        { name: 'MongoDB', icon: techIcon('mongodb.svg') },
        { name: 'ArangoDB', icon: arangodbSvg },
        { name: 'RabbitMQ', icon: rabbitMqSvg },
        { name: 'NATS', icon: natsSvg },
        { name: 'BullMQ', icon: redisSvg },
        { name: 'FAISS', icon: techIcon('meta.svg') }
      ]
    },
    {
      label: 'Cloud & DevOps',
      items: [
        { name: 'GCP', icon: gcpSvg },
        { name: 'AWS', icon: techIcon('aws.svg') },
        { name: 'Alibaba Cloud', icon: techIcon('alibabacloud.svg') },
        { name: 'Kubernetes', icon: k8sSvg },
        { name: 'Docker', icon: techIcon('docker.svg') },
        { name: 'Helm', icon: techIcon('helm.svg') },
        { name: 'ArgoCD', icon: techIcon('argo.svg') },
        { name: 'Nginx', icon: techIcon('nginx.svg') },
        { name: 'WireGuard VPN', icon: techIcon('wireguard.svg') },
        { name: 'CI/CD', icon: techIcon('githubactions.svg') },
        { name: 'Kafka', icon: kafkaSvg },
        { name: 'Temporal', icon: techIcon('temporal.svg') }
      ]
    },
    {
      label: 'AI, Monitoring & Tools',
      items: [
        { name: 'LangChain', icon: techIcon('langchain.png') },
        { name: 'LangGraph', icon: techIcon('langgraph.png') },
        { name: 'RAG', icon: techIcon('openai.png') },
        { name: 'Datadog', icon: ddogSvg },
        { name: 'Grafana', icon: techIcon('grafana.svg') },
        { name: 'Prometheus', icon: techIcon('prometheus.svg') },
        { name: 'Google Analytics', icon: techIcon('googleanalytics.svg') },
        { name: 'Microsoft Clarity', icon: techIcon('azure.svg') },
        { name: 'JWT', icon: jwtSvg },
        { name: 'Git', icon: techIcon('git.svg') },
        { name: 'GitHub Actions', icon: techIcon('githubactions.svg') },
        { name: 'Xendit', icon: techIcon('xendit.svg') }
      ]
    }
  ];

  const mapRows = [
    '..........................           ',
    '..........................           ',
    '...........................        ..',
    '...........................       ...',
    '.........................       .....',
    '.......................       ...... ',
    '......................      .......  ',
    '....................       ......    ',
    '..................        .....      ',
    '.................       ......       ',
    '...............       .......        ',
    '.............        ......          ',
    '...........       ........           ',
    '..........      .........            ',
    '.........      ...   ....            ',
    '.......      ....     ....           ',
    '.....      .....      ....           ',
    '....      ......    ......    ..     ',
    '...      ......     .......  ....    ',
    '..      ......      ......  ......   ',
    '       .......     ..@@..   ......  ',
    '      ........   ..@@@@..    ...... ',
    '     ..........  ...@@..      ..... ',
    '    ...........     ....      ..... ',
    '      .........      .....   ...... ',
    '        ......        ............. ',
    '          ...          ...........  ',
    '                       .......      ',
    '                         .....      ',
    '                              ..    ',
    '                              ..    '
  ];

  const mapWidth = Math.max(...mapRows.map((row) => row.length));
  const normalizedMapRows = mapRows.map((row) => row.padEnd(mapWidth, '.'));

</script>

<svelte:head>
  <title>Edwaldo Utama - Senior Full-Stack Software Engineer</title>
  <meta
    name="description"
    content="Portfolio of Edwaldo Utama, a software engineer building reliable backend systems, cloud architecture, and scalable product platforms."
  />
</svelte:head>

<main class="terminal-site">
  <section id="home" class="hero-grid terminal-section">
    <div class="intro-console">
      <p class="command">$ whoami</p>
      <h1>Edwaldo <span>Utama</span></h1>
      <p class="role">Senior Full-Stack Software Engineer</p>
      <p class="green-line">Building reliable systems. Shipping impactful software.</p>

      <div class="terminal-block">
        <p class="command">$ cat mission.txt</p>
        <p>
          I turn complex problems into simple, scalable solutions that create real user and business
          impact.
        </p>
      </div>

      <div class="expertise-list">
        <p class="command">$ ls expertise/</p>
        <div class="chips">
          {#each expertise as item}
            <span>
              <svelte:component this={item.icon} size={15} />
              {item.label}
            </span>
          {/each}
        </div>
      </div>

      <div class="terminal-block">
        <p class="command">$ ./connect.sh</p>
        <p class="prompt-line">&gt; Ready to build something great together.<span class="cursor"></span></p>
      </div>
    </div>

    <div class="system-window">
      <div class="window-bar">
        <div class="traffic">
          <i></i>
          <i></i>
          <i></i>
        </div>
        <span>system_overview.sh</span>
      </div>
      <div class="window-body">
        <div class="code-panel">
          <p><span>01</span># System Overview</p>
          <p class="code-line blank"><span>02</span></p>
          <div class="meta-row">
            <span>03</span>
            <i>user:</i>
            <b>Edwaldo Utama</b>
          </div>
          <div class="meta-row">
            <span>04</span>
            <i>role:</i>
            <b>Senior Full-Stack Engineer</b>
          </div>
          <div class="meta-row">
            <span>05</span>
            <i>location:</i>
            <b>Jakarta, Indonesia</b>
          </div>
          <div class="meta-row">
            <span>06</span>
            <i>status:</i>
            <b><strong>Open to new opportunities</strong></b>
          </div>
          <p class="code-line blank"><span>07</span></p>
          <p><span>08</span><strong>$ skills --summary</strong></p>
          {#each skills as skill, index}
            <div class="skill-row">
              <span>{String(index + 9).padStart(2, '0')}</span>
              <i class="branch">{index === skills.length - 1 ? '└─' : '├─'}</i>
              <i>{skill.label}</i>
              <b class="skill-meter" aria-label={`${skill.label} ${skill.score}`}>
                {#each skillSegments as _, segment}
                  <s class:filled={segment < skill.level}></s>
                {/each}
              </b>
              <em>{skill.score}</em>
            </div>
          {/each}
          <p><span>14</span></p>
          <p><span>15</span><strong>$ uptime --career</strong></p>
          <p><span>16</span>7+ years of coding</p>
          <p><span>17</span>40+ projects shipped</p>
          <p><span>18</span>backend, platform, frontend</p>
          <p><span>19</span>$<span class="cursor"></span></p>
        </div>
        <div class="map-panel">
          <div class="ascii-map" aria-label="Indonesia region map">
            {#each normalizedMapRows as row}
              <div>
                {#each Array.from(row) as point}
                  <span class:water={point === '.'} class:hotspot={point === '@'}></span>
                {/each}
              </div>
            {/each}
          </div>
          <div class="status-box">
            <strong>System Status</strong>
            <p><span>Health</span><b>Optimal</b></p>
            <p><span>Performance</span><b>High</b></p>
            <p><span>Impact</span><b>Growing</b></p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="experience" class="split-section terminal-section">
    <div>
      <h2>// EXPERIENCE</h2>
      <div class="timeline">
        {#each featuredExperiences as exp}
          <article>
            <div class="company-icon" class:wide-logo={exp.id === 'exp-amani'}>
              {#if companyLogos[exp.id]}
                <img src={companyLogos[exp.id]} alt={`${exp.company} logo`} />
              {:else}
                <span>{exp.company.slice(0, 1)}</span>
              {/if}
            </div>
            <div>
              <div class="timeline-head">
                <h3>{exp.company.replace('PT. ', '').replace('PT ', '')}</h3>
                <span>{exp.duration}</span>
              </div>
              <p class="position">{exp.position}</p>
              <p>{exp.summary}</p>
            </div>
          </article>
        {/each}
      </div>
      <a class="terminal-button" href="/portfolio">View Full Experience -></a>
    </div>

    <div>
      <h2>// ENGINEERING IMPACT</h2>
      <div class="impact-grid">
        {#each impacts as item}
          <article>
            <div class="impact-icon">
              <svelte:component this={item.icon} size={28} />
            </div>
            <div>
              <strong>{item.value}</strong>
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <section id="projects" class="terminal-section">
    <h2>// PROJECT HIGHLIGHTS</h2>
    <div class="project-grid">
      {#each featuredProjects as project}
        <article class="project-card">
          <div class="project-top">
            <h3>{project.title}</h3>
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
    </div>
    <div class="section-action">
      <a class="terminal-button" href="/projects">View More Projects -></a>
    </div>
  </section>

  <section id="stack" class="terminal-section">
    <h2>// TECH STACK</h2>
    <div class="stack-strip">
      {#each techGroups as group}
        <div class="stack-group">
          <p>{group.label}</p>
          <div>
            {#each group.items as item}
              {#if item.icon}
                <img
                  src={item.icon}
                  alt={item.name}
                  title={item.name}
                  class:wide-brand-icon={['LangGraph', 'GitHub Actions', 'CI/CD'].includes(item.name)}
                  class:langgraph-icon={item.name === 'LangGraph'}
                />
              {:else}
                <span>{item.name}</span>
              {/if}
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <section id="about" class="connect-section terminal-section">
    <div class="connect-copy">
      <h2>// LET'S CONNECT</h2>
      <p>
        I'm always open to discussing new opportunities, interesting problems, or just chatting
        about systems and architecture.
      </p>
    </div>

    <div id="contact" class="contact-terminal">
      <div class="terminal-card">
        <p class="command">$ contact --info</p>
        <a href={`mailto:${personalInfo.email}`}><Mail size={16} /> {personalInfo.email}</a>
        <span><MapPin size={16} /> {personalInfo.location}</span>
        {#if personalInfo.social.linkedin}
          <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={16} /> linkedin.com/in/edwaldo-utama
          </a>
        {/if}
        {#if personalInfo.social.github}
          <a href={personalInfo.social.github} target="_blank" rel="noreferrer">
            <Github size={16} /> github.com/edwaldo12
          </a>
        {/if}
      </div>
      <div class="terminal-card status-card">
        <p class="command">$ status</p>
        <p>Available for new opportunities</p>
        <p>Let's build something great.</p>
        <p>$ <span class="cursor"></span></p>
      </div>
    </div>
  </section>
</main>

<style>
  :global(body) {
    background:
      radial-gradient(circle at 18% 12%, rgba(51, 211, 153, 0.08), transparent 24rem),
      radial-gradient(circle at 82% 30%, rgba(80, 148, 255, 0.06), transparent 26rem),
      #05090d !important;
  }

  :global(html) {
    background: #05090d;
  }

  :global(h1),
  :global(h2),
  :global(h3) {
    color: inherit;
  }

  .terminal-site {
    min-height: 100vh;
    padding-top: 46px;
    color: #d5deea;
    font-family:
      'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
    background:
      linear-gradient(rgba(255, 255, 255, 0.018) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.014) 1px, transparent 1px),
      #05090d;
    background-size: 28px 28px;
    font-size: 12px;
  }

  .terminal-section {
    border-bottom: 1px solid rgba(143, 165, 189, 0.18);
    padding: 20px clamp(22px, 3.4vw, 42px);
  }

  .hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.94fr) minmax(460px, 1fr);
    align-items: center;
    gap: clamp(28px, 4.5vw, 56px);
    min-height: 432px;
  }

  .command,
  h2,
  .green-line,
  strong,
  .position {
    color: #39d98a;
  }

  .intro-console h1 {
    margin: 8px 0 6px;
    color: #f7f7f5;
    font-size: clamp(2.8rem, 4.1vw, 3.9rem);
    font-weight: 800;
    letter-spacing: 0;
    line-height: 0.98;
  }

  .intro-console h1 span {
    color: #39d98a;
  }

  .role {
    color: #9eabc1;
    font-size: clamp(1.25rem, 1.8vw, 1.45rem);
    margin-bottom: 20px;
  }

  .terminal-block,
  .expertise-list {
    margin-top: 22px;
    max-width: 660px;
  }

  .intro-console p,
  .timeline p,
  .project-card p,
  .connect-section p,
  .terminal-card {
    color: #a9b7ca;
    line-height: 1.55;
  }

  .chips,
  .tag-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .chips span,
  .tag-row span {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 28px;
    border: 1px solid rgba(143, 165, 189, 0.28);
    border-radius: 4px;
    padding: 6px 10px;
    color: #dce6f4;
    background: rgba(11, 17, 24, 0.68);
    font-size: 0.74rem;
  }

  .cursor {
    display: inline-block;
    width: 8px;
    height: 16px;
    margin-left: 4px;
    background: #d5deea;
    animation: blink 1s steps(1) infinite;
    vertical-align: -2px;
  }

  .system-window,
  .project-card,
  .terminal-card,
  .stack-strip,
  .impact-grid article {
    border: 1px solid rgba(143, 165, 189, 0.25);
    border-radius: 8px;
    background: linear-gradient(145deg, rgba(12, 17, 24, 0.94), rgba(5, 9, 13, 0.92));
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 24px 70px rgba(0, 0, 0, 0.24);
  }

  .window-bar,
  .project-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 32px;
    border-bottom: 1px solid rgba(143, 165, 189, 0.18);
    padding: 0 16px;
  }

  .window-bar span,
  .project-top h3 {
    color: #39d98a;
    font-size: 0.78rem;
    font-weight: 700;
  }

  .traffic,
  .project-top div {
    display: flex;
    gap: 8px;
  }

  .traffic i,
  .project-top i {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: #8ea0b5;
  }

  .traffic i:nth-child(1) {
    background: #ff5f57;
  }

  .traffic i:nth-child(2) {
    background: #ffbd2e;
  }

  .traffic i:nth-child(3) {
    background: #27c93f;
  }

  .window-body {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(180px, 0.54fr);
    gap: 14px;
    padding: 16px;
  }

  .code-panel p {
    margin: 0 0 6px;
    white-space: pre;
    color: #a9b7ca;
    font-size: 0.78rem;
  }

  .code-panel p span:first-child,
  .meta-row > span,
  .skill-row > span:first-child {
    display: inline-block;
    width: 34px;
    color: #697789;
  }

  .code-line.blank {
    min-height: 1.42em;
  }

  .meta-row {
    display: grid;
    grid-template-columns: 34px 118px minmax(0, 1fr);
    align-items: baseline;
    gap: 0;
    margin: 0 0 6px;
    color: #a9b7ca;
    font-size: 0.78rem;
  }

  .meta-row i,
  .meta-row b {
    min-width: 0;
    font-style: normal;
    font-weight: 400;
    white-space: nowrap;
  }

  .meta-row i {
    color: #a9b7ca;
  }

  .meta-row b {
    color: #a9b7ca;
  }

  .skill-row {
    display: grid;
    grid-template-columns: 34px 24px minmax(140px, 1fr) 104px 46px;
    align-items: center;
    gap: 6px;
    margin: 0 0 6px;
    color: #a9b7ca;
    font-size: 0.78rem;
  }

  .skill-row i:not(.branch) {
    font-style: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .skill-row .branch {
    color: #8392a6;
    font-style: normal;
    line-height: 1;
  }

  .skill-meter {
    display: grid;
    grid-template-columns: repeat(20, 1fr);
    gap: 2px;
    width: 104px;
    height: 12px;
    overflow: hidden;
    font-weight: 400;
  }

  .skill-meter s {
    display: block;
    min-width: 0;
    height: 100%;
    border-radius: 1px;
    background: rgba(143, 165, 189, 0.22);
    text-decoration: none;
  }

  .skill-meter s.filled {
    background: #67d794;
    box-shadow: inset 0 0 0 1px rgba(23, 117, 72, 0.24);
  }

  .skill-row em {
    color: #d5deea;
    font-style: normal;
    margin-left: 0;
  }

  .ascii-map {
    display: grid;
    place-content: center;
    min-height: 196px;
    border: 1px solid rgba(143, 165, 189, 0.18);
    border-radius: 6px;
    margin: 0 0 18px;
    padding: 12px;
    overflow: hidden;
  }

  .ascii-map div {
    display: flex;
    height: 6px;
  }

  .ascii-map span {
    position: relative;
    display: block;
    width: 5px;
    height: 6px;
    flex: 0 0 5px;
  }

  .ascii-map span::before {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: 1px;
  }

  .ascii-map span.water::before {
    background: rgba(119, 147, 173, 0.42);
  }

  .ascii-map span.hotspot::before {
    inset: 1px;
    background: #6fe79b;
    box-shadow: 0 0 9px rgba(111, 231, 155, 0.85);
  }

  .status-box {
    border: 1px solid rgba(143, 165, 189, 0.18);
    border-radius: 6px;
    padding: 12px;
    font-size: 0.72rem;
  }

  .status-box p {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 96px;
    align-items: center;
    gap: 18px;
    margin: 10px 0 0;
    color: #a9b7ca;
  }

  .status-box b {
    display: grid;
    grid-template-columns: 8px 1fr;
    align-items: center;
    gap: 10px;
    color: #d5deea;
    font-weight: 700;
  }

  .status-box b::before {
    content: '';
    display: block;
    width: 7px;
    height: 7px;
    border-radius: 999px;
    background: #39d98a;
    box-shadow: 0 0 12px rgba(57, 217, 138, 0.8);
  }

  h2 {
    margin: 0 0 18px;
    font-size: 1rem;
    letter-spacing: 0;
  }

  .split-section {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
    gap: 32px;
  }

  .timeline {
    position: relative;
    padding-left: 22px;
  }

  .timeline::before {
    content: '';
    position: absolute;
    inset: 0 auto 0 4px;
    width: 1px;
    background: rgba(143, 165, 189, 0.28);
  }

  .timeline article {
    position: relative;
    display: grid;
    grid-template-columns: 46px 1fr;
    gap: 14px;
    margin-bottom: 20px;
  }

  .timeline article::before {
    content: '';
    position: absolute;
    left: -22px;
    top: 20px;
    width: 9px;
    height: 9px;
    border: 1px solid #39d98a;
    border-radius: 999px;
    background: #05090d;
  }

  .company-icon {
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    border-radius: 8px;
    border: 1px solid rgba(143, 165, 189, 0.24);
    background: rgba(247, 247, 245, 0.96);
    overflow: hidden;
  }

  .company-icon img {
    width: 31px;
    height: 31px;
    object-fit: contain;
  }

  .company-icon.wide-logo img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }
  .company-icon span {
    color: #f7f7f5;
    font-weight: 800;
  }

  .timeline-head {
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }

  .timeline h3 {
    margin: 0;
    color: #f7f7f5;
    font-size: 0.94rem;
  }

  .timeline-head span {
    flex: 0 0 auto;
    color: #91a0b5;
    font-size: 0.76rem;
  }

  .position {
    margin: 3px 0 8px;
  }

  .terminal-button {
    display: inline-flex;
    justify-content: center;
    min-width: 185px;
    border: 1px solid rgba(57, 217, 138, 0.55);
    border-radius: 4px;
    padding: 8px 12px;
    color: #39d98a;
    background: rgba(57, 217, 138, 0.05);
  }

  .impact-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }

  .impact-grid article {
    display: grid;
    grid-template-columns: 54px 1fr;
    gap: 18px;
    min-height: 120px;
    padding: 18px;
  }

  .impact-icon {
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    border: 1px solid rgba(57, 217, 138, 0.42);
    border-radius: 8px;
    color: #39d98a;
  }

  .impact-grid strong {
    display: block;
    color: #f7f7f5;
    font-size: 1.55rem;
    line-height: 1;
  }

  .impact-grid h3 {
    margin: 12px 0 8px;
    color: #39d98a;
    font-size: 0.95rem;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
  }

  .section-action {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }

  .project-card {
    overflow: hidden;
  }

  .project-card > p {
    min-height: 64px;
    padding: 0 16px;
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

  .tag-row {
    padding: 0 16px 14px;
  }

  .tag-row span {
    min-height: 28px;
    color: #39d98a;
    font-size: 0.68rem;
  }

  .stack-strip {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 0;
    padding: 14px;
  }

  .stack-group {
    min-width: 0;
    border-right: 1px solid rgba(143, 165, 189, 0.28);
    padding: 0 18px;
    text-align: center;
  }

  .stack-group:last-child {
    border-right: 0;
  }

  .stack-group p {
    margin: 0 0 14px;
    color: #dce6f4;
    font-size: 0.72rem;
  }

  .stack-group div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  .stack-group img {
    width: 28px;
    height: 28px;
    object-fit: contain;
    filter: drop-shadow(0 0 10px rgba(57, 217, 138, 0.08));
  }

  .stack-group img.wide-brand-icon {
    width: 48px;
    height: 30px;
    object-fit: contain;
  }

  .stack-group img.langgraph-icon {
    width: 54px;
    height: 30px;
    object-fit: cover;
    border-radius: 999px;
    filter: brightness(2.15) saturate(1.7) contrast(1.08)
      drop-shadow(0 0 14px rgba(57, 217, 138, 0.18));
  }

  .stack-group span {
    display: inline-flex;
    align-items: center;
    min-height: 24px;
    border: 1px solid rgba(143, 165, 189, 0.3);
    border-radius: 4px;
    padding: 3px 8px;
    color: #39d98a;
    background: rgba(9, 16, 23, 0.72);
    font-size: 0.62rem;
    line-height: 1;
    white-space: nowrap;
  }

  .connect-section {
    display: grid;
    grid-template-columns: minmax(220px, 0.8fr) minmax(0, 2.2fr);
    gap: 20px;
    align-items: start;
  }

  .contact-terminal {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 14px;
  }

  .terminal-card {
    padding: 14px;
  }

  .terminal-card a,
  .terminal-card > span {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 8px 0;
    color: #dce6f4;
  }

  :global(.terminal-card svg) {
    color: #39d98a;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  @media (max-width: 1180px) {
    .hero-grid,
    .split-section,
    .connect-section {
      grid-template-columns: 1fr;
    }

    .system-window {
      max-width: 920px;
    }

    .project-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 820px) {
    .terminal-site {
      padding-top: 60px;
    }

    .terminal-section {
      padding: 24px 16px;
    }

    .window-body,
    .impact-grid,
    .stack-strip,
    .contact-terminal {
      grid-template-columns: 1fr;
    }

    .stack-group {
      border-right: 0;
      border-bottom: 1px solid rgba(143, 165, 189, 0.2);
      padding: 16px 0;
    }

    .stack-group:last-child {
      border-bottom: 0;
    }

    .timeline-head {
      flex-direction: column;
      gap: 2px;
    }
  }

  @media (max-width: 560px) {
    .intro-console h1 {
      font-size: 3rem;
    }

    .timeline article,
    .impact-grid article {
      grid-template-columns: 1fr;
    }

    .company-icon {
      width: 38px;
      height: 38px;
    }

    .diagram-row {
      grid-template-columns: 1fr;
    }

    .code-panel {
      overflow-x: auto;
    }
  }
</style>
