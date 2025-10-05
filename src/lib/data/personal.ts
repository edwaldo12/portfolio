export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  longBio: string;
  location: string;
  email: string;
  phone?: string;
  avatar: string;
  resume?: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    dribbble?: string;
    behance?: string;
    instagram?: string;
  };
  stats: {
    experience: string;
    projects: string;
    clients: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: 'Edwaldo Utama',
  title: 'Fullstack Engineer',
  subtitle: 'Building End-to-End Digital Solutions',
  bio: 'Experienced fullstack engineer with 6+ years of expertise in modern technologies and scalable application development.',
  longBio: 'I am an experienced fullstack engineer with over 6 years of experience building comprehensive digital solutions. I specialize in creating modern, scalable web applications using cutting-edge technologies across the entire stack. With 40+ projects completed and 20+ satisfied clients, I have proven expertise in delivering high-quality solutions that meet business objectives. I believe in clean code, robust architecture, and continuous learning to stay ahead in the ever-evolving world of web development.',
  location: 'Jakarta, Indonesia',
  email: 'edwaldo.utama@gmail.com',
  phone: '+62 821-7614-4111',
  avatar: '/images/assets/avatar.jpeg',
  resume: '/pdf/Edwaldo_Utama.pdf',
  social: {
    github: 'https://github.com/edwaldo12',
    linkedin: 'https://www.linkedin.com/in/edwaldo-utama/',
    twitter: 'https://twitter.com/edwaldoutama',
    dribbble: 'https://dribbble.com/edwaldoutama',
    behance: 'https://behance.net/edwaldoutama',
    instagram: 'https://instagram.com/edwaldoutama'
  },
  stats: {
    experience: '6+ Years',
    projects: '40+ Projects',
    clients: '20+ Clients'
  }
};

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate?: string;
  location: string;
  description: string;
  technologies: string[];
  achievements?: string[];
  current: boolean;
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'PT. BFI Finance Indonesia Tbk',
    position: 'Software Engineer',
    duration: 'May 2025 - Now',
    startDate: '2025',
    endDate: undefined,
    location: 'Jakarta, Indonesia',
    description: 'Built loan status tracking system (Reschedule history, Appointment scheduling, etc) integrated with Goto, Tokopedia, Shopee and more. Engineered an event-driven architecture for the loan re-scheduling flow, focusing on status tracking directory and validation. This resulted in reducing latency from 5 seconds to under 0.5 seconds (measured at P95), while also enhancing readability and maintainability.',
    technologies: ['Golang', 'Solid.JS', 'TypeScript', 'Git', 'Microservices', 'JWT', 'PostgreSQL', 'Message Broker (RabbitMQ)', 'NATS', 'GCP', 'GWS', 'Grpc', 'Datadog'],
    achievements: [
      'Rebuilt the loan rescheduling platform on an event-driven architecture, cutting partner-facing latency from 5 seconds to under 0.5 seconds across Goto, Tokopedia, and Shopee integrations',
      'Hardened messaging flows with RabbitMQ dead-letter queues, Redis idempotency guards, and Slack/GWS alerting to eliminate duplicate processing and shrink incident response time',
      'Kept core services above 95% SonarQube-verified unit coverage while enforcing Clean Architecture patterns to speed the rollout of new capabilities'
    ],
    current: true
  },
  {
    id: 'exp-2',
    company: 'PT. Amani Group',
    position: 'Software Engineer Team Lead',
    duration: 'Apr 2024 - May 2025',
    startDate: '2024',
    endDate: '2025',
    location: 'Jakarta, Indonesia',
    description: 'Developed and maintained key features, including Master-Material, Real Estate Management, Customer Relationship Management, and modules for Contractors and Home-Buyers. Led continuous upgrades to enhance overall functionality and user experience of the application. Collaborated in daily Agile SDLC meetings, implementing design patterns tailored to specific use cases.',
    technologies: ['Golang', 'Next.js', 'Nest.js', 'Express', 'React.js', 'TypeScript', 'Git', 'Microservices', 'JWT', 'AXIOS', 'Redux', 'PostgreSQL', 'Message Broker (RabbitMQ)', 'GCP', 'Redis', 'Atomic Architecture', 'Websocket', 'Xendit'],
    achievements: [
      'Orchestrated the migration and rollout of a unified CRM and real-estate suite without disrupting day-to-day operations',
      'Introduced service-to-service messaging and Atomic Design standards that boosted Next.js/React performance and UX consistency',
      'Mentored a cross-functional squad and partnered with C-level stakeholders to shape roadmaps, code reviews, and delivery rituals'
    ],
    current: false
  },
  {
    id: 'exp-4',
    company: 'PT. CIMB Niaga',
    position: 'Software Engineer',
    duration: 'Aug 2023 - Apr 2024',
    startDate: '2023',
    endDate: '2024',
    location: 'Jakarta, Indonesia',
    description: 'Developed and maintained key features such as budget management and task delegation in IProC, based on Functional Specification Documents (FSD) and user requests, ensuring efficient and user-friendly solutions. Integrated third-party APIs to consume data from pengadaan.com. Refactored deprecated code, updated libraries, and upgraded the framework.',
    technologies: ['PHP', 'CodeIgniter(4)', 'CSS', 'Bootstrap', 'ReactJS', 'TypeScript', 'MySQL', 'SQL Server', 'Express JS', 'Git', 'jQuery', 'Git', 'Microservices', 'Message Broker (NATS)'],
    achievements: [
      'Automated IProC budget and delegation workflows, integrating pengadaan.com data to deliver Phase 2b on schedule',
      'Optimized high-volume SQL workloads and modernized legacy components, stabilizing procurement reporting for business stakeholders',
      'Coordinated Agile releases with a lean team while upgrading a multi-vendor stack without downtime'
    ],
    current: false
  },
  {
    id: 'exp-3',
    company: 'PT. Intellix Global Crossing',
    position: 'Software Engineer',
    duration: 'May 2022 - June 2023',
    startDate: '2022',
    endDate: '2023',
    location: 'Jakarta, Indonesia',
    description: 'Engineered and optimized robust features, significantly elevating the performance and security of a structured service-oriented database design and real-time socket communication. Employed Atomic Design principles and implemented key performance optimizations to enhance the efficiency and scalability of Next.js and React applications.',
    technologies: ['Golang', 'Next.js', 'Nest.js', 'Express', 'React.js', 'TypeScript', 'Git', 'Microservices', 'JWT', 'AXIOS', 'Redux', 'PostgreSQL', 'Message Broker (RabbitMQ)', 'GCP', 'Redis', 'Atomic Architecture', 'Websocket', 'Xendit'],
    achievements: [
      'Elevated capital-market platforms for BRI Danareksa, Bank Mega Syariah, and Bank Sampoerna by tuning 5M+ row databases and modernizing Node/PHP services',
      'Led penetration-hardening initiatives and cross-team delivery to keep concurrent SCRUM projects on track',
      'Integrated Jatis WhatsApp Blast and LDAP services, expanding contact-center automation and reliability'
    ],
    current: false
  },
  {
    id: 'exp-1a',
    company: 'PT. Sinar Sanata',
    position: 'Fullstack Developer',
    duration: 'Jan 2021 - Apr 2022',
    startDate: '2021',
    endDate: '2022',
    location: 'Jakarta, Indonesia',
    description: 'Developed and maintained web applications for automotive industry solutions. Built comprehensive inventory management systems and customer relationship management tools. Implemented responsive web interfaces and optimized database performance for high-volume transactions.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'jQuery', 'Bootstrap', 'Git', 'REST APIs', 'HTML', 'CSS'],
    achievements: [
      'Delivered an automotive inventory and CRM platform that improved dealer response times and data accuracy',
      'Implemented automated reporting pipelines that removed manual reconciliation for operations teams',
      'Crafted responsive web interfaces and database optimizations that kept high-volume transactions fast'
    ],
    current: false
  },
  {
    id: 'exp-1b',
    company: 'Smart Integrated System',
    position: 'Software Developer',
    duration: 'Jun 2020 - Dec 2020',
    startDate: '2020',
    endDate: '2020',
    location: 'Jakarta, Indonesia',
    description: 'Worked on enterprise software solutions and system integrations. Developed custom applications for business process automation and data management. Collaborated with cross-functional teams to deliver integrated solutions for various clients.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'React', 'Node.js', 'Git', 'REST APIs', 'Docker'],
    achievements: [
      'Delivered automated back-office workflows with custom Laravel and CodeIgniter services, reducing manual processing time by over 60%',
      'Integrated partner systems through REST APIs that powered the organisation’s Android applications',
      'Led stakeholder workshops and hands-on training to drive adoption of the new tooling'
    ],
    current: false
  },
  {
    id: 'exp-1c',
    company: 'Cyborg IT Center',
    position: 'Junior Developer',
    duration: 'Sep 2019 - May 2020',
    startDate: '2019',
    endDate: '2020',
    location: 'Palembang, Indonesia',
    description: 'Started career as junior developer working on various web development projects. Gained experience in full-stack development, database design, and client communication. Contributed to multiple client projects ranging from corporate websites to small business applications.',
    technologies: ['PHP', 'CodeIgniter', 'MySQL', 'JavaScript', 'jQuery', 'Bootstrap', 'HTML', 'CSS', 'Git'],
    achievements: [
      'Delivered a secure athlete score-tracking platform with REST APIs powering companion Android apps',
      'Managed end-to-end delivery for 15+ client web projects, from requirements through launch and training',
      'Led knowledge-sharing sessions that upskilled the team on modern web development practices'
    ],
    current: false
  }
];

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  startDate: string;
  endDate: string;
  location: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: 'edu-1',
    institution: 'UNIVERSITAS MULTI DATA PALEMBANG',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    duration: '2018 - 2022',
    startDate: '2018',
    endDate: '2022',
    location: 'Palembang, Indonesia',
    description: 'GPA: 3.84/4.00. Final Project: Classification Mediterranean Fishes Using Convolutional Neural Network. Organizations: Web Programming Community, Associate Of Informatics Engineering, Buddhist Organization.'
  }
];

export const getCurrentExperience = (): Experience | undefined => {
  return experiences.find(exp => exp.current);
};

export const getExperienceById = (id: string): Experience | undefined => {
  return experiences.find(exp => exp.id === id);
};

export const getEducationById = (id: string): Education | undefined => {
  return education.find(edu => edu.id === id);
};
