import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    servicios: [
      'CCTV y Videovigilancia',
      'Redes Empresariales',
      'Fibra Óptica',
      'Desarrollo de Software',
      'Ciberseguridad',
      'Soporte Técnico IT',
    ],
    empresa: [
      'Sobre Nosotros',
      'Nuestro Equipo',
      'Certificaciones',
      'Proyectos',
      'Blog',
      'Trabaja con Nosotros',
    ],
    soporte: [
      'Centro de Ayuda',
      'Documentación',
      'Estado del Servicio',
      'Política de Privacidad',
      'Términos de Servicio',
    ],
  }

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/10">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-3xl font-bold mb-6">
                <span className="gradient-text">RUBY</span>
                <span className="text-white font-light ml-1">TECHNOLOGY</span>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Transformamos negocios mediante soluciones tecnológicas innovadoras. 
                Más de 15 años impulsando el éxito empresarial en Costa Rica y Centroamérica.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4 mb-8">
                {['facebook', 'linkedin', 'instagram', 'twitter', 'youtube'].map((social, index) => (
                  <motion.a
                    key={social}
                    href="#"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center border border-white/10 hover:border-ruby-500/50 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 text-gray-400 hover:text-ruby-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </motion.a>
                ))}
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="text-white font-semibold mb-3">Suscríbete a nuestro newsletter</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-l-xl focus:outline-none focus:border-ruby-500 text-white placeholder-gray-500"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-ruby-600 to-ruby-800 px-6 py-3 rounded-r-xl font-medium hover:shadow-lg hover:shadow-red-900/30 transition-all duration-300"
                  >
                    Suscribirse
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-white font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                >
                  <a href="#" className="text-gray-400 hover:text-ruby-500 transition-colors duration-300">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="text-white font-semibold mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
                >
                  <a href="#" className="text-gray-400 hover:text-ruby-500 transition-colors duration-300">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="text-white font-semibold mb-6">Soporte</h4>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
                >
                  <a href="#" className="text-gray-400 hover:text-ruby-500 transition-colors duration-300">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {currentYear} Ruby Technology. Todos los derechos reservados.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-ruby-500 text-sm transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-500 hover:text-ruby-500 text-sm transition-colors duration-300">
                Términos de Uso
              </a>
              <a href="#" className="text-gray-500 hover:text-ruby-500 text-sm transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
