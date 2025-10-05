export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  icon: string;
  features: string[];
  priceRange: string;
  deliveryTime?: string;
  category: 'development' | 'design' | 'consulting';
}

export const services: Service[] = [
  {
    id: 'service-1',
    title: 'E-Commerce Builds',
    description: 'Complete e-commerce solutions with modern shopping experiences and secure payment integration.',
    longDescription: 'I build comprehensive e-commerce platforms from scratch, including product catalogs, shopping carts, payment processing, inventory management, and admin dashboards. Every solution is tailored to your business needs with scalable architecture.',
    icon: 'shopping-cart',
    features: [
      'Custom E-commerce Development',
      'Payment Gateway Integration',
      'Inventory Management System',
      'Admin Dashboard',
      'Mobile-Responsive Design',
      'SEO Optimization',
      'Security Implementation',
      'Performance Optimization'
    ],
    priceRange: 'Contact for Quote',
    deliveryTime: 'Contact for Timeline',
    category: 'development'
  },
  {
    id: 'service-2',
    title: 'Telegram Solana Bot',
    description: 'Automated cryptocurrency trading bots for Solana blockchain with advanced trading strategies.',
    longDescription: 'Custom Telegram bots for automated cryptocurrency trading on the Solana blockchain. Features include real-time market analysis, automated buying/selling, portfolio tracking, and secure wallet integration with advanced risk management.',
    icon: 'bot',
    features: [
      'Automated Trading Strategies',
      'Real-time Market Analysis',
      'Solana Blockchain Integration',
      'Secure Wallet Connection',
      'Portfolio Tracking',
      'Risk Management Tools',
      'Telegram Interface',
      'Custom Trading Algorithms'
    ],
    priceRange: 'Contact for Quote',
    deliveryTime: 'Contact for Timeline',
    category: 'development'
  },
  {
    id: 'service-3',
    title: 'Custom Development Solutions',
    description: 'Tailored software solutions for your unique business requirements and challenges.',
    longDescription: 'I provide custom development services for unique business needs. Whether you need web applications, mobile apps, APIs, or specialized software solutions, I work closely with you to understand your requirements and deliver the perfect solution.',
    icon: 'code',
    features: [
      'Custom Web Applications',
      'API Development & Integration',
      'Database Design',
      'Third-party Integrations',
      'Performance Optimization',
      'Scalable Architecture',
      'Maintenance & Support',
      'Technical Consulting'
    ],
    priceRange: 'Contact for Quote',
    deliveryTime: 'Contact for Timeline',
    category: 'development'
  },
  {
    id: 'service-4',
    title: 'Content Management System',
    description: 'Custom CMS solutions with intuitive admin panels, content workflows, and multi-user management for seamless content operations.',
    longDescription: 'I develop comprehensive Content Management Systems tailored to your business needs. From simple blogs to complex enterprise content platforms, I create intuitive admin interfaces, robust content workflows, and scalable architectures that empower your team to manage content efficiently.',
    icon: 'settings',
    features: [
      'Custom Admin Dashboard',
      'Multi-user Role Management',
      'Content Workflow & Publishing',
      'Media Library Management',
      'SEO Optimization Tools',
      'API Integration Support',
      'Responsive Content Editor',
      'Version Control & Backup'
    ],
    priceRange: 'Contact for Quote',
    deliveryTime: 'Contact for Timeline',
    category: 'development'
  },
  {
    id: 'service-5',
    title: 'WhatsApp Order Bots (n8n + AI)',
    description: 'Automated WhatsApp assistants that capture and triage customer orders using n8n workflows and AI-powered understanding.',
    longDescription: 'I build conversational WhatsApp bots orchestrated with n8n and backed by AI so your customers can place and track orders instantly. From intent detection to inventory checks and payment hand-offs, each flow is tailored to your business rules and integrates with your existing stack.',
    icon: 'message-circle',
    features: [
      'WhatsApp Business API or Cloud API setup',
      'n8n workflow design & deployment',
      'GPT-powered intent detection and responses',
      'Order intake and validation automation',
      'CRM / ERP / spreadsheet integrations',
      'Fallback to human operator hand-off',
      'Multilingual conversation support',
      'Monitoring, logging, and analytics dashboards'
    ],
    priceRange: 'Contact for Quote',
    deliveryTime: 'Contact for Timeline',
    category: 'development'
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getServicesByCategory = (category: Service['category']): Service[] => {
  return services.filter(service => service.category === category);
};

export const getFeaturedServices = (): Service[] => {
  return services.slice(0, 4); // Return first 4 services as featured
};

export const serviceCategories = {
  development: 'Development',
  design: 'Design',
  consulting: 'Consulting'
} as const;
