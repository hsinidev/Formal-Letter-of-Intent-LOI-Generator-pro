import React, { useState } from 'react';
import Layout from './components/Layout';
import LOIGenerator from './components/LOIGenerator';
import SeoArticle from './utils/SeoArticle';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 sm:py-20 lg:py-24 flex-grow flex flex-col items-center">
        
        {/* Hero / Header Section */}
        <header className="text-center mb-16 w-full max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md hover:bg-white/10 transition-colors mb-6 shadow-lg shadow-indigo-500/10">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            Professional Legal Tools
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1] mb-8 drop-shadow-2xl">
            Formal
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 animate-gradient-x">
              Letter of Intent
            </span>
             Generator
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Draft professional LOIs for <span className="text-white font-medium border-b border-indigo-500/50">Business</span>, <span className="text-white font-medium border-b border-purple-500/50">Real Estate</span>, and <span className="text-white font-medium border-b border-pink-500/50">Employment</span> deals instantly.
          </p>
        </header>
        
        {/* Main Application Area */}
        <main className="w-full flex flex-col items-center gap-20 md:gap-32 relative z-10">
          <LOIGenerator />
          
          {/* SEO Content Section */}
          <div className="w-full flex justify-center">
            <SeoArticle />
          </div>
        </main>
      </div>

      {/* Footer & Legal Modals */}
      <Footer onOpenModal={(modal) => setActiveModal(modal)} />
      
      {activeModal && (
        <LegalModal 
          type={activeModal} 
          onClose={() => setActiveModal(null)} 
        />
      )}
    </Layout>
  );
};

export default App;