import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Instagram, 
  Mail, 
  Phone, 
  Play,
  Heart,
  Lightbulb,
  Rocket,
  ArrowRight,
  Send,
  Award,
  Film,
  Sparkles,
  Youtube,
  Monitor,
  Share2
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const { scrollYProgress } = useScroll();
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mainRef.current) return;

    gsap.from('.hero-content', {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: 'power4.out',
    });

    gsap.from('.stats-item', {
      scrollTrigger: {
        trigger: '.stats-section',
        start: 'top center',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    });

    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: '.services-section',
        start: 'top center',
      },
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
    });
  }, []);

  const handleHireMe = () => {
    const message = encodeURIComponent("Hi Mohammad Saad, I'd love to discuss a project with you!");
    window.open(`https://wa.me/+919104216269?text=${message}`, '_blank');
  };

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={mainRef} className="bg-[#0a0a0a]">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 origin-left z-50"
        style={{ scaleX: scaleProgress }}
      />

      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold gradient-text">MD.SAAD</span>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#work" className="hover:text-cyan-400 transition-colors">Work</a>
              <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <button
                onClick={handleHireMe}
                className="px-6 py-2 gradient-border rounded-full hover:scale-105 transition-transform"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80')] opacity-10 mix-blend-overlay" />
        
        <div className="hero-content container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-48 h-48 mx-auto mb-12 relative"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-spin-slow" />
              <img 
                src="https://i.ibb.co/z29d5Dd/photo-1.jpg" 
                alt="Mohammad Saad"
                className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover"
              />
            </motion.div>

            <TypeAnimation
              sequence={[
                "Hi, I'm Mohammad Saad",
                1000,
                "I create engaging videos",
                1000,
                "I tell stories that matter",
                1000,
              ]}
              wrapper="h1"
              speed={50}
              className="text-5xl md:text-7xl font-bold mb-8 gradient-text"
              repeat={Infinity}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              Professional video editor with expertise in creating captivating content
              for brands, artists, and storytellers worldwide.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleHireMe}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full text-lg font-semibold flex items-center gap-2"
              >
                Start a Project <ArrowRight className="w-5 h-5" />
              </motion.button>
              <a 
                href="#work"
                className="px-8 py-4 gradient-border rounded-full text-lg font-semibold hover:scale-105 transition-transform"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 stats-section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '100+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '1M+', label: 'Views Generated' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="stats-item text-center p-6 glass-effect rounded-2xl"
                whileHover={{ y: -10 }}
              >
                <h3 className="text-4xl font-bold gradient-text mb-2">{stat.number}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 services-section relative">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent opacity-50" />
        <div className="container mx-auto px-6 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">My Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Film className="w-8 h-8" />,
                title: 'Commercial Editing',
                description: 'High-impact video edits for brands and businesses that drive engagement and conversions.',
                features: ['Brand Guidelines', 'Color Grading', 'Sound Design']
              },
              {
                icon: <Youtube className="w-8 h-8" />,
                title: 'YouTube Content',
                description: 'Engaging edits for YouTube creators that keep viewers watching and subscribers growing.',
                features: ['Retention Optimization', 'Thumbnail Design', 'End Screens']
              },
              {
                icon: <Monitor className="w-8 h-8" />,
                title: 'Social Media Content',
                description: 'Scroll-stopping content optimized for each social media platform.',
                features: ['Platform Optimization', 'Trending Styles', 'Engagement Focus']
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: 'Motion Graphics',
                description: 'Custom animations and effects that bring your content to life.',
                features: ['2D Animation', 'Text Animation', 'Logo Animation']
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Event Highlights',
                description: 'Capture the essence of your events with cinematic highlight reels.',
                features: ['Same-Day Delivery', 'Music Licensing', 'Multiple Formats']
              },
              {
                icon: <Share2 className="w-8 h-8" />,
                title: 'Content Strategy',
                description: 'Strategic planning for your video content to maximize impact.',
                features: ['Platform Strategy', 'Content Calendar', 'Analytics Review']
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="service-card glass-effect p-8 rounded-2xl gradient-border"
                whileHover={{ y: -10 }}
              >
                <div className="text-cyan-400 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Featured Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Travel Vlog Series',
                type: 'YouTube Content',
                views: '1.2M views',
                image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd'
              },
              { 
                title: 'Spotify Wrapped',
                type: 'Social Media',
                views: '800K views',
                image: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7'
              },
              { 
                title: 'TEDx Event',
                type: 'Event Coverage',
                views: '500K views',
                image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2'
              },
              { 
                title: 'Fashion Week',
                type: 'Event Highlights',
                views: '1.5M views',
                image: 'https://images.unsplash.com/photo-1537832816519-689ad163238b'
              },
              { 
                title: 'Music Festival',
                type: 'After Movie',
                views: '3M views',
                image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-video relative">
                  <img 
                    src={`${project.image}?auto=format&fit=crop&q=80`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-2">{project.type}</p>
                      <p className="text-cyan-400 text-sm">{project.views}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent opacity-50" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto glass-effect rounded-2xl p-8 md:p-12 gradient-border">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">Let's Create Together</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <motion.a
                    href="mailto:contact@mohammadsaad.com"
                    className="flex items-center gap-4 text-lg group"
                    whileHover={{ x: 10 }}
                  >
                    <span className="w-12 h-12 rounded-full glass-effect flex items-center justify-center group-hover:text-cyan-400">
                      <Mail className="w-6 h-6" />
                    </span>
                    contact@mohammadsaad.com
                  </motion.a>
                  <motion.a
                    href="tel:+1234567890"
                    className="flex items-center gap-4 text-lg group"
                    whileHover={{ x: 10 }}
                  >
                    <span className="w-12 h-12 rounded-full glass-effect flex items-center justify-center group-hover:text-cyan-400">
                      <Phone className="w-6 h-6" />
                    </span>
                    +1 (234) 567-890
                  </motion.a>
                  <motion.a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-lg group"
                    whileHover={{ x: 10 }}
                  >
                    <span className="w-12 h-12 rounded-full glass-effect flex items-center justify-center group-hover:text-cyan-400">
                      <Instagram className="w-6 h-6" />
                    </span>
                    @mohammadsaad.edits
                  </motion.a>
                </div>
              </div>

              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell me about your project"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg font-semibold flex items-center justify-center gap-2"
                >
                  Send Message <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2024 Mohammad Saad. Crafting visual stories that inspire.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;