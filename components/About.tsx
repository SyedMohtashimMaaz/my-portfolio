'use client'

import { motion } from 'framer-motion'
import { Code, GraduationCap, Briefcase } from 'lucide-react'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800"
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed"
          >
            <p className="mb-4">
              I&apos;m a Software Developer and Machine Learning Engineer currently pursuing my Masters 
              in Computer Science at Texas A&M University Corpus Christi (GPA: 3.6), graduating 
              in May 2025. With a strong foundation in data structures, algorithms, and cloud-based 
              deployment, I specialize in developing AI-powered applications, deep learning models, 
              and scalable full-stack systems.
            </p>
            <p className="mb-4">
              My professional journey includes a Software Developer & ML Research Internship at 
              Defense Research and Development Laboratory (DRDL), where I delivered sub-millisecond 
              interrupt precision for MIL-STD-1553 communication avionics and achieved 86% accuracy 
              with 0.66 Jaccard Index on U-Net segmentation models for aerial imagery. I&apos;ve also 
              worked as a Networking Intern at Cisco Networking Academy, configuring enterprise networks 
              and improving uptime to 99.8%.
            </p>
            <p>
              I&apos;m passionate about transforming research into practical solutions through applied AI, 
              deep learning, and system optimization. My expertise spans computer vision, NLP, real-time 
              model integration, and full-stack development for defense, security, and automation domains.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="text-center p-6 rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20"
            >
              <Code className="mx-auto mb-4 text-primary-600 dark:text-primary-400" size={48} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building scalable and efficient solutions with modern technologies
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center p-6 rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20"
            >
              <GraduationCap className="mx-auto mb-4 text-primary-600 dark:text-primary-400" size={48} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Learner
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Continuously learning and staying updated with latest ML/AI trends
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center p-6 rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20"
            >
              <Briefcase className="mx-auto mb-4 text-primary-600 dark:text-primary-400" size={48} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Professional
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Experienced in real-world ML projects and industry best practices
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

