
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-2 rounded-lg">
            <i className="fas fa-graduation-cap text-xl"></i>
          </div>
          <span className={`font-bold text-xl ${scrolled ? 'text-slate-800' : 'text-white'}`}>AEVO Express</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#vorteile" className={`hover:text-blue-600 transition-colors font-medium ${scrolled ? 'text-slate-600' : 'text-white'}`}>Vorteile</a>
          <a href="#inhalte" className={`hover:text-blue-600 transition-colors font-medium ${scrolled ? 'text-slate-600' : 'text-white'}`}>Studieninhalte</a>
          <a href="#kontakt" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all font-semibold">Jetzt Starten</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
