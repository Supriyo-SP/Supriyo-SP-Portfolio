
import { motion } from 'motion/react';
import { Code2, Cpu, Sparkles, Terminal, Zap, Rocket, GraduationCap, MapPin, Download, Send } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-24 md:pt-32 pb-12 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 text-cyan-400/10"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Code2 size={80} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/3 text-purple-400/10"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Cpu size={60} />
        </motion.div>
        <motion.div
          className="absolute top-1/3 left-1/4 text-indigo-400/10"
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity }}
        >
          <Sparkles size={50} />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-6 md:gap-8 items-start">
          {/* Left side - Main Hero Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Terminal-style header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-cyan-400/30 shadow-lg"
            >
              <Terminal size={16} className="text-cyan-400" />
              <span className="text-cyan-400 font-mono text-sm">console.log("Welcome!");</span>
            </motion.div>

            {/* Name with unique design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-3 flex-wrap">
                <motion.div
                  className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
                <span className="text-lg md:text-xl text-gray-400 font-medium">Developer & Creator</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none">
                <span className="block text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  SUPRIYO
                </span>
               
              </h1>
            </motion.div>

            {/* Roles with animated badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2 md:gap-3"
            >
              {[
                { icon: Code2, text: 'Frontend Dev', gradient: 'from-cyan-500 to-blue-500' },
                { icon: Cpu, text: 'IoT Builder', gradient: 'from-purple-500 to-pink-500' },
                { icon: Zap, text: 'CS Student', gradient: 'from-green-500 to-emerald-500' },
              ].map((role, i) => {
                const Icon = role.icon;
                return (
                  <motion.div
                    key={role.text}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${role.gradient} rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
                    <div className={`relative px-4 py-2.5 rounded-xl bg-gradient-to-r ${role.gradient} bg-opacity-10 border border-white/10 backdrop-blur-sm flex items-center gap-2`}>
                      <Icon size={16} className="text-white" />
                      <span className="text-white font-semibold text-sm">{role.text}</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl"
            >
              Building innovative web applications and smart IoT systems. Passionate about creating 
              seamless user experiences that bridge software and hardware.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-3 md:gap-4 pt-2"
            >
              <motion.a
                href="#projects"
                className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 flex items-center gap-2"
                whileHover={{ boxShadow: '0 0 30px rgba(6,182,212,0.6)' }}
              >
                <span className="relative z-10">View Projects</span>
                <Rocket size={18} className="relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
              
              <motion.button
                className="group relative px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-white backdrop-blur-sm overflow-hidden transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border-2 border-cyan-500/50 group-hover:border-cyan-400 transition-colors rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                <span className="relative z-10">Resume</span>
                <Download size={18} className="relative z-10" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right side - About Me Card (Compact) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-2xl md:rounded-3xl blur-2xl" />
            
            {/* Main card */}
            <div className="relative rounded-2xl md:rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl p-5 md:p-6 space-y-4 md:space-y-5">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  About Me
                </h3>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center"
                >
                  <Code2 size={20} className="text-white" />
                </motion.div>
              </div>

              {/* Avatar placeholder */}
              <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl blur-lg opacity-60" />
                <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border-2 border-white/20 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-300 text-sm md:text-base leading-relaxed text-center">
                Passionate CS student turning ideas into reality through code. Building solutions 
                that blend software & hardware seamlessly.
              </p>

              {/* Info cards */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-500/20">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Education</p>
                    <p className="text-white font-semibold text-sm">CSE Student</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Location</p>
                    <p className="text-white font-semibold text-sm">India</p>
                  </div>
                </div>
              </div>

              {/* Status badge */}
              <motion.div
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-white font-semibold text-sm">Available for Work</span>
              </motion.div>

              {/* Quick contact */}
              <motion.a
                href="#contact"
                className="group w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-white/10 hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-white font-semibold text-sm">Let's Connect</span>
                <Send size={16} className="relative text-cyan-400" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
