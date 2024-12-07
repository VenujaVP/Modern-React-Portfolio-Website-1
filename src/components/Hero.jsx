import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { useInView } from 'react-intersection-observer'

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { ref, inView } = useInView({ threshold: 0.1 })
  
  const stats = [
    { number: '194', label: 'Completed Projects', icon: '🎯' },
    { number: '98%', label: 'Client Rating', icon: '⭐' },
    { number: '6', label: 'Years of Experience', icon: '⚡' },
  ]

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      ref={ref}
      id="hero" 
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#204E27]/20 to-transparent" />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(109, 190, 69, 0.2) 0%, transparent 50%)`
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#6DBE45]/20 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative w-full px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-20">
          
          {/* Left Content */}
          <motion.div 
            className="flex-1 text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Dynamic Header */}
            <div className="mb-8 text-white">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  Ethan Carter
                </h1>
              </motion.div>
              <TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'Designer',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="h2"
                className="text-2xl sm:text-3xl text-[#6DBE45] font-light"
                repeat={Infinity}
              />
            </div>

            {/* Interactive Social Links */}
            <motion.div 
              className="flex gap-8 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {/* ... social links with hover effects ... */}
            </motion.div>

            {/* Animated Stats */}
            <div className="grid max-w-2xl grid-cols-1 gap-8 mb-12 md:grid-cols-3">
              {stats.map(({ number, label, icon }, index) => (
                <motion.div
                  key={label}
                  className="p-6 transition-all duration-300 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="block mb-4 text-3xl">{icon}</span>
                  <motion.div 
                    className="text-4xl font-bold text-[#6DBE45] mb-2"
                    initial={{ number: 0 }}
                    animate={{ number: parseInt(number) }}
                    transition={{ duration: 2, delay: 0.5 }}
                  >
                    {number}
                  </motion.div>
                  <div className="text-lg text-white/70">{label}</div>
                </motion.div>
              ))}
            </div>

            {/* Interactive CTA Button */}
            <motion.button
              className="group relative bg-[#6DBE45] text-white font-bold py-4 px-10 rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Let's Connect</span>
              <motion.div
                className="absolute inset-0 bg-[#204E27]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* Right Profile Section */}
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Profile Image with Dynamic Glow */}
              <motion.div
                className="relative overflow-hidden rounded-full w-72 h-72 lg:w-96 lg:h-96"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(109, 190, 69, 0.3)',
                    '0 0 60px rgba(109, 190, 69, 0.3)',
                    '0 0 20px rgba(109, 190, 69, 0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <img
                  src="/Profile.jpeg"
                  alt="Ethan Carter"
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </motion.div>

              {/* Floating Achievement Badges */}
              <motion.div
                className="absolute p-4 rounded-full -right-4 top-10 bg-white/10 backdrop-blur-md"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <span className="text-2xl">🏆</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 