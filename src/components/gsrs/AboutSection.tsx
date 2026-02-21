import { Shield, Eye, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const aboutFeatures = [
  { icon: <Shield className="w-5 h-5" />, title: 'Licensed & Bonded', desc: 'All officers are Nevada-certified professionals' },
  { icon: <Eye className="w-5 h-5" />, title: 'AI-Powered Surveillance', desc: 'Next-gen monitoring with 24/7 threat detection' },
  { icon: <AlertTriangle className="w-5 h-5" />, title: 'Rapid Response', desc: 'Mobile units deploy in 15-30 minutes' },
];

export const AboutSection = () => (
  <section id="about" className="relative py-20 bg-gradient-to-b from-background via-secondary to-background">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Floating Image Cards */}
        <div className="relative h-[600px] hidden lg:block">
          <motion.div
            className="absolute top-0 left-0 w-72 h-96 rounded-3xl overflow-hidden border-4 border-primary shadow-2xl shadow-primary/20 rotate-6 hover:rotate-0 transition-transform duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src="https://images.unsplash.com/photo-1652148555073-4b1d2ecd664c?w=400" alt="Security officer" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            className="absolute bottom-0 right-0 w-72 h-80 rounded-3xl overflow-hidden border-4 border-glass-border shadow-2xl -rotate-6 hover:rotate-0 transition-transform duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <img src="https://images.unsplash.com/photo-1724343025504-3afb6d67566b?w=400" alt="Security team" className="w-full h-full object-cover" />
          </motion.div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-transparent" />
            <span className="text-primary font-bold tracking-[0.3em] text-sm">ABOUT GSRS</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Nevada's Most <span className="text-primary">Trusted</span> Security Force
          </h2>

          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Founded in 2015, GSRS delivers military-grade security solutions across Nevada. We specialize in armed operations, advanced surveillance, and risk mitigation for government, corporate, and high-net-worth clients.
          </p>

          <div className="space-y-4">
            {aboutFeatures.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="font-bold mb-1">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
