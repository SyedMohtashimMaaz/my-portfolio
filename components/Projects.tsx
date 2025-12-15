'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Code, Brain } from 'lucide-react'

interface Project {
  title: string
  description: string
  longDescription: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  image?: string
  featured: boolean
}

const projects: Project[] = [
  {
    title: 'PhishPatrol: LLM Guardian',
    description: 'AI-powered Chrome extension for phishing detection using fine-tuned DeBERTa/BERT',
    longDescription:
      'Built a Chrome extension using fine-tuned DeBERTa/BERT models, achieving 97.7% accuracy and 0.9976 ROC-AUC on phishing datasets. Enabled <200ms browser inference via ONNX compression, designed for detecting homograph attacks and typosquatting. The system provides real-time protection against sophisticated phishing attempts.',
    technologies: [
      'Python',
      'PyTorch',
      'BERT',
      'DeBERTa',
      'Transformers',
      'ONNX',
      'FastAPI',
      'Chrome Extension',
      'NLP',
    ],
    githubUrl: 'https://github.com/SyedMohtashimMaaz/PhishPatrol',
    featured: true,
  },
  {
    title: 'EDITBOT – Video Frame Enhancement using GAN Inversion',
    description: 'High-resolution video reconstruction using inverted GANs for face restoration',
    longDescription:
      'Built an inverted GAN system for high-resolution video reconstruction using VGG loss, improving SSIM and perceptual quality metrics by 28%. Proposed novel GAN inversion balancing fidelity and editability, processed 7,800+ images for face restoration and object removal. The system enables high-quality video frame enhancement with improved visual fidelity.',
    technologies: [
      'Python',
      'Keras',
      'GANs',
      'CNN',
      'Computer Vision',
      'Deep Learning',
      'GAN Inversion',
      'VGG Loss',
    ],
    githubUrl: 'https://github.com/SyedMohtashimMaaz',
    featured: false,
  },
  {
    title: 'SMART Personalized Customer Support',
    description: 'AI-powered chat system with GPT-4 integration for personalized customer support',
    longDescription:
      'Designed an AI-powered support system with GPT-4 integration, handling 100+ queries/sec and boosting customer satisfaction by 30% through advanced prompt engineering. Built RESTful APIs and socket channels for real-time agent-customer interaction using WebSocket (Socket.IO), reducing latency and improving engagement metrics by 25%.',
    technologies: [
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'GPT-4',
      'WebSocket',
      'Socket.IO',
      'REST APIs',
      'Full Stack',
    ],
    githubUrl: 'https://github.com/SyedMohtashimMaaz/SMART-Customer-Support',
    featured: true,
  },
  {
    title: 'Semantic Segmentation of Aerial Imagery',
    description: 'U-Net based semantic segmentation for Dubai aerial imagery',
    longDescription:
      'Built U-Net model for MBRSC satellite imagery classification, achieving 0.6599 IoU and 86% accuracy with strong semantic segmentation performance. Improved model efficiency 3× through optimized preprocessing including patchification and one-hot encoding for satellite datasets. Enhanced segmentation robustness 22% via contrast-based error analysis during DRDL internship.',
    technologies: [
      'Python',
      'TensorFlow',
      'Keras',
      'U-Net',
      'Computer Vision',
      'Deep Learning',
      'OpenCV',
      'Image Processing',
    ],
    githubUrl: 'https://github.com/SyedMohtashimMaaz/Semantic-segmentation-aerial-unet',
    featured: true,
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in machine learning and development
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Brain className="text-primary-600 dark:text-primary-400" size={32} />
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                    >
                      <Github size={18} />
                      View on GitHub
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors font-medium"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to action for more projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Want to see more of my work?
            </p>
            <a
              href="https://github.com/SyedMohtashimMaaz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors font-medium"
            >
              <Github size={20} />
              Visit My GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

