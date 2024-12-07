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
      className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#0A0A0A] py-16 sm:py-20"
    >
      {/* Animated Background - enhanced for mobile */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#204E27]/30 to-transparent" />
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(109, 190, 69, 0.3) 0%, transparent 60%)`
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
      <div className="relative w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-20">
          
          {/* Left Content - improved mobile layout */}
          <motion.div 
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Dynamic Header - enhanced typography */}
            <div className="mb-8 text-white">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
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
                className="text-xl sm:text-2xl text-[#6DBE45] font-light"
                repeat={Infinity}
              />
            </div>

            {/* Animated Stats - improved mobile grid */}
            <div className="grid grid-cols-2 gap-4 mb-8 sm:grid-cols-3 sm:gap-8">
              {stats.map(({ number, label, icon }, index) => (
                <motion.div
                  key={label}
                  className="p-4 sm:p-6 transition-all duration-300 bg-white/5 backdrop-blur-sm rounded-xl 
                    hover:bg-white/10 border border-white/10 hover:border-[#6DBE45]/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="block mb-3 text-2xl sm:text-3xl">{icon}</span>
                  <motion.div 
                    className="text-2xl sm:text-3xl font-bold text-[#6DBE45] mb-1"
                    initial={{ number: 0 }}
                    animate={{ number: parseInt(number) }}
                    transition={{ duration: 2, delay: 0.5 }}
                  >
                    {number}
                  </motion.div>
                  <div className="text-sm sm:text-base text-white/70">{label}</div>
                </motion.div>
              ))}
            </div>

            {/* Interactive CTA Button - enhanced for mobile */}
            <motion.button
              className="group relative bg-[#6DBE45] text-white font-bold py-3 sm:py-4 px-8 sm:px-10 
                rounded-full overflow-hidden w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Let&apos;s Connect</span>
              <motion.div
                className="absolute inset-0 bg-[#204E27]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* Right Profile Section - improved mobile positioning */}
          <motion.div
            className="lg:w-1/3 order-1 lg:order-2 mb-8 lg:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Profile Image with Enhanced Dynamic Glow */}
              <motion.div
                className="relative overflow-hidden rounded-full w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 mx-auto"
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

              {/* Enhanced Floating Achievement Badges */}
              <motion.div
                className="absolute p-3 sm:p-4 rounded-full -right-2 sm:-right-4 top-10 
                  bg-white/10 backdrop-blur-md border border-white/20"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <span className="text-xl sm:text-2xl">🏆</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 