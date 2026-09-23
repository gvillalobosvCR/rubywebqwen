import { motion } from 'framer-motion'

const navItems = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 cursor-pointer"
          >
            <span className="text-3xl font-bold gradient-text">RUBY</span>
            <span className="text-3xl font-light text-white ml-1">TECHNOLOGY</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, color: '#dc2626' }}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(220, 38, 38, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-gradient-to-r from-ruby-600 to-ruby-800 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Cotizar Ahora
          </motion.button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
