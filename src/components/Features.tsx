"use client"

import { motion } from "framer-motion"
import { Clock, MapPin, Shield, Smartphone } from "lucide-react"

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Lightning Fast Delivery",
      description: "Get your fresh groceries delivered in under 30 minutes from local vendors in your neighborhood.",
    },
    {
      icon: MapPin,
      title: "Hyperlocal Network",
      description: "Supporting local businesses while providing you with the freshest produce from vendors near you.",
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "Every product is carefully selected and quality-checked by our trusted local vendor partners.",
    },
    {
      icon: Smartphone,
      title: "Smart Technology",
      description: "AI-powered logistics ensure optimal routing and real-time tracking for every delivery.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose BOdega?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing local commerce by connecting communities with their neighborhood vendors through
            cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
