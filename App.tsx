
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Advantages from './components/Advantages';
import Accordion from './components/Accordion';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import KursSeite from './components/Kurs';
import { accordionData } from './src/accordionData.tsx';
import TestModule from './components/TestModule.tsx';
import "./styles.css";


const App: React.FC = () => {
  return (
    <BrowserRouter>
    <div className="min-h-screen bg-slate-50 selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <Routes>
        <Route
    path="/"
    element={
      <main>
        <Hero />
        <Stats />
        <Advantages />
        <Accordion />
      </main>
    }
  />
        <Route path="/about" element={< KursSeite data={accordionData} />} />
        <Route path="/test" element={< TestModule />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
};

export default App;
