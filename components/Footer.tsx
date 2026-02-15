
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <span className="font-bold text-xl">AEVO Express</span>
          </div>
          
          <div className="flex gap-8 text-sm text-slate-400">
          </div>

          <div className="flex gap-4">
           
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} AEVO Express. Alle Rechte vorbehalten. Ihr Partner für die AdA-Prüfung.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
