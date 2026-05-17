import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

// --- Components ---

const GlassCard = ({ children, className }) => (
  <div className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden ${className}`}>
    {children}
  </div>
);

const SectionHeading = ({ title }) => (
  <div className="mb-12">
    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-400 mb-4">
      {title}
    </h2>
    <div className="h-1 w-20 bg-purple-600 rounded-full" />
  </div>
);

// --- Sections ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050816]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <span className="text-2xl font-bold tracking-tighter text-white">
          THANMAI <span className="text-purple-500">POSA</span>
        </span>
        
        <div className="hidden md:flex space-x-8 text-gray-400">
          {['About', 'Services', 'Work', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-500 transition-colors">{item}</a>
          ))}
        </div>

        <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0B1120] border-b border-white/10 px-6 py-8"
          >
            <div className="flex flex-col space-y-6 text-lg text-white">
              {['About', 'Services', 'Work', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>{item}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
const Hero = () => {
  return (
    // JUST ADD id="about" RIGHT HERE:
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#050816]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium mb-6 inline-block">
            Available for New Projects
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight leading-tight">
            I Build <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Futuristic</span> Digital Experiences
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Modern websites, cinematic animations, and premium digital experiences for brands and businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#work" className="px-8 py-4 bg-purple-600 text-white rounded-full font-bold hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Business Websites", icon: "🌐", desc: "High-converting corporate sites." },
    { title: "UI/UX Design", icon: "🎨", desc: "Modern, intuitive interfaces." },
    { title: "Video Editing", icon: "🎬", desc: "Cinematic storytelling and reels." },
    { title: "Motion Design", icon: "✨", desc: "Interactive site animations." },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Specialized Services" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <GlassCard key={i} className="p-8 group hover:bg-white/10 transition-all">
              <div className="text-4xl mb-6">{s.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projs = [
    { title: "Futuristic Cafe", cat: "Web Design", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800" },
    { title: "Luxury Store", cat: "E-Commerce", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" },
    { title: "Gaming Hub", cat: "Landing Page", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section id="work" className="py-24 px-6 bg-[#050816]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Selected Works" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projs.map((p, i) => (
            <div key={i} className="relative group cursor-pointer rounded-3xl overflow-hidden border border-white/10">
              <img src={p.img} alt={p.title} className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 p-8">
                <span className="text-purple-400 text-sm font-bold uppercase tracking-widest">{p.cat}</span>
                <h3 className="text-2xl font-bold text-white mt-2">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  // This is the "brain" that remembers what you type
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    // This opens the user's email app and fills in your email, the subject, and their message
    const mailtoUrl = `mailto:posathanmai1@gmail.com?subject=New Message from ${name}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#050816]">
      <div className="max-w-7xl mx-auto">
        <GlassCard className="p-12 lg:p-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Let's build <span className="text-purple-500">amazing.</span></h2>
              <p className="text-gray-400 mb-10 text-lg">Ready to start? Reach out directly.</p>
              <div className="space-y-6">
                <a href="mailto:posathanmai1@gmail.com" className="text-white text-lg block hover:text-purple-400 transition-colors">
                  📧 posathanmai1@gmail.com
                </a>
                <a href="https://wa.me/917569823027" target="_blank" className="text-white text-lg block hover:text-green-400 transition-colors">
                  💬 WhatsApp: +91 7569823027
                </a>
                <a href="tel:+917569823027" className="text-white text-lg block hover:text-blue-400 transition-colors">
                  📞 Call: +91 7569823027
                </a>
              </div>
            </div>

            {/* FORM SECTION */}
            <form onSubmit={handleSendMessage} className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-purple-500 transition-all" 
              />
              <textarea 
                placeholder="Your Message" 
                rows={4} 
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-purple-500 transition-all"
              ></textarea>
              <button 
                type="submit"
                className="w-full py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all active:scale-95"
              >
                Send Message 🚀
              </button>
            </form>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-white/5 text-center bg-[#050816]">
    <div className="flex justify-center space-x-8 mb-6">
      <a href="https://github.com/posathanmai1-lang" target="_blank" className="text-gray-400 hover:text-white font-bold transition-all underline decoration-purple-500">GitHub</a>
      <a href="https://wa.me/917569823027" target="_blank" className="text-gray-400 hover:text-white font-bold transition-all underline decoration-green-500">WhatsApp</a>
    </div>
    <p className="text-gray-400 text-sm">
      © {new Date().getFullYear()} • Developed by <span className="text-white font-bold">Thanmai Posa</span>
    </p>
  </footer>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#050816] min-h-screen text-white selection:bg-purple-500/30 overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-purple-600 origin-left z-[100]" style={{ scaleX }} />
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
