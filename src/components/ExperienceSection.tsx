'use client'

import { motion } from 'framer-motion'

const experiences = [
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

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-[#0a0a1f] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Professional Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 relative hover:bg-white/15 transition-all"
            >
              <div className="grid md:grid-cols-[300px_1fr] gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-blue-400 font-medium mb-2">
                    {experience.company}
                  </p>
                  <p className="text-gray-300">
                    {experience.period}
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-300 mb-6">
                    {experience.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-blue-400 mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2 text-gray-300">
                          <span className="text-blue-400 mt-1">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-xl font-semibold text-blue-400 mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm hover:bg-blue-500/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 