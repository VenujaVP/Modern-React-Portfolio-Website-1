import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const PRIMARY_GREEN = '#6DBE45'
const DARK_GREEN = '#204E27'

function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax and color transition effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  
  const highlights = [
    { text: 'Developer', icon: '💻' },
    { text: 'Designer', icon: '🎨' },
    { text: 'Problem Solver', icon: '🚀' }
  ]

  const stats = [
    { number: '194', label: 'Completed Projects', icon: '🎯' },
    { number: '98%', label: 'Client Rating', icon: '⭐' },
    { number: '6', label: 'Years of Experience', icon: '⚡' },
  ]

  const timeline = [
    {
      year: '2017',
      title: 'Started Coding Journey',
      description: 'Began learning web development through self-study and bootcamps',
      icon: '🌱'
    },
    {
      year: '2019',
      title: 'First Developer Role',
      description: 'Joined a startup as a junior full-stack developer',
      icon: '👨‍💻'
    },
    {
      year: '2020',
      title: 'Freelance Success',
      description: 'Started freelancing and completed 20+ successful projects',
      icon: '🎯'
    },
    {
      year: '2021',
      title: 'Tech Lead',
      description: 'Promoted to tech lead, managing a team of 5 developers',
      icon: '👥'
    },
    {
      year: '2023',
      title: 'Independent Studio',
      description: `Successfully completed ${stats[0].number} projects with ${stats[1].number} client satisfaction`,
      icon: '🚀'
    }
  ]

  const values = [
    {
      icon: '🎯',
      title: 'Innovation',
      description: 'Pushing boundaries with creative solutions',
      color: PRIMARY_GREEN
    },
    {
      icon: '⭐',
      title: 'Excellence',
      description: 'Committed to delivering premium quality',
      color: PRIMARY_GREEN
    },
    {
      icon: '🚀',
      title: 'Growth',
      description: 'Continuous learning and improvement',
      color: PRIMARY_GREEN
    },
    {
      icon: '⚡',
      title: 'Efficiency',
      description: 'Building trust through reliable delivery',
      color: PRIMARY_GREEN
    }
  ]

  return (
    <motion.section 
      ref={containerRef}
      id="about" 
      className="relative min-h-screen py-20 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ 
          backgroundImage: 'radial-gradient(circle at center, #6DBE45 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          y: backgroundY 
        }}
      />

      <div className="relative px-2 mx-auto max-w-7xl sm:px-4 lg:px-6">
        {/* Main Content */}
        <motion.div 
          className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Column */}
          <div className="space-y-12">
            {/* About Header */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-5xl font-bold text-white">
                About <span className={`text-[${PRIMARY_GREEN}]`}>Me</span>
              </h2>

              {/* Interactive Video Card */}
              <motion.div 
                className="relative overflow-hidden aspect-video rounded-xl group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent" />
                <video
                  className="object-cover w-full h-full"
                  poster="/video-thumbnail.jpg"
                  autoPlay
                  muted
                  loop
                  loading="lazy"
                >
                  <source src="/111.mp4" type="video/mp4" />
                  <p>Your browser doesn't support HTML5 video.</p>
                </video>
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <h3 className="mb-2 text-2xl font-bold">My Story</h3>
                  <p className="text-white/80">Watch how I turned my passion into profession</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Animated Highlights */}
            <div className="flex flex-wrap gap-4">
              {highlights.map(({ text, icon }, index) => (
                <motion.div
                  key={text}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full
                                hover:bg-[#6DBE45]/20 transition-all duration-300">
                    <span className="text-2xl">{icon}</span>
                    <span className="text-white/90 group-hover:text-white">{text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Interactive Timeline */}
            <div className="relative w-full">
              <h3 className="mb-8 text-3xl font-bold text-white">My Journey</h3>
              <div className="relative ml-6 md:ml-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className="relative pb-12 pl-8 border-l-2 border-[#6DBE45]/30 last:pb-0"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <motion.div 
                      className="absolute left-0 p-3 -translate-x-1/2 bg-[#1A1A1A] rounded-full 
                        border-2 border-[#6DBE45]"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                    >
                      <span className="text-xl">{item.icon}</span>
                    </motion.div>
                    <div className="p-4 transition-all duration-300 bg-white/5 backdrop-blur-sm 
                      rounded-xl hover:bg-white/10">
                      <span className="text-[#6DBE45] font-mono text-sm">
                        {item.year}
                      </span>
                      <h4 className="mt-2 mb-2 text-lg font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-white/70">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          className="px-4 mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="mb-12 text-4xl font-bold text-center text-white">
            Core <span className={`text-[${PRIMARY_GREEN}]`}>Values</span>
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="relative p-8 overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#6DBE45]/50"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  className="absolute inset-0 opacity-5"
                  style={{ background: value.color }}
                  whileHover={{ opacity: 0.15 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10">
                  <motion.span 
                    className="flex items-center justify-center w-16 h-16 mb-6 text-4xl rounded-full bg-white/5"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {value.icon}
                  </motion.span>
                  <h4 className="mb-3 text-2xl font-bold text-white">{value.title}</h4>
                  <p className="leading-relaxed text-white/70">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About 