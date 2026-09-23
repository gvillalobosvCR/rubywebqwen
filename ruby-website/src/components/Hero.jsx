import { motion } from 'framer-motion'
import Hero3D from './Hero3D'

const stats = [
  { number: '15+', label: 'Años de Experiencia' },
  { number: '500+', label: 'Proyectos Completados' },
  { number: '200+', label: 'Clientes Satisfechos' },
  { number: '24/7', label: 'Soporte Técnico' },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Hero3D />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] z-10" />
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="gradient-text">RUBY</span>
            <br />
            <span className="text-white">TECHNOLOGY</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Transformamos tu negocio con soluciones tecnológicas de vanguardia.
            Especialistas en CCTV, redes empresariales, fibra óptica y desarrollo de software.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(220, 38, 38, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-ruby-600 to-ruby-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-red-900/50 transition-all duration-300"
            >
              Nuestros Servicios
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="glass-effect text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/20 hover:border-ruby-500/50 transition-all duration-300"
            >
              Contáctanos
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="glass-effect p-6 rounded-2xl backdrop-blur-sm"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-ruby-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
