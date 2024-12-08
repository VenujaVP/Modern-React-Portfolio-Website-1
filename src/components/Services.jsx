import { useState } from 'react'
import { motion } from 'framer-motion'
import useAnimateOnScroll, { fadeInUpVariants, staggerChildrenVariants, scaleInVariants } from '../hooks/useAnimateOnScroll'

function Services() {
  // Track which service card is being hovered
  const [hoveredIndex, setHoveredIndex] = useState(null)

  // Set up scroll animations for the whole section and the grid
  const { ref: sectionRef, controls: sectionControls, inView: sectionInView } = useAnimateOnScroll(0.1)
  const { ref: gridRef, controls: gridControls, inView: gridInView } = useAnimateOnScroll(0.15)

  // List of all services with their details
  const services = [
    {
      title: 'Web Development',
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      description: 'Custom, responsive websites built with modern technologies. From simple landing pages to complex web applications.',
      gradient: 'from-[#6DBE45] to-[#204E27]'
    },
    {
      title: 'Mobile Development',
      icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on any device.',
      gradient: 'from-[#204E27] to-[#6DBE45]'
    },
    {
      title: 'UI/UX Design',
      icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
      description: 'Intuitive interfaces and seamless user experiences that engage and delight your audience.',
      gradient: 'from-[#6DBE45] to-[#204E27]'
    },
    {
      title: 'E-commerce Solutions',
      icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
      description: 'Full-featured online stores with secure payment processing and inventory management.',
      gradient: 'from-[#204E27] to-[#6DBE45]'
    },
    {
      title: 'SEO Optimization',
      icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
      description: 'Improve your search engine rankings and drive organic traffic to your website.',
      gradient: 'from-[#6DBE45] to-[#204E27]'
    },
    {
      title: 'Brand Strategy',
      icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z',
      description: 'Comprehensive branding solutions that help your business stand out in the market.',
      gradient: 'from-[#204E27] to-[#6DBE45]'
    },
  ]

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative py-24 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#1A1A1A] overflow-hidden"
    >
      {/* Moving dots background */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={sectionInView ? { opacity: 0.1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        key={`bg-${sectionInView}`}
      >
        {/* Dots pattern that moves across the screen */}
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, #6DBE45 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </motion.div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title and subtitle that fade in when scrolled into view */}
        <motion.div 
          variants={staggerChildrenVariants}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          className="mb-20 text-center"
          key={`header-${sectionInView}`}
        >
          <motion.h2 
            variants={fadeInUpVariants}
            className="mb-6 text-5xl font-bold text-white lg:text-6xl"
          >
            Our <span className="text-[#6DBE45]">Services</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUpVariants}
            className="max-w-3xl mx-auto text-xl text-white/70"
          >
            Transforming ideas into digital reality with our comprehensive suite of services
          </motion.p>
        </motion.div>

        {/* Grid of service cards */}
        <motion.div 
          ref={gridRef}
          variants={staggerChildrenVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          key={`grid-${gridInView}`}
        >
          {/* Map through each service to create cards */}
          {services.map((service, index) => (
            <motion.div
              key={`${service.title}-${gridInView}`}
              className="relative group"
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
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Each service card */}
              <motion.div 
                className="relative h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm
                  border border-white/10 overflow-hidden transition-all duration-300
                  group-hover:border-[#6DBE45]/50"
                whileHover={{ 
                  y: -8,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }
                }}
              >
                {/* Green gradient that shows on hover */}
                <motion.div 
                  className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300
                    bg-gradient-to-br ${service.gradient}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ 
                    scale: 1,
                    opacity: 0.05,
                    transition: { duration: 0.3 }
                  }}
                />

                {/* Service icon that spins on hover */}
                <motion.div 
                  className="relative w-16 h-16 mb-8 rounded-xl bg-[#6DBE45]/10 
                    flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 360,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 15
                    }
                  }}
                >
                  <motion.svg
                    className={`w-8 h-8 transition-colors duration-300
                      ${hoveredIndex === index ? 'text-[#6DBE45]' : 'text-white'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    whileHover={{ scale: 1.1 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={service.icon}
                    />
                  </motion.svg>
                </motion.div>

                {/* Service title and description */}
                <motion.h3 
                  className="text-2xl font-bold text-white mb-4 group-hover:text-[#6DBE45] transition-colors"
                  variants={fadeInUpVariants}
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  className="mb-8 leading-relaxed text-white/70"
                  variants={fadeInUpVariants}
                >
                  {service.description}
                </motion.p>

                {/* Learn More button with arrow */}
                <motion.button
                  className="flex items-center gap-2 text-[#6DBE45] font-medium
                    group/btn relative overflow-hidden"
                  whileHover={{ 
                    x: 5,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 10
                    }
                  }}
                >
                  <span>Learn More</span>
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={{ 
                      x: 5,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                      }
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services 