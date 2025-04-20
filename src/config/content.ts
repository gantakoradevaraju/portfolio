export const contactInfo = {
  name: process.env.NEXT_PUBLIC_NAME || "DEVA RAJU GANTAKORA",
  phone: process.env.NEXT_PUBLIC_PHONE || "+1 330-459-2734",
  email: process.env.NEXT_PUBLIC_EMAIL || "gantakoradevaraju@gmail.com",
  title: "DevOps Engineer Lead & Cloud Infrastructure Architect",
  summary: "Architecting scalable cloud solutions with a focus on automation, security, and operational excellence"
}
export const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023"
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Linux Foundation",
    date: "2022"
  },
  {
    name: "HashiCorp Certified Terraform Associate",
    issuer: "HashiCorp",
    date: "2022"
  }
]

export const educationData = [
  {
    degree: "Master of Science in DevOps",
    school: "Kent State University - OH, USA",
    period: "2020 - 2022",
    description: "Specialized in Cloud Infrastructure and CI/CD pipelines",
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "K L University - AP, India",
    period: "2016 - 2020",
    description: "Focus on software development and system architecture",
  }
]
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
    company: "Southlake Financial Holdings - TX, USA",
    period: "May 2024 - Present",
    // description: "Leading cloud infrastructure and DevOps initiatives for enterprise clients, managing a team of DevOps engineers, and implementing cutting-edge automation solutions.",
    achievements: [
      "Led AKS/EKS clusters for scalable microservices and AI workloads.",
      "Built GitOps pipelines with Argo CD, RBAC, and audit compliance.",
      "Created FastAPI APIs for model serving with CI/CD automation.",
      "Reduced cloud spend by 30% through cost-aware scaling and cleanup.",
      "Integrated hybrid networking with Azure gateways and firewalls.",
      "Managed Intune, Defender, and JAMF (30+ iPads) for endpoint security.",
      "Improved MTTR by 35% using Prometheus, Grafana, and ELK."
      // "Defined GitOps standards and managed Argo CD rollouts, RBAC, and audit-ready pipelines.",
      // "Delivered KPI observability with Prometheus, Grafana, and ELK, reducing incident MTTR by 35%.",
      // "Delivered model-serving APIs using FastAPI, version-controlled via GitHub Actions and auto-deployed across environments.",
      // "Automated cloud provisioning with reusable Terraform modules and enforced compliance with OPA and Sentinel.",
      // "Led cost optimization initiatives, reducing cloud spend by 30% through resource scaling and idle instance termination.",
      // "Implemented multi-region disaster recovery strategy with AWS and Azure cross-region replication.",
      // "Led AKS and EKS cluster strategy for scalable microservices and AI inferencing workloads, with GPU-aware scheduling and GitOps using Argo CD.",
      // "Set up namespace-level isolation, network policies, and RBAC for secure multi-team microservice management in Kubernetes clusters.",
      // "Established DevSecOps practices reducing security vulnerabilities by 60%",
      // "Designed hybrid cloud networking integrating Azure virtual gateways, VPNs, and on-prem firewalls (Fortinet), ensuring secure, low-latency communication across platforms.",
      // "Owned endpoint security infrastructure—deploying and monitoring Intune, JAMF Pro for iPads (30+ fleet), and Microsoft Defender."
    ],
    // technologies: ["AWS", "Azure", "Kubernetes", "Terraform", "Jenkins", "Docker", "GitLab"]
  },
  {
    title: "Senior DevOps Engineer",
    company: "Intune Systems - TX, USA",
    period: "Aug 2023 - May 2024",
    // description: "Leading cloud infrastructure and DevOps initiatives for enterprise clients, managing a team of DevOps engineers, and implementing cutting-edge automation solutions.",
    achievements: [
      "Managed Jenkins master-agent setup for distributed builds.",
      "Standardized CI jobs using shared libraries and Job DSL.",
      "Deployed Cognito user pools with JWT for secure auth.",
      "Built CI/CD pipelines for AKS/EKS using Helm and GitOps.",
      "Improved API security with FastAPI token-based authentication."
      // "Deployed and managed Jenkins master-agent architecture, enabling distributed builds, parallel test execution, and environment isolation for multi-project pipelines.",
      // "Implemented job templating using Job DSL and shared libraries, standardizing pipeline patterns across teams and enforcing CI governance.",
      // "Integrated AWS Cognito User Pools for secure, scalable user authentication and authorization in internal and external applications.",
      // "Implemented secure token-based authentication (JWT) across FastAPI endpoints and React/Vite frontend, improving API security posture.",
      // "Deployed and managed containerized microservices on AKS/EKS clusters, leveraging Helm charts, Kubernetes manifests, and GitOps workflows for consistent and secure rollout.",
      // "Designed and deployed microservices architecture",
      // "Established DevSecOps practices reducing security vulnerabilities by 60%"
    ],
    // technologies: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Docker", "GitLab"]
  },
  {
    title: "Research & Development Assistant(Masters in Computer Science)",
    company: "Kent State University – OH, USA",
    period: "Aug 2022 - Dec 2023",
    // description: "Leading cloud infrastructure and DevOps initiatives for enterprise clients, managing a team of DevOps engineers, and implementing cutting-edge automation solutions.",
    achievements: [
      "Reduced deployment time by 70% with optimized CI/CD pipelines.",
      "Deployed Kubernetes clusters on AWS and Azure for lab environments.",
      "Built microservices architecture for academic workloads.",
      // "Established DevSecOps practices and secure coding standards."
    ],
    // technologies: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Docker", "GitLab"]
  },
  {
    title: "Senior DevOps Engineer",
    company: "Innova Solutions",
    period: "Dec 2021 - Aug 2022",
    // description: "Architected and maintained cloud infrastructure, implemented automation solutions, and established DevOps best practices.",
    achievements: [
      "Implemented SCP and Control Tower for multi-account governance.",
      "Automated infra with Terraform; reduced errors by 40%.",
      "Migrated legacy apps to AKS/EKS-based microservices.",
      "Cut infra costs by 40% with optimized resource usage."
      // "Developed policy-driven IAM and SCP configurations to enforce compliance across environments.",
      // "Implemented SCP policies and Control Tower governance across AWS multi-account strategy",
      // "Automated infrastructure with Terraform, introduced reusable modules and reduced manual error rate by 40%.",
      // "Led the migration of legacy monolithic applications to containerized microservices, redesigning architecture for scalability, modularity, and cloud-native deployment on AKS/EKS clusters.",
      // "Led cloud cost optimization initiatives saving 40% on infrastructure costs"
    ],
    // technologies: ["Azure", "Docker", "Ansible", "GitHub Actions", "ELK Stack"]
  },
  {
    title: "DevOps Engineer",
    company: "Innova Solutions",
    period: "Jul 2019 - Dec 2021",
    // description: "Managed cloud infrastructure and implemented CI/CD pipelines for various projects.",
    achievements: [
      "Built CI/CD pipelines for Lambda and Fargate APIs.",
      "Centralized monitoring using ELK and CloudWatch.",
      "Created Jenkins 'super job' to manage 50+ microservices.",
      "Reduced pipeline overhead by 70% with job automation."
      // "Designed scalable Lambda/Fargate-based APIs with full CI/CD pipelines and secure IAM configurations.",
      // "Built centralized monitoring for API, DB, and backend layers using ELK and CloudWatch integration.",
      // "Implemented monitoring and alerting systems using ELK stack and CloudWatch integration.",
      // "Reduced CI/CD maintenance effort by over 70% by replacing dozens of individual jobs with a shared library-based Jenkins pipeline, dynamically handling build, test, and deploy stages per microservice."
    ],
    // technologies: ["AWS", "Jenkins", "Terraform", "Docker", "Prometheus"]
  }
]

export const aboutContent = {
  title: "About Me",
  subtitle: "DevOps Engineer Lead & Cloud Infrastructure Architect",
  description: [
    "DevOps Engineering Leader with 6+ years of experience in AWS, Azure, and hybrid infrastructure.",
    "Skilled in Kubernetes (AKS/EKS), CI/CD, Terraform, Argo CD, and cloud automation.",
    "Led secure, scalable cloud solutions with a focus on AI/ML readiness and KPI-driven delivery.",
    "Strong in cost optimization, team mentoring, and building reliable DevSecOps practices."
    // "Dynamic DevOps Engineering Leader with 6+ years of experience architecting, automating, and optimizing enterprise-scale infrastructure across Azure, AWS, and on-prem environments.",
    // "Expert in Kubernetes (AKS/EKS), CI/CD pipelines, GitOps (Argo CD), Terraform automation, endpoint security, and observability at scale.",
    // "Proven ability to lead DevOps and IT operations across cloud and hybrid environments while enabling AI/ML platform readiness and improving KPIs.",
    // "Strong in cost optimization, team mentoring, and implementing secure, compliant infrastructure with measurable impact."
    // "With over 8 years of experience in DevOps and cloud infrastructure, I specialize in designing and implementing scalable, secure, and efficient solutions for enterprise applications.",
    // "My expertise spans across cloud platforms (AWS, Azure), containerization (Docker, Kubernetes), and automation tools, enabling me to architect robust CI/CD pipelines and maintain high-performance infrastructure.",
    // "I'm passionate about implementing DevOps best practices, optimizing deployment processes, and ensuring system reliability through monitoring and automation."
  ]
}

export const experienceContent = {
  title: "Professional Experience"
}

export const toolsContent = {
  categories: ['All', 'Cloud', 'DevOps', 'Languages', 'Monitoring', 'Databases', 'Frontend'],
  tools: [
    // Cloud
    {
      name: 'AWS',
      icon: '/icons/aws.svg',
      category: 'Cloud',
    },
    {
      name: 'Azure',
      icon: '/icons/azure.svg',
      category: 'Cloud',
    },
    {
      name: 'GCP',
      icon: '/icons/gcp.svg',
      category: 'Cloud',
    },
    // DevOps
    {
      name: 'Docker',
      icon: '/icons/docker.svg',
      category: 'DevOps',
    },
    {
      name: 'Kubernetes',
      icon: '/icons/kubernetes.svg',
      category: 'DevOps',
    },
    {
      name: 'Terraform',
      icon: '/icons/terraform.svg',
      category: 'DevOps',
    },
    {
      name: 'Jenkins',
      icon: '/icons/jenkins.svg',
      category: 'DevOps',
    },
    {
      name: 'Helm',
      icon: '/icons/helm.svg',
      category: 'DevOps',
    },
    {
      name: 'Azure DevOps',
      icon: '/icons/azuredevops.svg',
      category: 'DevOps',
    },
    {
      name: 'Argo CD',
      icon: '/icons/argocd.svg',
      category: 'DevOps',
    },
    {
      name: 'Flux',
      icon: '/icons/flux.svg',
      category: 'DevOps',
    },
    {
      name: 'Ansible',
      icon: '/icons/ansible.svg',
      category: 'DevOps',
    },
    // Languages
    {
      name: 'Python',
      icon: '/icons/python.svg',
      category: 'Languages',
    },
    {
      name: 'Java',
      icon: '/icons/java.svg',
      category: 'Languages',
    },
    // Monitoring
    {
      name: 'Prometheus',
      icon: '/icons/prometheus.svg',
      category: 'Monitoring',
    },
    {
      name: 'Grafana',
      icon: '/icons/grafana.svg',
      category: 'Monitoring',
    },
    {
      name: 'ELK Stack',
      icon: '/icons/elk.svg',
      category: 'Monitoring',
    },
    // Databases
    {
      name: 'PostgreSQL',
      icon: '/icons/postgres.svg',
      category: 'Databases',
    },
    {
      name: 'SQL Server',
      icon: '/icons/sqlserver.svg',
      category: 'Databases',
    },
    // Frontend
    {
      name: 'React',
      icon: '/icons/react.svg',
      category: 'Frontend',
    },
  ],
} 