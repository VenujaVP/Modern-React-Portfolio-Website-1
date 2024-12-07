import { useState, useRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')
  const videoRef = useRef(null)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  const carouselRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const categories = ['all', 'web', 'mobile', 'design', 'blockchain']

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "A full-stack e-commerce solution with real-time inventory management",
      image: "1.jpeg",
      video: "/project-demos/ecommerce-demo.mp4",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      testimonial: {
        text: "The e-commerce platform transformed our business. Sales increased by 200% in the first quarter!",
        author: "Sarah Johnson",
        role: "CEO, Fashion Boutique",
        avatar: "https://source.unsplash.com/random/100x100/?woman"
      },
      stats: {
        users: "50K+",
        transactions: "100K+",
        revenue: "$2M+"
      }
    },
    {
      id: 2,
      title: "Health & Fitness App",
      category: "mobile",
      description: "Cross-platform mobile app for workout tracking and meal planning",
      image: "2.jpeg",
      video: "/project-demos/fitness-demo.mp4",
      tags: ["React Native", "Firebase", "Redux", "GraphQL"],
      testimonial: {
        text: "User engagement increased dramatically. The app is intuitive and feature-rich.",
        author: "Mike Chen",
        role: "Fitness Director",
        avatar: "https://source.unsplash.com/random/100x100/?man"
      }
    },
    {
      id: 3,
      title: "Real Estate Platform",
      category: "web",
      description: "Property listing and management system with virtual tours",
      image: "3.jpeg",
      video: "/project-demos/realestate-demo.mp4",
      tags: ["Next.js", "Prisma", "PostgreSQL", "ThreeJS"],
      testimonial: {
        text: "The virtual tour feature revolutionized how we showcase properties.",
        author: "Lisa Park",
        role: "Real Estate Agent",
        avatar: "https://source.unsplash.com/random/100x100/?person"
      }
    },
    {
      id: 4,
      title: "Blockchain Marketplace",
      category: "blockchain",
      description: "Decentralized marketplace for digital assets and NFTs",
      image: "4.jpeg",
      video: "/project-demos/blockchain-demo.mp4",
      tags: ["Solidity", "Web3.js", "React", "IPFS"],
      testimonial: {
        text: "A game-changing platform for digital artists and collectors alike.",
        author: "David Kim",
        role: "Digital Artist",
        avatar: "https://source.unsplash.com/random/100x100/?artist"
      }
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const featuredProject = projects.find(p => p.featured)

  return (
    <section 
      ref={ref}
      id="projects" 
      className="relative py-24 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#1A1A1A] overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, #6DBE45 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - adjusted spacing */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-[#6DBE45]">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-white/70 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From concept to completion, here&apos;s a showcase of our innovative solutions 
            and creative endeavors.
          </motion.p>

          {/* Filter Buttons - adjusted spacing */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {categories.map(category => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`
                  px-8 py-3 rounded-full text-sm font-medium transition-all duration-300
                  backdrop-blur-sm border
                  ${activeFilter === category
                    ? 'bg-[#6DBE45] text-white border-[#6DBE45]'
                    : 'bg-white/5 text-white/80 border-white/10 hover:border-[#6DBE45]/50'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Featured Project - adjusted spacing */}
        {featuredProject && (
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10">
              <div className="grid md:grid-cols-2 gap-12 p-10">
                {/* Project Video/Image Container */}
                <div className="relative aspect-video rounded-xl overflow-hidden group">
                  {featuredProject.video ? (
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      controls
                    >
                      <source src={featuredProject.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute top-4 left-4 bg-[#6DBE45] text-white px-6 py-2 rounded-full text-sm font-medium">
                    Featured Project
                  </div>
                </div>

                {/* Project Info with Enhanced Typography */}
                <div className="space-y-8">
                  <h3 className="text-4xl font-bold text-white">
                    {featuredProject.title}
                  </h3>
                  <p className="text-lg text-white/70 leading-relaxed">
                    {featuredProject.description}
                  </p>
                  
                  {/* Enhanced Project Stats */}
                  {featuredProject.stats && (
                    <div className="grid grid-cols-3 gap-6">
                      {Object.entries(featuredProject.stats).map(([key, value]) => (
                        <div key={key} className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                          <div className="text-3xl font-bold text-[#6DBE45]">{value}</div>
                          <div className="text-sm text-white/60 mt-2">
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Enhanced Technologies Tags */}
                  <div className="flex flex-wrap gap-3">
                    {featuredProject.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-4 py-2 text-sm bg-[#6DBE45]/10 text-[#6DBE45] rounded-full
                          border border-[#6DBE45]/20 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Enhanced Testimonial */}
                  {featuredProject.testimonial && (
                    <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                      <p className="text-white/80 italic text-lg mb-6">
                        "{featuredProject.testimonial.text}"
                      </p>
                      <div className="flex items-center gap-4">
                        <img
                          src={featuredProject.testimonial.avatar}
                          alt={featuredProject.testimonial.author}
                          className="w-14 h-14 rounded-full border-2 border-[#6DBE45]"
                        />
                        <div>
                          <div className="font-medium text-white">
                            {featuredProject.testimonial.author}
                          </div>
                          <div className="text-sm text-white/60">
                            {featuredProject.testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Projects Grid - adjusted spacing */}
        <div className="relative">
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto gap-8 snap-x snap-mandatory hide-scrollbar pb-12"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`
                  flex-none w-[350px] snap-center
                  group relative rounded-xl border border-white/10 
                  bg-white/5 backdrop-blur-sm
                  hover:border-[#6DBE45]/50
                  transform transition-all duration-700
                  ${inView ? 'translate-x-0 opacity-100' : 'translate-x-[100vw] opacity-0'}
                `}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Project Image with Overlay */}
                <div className="relative aspect-video overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 
                      group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Project Info with Enhanced Layout */}
                <div className="p-8">
                  <div className="text-sm font-medium text-[#6DBE45] mb-3">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-white/5 text-white/80 rounded-full
                          border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <button
                    className="w-full py-3 px-6 rounded-full bg-[#6DBE45]/20 text-[#6DBE45]
                      border border-[#6DBE45]/30 hover:bg-[#6DBE45]/30 transition-colors
                      backdrop-blur-sm"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Project
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows - adjusted positioning */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6
              bg-white/10 backdrop-blur-sm p-4 rounded-full
              hover:bg-[#6DBE45]/20 transition-colors border border-white/20
              disabled:opacity-50 disabled:cursor-not-allowed z-10"
            onClick={() => carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' })}
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6
              bg-white/10 backdrop-blur-sm p-4 rounded-full
              hover:bg-[#6DBE45]/20 transition-colors border border-white/20
              disabled:opacity-50 disabled:cursor-not-allowed z-10"
            onClick={() => carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' })}
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects 