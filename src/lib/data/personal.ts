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
    id: 'exp-bfi',
    company: 'PT. BFI Finance Indonesia Tbk',
    position: 'Software Engineer',
    duration: 'May 2025 - Now',
    startDate: '2025',
    endDate: undefined,
    location: 'Jakarta, Indonesia',
    description: 'Built loan status tracking system (Reschedule history, Appointment scheduling, etc) integrated with Goto, Tokopedia, Shopee and more. Engineered an event-driven architecture for the loan re-scheduling flow, reducing latency from 5 seconds to under 0.5 seconds at P95. Also built an event-driven, distributed e-signature platform that digitized field-survey workflows and reduced loan-disbursement time from ~1 day to minutes.',
    technologies: ['Golang', 'Solid.JS', 'TypeScript', 'Git', 'Microservices', 'JWT', 'PostgreSQL', 'RabbitMQ', 'NATS', 'GCP', 'GWS', 'Redis', 'K8S', 'gRPC', 'Datadog', 'Temporal', 'ArangoDB'],
    achievements: [
      'Rebuilt the loan rescheduling platform on an event-driven architecture, cutting partner-facing latency from 5 seconds to under 0.5 seconds (P95) across Goto, Tokopedia, and Shopee integrations',
      'Hardened messaging flows with RabbitMQ dead-letter queues, Redis idempotency guards, and Slack/GWS alerting to eliminate duplicate processing and shrink incident response time',
      'Delivered a distributed e-signature platform that digitized field-survey workflows and compressed loan disbursement from ~1 day to minutes with a complete compliance audit trail',
      'Kept core services above 95% SonarQube-verified unit coverage while enforcing SOLID/Clean Architecture patterns with strict layer separation'
    ],
    current: true
  },
  {
    id: 'exp-amani',
    company: 'PT. Amani Group',
    position: 'Software Engineer Team Lead',
    duration: 'Apr 2024 - May 2025',
    startDate: '2024',
    endDate: '2025',
    location: 'Jakarta, Indonesia',
    description: 'Developed and maintained key features, including Master-Material, Real Estate Management, Customer Relationship Management, and modules for Contractors and Home-Buyers. Led continuous upgrades to enhance overall functionality and user experience of the application. Collaborated in daily Agile SDLC meetings, implementing design patterns tailored to specific use cases.',
    technologies: ['Golang', 'Next.js', 'Nest.js', 'Express', 'React.js', 'TypeScript', 'Git', 'Microservices', 'JWT', 'AXIOS', 'Redux', 'PostgreSQL', 'RabbitMQ', 'GCP', 'Redis', 'Atomic Architecture', 'Websocket', 'Xendit'],
    achievements: [
      'Orchestrated the migration and rollout of a unified CRM and real-estate suite without disrupting day-to-day operations',
      'Introduced service-to-service messaging and Atomic Design standards that boosted Next.js/React performance and UX consistency',
      'Mentored a cross-functional squad and partnered with C-level stakeholders to shape roadmaps, code reviews, and delivery rituals'
    ],
    current: false
  },
  {
    id: 'exp-cimb',
    company: 'PT. CIMB Niaga',
    position: 'Software Engineer',
    duration: 'Aug 2023 - Apr 2024',
    startDate: '2023',
    endDate: '2024',
    location: 'Jakarta, Indonesia',
    description: 'Developed and maintained key features such as budget management and task delegation in IProC, based on Functional Specification Documents (FSD) and user requests, ensuring efficient and user-friendly solutions. Integrated third-party APIs to consume data from pengadaan.com. Refactored deprecated code, updated libraries, and upgraded the framework.',
    technologies: ['PHP', 'CodeIgniter 4', 'CSS', 'Bootstrap', 'ReactJS', 'TypeScript', 'MySQL', 'SQL Server', 'Express JS', 'Git', 'jQuery', 'Redux', 'Microservices', 'NATS'],
    achievements: [
      'Automated IProC budget and delegation workflows, integrating pengadaan.com data to deliver Phase 2b on schedule',
      'Optimized high-volume SQL workloads and modernized legacy components, stabilizing procurement reporting for business stakeholders',
      'Coordinated Agile releases with a lean team while upgrading a multi-vendor stack without downtime'
    ],
    current: false
  },
  {
    id: 'exp-intellix',
    company: 'PT. Intellix Global Crossing',
    position: 'Software Engineer',
    duration: 'May 2022 - Jun 2023',
    startDate: '2022',
    endDate: '2023',
    location: 'Jakarta, Indonesia',
    description: 'Engineered and optimized robust features, significantly elevating the performance and security of platforms for clients including BRI Danareksa Sekuritas, Bank Mega Syariah, and Bank Sampoerna. Refined SQL tuning strategies for databases handling 5M+ records, spearheaded penetration testing, and migrated legacy tools while modernizing PHP/Node.js stacks.',
    technologies: ['NodeJS', 'Express', 'ReactJS', 'PHP', 'CodeIgniter 3', 'CodeIgniter 4', 'MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'JavaScript', 'jQuery', 'Git', 'HTML', 'CSS', 'SCSS', 'Webpack'],
    achievements: [
      'Elevated capital-market platforms for BRI Danareksa, Bank Mega Syariah, and Bank Sampoerna by tuning 5M+ row databases and modernizing Node/PHP services',
      'Led penetration-hardening initiatives and cross-team delivery to keep concurrent SCRUM projects on track',
      'Integrated Jatis WhatsApp Blast and LDAP services into the Ecentrix Application, expanding contact-center automation and reliability'
    ],
    current: false
  },
  {
    id: 'exp-freelance',
    company: 'Self Employed',
    position: 'Software Engineer Freelancer',
    duration: '2019 - 2022',
    startDate: '2019',
    endDate: '2022',
    location: 'Palembang, Indonesia',
    description: 'Delivered over 10 custom web applications tailored to unique client needs across multiple industries. Managed ongoing upgrades to enhance functionality and user experience, and provided custom training to improve user proficiency.',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Express JS', 'PHP', 'Laravel', 'MySQL', 'ReactJS', 'Git'],
    achievements: [
      'Shipped 10+ bespoke web applications end-to-end, from requirements gathering through launch and training',
      'Drove ongoing upgrades that improved user engagement and feature reliability across long-term client engagements',
      'Provided hands-on user training that lifted client proficiency and adoption of the delivered tooling'
    ],
    current: false
  },
  {
    id: 'exp-sinar-sanata',
    company: 'PT Sinar-Sanata Electronic Industry',
    position: 'Software Engineer (Internship)',
    duration: 'Jan 2020 - Aug 2020',
    startDate: '2020',
    endDate: '2020',
    location: 'Palembang, Indonesia',
    description: 'Developed a user-friendly online store app for product display and an admin tool for stock tracking. Designed system architecture and database structures, collaborated closely with the team on execution, and conducted user training for adoption.',
    technologies: ['PHP', 'Laravel', 'CSS', 'Bootstrap', 'MySQL', 'Git'],
    achievements: [
      'Built an online storefront and accompanying admin stock-tracking tool that streamlined daily operations',
      'Designed the system architecture and database schema underpinning the storefront and admin modules',
      'Ran user training sessions that drove smooth adoption of the new application'
    ],
    current: false
  },
  {
    id: 'exp-smart-integrated',
    company: 'Smart Integrated System',
    position: 'Software Engineer (Internship)',
    duration: '2019 - 2020',
    startDate: '2019',
    endDate: '2020',
    location: 'Palembang, Indonesia',
    description: 'Developed and implemented software solutions based on client requirements. Responsible for building REST APIs powering Android mobile applications, and delivered hands-on technical training to end users.',
    technologies: ['PHP', 'CodeIgniter', 'Laravel', 'ReactJS', 'MySQL', 'Git'],
    achievements: [
      'Built client-driven software solutions that mapped directly to documented requirements',
      'Designed and shipped REST APIs powering companion Android mobile applications',
      'Delivered hands-on technical training to onboard end users onto the new tooling'
    ],
    current: false
  },
  {
    id: 'exp-cyborg',
    company: 'Cyborg IT Center',
    position: 'Software Engineer (Freelance)',
    duration: '2019 - 2020',
    startDate: '2019',
    endDate: '2020',
    location: 'Palembang, Indonesia',
    description: 'Developed and implemented a software solution for an athlete client to track scoring data. Responsible for building REST APIs powering an Android mobile app, and provided technical training to end users.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'CodeIgniter', 'MySQL'],
    achievements: [
      'Delivered an athlete score-tracking platform tailored to client workflows',
      'Built REST APIs that powered the companion Android mobile application',
      'Provided technical training to end users to ensure successful rollout'
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
