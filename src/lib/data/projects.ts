export interface ProjectHighlight {
  title: string;
  description: string;
  tags: string[];
  diagram: string[][];
}

export const projects: ProjectHighlight[] = [
  {
    title: 'golrox.com',
    description:
      'Roblox marketplace stack with Next.js storefront, Go payment gateway, Redis-backed queue workers, and automated order fulfillment.',
    tags: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Go', 'Gin', 'Redis', 'RabbitMQ'],
    diagram: [
      ['Storefront', 'Checkout', 'Order DB'],
      ['GPG', 'Payment Webhook', 'Queue Service'],
      ['BullMQ Redis', 'Roblox Worker', 'Fulfillment']
    ]
  },
  {
    title: 'admin-v2-automation',
    description:
      'Core workflow automation platform that reduced manual processing time by 90% and improved operational execution.',
    tags: ['Go', 'Next.js', 'PostgreSQL', 'Redis', 'K8S'],
    diagram: [
      ['Admin UI', 'Workflow API', 'Ops Rules'],
      ['Queue', 'Automation', 'Audit Log'],
      ['Reporting', 'Notification', 'Business Ops']
    ]
  },
  {
    title: 'ai-support-agent',
    description:
      'LangChain/LangGraph ReAct support agent integrated with Chatwoot for FAQ, order lookup, and payment checks.',
    tags: ['Python', 'LangChain', 'LangGraph', 'RAG', 'FAISS'],
    diagram: [
      ['Chatwoot', 'ReAct Agent', 'Tool Router'],
      ['FAQ RAG', 'Order Lookup', 'Payment Check'],
      ['FAISS', 'Backend APIs', 'Support Ops']
    ]
  },
  {
    title: 'internal-payment-proxy',
    description:
      'Internal proxy payment gateway deployed inside Kubernetes with service-only access and stronger network boundaries.',
    tags: ['Go', 'Kubernetes', 'Nginx', 'RabbitMQ', 'GCP'],
    diagram: [
      ['Internal App', 'Proxy API', 'Payment Route'],
      ['Service Auth', 'Gateway', 'Provider Sync'],
      ['Monitoring', 'Retry Queue', 'Audit Trail']
    ]
  },
  {
    title: 'ecommerce-builds',
    description:
      'Custom commerce platforms with product catalogs, checkout flows, payment integration, inventory, and admin operations.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Payment Gateway', 'Admin'],
    diagram: [
      ['Catalog', 'Cart', 'Checkout'],
      ['Payment', 'Inventory', 'Admin'],
      ['SEO', 'Analytics', 'Operations']
    ]
  },
  {
    title: 'whatsapp-order-bots',
    description:
      'WhatsApp order automation using workflow orchestration and AI intent detection for intake, validation, and hand-off.',
    tags: ['WhatsApp API', 'n8n', 'AI', 'Workflow', 'CRM'],
    diagram: [
      ['WhatsApp', 'Intent', 'Order Intake'],
      ['n8n Flow', 'Validation', 'Payment Hand-off'],
      ['CRM/ERP', 'Analytics', 'Human Handoff']
    ]
  },
  {
    title: 'telegram-solana-bot',
    description:
      'Telegram bot systems for Solana market monitoring, wallet workflows, portfolio tracking, and strategy automation.',
    tags: ['Telegram Bot', 'Solana', 'Node.js', 'WebSocket', 'Automation'],
    diagram: [
      ['Telegram UI', 'Market Feed', 'Wallet'],
      ['Strategy', 'Risk Rules', 'Execution'],
      ['Portfolio', 'Alerts', 'Logs']
    ]
  },
  {
    title: 'custom-cms-platform',
    description:
      'Content management systems with admin dashboards, role management, publishing workflows, media, and SEO tooling.',
    tags: ['CMS', 'Admin', 'RBAC', 'SEO', 'API'],
    diagram: [
      ['Editor', 'Media', 'Workflow'],
      ['RBAC', 'Publishing', 'Versioning'],
      ['SEO Tools', 'API', 'Backup']
    ]
  },
  {
    title: 'custom-development',
    description:
      'Tailored web applications, APIs, integrations, database design, performance optimization, and long-term support.',
    tags: ['API', 'Integration', 'Database', 'Architecture', 'Performance'],
    diagram: [
      ['Discovery', 'Architecture', 'Roadmap'],
      ['API', 'Database', 'Integration'],
      ['Monitoring', 'Optimization', 'Support']
    ]
  }
];

export const activeDiagramNodes = [
  'Automation',
  'Gateway',
  'Order Lookup',
  'GPG',
  'Payment Webhook',
  'Queue Service',
  'Payment',
  'Inventory',
  'Admin',
  'n8n Flow',
  'Validation',
  'Strategy',
  'Risk Rules',
  'Execution',
  'RBAC',
  'Publishing',
  'API',
  'Database',
  'Integration'
];
