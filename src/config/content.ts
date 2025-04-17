export const contactInfo = {
  name: process.env.NEXT_PUBLIC_NAME || "DEVA RAJU GANTAKORA",
  phone: process.env.NEXT_PUBLIC_PHONE || "+1 330-459-2734",
  email: process.env.NEXT_PUBLIC_EMAIL || "gantakoradevaraju@gmail.com",
  title: "DevOps Engineer & Cloud Infrastructure Architect",
  summary: "Architecting scalable cloud solutions with a focus on automation, security, and operational excellence"
}

export const skills = [
  {
    category: "Cloud & DevOps",
    items: [
      "AWS Cloud Architecture",
      "Azure Cloud Solutions",
      "Kubernetes Orchestration",
      "Docker Containerization",
      "CI/CD Pipeline Design",
      "Infrastructure as Code"
    ]
  },
  {
    category: "Infrastructure",
    items: [
      "System Architecture",
      "High Availability Design",
      "Network Security",
      "Performance Optimization",
      "Disaster Recovery",
      "Load Balancing"
    ]
  },
  {
    category: "Leadership",
    items: [
      "Team Management",
      "Technical Leadership",
      "Project Planning",
      "Agile Methodologies",
      "Strategic Planning",
      "Stakeholder Communication"
    ]
  }
]

export const experiences = [
  {
    title: "Lead DevOps Engineer",
    company: "Enterprise Solutions Inc.",
    period: "2021 - Present",
    description: "Leading cloud infrastructure and DevOps initiatives for enterprise clients, managing a team of DevOps engineers, and implementing cutting-edge automation solutions.",
    achievements: [
      "Reduced deployment time by 70% through CI/CD pipeline optimization",
      "Implemented Kubernetes clusters across multiple cloud providers",
      "Designed and deployed microservices architecture",
      "Established DevSecOps practices reducing security vulnerabilities by 60%"
    ],
    technologies: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Docker", "GitLab"]
  },
  {
    title: "Senior DevOps Engineer",
    company: "Tech Innovations Ltd.",
    period: "2019 - 2021",
    description: "Architected and maintained cloud infrastructure, implemented automation solutions, and established DevOps best practices.",
    achievements: [
      "Migrated legacy applications to containerized microservices",
      "Automated infrastructure provisioning reducing setup time by 85%",
      "Implemented monitoring and alerting systems",
      "Led cloud cost optimization initiatives saving 40% on infrastructure costs"
    ],
    technologies: ["Azure", "Docker", "Ansible", "GitHub Actions", "ELK Stack"]
  },
  {
    title: "DevOps Engineer",
    company: "Cloud Systems Corp.",
    period: "2017 - 2019",
    description: "Managed cloud infrastructure and implemented CI/CD pipelines for various projects.",
    achievements: [
      "Developed automated deployment pipelines",
      "Implemented infrastructure as code practices",
      "Set up monitoring and logging solutions",
      "Reduced system downtime by 75%"
    ],
    technologies: ["AWS", "Jenkins", "Terraform", "Docker", "Prometheus"]
  }
]

export const aboutContent = {
  title: "About Me",
  subtitle: "DevOps Engineer & Infrastructure Architect",
  description: [
    "With over 8 years of experience in DevOps and cloud infrastructure, I specialize in designing and implementing scalable, secure, and efficient solutions for enterprise applications.",
    "My expertise spans across cloud platforms (AWS, Azure), containerization (Docker, Kubernetes), and automation tools, enabling me to architect robust CI/CD pipelines and maintain high-performance infrastructure.",
    "I'm passionate about implementing DevOps best practices, optimizing deployment processes, and ensuring system reliability through monitoring and automation."
  ]
}

export const experienceContent = {
  title: "Professional Experience"
} 