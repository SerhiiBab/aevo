
import React from 'react';

const Advantages: React.FC = () => {
  const advantages = [
    {
      icon: "fa-leaf",
      title: "Vorbereitung ohne Stress",
      description: "Lernen Sie in Ihrem eigenen Tempo ohne Druck durch starre Stundenpläne."
    },

    {
      icon: "fa-map-marked-alt",
      title: "Zeitlich & räumlich flexibel",
      description: "Ob Zuhause, im Büro oder unterwegs - lernen Sie, wo Sie sich wohlfühlen."
    }
  ];

  return (
    <section id="vorteile" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Warum AEVO Express wählen?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Profitieren Sie von unserem durchdachten Konzept, das speziell auf die Bedürfnisse berufstätiger angehender Ausbilder zugeschnitten ist.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <i className={`fas ${adv.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{adv.title}</h3>
              <p className="text-slate-600 leading-relaxed">{adv.description}</p>
            </div>
          ))}
          
          {/* Price Card */}
          <div className="bg-blue-600 p-8 rounded-2xl shadow-xl text-white flex flex-col justify-center items-center text-center transform hover:scale-105 transition-transform">
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-5xl font-bold">100% kostenlos</span>
            </div>
            <p className="text-sm opacity-90 mb-6">Keine versteckten Kosten. Voller Zugriff auf alle Kursinhalte.</p>
            <a href="#kontakt" className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors">
              Jetzt Kurs starten
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
