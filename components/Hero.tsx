
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/180/1920/1080" 
          alt="Professional Workshop" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white text-center md:text-left">
        <div className="max-w-3xl">
          <span className="inline-block bg-blue-600 text-sm font-bold tracking-wider uppercase px-4 py-1 rounded-full mb-6">Erfolgreich zum AdA-Schein</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Ihre AEVO Vorbereitung – <span className="text-blue-400">Flexibel, Modern & Erfolgreich.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
            Starten Sie noch heute in Ihre Zukunft als qualifizierter Ausbilder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#kontakt" className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-1">
              Kurs jetzt starten
            </a>
            <a href="#inhalte" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-lg font-bold px-8 py-4 rounded-xl border border-white/30 transition-all transform hover:-translate-y-1">
              Studieninhalte ansehen
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave Decor */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C49.1,6.74,117.73,14.9,188.45,13.91,245.56,13.1,282.56,15.11,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
