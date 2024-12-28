/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import useAnimateOnScroll, { fadeInUpVariants, staggerChildrenVariants, scaleInVariants } from '../hooks/useAnimateOnScroll'

const PRIMARY_GREEN = '#6DBE45'

function About() {
  // Track scroll position for background movement
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Setup animation controls for different sections
  const { ref: contentRef, controls: contentControls } = useAnimateOnScroll()
  const { ref: timelineRef, controls: timelineControls } = useAnimateOnScroll(0.15)
  const { ref: valuesRef, controls: valuesControls } = useAnimateOnScroll(0.1)

  // Move background based on scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  // Skills and achievements shown in highlights
  const highlights = [
    { text: 'Developer', icon: '💻' },
    { text: 'Designer', icon: '🎨' },
    { text: 'Problem Solver', icon: '🚀' }
  ]

  // Statistics display
  const stats = [
    { number: '194', label: 'Completed Projects', icon: '🎯' },
    { number: '98%', label: 'Client Rating', icon: '⭐' },
    { number: '6', label: 'Years of Experience', icon: '⚡' },
  ]

  // Career timeline data
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

  // Core values and principles
  const values = [
    {
      icon: '🎯',
      title: 'Innovation',
      description: 'Pushing boundaries with creative solutions',
      color: 'linear-gradient(135deg, #6DBE45 0%, #204E27 100%)'
    },
    {
      icon: '⭐',
      title: 'Excellence',
      description: 'Committed to delivering premium quality',
      color: 'linear-gradient(135deg, #204E27 0%, #6DBE45 100%)'
    },
    {
      icon: '🚀',
      title: 'Growth',
      description: 'Continuous learning and improvement',
      color: 'linear-gradient(135deg, #6DBE45 0%, #204E27 100%)'
    },
    {
      icon: '⚡',
      title: 'Efficiency',
      description: 'Building trust through reliable delivery',
      color: 'linear-gradient(135deg, #204E27 0%, #6DBE45 100%)'
    }
  ]

  const videoRef = useRef(null)
  const [progress, setProgress] = useState(0)

  // Update video progress
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      const progress = (video.currentTime / video.duration) * 100
      setProgress(progress)
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    return () => video.removeEventListener('timeupdate', handleTimeUpdate)
  }, [])

  return (
    <motion.section 
      ref={containerRef}
      id="about" 
      className="relative min-h-screen py-20 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Moving background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ 
          backgroundImage: 'radial-gradient(circle at center, #6DBE45 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          y: backgroundY 
        }}
      />

      <div className="relative px-2 mx-auto max-w-7xl sm:px-4 lg:px-6">
        {/* Two column layout */}
        <motion.div 
          ref={contentRef}
          variants={staggerChildrenVariants}
          initial="hidden"
          animate={contentControls}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16"
          key={contentControls ? "visible" : "hidden"}
        >
          {/* Left column - About me and highlights */}
          <motion.div 
            className="space-y-12" 
            variants={fadeInUpVariants}
            key={contentControls ? "visible" : "hidden"}
          >
            {/* About section header and video */}
            <div>
              <motion.div className="flex flex-col gap-6 mb-8">
                <motion.h2 
                  className="text-5xl font-bold text-white"
                  variants={fadeInUpVariants}
                >
                  About <span className="text-[#6DBE45]">Me</span>
                </motion.h2>
                
                {/* Story description */}
                <motion.p 
                  className="max-w-2xl text-lg text-white/80"
                  variants={fadeInUpVariants}
                >
                  Watch how I turned my passion into profession. With {stats[2].number} years of experience 
                  and {stats[0].number}+ completed projects, I've dedicated my journey to creating 
                  innovative digital solutions.
                </motion.p>
              </motion.div>

              {/* Video introduction */}
              <motion.div 
                className="relative overflow-hidden cursor-pointer aspect-video rounded-xl group"
                variants={scaleInVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
                key={contentControls ? "visible" : "hidden"}
              >
                {/* Gradient overlay */}
                <motion.div 
                  className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 0.4 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Video element */}
                <motion.video
                  ref={videoRef}
                  className="object-cover w-full h-full transform-gpu"
                  poster="/video-thumbnail.jpg"
                  autoPlay
                  muted
                  loop
                  loading="lazy"
                  initial={{ scale: 1 }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: {
                      duration: 0.5,
                      ease: [0.33, 1, 0.68, 1]
                    }
                  }}
                >
                  <source src="/111.mp4" type="video/mp4" />
                  <p>Your browser doesn&apos;t support HTML5 video.</p>
                </motion.video>

                {/* Video Progress Bar - Moved up and made interactive */}
                <div className="absolute left-0 right-0 z-30 px-4 transition-opacity duration-300 opacity-0 bottom-16 group-hover:opacity-100">
                  {/* Progress Bar Container */}
                  <div 
                    className="relative w-full h-2 rounded-full cursor-pointer bg-white/20"
                    onClick={(e) => {
                      const bounds = e.currentTarget.getBoundingClientRect()
                      const x = e.clientX - bounds.left
                      const percent = x / bounds.width
                      if (videoRef.current) {
                        videoRef.current.currentTime = percent * videoRef.current.duration
                      }
                    }}
                    onMouseMove={(e) => {
                      if (e.buttons === 1) { // If mouse button is held down
                        const bounds = e.currentTarget.getBoundingClientRect()
                        const x = e.clientX - bounds.left
                        const percent = x / bounds.width
                        if (videoRef.current) {
                          videoRef.current.currentTime = percent * videoRef.current.duration
                        }
                      }
                    }}
                  >
                    {/* Progress Bar */}
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-[#6DBE45] rounded-full"
                      style={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    >
                      {/* Progress Handle */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 
                        bg-[#6DBE45] rounded-full shadow-lg scale-0 group-hover:scale-100 
                        transition-transform duration-200 hover:scale-125"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Video Controls */}
                <div className="absolute left-0 right-0 z-30 px-4 transition-opacity duration-300 opacity-0 bottom-4 group-hover:opacity-100 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="flex items-center justify-between">
                    {/* Left Controls */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => {
                          const video = videoRef.current
                          if (video.paused) {
                            video.play()
                          } else {
                            video.pause()
                          }
                        }}
                        className="p-2 transition-colors rounded-full bg-white/10 hover:bg-white/20"
                      >
                        <svg 
                          className="w-5 h-5 text-white" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          {videoRef.current?.paused ? (
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                          ) : (
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M10 9v6m4-6v6"
                            />
                          )}
                        </svg>
                      </button>

                      {/* Time Display */}
                      <div className="text-sm text-white/80">
                        {videoRef.current ? 
                          `${Math.floor(videoRef.current.currentTime / 60)}:${Math.floor(videoRef.current.currentTime % 60).toString().padStart(2, '0')} / 
                           ${Math.floor(videoRef.current.duration / 60)}:${Math.floor(videoRef.current.duration % 60).toString().padStart(2, '0')}`
                          : '0:00 / 0:00'
                        }
                      </div>
                    </div>

                    {/* Right Controls */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => {
                          const video = videoRef.current
                          if (video) {
                            video.muted = !video.muted
                          }
                        }}
                        className="p-2 transition-colors rounded-full bg-white/10 hover:bg-white/20"
                      >
                        <svg 
                          className="w-5 h-5 text-white" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          {videoRef.current?.muted ? (
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                            />
                          ) : (
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                            />
                          )}
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Skills and expertise */}
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={staggerChildrenVariants}
              key={contentControls ? "visible" : "hidden"}
            >
              {highlights.map(({ text, icon }) => (
                <motion.div
                  key={`${text}-${contentControls ? "visible" : "hidden"}`}
                  className="group"
                  variants={fadeInUpVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full
                                hover:bg-[#6DBE45]/20 transition-all duration-300">
                    <span className="text-2xl">{icon}</span>
                    <span className="text-white/90 group-hover:text-white">{text}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column - Career timeline */}
          <motion.div 
            ref={timelineRef}
            variants={staggerChildrenVariants}
            initial="hidden"
            animate={timelineControls}
            className="space-y-12"
            key={timelineControls ? "visible" : "hidden"}
          >
            <h3 className="mb-8 text-3xl font-bold text-white">My Journey</h3>
            <div className="relative ml-6 md:ml-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={`${item.year}-${timelineControls ? "visible" : "hidden"}`}
                  className="relative pb-12 pl-8 border-l-2 border-[#6DBE45]/30 last:pb-0"
                  variants={fadeInUpVariants}
                  custom={index}
                >
                  <div 
                    className="absolute left-0 p-3 -translate-x-1/2 bg-[#1A1A1A] rounded-full 
                      border-2 border-[#6DBE45] transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <motion.div 
                    className="p-4 transition-all duration-300 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10"
                    whileHover={{ 
                      x: 10,
                      transition: { type: "spring", stiffness: 200 }
                    }}
                  >
                    <span className="text-[#6DBE45] font-mono text-sm">
                      {item.year}
                    </span>
                    <h4 className="mt-2 mb-2 text-lg font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-white/70">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Core values section */}
        <motion.div 
          ref={valuesRef}
          variants={staggerChildrenVariants}
          initial="hidden"
          animate={valuesControls}
          className="px-4 mt-20"
          key={`values-${valuesControls ? "visible" : "hidden"}`}
        >
          <motion.h3 
            className="mb-12 text-4xl font-bold text-center text-white"
            variants={fadeInUpVariants}
          >
            Core <span className="text-[#6DBE45]">Values</span>
          </motion.h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={`${value.title}-${valuesControls ? "visible" : "hidden"}`}
                className="relative p-6 overflow-hidden border sm:p-8 group rounded-2xl bg-white/5 backdrop-blur-sm border-white/10 transform-gpu"
                variants={{
                  hidden: { 
                    opacity: 0, 
                    y: 50,
                    scale: 0.9
                  },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }
                  }
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { 
                    duration: 0.2,
                    ease: "easeOut"
                  }
                }}
              >
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 opacity-0 rounded-2xl group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0" 
                    style={{
                      background: `linear-gradient(90deg, transparent, ${value.color.split(' ')[4]}, transparent)`,
                      animation: 'shimmer 2s linear infinite',
                    }}
                  />
                </motion.div>

                {/* Content Container */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <motion.div 
                    className="flex items-center justify-center w-12 h-12 mb-4 text-3xl rounded-full 
                      sm:w-16 sm:h-16 sm:mb-6 sm:text-4xl bg-white/5 group-hover:bg-[#6DBE45]/10 
                      transition-colors duration-300"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      transition: { 
                        type: "spring",
                        stiffness: 200,
                        damping: 10
                      }
                    }}
                  >
                    <span className="transition-transform duration-300 transform-gpu group-hover:scale-110">
                      {value.icon}
                    </span>
                  </motion.div>

                  {/* Text Content */}
                  <motion.div
                    initial={{ y: 0 }}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="mb-2 text-xl font-bold text-white sm:mb-3 sm:text-2xl 
                      group-hover:text-[#6DBE45] transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-sm leading-relaxed transition-colors duration-300 sm:text-base text-white/70 group-hover:text-white/90">
                      {value.description}
                    </p>
                  </motion.div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 transition-opacity duration-300 opacity-0 -z-10 group-hover:opacity-100 blur-2xl"
                  style={{
                    background: value.color,
                    opacity: 0.1
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Add this to your global CSS */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </motion.section>
  )
}

export default About 