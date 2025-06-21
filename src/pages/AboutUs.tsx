"use client"

import { motion } from "framer-motion"
import { TrendingUp, Store, Users, Zap, Shield, ArrowRight, CheckCircle } from "lucide-react"

const AboutUs = () => {
  const problems = [
    {
      title: "Limited Online Presence",
      description:
        "Traditional Indian shops struggle to establish meaningful online presence, limiting their ability to reach new customers.",
      stat: "Only 25% of small Indian shops have any online presence",
    },
    {
      title: "Access to Technology",
      description: "Many small shops have limited access to technology and digital marketing resources.",
      stat: "Hindering competition with larger e-commerce platforms",
    },
    {
      title: "Losing to E-Commerce",
      description: "Neighborhood Kirana stores are increasingly losing customers to online giants.",
      stat: "Urgent need for digital solutions",
    },
  ]

  const customerProblems = [
    {
      title: "Busy Lifestyles",
      description: "Modern lifestyles demand quick and easy access to daily essentials.",
    },
    {
      title: "Time-Consuming Shopping",
      description: "Traditional shopping can be inconvenient for those with demanding schedules.",
    },
    {
      title: "Home Delivery Demand",
      description: "Growing demand for reliable and efficient home delivery services.",
      stat: "68% of urban Indians prefer online grocery shopping",
    },
  ]

  const features = [
    {
      icon: Zap,
      title: "Chain Delivery System",
      description: "Zone-based logistics with seamless handovers between delivery partners for faster deliveries.",
    },
    {
      icon: Store,
      title: "Bargaining Feature",
      description: "Users can negotiate prices with vendors directly within the app for fair pricing.",
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Multiple payment options including UPI, cards, and digital wallets.",
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-emerald-600">BOdega</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            BOdega is an innovative delivery app designed to bridge the gap between local Indian shops and their
            customers. Our platform addresses the challenges faced by vendors with limited digital reach, while
            simultaneously providing customers with a seamless and convenient shopping experience for essential goods.
          </p>
        </motion.div>

        {/* Market Growth */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-8 md:p-12 text-white text-center mb-20"
        >
          <TrendingUp className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Commerce Growth in India</h2>
          <p className="text-xl mb-6 opacity-90">The quick commerce market in India is expected to generate</p>
          <div className="text-5xl md:text-6xl font-bold mb-4">USD 3.34 Billion</div>
          <p className="text-lg opacity-90">
            in revenue in 2024 and grow at a CAGR of <span className="font-bold">24.33%</span> from 2024 to 2029
          </p>
        </motion.div>
      </section>

      {/* Problems Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The Problems We Solve</h2>
          </motion.div>

          {/* Shop Problems */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-8"
            >
              Small Shops Lack Digital Reach
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h4>
                  <p className="text-gray-600 mb-4">{problem.description}</p>
                  <div className="text-sm text-emerald-600 font-semibold">{problem.stat}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Customer Problems */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-8"
            >
              Customers Need Convenience
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {customerProblems.map((problem, index) => (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h4>
                  <p className="text-gray-600 mb-4">{problem.description}</p>
                  {problem.stat && <div className="text-sm text-emerald-600 font-semibold">{problem.stat}</div>}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BOdega creates a mutually beneficial ecosystem for both vendors and customers, fostering loyalty and
              growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-emerald-50 rounded-3xl p-8 text-center"
            >
              <Store className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Empowering Vendors</h3>
              <p className="text-gray-600">
                We provide local shops with a robust digital platform to expand their reach and compete in the modern
                economy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-3xl p-8 text-center"
            >
              <Users className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Supporting Local Businesses</h3>
              <p className="text-gray-600">
                We enable customers to easily support local businesses and foster community growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-purple-50 rounded-3xl p-8 text-center"
            >
              <CheckCircle className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Win-Win Ecosystem</h3>
              <p className="text-gray-600">
                Our platform creates a mutually beneficial ecosystem for both vendors and customers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Innovative Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology that revolutionizes local commerce
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-emerald-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chain Delivery System */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Chain Delivery System</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our innovative zone-based logistics system ensures faster deliveries and better earnings for delivery
              partners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Zone Handover</h4>
                    <p className="text-gray-600">A delivery partner brings an order to their assigned zone.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Final Delivery</h4>
                    <p className="text-gray-600">
                      Another delivery partner picks up the order and completes the final handover to the customer.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-emerald-50 rounded-3xl p-8"
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                  <span className="text-gray-700">Faster Deliveries – Orders reach customers quicker</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                  <span className="text-gray-700">Better Earnings – More opportunities for delivery partners</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                  <span className="text-gray-700">
                    Reliable Experience – Minimizes delays and ensures smooth operations
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join the Revolution</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Be part of the future of local commerce. Whether you're a vendor looking to grow or a customer seeking
              convenience, BOdega is here for you.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              Get Started Today
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
