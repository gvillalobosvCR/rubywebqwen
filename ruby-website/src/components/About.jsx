import { motion } from 'framer-motion'

export default function About() {
  const values = [
    { icon: '🎯', title: 'Excelencia', description: 'Calidad en cada proyecto' },
    { icon: '🤝', title: 'Compromiso', description: 'Dedicación al éxito del cliente' },
    { icon: '💡', title: 'Innovación', description: 'Tecnología de vanguardia' },
    { icon: '⚡', title: 'Agilidad', description: 'Respuestas efectivas' },
  ]

  return (
    <section id="nosotros" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Sobre <span className="gradient-text">Ruby Technology</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Ruby Technology es una empresa costarricense dedicada a brindar soluciones 
              tecnológicas empresariales de alta calidad.
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Nuestro equipo de profesionales certificados trabaja para ofrecer servicios 
              adaptados a las necesidades específicas de cada cliente, con un enfoque en 
              la excelencia técnica y el soporte personalizado.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  className="glass-effect p-4 rounded-xl border border-white/10"
                >
                  <div className="text-3xl mb-2">{value.icon}</div>
                  <div className="font-semibold text-white mb-1">{value.title}</div>
                  <div className="text-gray-400 text-sm">{value.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Abstract Tech Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden glass-effect p-2">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=1000&fit=crop"
                  alt="Tecnología empresarial"
                  className="rounded-2xl w-full object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent rounded-2xl" />
              </div>

              {/* Floating Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -right-8 top-20 glass-effect p-6 rounded-2xl border border-white/20 shadow-2xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ruby-600 to-ruby-800 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">Certificados</div>
                    <div className="text-gray-400 text-sm">Industria líder</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -left-8 bottom-20 glass-effect p-6 rounded-2xl border border-white/20 shadow-2xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ruby-600 to-ruby-800 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">Equipo</div>
                    <div className="text-gray-400 text-sm">Profesionales IT</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-ruby-600/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
