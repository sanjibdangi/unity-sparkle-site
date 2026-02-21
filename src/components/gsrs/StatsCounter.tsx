import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const StatsCounter = () => {
  const [visible, setVisible] = useState(false);
  const [stats, setStats] = useState({ clients: 0, officers: 0, response: 0, satisfaction: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('stats-section');
      if (el && !visible) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) setVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    const targets = { clients: 500, officers: 100, response: 24, satisfaction: 98 };
    const steps = 60;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const p = step / steps;
      setStats({
        clients: Math.floor(targets.clients * p),
        officers: Math.floor(targets.officers * p),
        response: Math.floor(targets.response * p),
        satisfaction: Math.floor(targets.satisfaction * p),
      });
      if (step >= steps) { setStats(targets); clearInterval(timer); }
    }, 2000 / steps);
    return () => clearInterval(timer);
  }, [visible]);

  const items = [
    { value: `${stats.clients}+`, label: 'Clients Protected' },
    { value: `${stats.officers}+`, label: 'Security Officers' },
    { value: `${stats.response}/7`, label: 'Hour Availability' },
    { value: `${stats.satisfaction}%`, label: 'Client Satisfaction' },
  ];

  return (
    <section id="stats-section" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">{item.value}</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
