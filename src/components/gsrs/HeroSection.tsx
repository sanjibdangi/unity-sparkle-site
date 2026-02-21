import { Shield, Users, CheckCircle, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-security.jpg';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export const HeroSection = () => {
  const stats = [
    { icon: <Shield className="w-6 h-6" />, label: '24/7', desc: 'Protection' },
    { icon: <Users className="w-6 h-6" />, label: '500+', desc: 'Clients' },
    { icon: <CheckCircle className="w-6 h-6" />, label: '100%', desc: 'Licensed' },
    { icon: <Zap className="w-6 h-6" />, label: '15min', desc: 'Response' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-0">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-danger-dark via-background to-secondary" style={{ clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0 100%)' }} />
        <img src={heroImage} alt="Security team" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        {/* Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-bold tracking-wider">NEVADA'S ELITE SECURITY</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none max-w-3xl">
            <div className="flex justify-between text-foreground mb-2">
              {['S','E','C','U','R','E'].map((l, i) => <span key={i}>{l}</span>)}
            </div>
            <div className="flex justify-between text-gradient-danger mb-2">
              {['D','E','F','E','N','D'].map((l, i) => <span key={i}>{l}</span>)}
            </div>
            <div className="flex justify-between text-foreground">
              {['P','R','O','T','E','C','T'].map((l, i) => <span key={i}>{l}</span>)}
            </div>
          </h1>

          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
            Elite armed & unarmed security solutions. Government-grade protection for corporations and high-value assets.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo('contact')}
              className="group relative px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full overflow-hidden glow-red"
            >
              <span className="relative z-10 flex items-center gap-2">
                GET PROTECTED
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-danger-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="px-8 py-4 border-2 border-glass-border text-foreground font-bold rounded-full hover:bg-glass-hover transition-all"
            >
              VIEW SERVICES
            </button>
          </div>
        </motion.div>

        {/* Right - Stats */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative glass glass-hover rounded-2xl p-6">
                <div className="text-primary mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.desc}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
