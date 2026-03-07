import { motion } from 'motion/react';
import { Home, Code2, Briefcase, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: Home, href: '#hero' },
    { name: 'Skills', icon: Code2, href: '#skills' },
    { name: 'Projects', icon: Briefcase, href: '#projects' },
    { name: 'Contact', icon: Mail, href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            &lt;Supriyo /&gt;
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 rounded-xl text-gray-300 hover:text-white transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Glassmorphic background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/10 transition-opacity duration-300" />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  
                  <div className="relative flex items-center gap-2">
                    <Icon size={18} />
                    <span className="font-medium">{item.name}</span>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="relative w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Glassmorphic background */}
                  <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/10 transition-opacity duration-300" />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-cyan-400 rounded-lg blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                  
                  <Icon size={18} className="relative z-10" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-center gap-1 pb-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative px-3 py-1.5 rounded-lg text-xs text-gray-300 hover:text-white transition-colors group flex items-center gap-1.5"
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/10 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                <Icon size={14} className="relative z-10" />
                <span className="relative z-10 font-medium">{item.name}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
