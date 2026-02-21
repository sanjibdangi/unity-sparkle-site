import { Shield, Award, Clock, Eye, Users, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const capabilities = [
  { icon: <Shield className="w-6 h-6" />, title: 'Licensed Professionals', desc: 'All officers are fully licensed, bonded, and insured' },
  { icon: <Award className="w-6 h-6" />, title: 'Certified Training', desc: 'Ongoing professional development and certification' },
  { icon: <Clock className="w-6 h-6" />, title: '24/7 Availability', desc: 'Round-the-clock protection and emergency response' },
  { icon: <Eye className="w-6 h-6" />, title: 'Advanced Technology', desc: 'State-of-the-art surveillance and monitoring systems' },
  { icon: <Users className="w-6 h-6" />, title: 'Experienced Team', desc: 'Experienced veterans and law enforcement professionals' },
  { icon: <Lock className="w-6 h-6" />, title: 'Risk Management', desc: 'Comprehensive threat assessment and mitigation' },
];

export const DifferentiatorsSection = () => (
  <section id="differentiators" className="relative py-20 bg-gradient-to-b from-background via-secondary to-background">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-black mb-4">
          Why Choose <span className="text-primary">GSRS</span>
        </h2>
        <p className="text-muted-foreground text-xl">Elite capabilities that set us apart</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {capabilities.map((cap, idx) => (
          <motion.div
            key={idx}
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative glass glass-hover rounded-2xl p-8 hover:-translate-y-2 duration-300">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                {cap.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{cap.title}</h3>
              <p className="text-muted-foreground">{cap.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
