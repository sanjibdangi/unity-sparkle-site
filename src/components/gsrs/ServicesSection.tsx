import { useState } from 'react';
import { Shield, Users, Eye, Zap, Lock, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const services = [
  {
    id: 0,
    label: 'Armed Security',
    icon: <Shield className="w-5 h-5" />,
    color: 'primary' as const,
    image: 'https://media.gettyimages.com/id/670513904/photo/two-security-guard.jpg?s=612x612&w=0&k=20&c=XEyCjvQ4C9RlyGm_GgIAHczq__Egyff041eBHlx74wQ=',
    title: 'Armed Security',
    subtitle: 'Elite Protection for High-Risk Operations',
    description: 'Our elite armed security officers provide military-grade protection for sensitive operations, high-value assets, and executive personnel.',
    features: [
      { title: 'Executive & VIP Protection', desc: 'Personal security details for high-profile individuals' },
      { title: 'High-Value Asset Security', desc: 'Comprehensive protection for critical infrastructure and assets' },
      { title: 'Threat Assessment & Mitigation', desc: 'Proactive risk analysis and security planning' },
      { title: 'Mobile Armed Patrols', desc: '24/7 roving security teams across your facilities' },
      { title: 'Emergency Response Teams', desc: 'Rapid deployment for critical security incidents' },
      { title: 'Event Security Management', desc: 'Comprehensive protection for large-scale events' },
    ],
  },
  {
    id: 1,
    label: 'Unarmed Security',
    icon: <Users className="w-5 h-5" />,
    color: 'secondary' as const,
    image: 'https://secureguardservices.com/wp-content/uploads/2024/02/unarmed-guard.jpg',
    title: 'Unarmed Security',
    subtitle: 'Professional Presence & Access Control',
    description: 'Trained security professionals providing visible deterrence and comprehensive facility protection without armed presence.',
    features: [
      { title: 'Corporate Facility Security', desc: 'Professional security presence for office buildings and campuses' },
      { title: 'Event & Concert Protection', desc: 'Crowd management and access control for large gatherings' },
      { title: 'Access Control Systems', desc: 'Entry point management and visitor screening' },
      { title: 'Visitor Management', desc: 'Professional reception and guest coordination' },
      { title: 'Loss Prevention Services', desc: 'Retail and commercial theft deterrence' },
      { title: 'Patrol & Monitoring', desc: 'Regular facility inspections and reporting' },
    ],
  },
  {
    id: 2,
    label: 'Surveillance',
    icon: <Eye className="w-5 h-5" />,
    color: 'blue' as const,
    image: 'https://www.g4s.com/en-in/-/media/g4s/india/images/modules/newsandcontent/securesolutions/cctv_new2020.jpg',
    title: 'Surveillance & Monitoring',
    subtitle: '24/7 Advanced Technology Systems',
    description: 'State-of-the-art surveillance technology with real-time monitoring, threat detection, and rapid alarm response capabilities.',
    features: [
      { title: 'CCTV & Camera Systems', desc: 'High-definition camera installation and management' },
      { title: 'Remote Monitoring Centers', desc: '24/7 surveillance from our command centers' },
      { title: 'Alarm Response Services', desc: 'Immediate response to security system alerts' },
      { title: 'Real-Time Analytics', desc: 'AI-powered threat detection and pattern recognition' },
      { title: 'Video Surveillance', desc: 'Comprehensive recording and footage management' },
      { title: 'Perimeter Security', desc: 'Advanced intrusion detection systems' },
    ],
  },
  {
    id: 3,
    label: 'Rapid Response',
    icon: <Zap className="w-5 h-5" />,
    color: 'orange' as const,
    image: 'https://media.istockphoto.com/id/700742810/photo/emergency-medical-service.jpg?s=612x612&w=0&k=20&c=3bt8A3z_Z8_23qKoPj6-a6ZEm3_O0pWbwNbNwI8_OAM=',
    title: 'Rapid Response',
    subtitle: 'Emergency Deployment Teams',
    description: 'Our rapid response units deploy within 15-30 minutes for critical security emergencies with guaranteed availability 24/7/365.',
    features: [
      { title: '15-30 Minute Response Time', desc: 'Guaranteed rapid deployment across Nevada' },
      { title: 'Mobile Patrol Units', desc: 'Fully equipped roving security teams' },
      { title: '24/7 Emergency Availability', desc: 'Round-the-clock readiness for critical incidents' },
      { title: 'Crisis Management', desc: 'Expert coordination during security emergencies' },
      { title: 'Emergency Coordination', desc: 'Liaison with law enforcement and first responders' },
      { title: 'Incident Response Teams', desc: 'Specialized teams for various threat scenarios' },
    ],
  },
];

const colorMap = {
  primary: { bg: 'bg-primary', bgLight: 'bg-primary/20', text: 'text-primary', hover: 'group-hover/item:bg-primary', shadow: 'shadow-primary/50' },
  secondary: { bg: 'bg-muted', bgLight: 'bg-muted/50', text: 'text-muted-foreground', hover: 'group-hover/item:bg-muted', shadow: 'shadow-muted/50' },
  blue: { bg: 'bg-blue-600', bgLight: 'bg-blue-600/20', text: 'text-blue-400', hover: 'group-hover/item:bg-blue-600', shadow: 'shadow-blue-600/50' },
  orange: { bg: 'bg-orange-600', bgLight: 'bg-orange-600/20', text: 'text-orange-500', hover: 'group-hover/item:bg-orange-600', shadow: 'shadow-orange-600/50' },
};

export const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const active = services[activeService];
  const colors = colorMap[active.color];

  return (
    <section id="services" className="relative min-h-screen py-20 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 px-6 py-2 rounded-full mb-6">
            <Lock className="w-4 h-4 text-primary" />
            <span className="text-primary font-bold tracking-wider text-sm">OUR SECURITY ARSENAL</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            Elite <span className="text-primary">Protection</span> Services
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Click each service to explore our comprehensive security solutions
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveService(s.id)}
              className={`group relative px-8 py-4 rounded-full font-bold transition-all duration-300 ${
                activeService === s.id
                  ? 'bg-primary text-primary-foreground scale-110'
                  : 'glass text-muted-foreground hover:text-foreground'
              }`}
            >
              <span className="flex items-center gap-2">{s.icon}{s.label}</span>
              {activeService === s.id && <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50 -z-10" />}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden group">
              <img src={active.image} alt={active.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <div className={`w-24 h-24 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 shadow-2xl`}>
                  <div className="text-foreground scale-[2.5]">{active.icon}</div>
                </div>
                <h3 className="text-5xl font-black mb-3">{active.title}</h3>
                <p className="text-xl text-muted-foreground">{active.subtitle}</p>
              </div>
            </div>

            {/* Features */}
            <div>
              <p className="text-2xl text-muted-foreground mb-8 leading-relaxed">{active.description}</p>
              <div className="space-y-6 mb-10">
                {active.features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-4 group/item">
                    <div className={`w-12 h-12 ${colors.bgLight} ${colors.hover} rounded-xl flex items-center justify-center flex-shrink-0 transition-all`}>
                      <CheckCircle className={`w-6 h-6 ${colors.text} group-hover/item:text-foreground`} />
                    </div>
                    <div>
                      <div className="text-lg font-bold mb-1">{f.title}</div>
                      <div className="text-sm text-muted-foreground">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => scrollTo('contact')}
                className={`px-10 py-5 ${colors.bg} text-foreground font-black text-lg rounded-full transition-all shadow-2xl ${colors.shadow} hover:opacity-90`}
              >
                REQUEST {active.label.toUpperCase()}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
