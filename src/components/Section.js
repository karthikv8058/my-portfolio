import React, { useRef, useEffect, useState } from 'react';


const bgImages = {
  me: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80', // dev with laptop
  skills: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80', // code/keyboard
  experience: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80', // team working
  projects: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80', // UI/UX elements
  education: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80', // books/learning
};


const Section = React.forwardRef(({ id, title, children }, ref) => {
  const sectionRef = useRef();
  const [parallax, setParallax] = useState(0);
  const [visible, setVisible] = useState(false);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Parallax only when section is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const percent = (windowHeight - rect.top) / (windowHeight + rect.height);
        setParallax(percent * 40 - 20); // -20px to +20px
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fade/slide-in effect for children
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

return (
    <section
        id={id}
        ref={(node) => {
            sectionRef.current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) ref.current = node;
        }}
        className="w-full min-h-screen flex flex-col justify-center items-center py-8 px-4 snap-start relative overflow-hidden"
        style={{
            backgroundImage: `url(${bgImages[id]})`,
            backgroundSize: 'cover',
            backgroundPosition: `center ${parallax}px`,
            backgroundRepeat: 'no-repeat',
            transition: 'background-position 0.4s cubic-bezier(.4,0,.2,1)',
        }}
    >
        {/* Overlay only for image, not affecting text */}
      <div className="absolute inset-0 bg-black opacity-90 z-0" />
      <h2 className="text-4xl font-extrabold mb-4 text-yellow-300 drop-shadow-lg z-10 relative transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)' }}>{title}</h2>
      <div className={`w-full max-w-3xl z-10 relative transition-all duration-700 text-gray-100 drop-shadow-lg ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
        {children}
      </div>
    </section>
  );
});

export default Section;
