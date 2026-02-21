import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => scrollTo('contact')}
      className="fixed bottom-8 right-8 bg-primary text-primary-foreground p-5 rounded-full shadow-2xl hover:opacity-90 transition-all z-50 group glow-red"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-secondary text-foreground px-5 py-3 rounded-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Get a Quote
      </span>
    </button>
  );
};
