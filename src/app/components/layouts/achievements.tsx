import { motion } from 'motion/react';
import { Award, Trophy, Star, Target } from 'lucide-react';

const achievements = [
  {
    title: '1st Prize – UDDAN Startup Idea Generation',
    description: 'Won 1st prize at MAKAUT Campus for developing the conceptual framework of a decentralized hyperlocal e-commerce platform with planned local delivery nodes and logistics logic.',
    date: 'February 2026',
    icon: Trophy,
    color: 'from-yellow-400 to-orange-600',
  },
  {
    title: 'Full Stack Internship',
    description: 'Completed a Full Stack Development Internship at AICT Pvt. Ltd., gaining practical experience in modern web application development.',
    date: '2025',
    icon: Award,
    color: 'from-cyan-400 to-blue-600',
  },
  {
    title: 'Technical Event Coordinator',
    description: 'Successfully organized multiple technical events as a coordinator of the Tech Club at Ideal Institute of Engineering, strengthening leadership and teamwork skills.',
    date: '2025',
    icon: Star,
    color: 'from-purple-400 to-pink-600',
  },
  {
    title: 'Technical Certifications',
    description: 'Earned certifications in Git Training and PHP & MySQL from IIT Bombay, strengthening backend development and version control skills.',
    date: '2024',
    icon: Target,
    color: 'from-green-400 to-emerald-600',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Achievements & Certificates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 transform -translate-x-1/2" />

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="group relative inline-block w-full lg:max-w-md">
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                    
                    {/* Card */}
                    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-white/10 shadow-xl group-hover:border-white/20 transition-all duration-300">
                      <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                        {/* Icon */}
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center flex-shrink-0`}>
                          <achievement.icon size={28} className="text-white" />
                        </div>

                        {/* Text */}
                        <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {achievement.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-3">
                            {achievement.description}
                          </p>
                          <p className="text-cyan-400 text-sm font-semibold">
                            {achievement.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 border-4 border-slate-900 z-10" />

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}