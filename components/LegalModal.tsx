import React, { useState } from 'react';
import { X, ShieldAlert, FileText, Lock, Users, Mail, Info } from 'lucide-react';

interface LegalModalProps {
  type: string;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const [step, setStep] = useState<'caution' | 'content'>('caution');

  const getTitle = () => {
      switch(type) {
          case 'about': return 'About Us';
          case 'contact': return 'Contact Information';
          case 'guide': return 'User Guide';
          case 'privacy': return 'Privacy Policy';
          case 'terms': return 'Terms of Service';
          case 'dmca': return 'DMCA Notice';
          default: return 'Information';
      }
  };

  // Step 1: Caution Screen (Google Compliance)
  const renderCaution = () => (
    <div className="flex flex-col items-center text-center space-y-6 py-8 px-4 animate-in fade-in zoom-in duration-300">
      <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
        <ShieldAlert className="w-10 h-10 text-amber-500" />
      </div>
      
      <div className="space-y-2">
          <h3 className="text-3xl font-bold text-white">Compliance Check</h3>
          <p className="text-amber-500 font-medium uppercase tracking-widest text-xs">Important Notice</p>
      </div>
      
      <p className="text-gray-300 max-w-md text-lg leading-relaxed">
        You are requesting to view the <strong>{getTitle()}</strong>. 
        Please acknowledge that Doodax.com provides automated drafting tools and not legal counsel.
      </p>
      
      <div className="bg-white/5 p-4 rounded-lg border border-white/10 text-sm text-gray-400 w-full max-w-md text-left">
          <p>By continuing, you agree that:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>You are a human user.</li>
              <li>You understand the nature of AI-generated content.</li>
              <li>You accept our terms of service.</li>
          </ul>
      </div>

      <button 
        onClick={() => setStep('content')}
        className="mt-6 px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/30 hover:scale-105 active:scale-95 w-full max-w-xs"
      >
        I Understand, Show Info
      </button>
    </div>
  );

  // Step 2: Content Screen
  const renderContent = () => {
    switch(type) {
      case 'about':
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-indigo-400 mb-6">
                <Users className="w-8 h-8" />
                <h2 className="text-3xl font-bold text-white">About Doodax</h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
                Welcome to <strong className="text-white">Doodax.com</strong>, the frontier of automated legal technology. 
                We exist to bridge the gap between complex legal requirements and everyday business needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                    <h4 className="font-bold text-white mb-2">Our Mission</h4>
                    <p className="text-sm text-gray-400">To democratize access to professional legal documents through the power of Artificial Intelligence.</p>
                </div>
                <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                    <h4 className="font-bold text-white mb-2">Our Vision</h4>
                    <p className="text-sm text-gray-400">A world where secure, compliant business transactions can be initiated in seconds, not weeks.</p>
                </div>
            </div>
            <div className="mt-8 border-t border-white/10 pt-6">
                 <p className="text-gray-400">Developed by <a href="https://github.com/hsinidev" target="_blank" className="text-indigo-400 hover:underline font-semibold">HSINI MOHAMED</a>.</p>
            </div>
          </div>
        );
      case 'contact':
        return (
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-indigo-400 mb-6">
                  <Mail className="w-8 h-8" />
                  <h2 className="text-3xl font-bold text-white">Contact Us</h2>
              </div>
              <p className="text-gray-300">We are here to assist you. For business inquiries, technical support, or partnership opportunities.</p>
              
              <div className="space-y-4 mt-6">
                  <div className="bg-gradient-to-r from-white/5 to-transparent p-6 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-colors">
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">General Inquiries</p>
                      <a href="mailto:hsini.web@gmail.com" className="text-2xl font-mono text-indigo-300 hover:text-white transition-colors">hsini.web@gmail.com</a>
                  </div>
                  
                  <div className="bg-gradient-to-r from-white/5 to-transparent p-6 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-colors">
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Website</p>
                      <a href="https://doodax.com" target="_blank" className="text-2xl font-mono text-indigo-300 hover:text-white transition-colors">www.doodax.com</a>
                  </div>
              </div>
            </div>
          );
      case 'guide':
        return (
            <div className="space-y-6">
                <div className="flex items-center gap-3 text-indigo-400 mb-6">
                    <Info className="w-8 h-8" />
                    <h2 className="text-3xl font-bold text-white">User Guide</h2>
                </div>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-indigo-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">1</div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-4 rounded-xl border border-white/10">
                            <h4 className="font-bold text-white">Select Type</h4>
                            <p className="text-sm text-gray-400 mt-1">Choose between Business, Employment, or Real Estate templates.</p>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-indigo-900 text-indigo-200 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">2</div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-4 rounded-xl border border-white/10">
                            <h4 className="font-bold text-white">Input Details</h4>
                            <p className="text-sm text-gray-400 mt-1">Fill out the form accurately. The AI uses this data to structure the letter.</p>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-indigo-900 text-indigo-200 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">3</div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-4 rounded-xl border border-white/10">
                            <h4 className="font-bold text-white">Generate & Review</h4>
                            <p className="text-sm text-gray-400 mt-1">Click generate. Review the AI output for accuracy before using.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
      case 'privacy':
        return (
            <div className="space-y-6">
                <div className="flex items-center gap-3 text-indigo-400 mb-6">
                    <Lock className="w-8 h-8" />
                    <h2 className="text-3xl font-bold text-white">Privacy Policy</h2>
                </div>
                <div className="prose prose-invert prose-sm max-w-none">
                    <p className="text-gray-400">Effective Date: {new Date().toLocaleDateString()}</p>
                    <p>At Doodax.com, protecting your privacy is our priority. This Privacy Policy explains how we collect, use, and safeguard your information.</p>
                    
                    <h4 className="text-white font-bold mt-4">1. Information We Collect</h4>
                    <p>We do not store the personal data entered into the LOI forms on our servers. The data is processed ephemerally to generate the document.</p>
                    
                    <h4 className="text-white font-bold mt-4">2. Use of AI</h4>
                    <p>Your inputs are sent to the Google Gemini API solely for the purpose of text generation. We do not use your data to train AI models.</p>
                    
                    <h4 className="text-white font-bold mt-4">3. Data Security</h4>
                    <p>We implement industry-standard security measures to protect data transmission (SSL/TLS).</p>
                    
                    <h4 className="text-white font-bold mt-4">4. Contact</h4>
                    <p>Privacy Officer: <span className="text-indigo-400">hsini.web@gmail.com</span></p>
                </div>
            </div>
        );
      case 'terms':
        return (
            <div className="space-y-6">
                <div className="flex items-center gap-3 text-indigo-400 mb-6">
                    <FileText className="w-8 h-8" />
                    <h2 className="text-3xl font-bold text-white">Terms of Service</h2>
                </div>
                <div className="space-y-4 text-sm text-gray-300">
                    <div className="p-4 bg-red-900/10 border border-red-500/20 rounded-lg">
                        <h4 className="text-red-400 font-bold mb-1">Disclaimer of Liability</h4>
                        <p>Doodax.com is a software tool, not a law firm. We provide no warranty regarding the legal validity of generated documents.</p>
                    </div>
                    <p><strong>1. Acceptance:</strong> By accessing Doodax.com, you agree to be bound by these terms.</p>
                    <p><strong>2. License:</strong> We grant you a limited, non-exclusive license to use the generator for personal and commercial business purposes.</p>
                    <p><strong>3. Restrictions:</strong> You may not reverse engineer the application or use it for illegal activities.</p>
                    <p><strong>4. Indemnification:</strong> You agree to indemnify Doodax and HSINI MOHAMED against any claims arising from your use of the service.</p>
                </div>
            </div>
        );
      case 'dmca':
        return (
            <div className="space-y-6">
                <div className="flex items-center gap-3 text-indigo-400 mb-6">
                    <ShieldAlert className="w-8 h-8" />
                    <h2 className="text-3xl font-bold text-white">DMCA Notice</h2>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <p className="text-gray-300 mb-4">
                        Doodax respects the intellectual property rights of others. If you believe that material available on our site infringes on your copyright, please notify our Designated Agent.
                    </p>
                    <div className="space-y-2 text-sm">
                        <p><span className="text-gray-500">Designated Agent:</span> HSINI MOHAMED</p>
                        <p><span className="text-gray-500">Email:</span> <a href="mailto:hsini.web@gmail.com" className="text-indigo-400">hsini.web@gmail.com</a></p>
                        <p><span className="text-gray-500">Website:</span> doodax.com</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-4 pt-4 border-t border-white/10">
                        Please include sufficient information to identify the copyrighted work and your contact details in your notice.
                    </p>
                </div>
            </div>
        );
      default:
        return <p>Content not found.</p>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[#000000]/90 backdrop-blur-md transition-opacity" onClick={onClose}></div>
        
        {/* Modal Window */}
        <div className="relative bg-[#0f111a] border border-gray-700 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="absolute top-0 right-0 p-4 z-20">
                <button 
                    onClick={onClose} 
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
            
            {/* Scrollable Content */}
            <div className="p-8 overflow-y-auto custom-scrollbar flex-grow">
                {step === 'caution' ? renderCaution() : renderContent()}
            </div>

            {/* Footer Actions (Only for content step) */}
            {step === 'content' && (
                 <div className="bg-[#0a0c12] p-4 border-t border-white/5 flex justify-between items-center">
                    <p className="text-xs text-gray-600">Doodax.com © {new Date().getFullYear()}</p>
                    <button onClick={onClose} className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors text-sm font-medium">
                        Close Window
                    </button>
                 </div>
            )}
        </div>
    </div>
  );
};