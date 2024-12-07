import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1
  })

  const contactInfo = [
    {
      icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
      title: "Phone",
      content: "+94 77 777 7777",
      href: "tel:+94777777777"
    },
    {
      icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
      title: "Email",
      content: "demo@abraham.dev",
      href: "mailto:demo@abraham.dev"
    },
    {
      icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
      title: "Address",
      content: "aaaaa, aaaaa",
      href: "https://maps.google.com"
    }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section 
      ref={ref}
      id="contact" 
      className="relative py-32 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#1A1A1A] overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        key={`bg-${inView}`}
      >
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, #6DBE45 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
          animate={inView ? {
            backgroundPosition: ['0% 0%', '100% 100%']
          } : {}}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity
          }}
        />
      </motion.div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, type: "spring" }}
          key={`header-${inView}`}
        >
          <h2 className="mb-4 text-5xl font-bold text-center text-white lg:text-6xl">
            Let&apos;s <span className="text-[#6DBE45]">Connect</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-center text-white/70">
            Have a project in mind? We&apos;d love to hear from you! Drop us a message 
            and we&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Contact Form */}
          <motion.div 
            className="p-6 overflow-hidden border sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border-white/10"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            key={`form-${inView}`}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-[#6DBE45] 
                      focus:ring-2 focus:ring-[#6DBE45]/20 outline-none transition-colors placeholder:text-white/30 text-white"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-[#6DBE45] 
                      focus:ring-2 focus:ring-[#6DBE45]/20 outline-none transition-colors placeholder:text-white/30 text-white"
                  />
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-[#6DBE45] 
                    focus:ring-2 focus:ring-[#6DBE45]/20 outline-none transition-colors placeholder:text-white/30 text-white"
                />
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-[#6DBE45] 
                    focus:ring-2 focus:ring-[#6DBE45]/20 outline-none transition-colors placeholder:text-white/30 text-white resize-none"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 bg-[#6DBE45] text-white font-bold rounded-lg
                  transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70
                  disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full 
                  group-hover:translate-x-0 transition-transform duration-700" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
            key={`info-${inView}`}
          >
            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={`${info.title}-${inView}`}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/5 
                    backdrop-blur-sm hover:border-[#6DBE45]/50 transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <div className="p-3 rounded-full bg-[#6DBE45]/20 group-hover:bg-[#6DBE45]/30 transition-colors">
                    <svg className="w-6 h-6 text-[#6DBE45]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={info.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white group-hover:text-[#6DBE45] transition-colors">
                      {info.title}
                    </h3>
                    <p className="text-white/70">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map */}
            <motion.div 
              className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
              key={`map-${inView}`}
            >
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197251.3275864246!2d79.95846932910156!3d6.927079299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259c9a8043d5b%3A0x5f04e4c3a40b2c5!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1647045973563!5m2!1sen!2s"
                className="w-full h-[350px] border-0 opacity-90"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 