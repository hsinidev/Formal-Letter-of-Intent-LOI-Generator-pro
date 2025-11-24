import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-x-hidden font-sans text-gray-100 flex flex-col">
      {/* Deep Space Base Layer */}
      <div className="fixed inset-0 bg-[#030407] z-[-5]"></div>
      
      {/* Multi-colored Nebula Gradients */}
      <div className="fixed inset-0 z-[-4] opacity-50 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-indigo-900/40 rounded-full blur-[150px] animate-[nebula-pulse_12s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[1200px] h-[1200px] bg-purple-900/30 rounded-full blur-[150px] animate-[nebula-pulse_15s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-[40%] right-[30%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] animate-[nebula-pulse_18s_ease-in-out_infinite_1s]"></div>
        <div className="absolute bottom-[20%] left-[20%] w-[700px] h-[700px] bg-pink-900/15 rounded-full blur-[120px] animate-[nebula-pulse_14s_ease-in-out_infinite_2s]"></div>
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-teal-900/10 rounded-full blur-[100px] animate-[nebula-pulse_20s_ease-in-out_infinite_3s]"></div>
      </div>

      {/* Starfield Animation (CSS defined in index.html) */}
      <div className="stars opacity-70"></div>
      <div className="twinkling mix-blend-screen opacity-50"></div>
      
      {/* Overlay Gradient for Softness/Vignette */}
      <div className="fixed inset-0 bg-radial-gradient from-transparent via-[#05060a]/30 to-[#05060a]/90 z-[-3] pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 flex-grow flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default Layout;