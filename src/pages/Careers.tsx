"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { Code, Smartphone, Layers, Award, FileText, Briefcase, Clock } from "lucide-react"

interface Role {
  id: string
  title: string
  icon: React.ElementType
  duration: string
  benefits: string[]
  description: string
  requirements: string[]
}

const Careers = () => {
  const roles: Role[] = [
    {
      id: "flutter-developer",
      title: "Flutter Developer",
      icon: Code,
      duration: "3-6 months",
      benefits: ["Internship Certificate", "Letter of Recommendation", "PPO Opportunity"],
      description: "Build cross-platform mobile applications using Flutter framework for our delivery platform.",
      requirements: ["Flutter/Dart knowledge", "Mobile app development experience", "UI/UX understanding"],
    },
    {
      id: "app-developer",
      title: "App Developer",
      icon: Smartphone,
      duration: "3-6 months",
      benefits: ["Internship Certificate", "Letter of Recommendation", "PPO Opportunity"],
      description: "Develop native mobile applications for iOS and Android platforms.",
      requirements: ["Swift/Kotlin knowledge", "Native app development", "API integration experience"],
    },
    {
      id: "react-native",
      title: "React Native Developer",
      icon: Layers,
      duration: "3-6 months",
      benefits: ["Internship Certificate", "Letter of Recommendation", "PPO Opportunity"],
      description: "Create efficient cross-platform mobile apps using React Native technology.",
      requirements: ["React Native expertise", "JavaScript/TypeScript", "Redux/Context API knowledge"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Our <span className="text-emerald-600">Innovation</span> Team
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to revolutionize local commerce? We're looking for passionate interns who want to make a real impact
            in connecting communities with local vendors through cutting-edge technology.
          </p>
        </motion.div>

        {/* Why Join Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-emerald-50 rounded-3xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Intern at BOdega?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real Impact</h3>
              <p className="text-gray-600">Work on features used by thousands of customers and local vendors daily</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Growth</h3>
              <p className="text-gray-600">Mentorship from industry experts and potential full-time opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">Work around your academic schedule with flexible timing options</p>
            </div>
          </div>
        </motion.div>

        {/* Roles Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Open Positions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors duration-300">
                    <role.icon className="w-8 h-8 text-emerald-600" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{role.title}</h3>

                  {/* Duration */}
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-600 font-semibold">{role.duration}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">{role.description}</p>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-emerald-600" />
                      Benefits
                    </h4>
                    <div className="space-y-2">
                      {role.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-emerald-600" />
                      Requirements
                    </h4>
                    <div className="space-y-2">
                      {role.requirements.map((req, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          <span className="text-sm text-gray-600">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <Link href={`/apply/${role.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Apply Now
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gray-900 rounded-3xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in building the future of local commerce. Apply now and be part of something revolutionary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              View All Positions
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border border-gray-600 hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Contact HR
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Careers
