export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl: string;
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'desktop' | 'design';
  createdAt: string;
  featured: boolean;
}

export const projects: Project[] = [
  // {
  //   id: 'project-1',
  //   title: 'E-commerce Platform',
  //   description: 'Modern e-commerce solution with advanced features',
  //   longDescription: 'A comprehensive e-commerce platform built with modern web technologies, featuring user authentication, payment processing, inventory management, and responsive design.',
  //   technologies: ['Svelte', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Node.js'],
  //   imageUrl: '/images/projects/ecommerce.jpg',
  //   images: ['/images/projects/ecommerce-1.jpg', '/images/projects/ecommerce-2.jpg'],
  //   liveUrl: 'https://example-ecommerce.com',
  //   githubUrl: 'https://github.com/edwaldo/ecommerce-platform',
  //   category: 'web',
  //   createdAt: '2024-01-15',
  //   featured: true
  // },
  // {
  //   id: 'project-2',
  //   title: 'Task Management App',
  //   description: 'Collaborative task management with real-time updates',
  //   longDescription: 'A powerful task management application with real-time collaboration features, drag-and-drop functionality, and team productivity analytics.',
  //   technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
  //   imageUrl: '/images/projects/taskapp.jpg',
  //   images: ['/images/projects/taskapp-1.jpg', '/images/projects/taskapp-2.jpg'],
  //   liveUrl: 'https://example-taskapp.com',
  //   githubUrl: 'https://github.com/edwaldo/task-management',
  //   category: 'web',
  //   createdAt: '2023-11-20',
  //   featured: true
  // },
  // {
  //   id: 'project-3',
  //   title: 'Mobile Banking UI',
  //   description: 'Modern banking app interface design',
  //   longDescription: 'Complete UI/UX design for a mobile banking application, focusing on security, accessibility, and user-friendly financial management.',
  //   technologies: ['Figma', 'Adobe XD', 'Principle', 'InVision'],
  //   imageUrl: '/images/projects/banking.jpg',
  //   images: ['/images/projects/banking-1.jpg', '/images/projects/banking-2.jpg'],
  //   category: 'design',
  //   createdAt: '2023-09-10',
  //   featured: true
  // },
  // {
  //   id: 'project-4',
  //   title: 'Portfolio Website',
  //   description: 'Personal portfolio with modern animations',
  //   longDescription: 'A sleek portfolio website featuring smooth animations, dark theme, and responsive design to showcase development skills and projects.',
  //   technologies: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'GSAP'],
  //   imageUrl: '/images/projects/portfolio.jpg',
  //   liveUrl: 'https://edwaldo-portfolio.com',
  //   githubUrl: 'https://github.com/edwaldo/portfolio',
  //   category: 'web',
  //   createdAt: '2024-02-01',
  //   featured: false
  // },
  // {
  //   id: 'project-5',
  //   title: 'Weather Dashboard',
  //   description: 'Real-time weather monitoring dashboard',
  //   longDescription: 'Interactive weather dashboard with real-time data visualization, location-based forecasts, and customizable widgets.',
  //   technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Vuetify'],
  //   imageUrl: '/images/projects/weather.jpg',
  //   liveUrl: 'https://example-weather.com',
  //   githubUrl: 'https://github.com/edwaldo/weather-dashboard',
  //   category: 'web',
  //   createdAt: '2023-08-15',
  //   featured: false
  // },
  // {
  //   id: 'project-6',
  //   title: 'Restaurant Branding',
  //   description: 'Complete brand identity for restaurant chain',
  //   longDescription: 'Comprehensive branding project including logo design, menu layouts, packaging design, and digital marketing materials for a modern restaurant chain.',
  //   technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'After Effects'],
  //   imageUrl: '/images/projects/restaurant.jpg',
  //   category: 'design',
  //   createdAt: '2023-07-01',
  //   featured: false
  // }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getRecentProjects = (limit: number = 6): Project[] => {
  return projects
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
};

export const getProjectCategories = (): Project['category'][] => {
  const categories = [...new Set(projects.map(project => project.category))];
  return categories;
};