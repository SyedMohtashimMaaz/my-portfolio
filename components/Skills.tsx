'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'C#', 'Java', 'SQL', 'HTML', 'CSS'],
    },
    {
      title: 'Machine Learning & AI',
      skills: ['TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'NumPy', 'Pandas', 'ONNX', 'BERT', 'DeBERTa'],
    },
    {
      title: 'Deep Learning',
      skills: ['CNN', 'U-Net', 'GANs', 'Semantic Segmentation', 'Computer Vision', 'NLP', 'Transfer Learning'],
    },
    {
      title: 'Web Development',
      skills: ['React.js', 'React Native', 'Next.js', 'Node.js', 'Express.js', 'REST APIs', 'FastAPI', 'Flask'],
    },
    {
      title: 'Cloud & Databases',
      skills: ['AWS', 'MongoDB', 'PostgreSQL', 'SQL Server', 'Firebase'],
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git', 'GitHub', 'Docker', 'CI/CD', 'TravisCI', 'Postman', 'Maven', 'TensorFlow Serving'],
    },
    {
      title: 'Networking & Security',
      skills: ['Cisco Networking', 'IPv4/IPv6', 'Network Security', 'CyberOps', 'VLANs'],
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

