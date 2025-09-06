export interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Proficient' | 'Intermediate';
  experience: string;
  projects?: string[];
  description?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Programming Languages',
    icon: 'code',
    skills: [
      { 
        name: 'JavaScript', 
        level: 'Expert', 
        experience: '6+ years',
        projects: ['E-commerce Platform', 'Real-time Chat App', 'Portfolio Website'],
        description: 'Full-stack development with modern ES6+ features'
      },
      { 
        name: 'TypeScript', 
        level: 'Advanced', 
        experience: '5+ years',
        projects: ['Enterprise Dashboard', 'API Gateway', 'Microservices'],
        description: 'Type-safe development for large-scale applications'
      },
      { 
        name: 'Golang', 
        level: 'Advanced', 
        experience: '4+ years',
        projects: ['Microservices API', 'Performance Optimization'],
        description: 'High-performance backend services and concurrent programming'
      },
      { 
        name: 'PHP', 
        level: 'Expert', 
        experience: '6+ years',
        projects: ['CMS Development', 'E-commerce Backend'],
        description: 'Server-side development with Laravel and CodeIgniter'
      },
      { 
        name: 'Java', 
        level: 'Proficient', 
        experience: '2+ years',
        projects: ['Enterprise Applications'],
        description: 'Object-oriented programming and enterprise solutions'
      }
    ]
  },
  {
    category: 'Frontend Development',
    icon: 'monitor',
    skills: [
      { 
        name: 'React', 
        level: 'Advanced', 
        experience: '5+ years',
        projects: ['SPA Dashboard', 'E-commerce Frontend', 'Admin Panel'],
        description: 'Component-based architecture with hooks and context'
      },
      { 
        name: 'Next.js', 
        level: 'Proficient', 
        experience: '3+ years',
        projects: ['SEO-optimized Websites', 'Full-stack Applications'],
        description: 'Server-side rendering and static site generation'
      },
      { 
        name: 'Svelte/SvelteKit', 
        level: 'Advanced', 
        experience: '1+ years',
        projects: ['Portfolio Website', 'Interactive Dashboard'],
        description: 'Modern reactive framework with excellent performance'
      },
      { 
        name: 'Redux', 
        level: 'Advanced', 
        experience: '5+ years',
        projects: ['Complex State Management', 'Multi-user Applications'],
        description: 'State management for complex React applications'
      },
      { 
        name: 'Tailwind CSS', 
        level: 'Advanced', 
        experience: '4+ years',
        projects: ['Responsive Designs', 'Component Libraries'],
        description: 'Utility-first CSS framework for rapid UI development'
      }
    ]
  },
  {
    category: 'Backend Development',
    icon: 'server',
    skills: [
      { 
        name: 'Node.js', 
        level: 'Advanced', 
        experience: '5+ years',
        projects: ['REST APIs', 'Real-time Applications', 'Microservices'],
        description: 'Server-side JavaScript with Express and Fastify'
      },
      { 
        name: 'Laravel', 
        level: 'Advanced', 
        experience: '5+ years',
        projects: ['Enterprise Web Apps', 'API Development', 'CMS'],
        description: 'Full-featured PHP framework with Eloquent ORM'
      },
      { 
        name: 'REST APIs', 
        level: 'Expert', 
        experience: '6+ years',
        projects: ['Mobile App APIs', 'Third-party Integrations'],
        description: 'RESTful service design and implementation'
      },
      { 
        name: 'Microservices', 
        level: 'Advanced', 
        experience: '2+ years',
        projects: ['Distributed Systems', 'Scalable Architecture'],
        description: 'Service-oriented architecture and containerization'
      },
      { 
        name: 'GraphQL', 
        level: 'Intermediate', 
        experience: '1+ years',
        projects: ['Flexible API Layer'],
        description: 'Query language for APIs with type safety'
      }
    ]
  },
  {
    category: 'Database & Storage',
    icon: 'database',
    skills: [
      { 
        name: 'MySQL', 
        level: 'Expert', 
        experience: '6+ years',
        projects: ['E-commerce Database', 'Analytics Platform', 'Enterprise Systems'],
        description: 'Complex queries, optimization, and database design'
      },
      { 
        name: 'PostgreSQL', 
        level: 'Expert', 
        experience: '6+ years',
        projects: ['Enterprise Applications', 'Data Analytics', 'High-performance Systems'],
        description: 'Advanced SQL features and performance tuning'
      },
      { 
        name: 'MongoDB', 
        level: 'Advanced', 
        experience: '4+ years',
        projects: ['Document-based Applications', 'Real-time Data', 'Microservices'],
        description: 'NoSQL database for flexible data structures'
      },
      { 
        name: 'Redis', 
        level: 'Advanced', 
        experience: '4+ years',
        projects: ['Caching Layer', 'Session Management', 'Real-time Applications'],
        description: 'In-memory data structure store for caching'
      }
    ]
  },
  {
    category: 'DevOps & Tools',
    icon: 'settings',
    skills: [
      { 
        name: 'Docker', 
        level: 'Advanced', 
        experience: '3+ years',
        projects: ['Containerized Applications', 'Development Environment'],
        description: 'Containerization and orchestration'
      },
      { 
        name: 'Git', 
        level: 'Expert', 
        experience: '6+ years',
        projects: ['All Projects', 'Team Collaboration', 'CI/CD Pipelines'],
        description: 'Version control, branching strategies, and collaboration'
      },
      { 
        name: 'AWS/GCP', 
        level: 'Proficient', 
        experience: '2+ years',
        projects: ['Cloud Deployments', 'Serverless Functions'],
        description: 'Cloud infrastructure and deployment'
      },
      { 
        name: 'Kubernetes', 
        level: 'Intermediate', 
        experience: '1+ years',
        projects: ['Container Orchestration'],
        description: 'Container orchestration and scaling'
      }
    ]
  }
];