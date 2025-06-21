"use client"

import { motion } from "framer-motion"
import { Search, ShoppingCart, Truck, CheckCircle } from "lucide-react"

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse Local Vendors",
      description: "Discover fresh products from verified local vendors in your area.",
    },
    {
      icon: ShoppingCart,
      title: "Place Your Order",
      description: "Add items to your cart and checkout with our secure payment system.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Your local vendor prepares and delivers your order within 30 minutes.",
    },
    {
      icon: CheckCircle,
      title: "Enjoy Fresh Products",
      description: "Receive quality-guaranteed fresh groceries at your doorstep.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting fresh groceries from your local vendors has never been easier. Here's how BOdega works.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-emerald-200 z-0">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className="h-full bg-emerald-500"
                  />
                </div>
              )}

              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>

                <div className="bg-emerald-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
