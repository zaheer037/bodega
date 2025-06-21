"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Users, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Local vendor market"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">BOdega</h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-200 mb-12 font-medium max-w-3xl mx-auto leading-relaxed"
        >
          On time, Delivery by your local vendor
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-2xl transition-all duration-300 flex items-center gap-3 min-w-[220px] justify-center group"
            >
              Learn More
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </Link>

          <Link href="/careers">
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-2xl font-semibold text-lg shadow-2xl transition-all duration-300 flex items-center gap-3 min-w-[220px] justify-center group"
            >
              <Users size={20} className="group-hover:scale-110 transition-transform duration-300" />
              Apply as Intern
            </motion.button>
          </Link>

          {/* New Button with Sparkles Icon */}
          <Link href="/features">
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-violet-600 hover:bg-violet-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-2xl transition-all duration-300 flex items-center gap-3 min-w-[220px] justify-center group"
            >
              <Sparkles size={20} className="group-hover:scale-110 transition-transform duration-300" />
              Explore Features
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center cursor-pointer"
          >
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
