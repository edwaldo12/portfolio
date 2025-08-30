export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Golang', level: 80 },
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'PHP', level: 85 },
      { name: 'Java', level: 60 },
      { name: 'CSS', level: 90 }
    ]
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'ReactJS', level: 90 },
      { name: 'Redux', level: 80 },
      { name: 'Bootstrap', level: 85 },
      { name: 'jQuery', level: 80 },
      { name: 'SCSS', level: 85 },
      { name: 'Svelte', level: 75 },
      { name: 'SolidJS', level: 70 }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'Laravel', level: 90 },
      { name: 'CodeIgniter', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'Microservices', level: 80 },
      { name: 'JWT', level: 85 },
      { name: 'AXIOS', level: 80 },
      { name: 'Gin', level: 75 },
      { name: 'Fiber', level: 75 }
    ]
  },
  {
    category: 'Database',
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'SQL Server', level: 80 },
      { name: 'Redis', level: 75 }
    ]
  },
  {
    category: 'Message Brokers & Communication',
    skills: [
      { name: 'RabbitMQ', level: 80 },
      { name: 'NATS', level: 75 },
      { name: 'Websocket', level: 80 },
      { name: 'Xendit', level: 75 },
      { name: 'Kafka', level: 80 }
    ]
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Docker', level: 80 },
      { name: 'Webpack', level: 75 },
      { name: 'GCP', level: 75 },
      { name: 'Atomic Architecture', level: 80 },
      { name: 'Datadog', level: 70 },
      { name: 'Grpc', level: 75 },
      { name: 'K8S', level: 70 },
      { name: 'Sonarqube', level: 75 }
    ]
  }
];