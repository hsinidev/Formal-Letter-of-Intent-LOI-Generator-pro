import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { LOIData, generateLOI } from '../lib/LOITemplate';

const LOIGenerator: React.FC = () => {
    const [formData, setFormData] = useState<LOIData>({
        loiType: 'business',
        senderName: 'John Doe',
        senderTitle: 'CEO',
        senderCompany: 'Innovate Corp',
        recipientName: 'Jane Smith',
        recipientTitle: 'CEO',
        recipientCompany: 'Synergy Inc.',
        subject: 'Acquisition of Synergy Inc.',
        price: '1000000',
        exclusivityPeriod: '30',
        date: new Date().toLocaleDateString('en-CA'), // YYYY-MM-DD
        signatoryName: 'John Doe',
    });
    const [generatedLOI, setGeneratedLOI] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setGeneratedLOI('');

        try {
            const template = generateLOI(formData);
            if (template.startsWith('Error:')) {
                throw new Error(template);
            }

            // Fix: Initialize GoogleGenAI with a named apiKey parameter from process.env.
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

            const prompt = `
            Please review and professionally enhance the following Letter of Intent.
            Ensure the tone is formal, clear, and confident.
            Improve grammar, phrasing, and structure where necessary, but retain all the key details provided.
            Do not add any placeholders like [Date] or [Your Name]. Use the information given.
            The final output should be only the letter text, without any introductory or concluding remarks from you.

            Here is the letter:
            ---
            ${template}
            ---
            `;

            // Fix: Use ai.models.generateContent to query the model with the prompt.
            const response = await ai.models.generateContent({
              model: 'gemini-2.5-flash',
              contents: prompt,
            });
            
            // Fix: Extract the generated text directly from the 'text' property of the response.
            const improvedLOI = response.text;
            
            setGeneratedLOI(improvedLOI);
        } catch (err) {
            console.error(err);
            setError('Failed to generate the Letter of Intent. Please check your input and try again.');
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleCopy = () => {
        if(generatedLOI) {
            navigator.clipboard.writeText(generatedLOI);
            // In a real app, a toast notification would be shown here.
        }
    };
    
    const handleClear = () => {
        setGeneratedLOI('');
        setError(null);
    }
    
    return (
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <form onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur-md p-8 sm:p-10 rounded-2xl shadow-lg border border-gray-700 space-y-8">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-1">LOI Details</h2>
                    <p className="text-gray-400">Fill in the information below to generate your letter.</p>
                </div>

                <div className="col-span-full">
                    <label htmlFor="loiType" className="block text-sm font-medium leading-6 text-gray-300">Letter of Intent Type</label>
                    <div className="mt-2">
                        <select id="loiType" name="loiType" value={formData.loiType} onChange={handleInputChange} className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
                            <option value="business">Business Acquisition</option>
                            <option value="employment">Employment Offer</option>
                            <option value="real_estate">Real Estate Purchase</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-600 pb-2">Sender Details</h3>
                        <div className="space-y-4">
                             <div>
                                <label htmlFor="senderName" className="block text-sm font-medium leading-6 text-gray-300">Your Name</label>
                                <input type="text" name="senderName" id="senderName" value={formData.senderName} onChange={handleInputChange} required className="mt-1 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"/>
                            </div>
                            <div>
                                <label htmlFor="senderTitle" className="block text-sm font-medium leading-6 text-gray-300">Your Title</label>
                                <input type="text" name="senderTitle" id="senderTitle" value={formData.senderTitle} onChange={handleInputChange} required className="mt-1 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"/>
                            </div>
                            <div>
                                <label htmlFor="senderCompany" className="block text-sm font-medium leading-6 text-gray-300">Your Company/Organization</label>
                                <input type="text" name="senderCompany" id="senderCompany" value={formData.senderCompany} onChange={handleInputChange} required className="mt-1 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>
                    </div>
                    <div>
                         <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-600 pb-2">Recipient Details</h3>
                         <div className="space-y-4">
                            <div>
                                <label htmlFor="recipientName" className="block text-sm font-medium leading-6 text-gray-300">Recipient's Name</label>
                                <input type="text" name="recipientName" id="recipientName" value={formData.recipientName} onChange={handleInputChange} required className="mt-1 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"/>
                            </div>
                            <div>
                                <label htmlFor="recipientTitle" className="block text-sm font-medium leading-6 text-gray-300">Recipient's Title</label>
                                <input type="text" name="recipientTitle" id="recipientTitle" value={formData.recipientTitle} onChange={handleInputChange} required className="mt-1 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"/>
                            </div>
                            <div>
                                <label htmlFor="recipientCompany" className="block text-sm font-medium leading-6 text-gray-300">Recipient's Company/Organization</label>
                                <input type="text" name="recipientCompany" id="recipientCompany" value={formData.recipientCompany} onChange={handleInputChange} required className="mt-1 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>
                    </div>
                </div>
                
                 <div>
                    <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-600 pb-2">Key Terms</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-4">
                        <div className="sm:col-span-2">
                           <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-300">Subject of LOI</label>
                            <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleInputChange} required className="mt-1 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder={formData.loiType === 'employment' ? 'Position Title' : 'Property Address or Company Name'} />
                        </div>
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-300">Price / Salary ($)</label>
                            <input type="number" name="price" id="price" value={formData.price} onChange={handleInputChange} required className="mt-1 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"/>
                        </div>
                        <div>
                            <label htmlFor="exclusivityPeriod" className="block text-sm font-medium leading-6 text-gray-300">Exclusivity / Inspection Period (days)</label>
                            <input type="number" name="exclusivityPeriod" id="exclusivityPeriod" value={formData.exclusivityPeriod} onChange={handleInputChange} required className="mt-1 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"/>
                        </div>
                        <div>
                             <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-300">Date</label>
                            <input type="date" name="date" id="date" value={formData.date} onChange={handleInputChange} required className="mt-1 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"/>
                        </div>
                        <div>
                            <label htmlFor="signatoryName" className="block text-sm font-medium leading-6 text-gray-300">Signatory Name (if different)</label>
                            <input type="text" name="signatoryName" id="signatoryName" value={formData.signatoryName} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Defaults to Your Name"/>
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                     <button type="submit" disabled={isLoading} className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed">
                        {isLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Generating...
                            </>
                        ) : 'Generate AI-Enhanced LOI'}
                    </button>
                </div>
            </form>

            <div className="bg-gray-800/50 backdrop-blur-md p-8 sm:p-10 rounded-2xl shadow-lg border border-gray-700 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-3xl font-bold text-white">Generated Letter</h2>
                    {generatedLOI && (
                        <div className="flex items-center gap-2">
                            <button onClick={handleCopy} className="px-3 py-1.5 text-sm font-semibold rounded-md text-white bg-white/10 hover:bg-white/20">Copy</button>
                            <button onClick={handleClear} className="px-3 py-1.5 text-sm font-semibold rounded-md text-white bg-red-600/50 hover:bg-red-600/80">Clear</button>
                        </div>
                    )}
                </div>
                <div className="flex-grow bg-white/5 rounded-md p-4 text-gray-300 overflow-auto h-96 min-h-[500px] prose prose-invert prose-sm max-w-none whitespace-pre-wrap font-mono">
                    {isLoading && <p>Generating your letter with Gemini AI...</p>}
                    {error && <p className="text-red-400">{error}</p>}
                    {generatedLOI}
                </div>
            </div>
        </div>
    );
};

export default LOIGenerator;
