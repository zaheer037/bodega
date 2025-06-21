"use client"

import { motion } from "framer-motion"
import { Users, Store, Clock, Star } from "lucide-react"

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "10K+",
      label: "Happy Customers",
      description: "Satisfied customers across the city",
    },
    {
      icon: Store,
      number: "500+",
      label: "Local Vendors",
      description: "Trusted partners in our network",
    },
    {
      icon: Clock,
      number: "25min",
      label: "Average Delivery",
      description: "Lightning-fast delivery times",
    },
    {
      icon: Star,
      number: "4.9",
      label: "Customer Rating",
      description: "Consistently excellent service",
    },
  ]

  return (
    <section className="py-20 bg-emerald-600">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Impact</h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Building stronger communities through local commerce and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-2"
              >
                {stat.number}
              </motion.div>

              <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>

              <p className="text-emerald-100 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
