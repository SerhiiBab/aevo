
import React, { useState } from 'react';
import { SectionContent } from '../types';

const AccordionItem: React.FC<{ section: SectionContent; isOpen: boolean; onToggle: () => void; index: number }> = ({ section, isOpen, onToggle, index }) => {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button 
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <div className="flex items-center gap-4">
          <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
            {index + 1}
          </span>
          <h3 className={`text-xl font-bold transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-800'}`}>
            {section.title}
          </h3>
        </div>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`}>
          <i className="fas fa-chevron-down text-lg"></i>
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] pb-8' : 'max-h-0'}`}>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 pl-14 pr-4">
          {section.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-600">
              <span className="text-blue-500 mt-1.5"><i className="fas fa-circle text-[8px]"></i></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const sections: SectionContent[] = [
    {
      title: "Ausbildung planen und vorbereiten",
      items: [
        "Ausbildungsvoraussetzungen prüfen und planen",
        "Vorteile und Nutzen der betrieblichen Ausbildung",
        "Strukturen des Berufsbildungssystems",
        "Ausbildungsberufe für den Betrieb auswählen",
        "Prüfung des Betriebes auf Eignung",
        "Aufgaben der Mitwirkenden abstimmen",
        "Ausbildungsplan prozessorientiert erstellen",
        "Kooperationsbedarf mit relevanten Stellen",
        "Kriterien zur Auswahl von Auszubildenden",
        "Berufsausbildungsvertrag vorbereiten"
      ]
    },
    {
      title: "Ausbildung durchführen",
      items: [
        "Lernförderliche Bedingungen schaffen",
        "Probezeit organisieren, gestalten, bewerten",
        "Lern- und Arbeitsaufgaben entwickeln",
        "Ausbildungsmethoden auswählen und einsetzen",
        "Auszubildende unterstützen und betreuen",
        "Konfliktbewältigung und Förderung",
        "Zusatzqualifikationen und Verkürzung",
        "Interkulturelle Kompetenzen fördern"
      ]
    },
    {
      title: "Ausbildung abschließen und weiterentwickeln",
      items: [
        "Auszubildende auf Prüfungen vorbereiten",
        "Anmeldung zu Prüfungen veranlassen",
        "Leistungen bewerten & Ergebnisse auswerten",
        "Schriftliches Zeugnis erstellen",
        "Beratung über betriebliche Entwicklungswege",
        "Berufliche Weiterbildungsmöglichkeiten"
      ]
    }
  ];

  return (
    <section id="inhalte" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Studieninhalte im Detail</h2>
          <p className="text-slate-600">Unser Lehrplan deckt alle relevanten Handlungsfelder der AEVO gemäß dem Rahmenlehrplan der DIHK ab.</p>
        </div>
        
        <div className="bg-slate-50 rounded-3xl p-4 md:p-8 border border-slate-100">
          {sections.map((section, idx) => (
            <AccordionItem 
              key={idx} 
              index={idx}
              section={section} 
              isOpen={openIndex === idx} 
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
