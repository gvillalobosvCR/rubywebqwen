import { motion } from 'framer-motion'

const services = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'CCTV y Videovigilancia',
    description: 'Sistemas de seguridad avanzados con monitoreo 24/7, cámaras IP, analíticas de video y control remoto desde cualquier dispositivo.',
    features: ['Cámaras IP de alta resolución', 'Grabación NVR/DVR', 'Monitoreo remoto', 'Analíticas inteligentes'],
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    title: 'Redes Empresariales',
    description: 'Infraestructura de red robusta y escalable para empresas. Diseño, implementación y mantenimiento de redes LAN/WAN.',
    features: ['Diseño de red', 'Switches y routers', 'Wireless empresarial', 'Segmentación VLAN'],
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fibra Óptica',
    description: 'Instalación y certificación de redes de fibra óptica para conexiones de alta velocidad y larga distancia.',
    features: ['Instalación certificada', 'Fusión de fibra', 'Certificación OTDR', 'Mantenimiento preventivo'],
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Desarrollo de Software',
    description: 'Soluciones de software personalizadas para automatizar procesos y optimizar la gestión de tu empresa.',
    features: ['Aplicaciones web', 'Sistemas a medida', 'APIs e integraciones', 'Consultoría tecnológica'],
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Ciberseguridad',
    description: 'Protección integral de tus activos digitales con soluciones de seguridad perimetral, endpoints y concienciación.',
    features: ['Firewalls next-gen', 'Protección endpoints', 'Auditorías de seguridad', 'Capacitación usuarios'],
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Soporte Técnico IT',
    description: 'Asistencia técnica especializada y mantenimiento preventivo/correctivo de infraestructura tecnológica.',
    features: ['Soporte 24/7', 'Mantenimiento preventivo', 'Help desk', 'Gestión de activos IT'],
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-ruby-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ruby-800/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluciones tecnológicas integrales diseñadas para impulsar el crecimiento de tu empresa
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(220, 38, 38, 0.2)',
                borderColor: 'rgba(220, 38, 38, 0.5)'
              }}
              className="glass-effect p-8 rounded-3xl border border-white/10 hover:border-ruby-500/30 transition-all duration-500 group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-ruby-500 mb-6 group-hover:text-ruby-400 transition-colors"
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-ruby-400 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <svg className="w-5 h-5 text-ruby-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                whileHover={{ x: 5 }}
                className="mt-6 text-ruby-500 font-semibold flex items-center group/btn"
              >
                Saber más
                <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
