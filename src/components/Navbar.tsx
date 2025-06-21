"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
  ]

  const showNavbar = !isHomePage || isScrolled

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
        >
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              {/* Glassmorphism Background */}
              <div className="absolute inset-0 bg-bodega-light/80 backdrop-blur-xl border border-bodega-brown/20 rounded-2xl shadow-2xl"></div>
              
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-bodega-cream/30 to-bodega-light/30 rounded-2xl"></div>

              {/* Content */}
              <div className="relative flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  className="flex items-center gap-3 group"
                >
                  <Link href="/" className="flex items-center gap-3">
                    <motion.div 
                      className="w-10 h-10 bg-gradient-to-br from-bodega-brown to-bodega-dark rounded-xl flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Sparkles className="w-5 h-5 text-bodega-light" />
                    </motion.div>
                    <h1 className="text-2xl font-bold text-bodega-dark tracking-tight group-hover:text-bodega-brown transition-colors duration-300">
                      BOdega
                    </h1>
                  </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:block">
                  <div className="flex items-center gap-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="relative px-4 py-2 text-sm font-medium text-bodega-dark/80 hover:text-bodega-dark transition-all duration-300 group"
                      >
                        <span className="relative z-10">{item.name}</span>
                        
                        {/* Hover background */}
                        <motion.div
                          className="absolute inset-0 bg-bodega-cream/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.05 }}
                        />
                        
                        {/* Active indicator */}
                        {pathname === item.href && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-bodega-brown/20 rounded-lg"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                      </Link>
                    ))}
                    
                    {/* CTA Button */}
                    <Link href="/careers">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95 }}
                        className="ml-4 bg-bodega-dark text-bodega-light px-6 py-2.5 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
                      >
                        Join Us
                        <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                      </motion.button>
                    </Link>
                  </div>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2.5 rounded-xl text-bodega-dark hover:bg-bodega-cream/50 transition-all duration-300"
                  >
                    <AnimatePresence mode="wait">
                      {isMobileMenuOpen ? (
                        <motion.div
                          key="close"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <X size={24} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="menu"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Menu size={24} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </div>

              {/* Mobile Navigation */}
              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="md:hidden absolute top-full left-0 right-0 mt-2 bg-bodega-light/95 backdrop-blur-xl border border-bodega-brown/20 rounded-2xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-4 space-y-2">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Link
                            href={item.href}
                            className="block px-4 py-3 text-base font-medium text-bodega-dark hover:bg-bodega-cream/50 rounded-xl transition-all duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                      
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                        className="pt-2 border-t border-bodega-brown/20"
                      >
                        <Link href="/careers" onClick={() => setIsMobileMenuOpen(false)}>
                          <button className="w-full bg-bodega-dark text-bodega-light px-4 py-3 rounded-xl font-semibold text-base shadow-lg flex items-center justify-center gap-2 group">
                            Join Our Team
                            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                          </button>
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default Navbar
