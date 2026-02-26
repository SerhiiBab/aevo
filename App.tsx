
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Advantages from './components/Advantages';
import Accordion from './components/Accordion';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Advantages />
        <Accordion />
        {/* <ContactForm /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
