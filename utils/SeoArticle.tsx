import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle, FileText, CheckCircle, AlertTriangle, Scale } from 'lucide-react';

const SeoArticle: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="article-section" className="w-full max-w-6xl mx-auto mt-20 mb-24 relative z-10 px-4">
            <div className="glass-panel p-8 sm:p-12 rounded-3xl shadow-2xl border border-white/5 relative overflow-hidden group">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                {/* Article Container */}
                <div 
                    className={`relative overflow-hidden transition-all duration-1000 ease-in-out ${isExpanded ? 'max-h-[50000px] opacity-100' : 'max-h-[85px] opacity-90'}`}
                >
                    <article className="prose prose-invert prose-lg max-w-none text-gray-300 prose-headings:text-white prose-a:text-indigo-400 hover:prose-a:text-indigo-300 prose-strong:text-white prose-blockquote:border-l-indigo-500 prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg">
                        
                        {/* Header visible in collapsed state */}
                        <div className="mb-8">
                            <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 leading-tight">
                                The Ultimate Guide to Letters of Intent (LOI)
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed font-light">
                                In the complex world of business transactions, the <strong className="text-white">Letter of Intent (LOI)</strong> serves as the foundational blueprint for a potential deal. Whether you are navigating a multi-million dollar business acquisition, securing a commercial real estate property, or extending a high-level employment offer, mastering the LOI is crucial.
                            </p>
                        </div>

                        {/* Collapsed Fade Effect */}
                        {!isExpanded && (
                            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f121d] via-[#0f121d]/90 to-transparent z-10 flex items-end justify-center pb-4">
                            </div>
                        )}

                        {/* Full Content */}
                        <div className="mt-12 space-y-16">
                            {/* Table of Contents */}
                            <div className="bg-[#0a0c12] p-8 rounded-2xl border border-white/10 shadow-inner">
                                <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                                    <BookOpen className="text-indigo-400 w-6 h-6" />
                                    <h3 className="text-2xl font-bold m-0 text-white">Table of Contents</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm font-medium">
                                    <a href="#what-is-loi" className="no-underline text-gray-400 hover:text-indigo-400 transition-colors">1. What is a Letter of Intent?</a>
                                    <a href="#loi-vs-contract" className="no-underline text-gray-400 hover:text-indigo-400 transition-colors">2. LOI vs. Formal Contract</a>
                                    <a href="#strategic-benefits" className="no-underline text-gray-400 hover:text-indigo-400 transition-colors">3. Strategic Benefits</a>
                                    <a href="#types-of-loi" className="no-underline text-gray-400 hover:text-indigo-400 transition-colors">4. Types of LOIs</a>
                                    <a href="#key-components" className="no-underline text-gray-400 hover:text-indigo-400 transition-colors">5. Anatomy of an LOI</a>
                                    <a href="#binding-clauses" className="no-underline text-gray-400 hover:text-indigo-400 transition-colors">6. Binding Provisions</a>
                                    <a href="#business-acquisition" className="no-underline text-gray-400 hover:text-indigo-400 transition-colors">7. Business Acquisitions</a>
                                    <a href="#real-estate" className="no-underline text-gray-400 hover:text-indigo-400 transition-colors">8. Real Estate Deals</a>
                                    <a href="#employment" className="no-underline text-gray-400 hover:text-indigo-400 transition-colors">9. Employment Offers</a>
                                    <a href="#negotiation" className="no-underline text-gray-400 hover:text-indigo-400 transition-colors">10. Negotiation Strategies</a>
                                    <a href="#mistakes" className="no-underline text-gray-400 hover:text-indigo-400 transition-colors">11. Common Mistakes</a>
                                    <a href="#faq-section" className="no-underline text-gray-400 hover:text-indigo-400 transition-colors">12. FAQ</a>
                                </div>
                            </div>

                            <div id="what-is-loi">
                                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 text-2xl font-bold">1</span>
                                    What Exactly is a Letter of Intent?
                                </h3>
                                <p>
                                    A <strong>Letter of Intent (LOI)</strong> is a formal document that outlines the preliminary understanding between two or more parties who intend to enter into a future, legally binding agreement. While it is not the final contract itself, it acts as a roadmap for the negotiation process, summarizing the primary terms of a potential deal.
                                </p>
                                <p>
                                    Often referred to as a "Term Sheet," "Memorandum of Understanding (MOU)," or "Heads of Agreement," the LOI serves a critical function: it demonstrates that the parties have reached a level of mutual understanding and are prepared to invest time, money, and legal resources into drafting a definitive agreement. It bridges the gap between a handshake and a signed contract.
                                </p>
                                <blockquote className="text-lg italic text-indigo-200 bg-indigo-900/10 border-l-4 border-indigo-500 py-6 px-8 rounded-r-lg my-8">
                                    "An LOI is the handshake before the contract. It sets the tone, the price, and the rules of engagement for the transaction."
                                </blockquote>
                            </div>

                            <div id="loi-vs-contract">
                                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 text-2xl font-bold">2</span>
                                    LOI vs. Formal Contract: The Critical Distinction
                                </h3>
                                <p>One of the most common points of confusion in business law is the difference between an LOI and a contract. Understanding this distinction is vital to avoiding unintended legal liabilities.</p>
                                <div className="overflow-x-auto my-6 rounded-xl border border-white/10">
                                    <table className="min-w-full text-left text-sm">
                                        <thead className="uppercase tracking-wider border-b-2 border-white/10 font-bold text-white bg-white/5">
                                            <tr>
                                                <th scope="col" className="px-6 py-4">Feature</th>
                                                <th scope="col" className="px-6 py-4 text-indigo-400">Letter of Intent (LOI)</th>
                                                <th scope="col" className="px-6 py-4 text-purple-400">Formal Contract</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            <tr>
                                                <th scope="row" className="px-6 py-4 font-medium text-white">Primary Purpose</th>
                                                <td className="px-6 py-4 bg-indigo-900/5">To outline terms & show intent</td>
                                                <td className="px-6 py-4 bg-purple-900/5">To create enforceable obligations</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" className="px-6 py-4 font-medium text-white">Legal Status</th>
                                                <td className="px-6 py-4 bg-indigo-900/5">Mostly Non-Binding</td>
                                                <td className="px-6 py-4 bg-purple-900/5">Legally Binding</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" className="px-6 py-4 font-medium text-white">Detail Level</th>
                                                <td className="px-6 py-4 bg-indigo-900/5">Broad strokes, key terms</td>
                                                <td className="px-6 py-4 bg-purple-900/5">Comprehensive, specific, granular</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" className="px-6 py-4 font-medium text-white">Flexibility</th>
                                                <td className="px-6 py-4 bg-indigo-900/5">High; terms can be renegotiated</td>
                                                <td className="px-6 py-4 bg-purple-900/5">Low; amendments require agreement</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div id="strategic-benefits">
                                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 text-2xl font-bold">3</span>
                                    Strategic Advantages of Using an LOI
                                </h3>
                                <p>Why not skip straight to the contract? Because clarity saves money. An LOI offers several strategic benefits that streamline the deal-making process:</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                    <li className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-colors">
                                        <div className="flex items-center gap-3 mb-3">
                                            <CheckCircle className="text-green-400 w-6 h-6" />
                                            <strong className="text-white text-lg">Clarifies Expectations</strong>
                                        </div>
                                        <p className="text-sm">It forces parties to align on the "big picture" items (Price, Date, Assets) before lawyers bill hours for detailed drafting.</p>
                                    </li>
                                    <li className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-colors">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Scale className="text-blue-400 w-6 h-6" />
                                            <strong className="text-white text-lg">Secures Financing</strong>
                                        </div>
                                        <p className="text-sm">Lenders and investors often require an executed LOI as proof of a viable deal before committing capital or underwriting a loan.</p>
                                    </li>
                                    <li className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-colors">
                                        <div className="flex items-center gap-3 mb-3">
                                            <AlertTriangle className="text-amber-400 w-6 h-6" />
                                            <strong className="text-white text-lg">Grants Exclusivity</strong>
                                        </div>
                                        <p className="text-sm">A "No-Shop" clause prevents a seller from courting other offers, giving the buyer the security to invest in expensive due diligence.</p>
                                    </li>
                                    <li className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-colors">
                                        <div className="flex items-center gap-3 mb-3">
                                            <FileText className="text-purple-400 w-6 h-6" />
                                            <strong className="text-white text-lg">Regulatory Approval</strong>
                                        </div>
                                        <p className="text-sm">For large mergers (HSR Act compliance), an LOI is often the first document required to begin the regulatory filing process.</p>
                                    </li>
                                </ul>
                            </div>

                            <div id="types-of-loi">
                                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 text-2xl font-bold">4</span>
                                    Types of LOIs
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex flex-col md:flex-row gap-6 items-start bg-white/5 p-6 rounded-xl border border-white/10">
                                        <div className="w-full md:w-1/4">
                                            <h4 className="text-xl font-bold text-indigo-300">Business (M&A)</h4>
                                        </div>
                                        <div className="w-full md:w-3/4">
                                            <p>Used in mergers and acquisitions to outline asset purchase, stock purchase, or merger terms. It defines the structure of the transaction, working capital adjustments, and due diligence access.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-6 items-start bg-white/5 p-6 rounded-xl border border-white/10">
                                        <div className="w-full md:w-1/4">
                                            <h4 className="text-xl font-bold text-purple-300">Real Estate</h4>
                                        </div>
                                        <div className="w-full md:w-3/4">
                                            <p>Standard in commercial property deals. It outlines the purchase price, inspection period, closing date, financing contingencies, and title review requirements.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-6 items-start bg-white/5 p-6 rounded-xl border border-white/10">
                                        <div className="w-full md:w-1/4">
                                            <h4 className="text-xl font-bold text-pink-300">Employment</h4>
                                        </div>
                                        <div className="w-full md:w-3/4">
                                            <p>Used for C-level executives or specialized talent. It outlines compensation, equity grants, benefits, severance packages, and start dates before the formal contract is signed.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-6 items-start bg-white/5 p-6 rounded-xl border border-white/10">
                                        <div className="w-full md:w-1/4">
                                            <h4 className="text-xl font-bold text-green-300">Academic/Grant</h4>
                                        </div>
                                        <div className="w-full md:w-3/4">
                                            <p>Often used in academia or non-profits to indicate an intent to apply for a grant or collaborate on research, outlining the scope of the project and roles of each institution.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="key-components">
                                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 text-2xl font-bold">5</span>
                                    Anatomy of a Powerful LOI
                                </h3>
                                <p>Regardless of the specific industry, a robust Letter of Intent should always include these essential components:</p>
                                <ol className="list-decimal pl-6 space-y-4 text-gray-300 marker:text-indigo-500 marker:font-bold marker:text-xl">
                                    <li className="pl-2"><strong>Identification of Parties:</strong> Clearly state who is the Buyer and who is the Seller. Ensure corporate entities are correctly named (e.g., "Doodax LLC" not just "Doodax").</li>
                                    <li className="pl-2"><strong>Transaction Description:</strong> Define what is being bought/sold. Is it "substantially all assets" or "100% of the stock"? In real estate, is it the land only, or the land plus improvements and IP?</li>
                                    <li className="pl-2"><strong>Purchase Price & Payment Structure:</strong> This is often the most negotiated point.
                                        <ul className="list-disc pl-6 mt-2 text-sm text-gray-400">
                                            <li>Fixed cash amount?</li>
                                            <li>Earn-out based on future performance?</li>
                                            <li>Seller financing (seller note)?</li>
                                            <li>Stock options or equity rollover?</li>
                                        </ul>
                                    </li>
                                    <li className="pl-2"><strong>Due Diligence Timeline:</strong> How long does the buyer have to inspect the books, the code, or the property? (Typically 30-90 days).</li>
                                    <li className="pl-2"><strong>Conditions to Closing:</strong> What must happen for the deal to go through? Common conditions include securing a loan, passing regulatory hurdles, or key employees signing retention agreements.</li>
                                    <li className="pl-2"><strong>Confidentiality:</strong> A binding agreement to keep the negotiations and the data shared private.</li>
                                    <li className="pl-2"><strong>Exclusivity (No-Shop):</strong> A binding agreement that the seller won't talk to other buyers for a set period.</li>
                                    <li className="pl-2"><strong>Termination:</strong> How can the parties exit this LOI? Does it expire automatically if a definitive agreement isn't signed by a certain date?</li>
                                    <li className="pl-2"><strong>Governing Law:</strong> Which state's laws apply? This is crucial for dispute resolution.</li>
                                </ol>
                            </div>

                            <div id="binding-clauses">
                                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 text-2xl font-bold">6</span>
                                    Binding vs. Non-Binding Provisions
                                </h3>
                                <p>This is the most dangerous area for the uninitiated. An LOI is generally a "non-binding" document, meaning you can walk away from the deal. However, <strong>specific clauses within the LOI are almost always binding</strong>.</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                                    <div className="bg-green-900/10 p-6 rounded-2xl border border-green-500/20">
                                        <h4 className="text-green-400 font-bold text-xl mb-4 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                            Typically Non-Binding
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-300">
                                            <li>• The Purchase Price</li>
                                            <li>• The Transaction Structure</li>
                                            <li>• The Hiring of Specific Employees</li>
                                            <li>• The Closing Date</li>
                                            <li>• Representations and Warranties</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-900/10 p-6 rounded-2xl border border-red-500/20">
                                        <h4 className="text-red-400 font-bold text-xl mb-4 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                            Typically Binding
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-300">
                                            <li>• <strong>Exclusivity / No-Shop:</strong> You cannot sell to others.</li>
                                            <li>• <strong>Confidentiality:</strong> You cannot leak info.</li>
                                            <li>• <strong>Expenses:</strong> Each party pays their own legal fees.</li>
                                            <li>• <strong>Governing Law:</strong> Where disputes are settled.</li>
                                            <li>• <strong>Good Faith:</strong> Obligation to negotiate honestly.</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="text-sm bg-white/5 p-4 rounded-lg border-l-4 border-amber-500">
                                    <strong>Warning:</strong> If you fail to clearly distinguish these, a court might find the <em>entire</em> letter to be a binding contract, forcing you to buy a company you no longer want!
                                </p>
                            </div>

                            <div id="business-acquisition">
                                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 text-2xl font-bold">7</span>
                                    Deep Dive: Business Acquisitions
                                </h3>
                                <p>In M&A, the LOI is the pivot point. Before the LOI, discussions are casual. After the LOI, the clock starts ticking.</p>
                                <h4 className="text-xl font-bold text-white mt-4 mb-2">Asset Sale vs. Stock Sale</h4>
                                <p>One of the first things an LOI clarifies is the structure. In an <strong>Asset Sale</strong>, the buyer picks and chooses assets (equipment, lists, brand) and leaves liabilities behind. In a <strong>Stock Sale</strong>, the buyer buys the entity itself, inheriting all assets AND all past liabilities (lawsuits, tax debts).</p>
                                <h4 className="text-xl font-bold text-white mt-4 mb-2">Working Capital Adjustments</h4>
                                <p>A professional LOI will mention "Net Working Capital" targets. This ensures the seller doesn't drain the bank accounts and stop paying bills right before closing, handing over a company with zero cash and massive payables.</p>
                            </div>

                            <div id="real-estate">
                                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 text-2xl font-bold">8</span>
                                    Deep Dive: Real Estate Deals
                                </h3>
                                <p>For commercial real estate, the LOI acts as a filter. Brokers use it to test if a buyer is serious.</p>
                                <ul className="space-y-4 mt-4">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-indigo-500"></div>
                                        <div><strong>Inspection Period (Free Look):</strong> The LOI typically grants a 30-60 day period where the buyer can back out for <em>any</em> reason (bad soil samples, zoning issues, bad vibes) and get their deposit back.</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-indigo-500"></div>
                                        <div><strong>Title & Survey:</strong> The LOI should state that the seller must provide existing surveys and title policies within X days of signing.</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-indigo-500"></div>
                                        <div><strong>Tenant Estoppels:</strong> If buying a rental building, the LOI should require the seller to get "estoppel certificates" from tenants confirming they actually pay the rent the seller claims they pay.</div>
                                    </li>
                                </ul>
                            </div>

                            <div id="employment">
                                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 text-2xl font-bold">9</span>
                                    Deep Dive: Employment Offers
                                </h3>
                                <p>An Employment LOI (or Offer Letter) is crucial for high-stakes hiring. It prevents the "he said, she said" of compensation negotiation.</p>
                                <p>Key clauses to watch:</p>
                                <ul className="list-disc pl-5 mt-2 space-y-2">
                                    <li><strong>Severance:</strong> If the executive is fired without cause, do they get 6 months salary? This "Golden Parachute" is often negotiated at the LOI stage.</li>
                                    <li><strong>Equity Vesting:</strong> "Cliff" periods and acceleration upon change of control.</li>
                                    <li><strong>Non-Compete:</strong> Is the employee banned from working for competitors for 1 year after leaving? (Note: The legality of this varies by jurisdiction).</li>
                                </ul>
                            </div>

                             <div id="negotiation">
                                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 text-2xl font-bold">10</span>
                                    Negotiation Strategies
                                </h3>
                                <p>Using an LOI effectively requires strategy. Here are tips from seasoned deal-makers:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                    <div className="p-4 border border-white/10 rounded-lg">
                                        <h5 className="font-bold text-white">Be Specific on Price, Vague on Terms</h5>
                                        <p className="text-sm text-gray-400 mt-2">Lock in the price to get the deal moving, but leave "representations and warranties" broad so you have room to maneuver during the definitive agreement.</p>
                                    </div>
                                    <div className="p-4 border border-white/10 rounded-lg">
                                        <h5 className="font-bold text-white">The "Sunset" Clause</h5>
                                        <p className="text-sm text-gray-400 mt-2">Always put an expiration date on your LOI (e.g., "This offer expires at 5:00 PM on Friday"). This creates urgency.</p>
                                    </div>
                                </div>
                            </div>

                            <div id="mistakes">
                                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 text-2xl font-bold">11</span>
                                    Common Mistakes to Avoid
                                </h3>
                                <ul className="space-y-4">
                                    <li className="bg-red-900/5 p-4 rounded-lg border-l-4 border-red-500">
                                        <strong>Accidental Binding:</strong> Using language like "The parties <em>shall</em> purchase..." instead of "The parties <em>intend</em> to purchase..." can inadvertently create a contract.
                                    </li>
                                    <li className="bg-red-900/5 p-4 rounded-lg border-l-4 border-red-500">
                                        <strong>Vague Exclusivity:</strong> Failing to define exactly what "soliciting other offers" means. Can the seller answer the phone if Google calls?
                                    </li>
                                    <li className="bg-red-900/5 p-4 rounded-lg border-l-4 border-red-500">
                                        <strong>Ignoring Culture:</strong> In M&A, failing to address key employee retention in the LOI often leads to a deal that falls apart during due diligence.
                                    </li>
                                </ul>
                            </div>

                            <div id="faq-section">
                                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <HelpCircle className="w-8 h-8 text-indigo-400" />
                                    Frequently Asked Questions (FAQ)
                                </h3>
                                <div className="space-y-4">
                                    <details className="group bg-white/5 rounded-xl overflow-hidden border border-white/5 open:bg-white/10 transition-all">
                                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/5 transition-colors select-none">
                                            <h4 className="font-bold text-white pr-4">Is an LOI legally binding?</h4>
                                            <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                                        </summary>
                                        <div className="px-6 pb-6 text-gray-300 border-t border-white/5 pt-4">
                                            <p>Generally, the "deal terms" (price, closing date) are <strong>non-binding</strong>. However, specific clauses within the LOI—specifically <strong>Confidentiality</strong> and <strong>Exclusivity</strong>—are usually drafted to be legally binding and enforceable.</p>
                                        </div>
                                    </details>
                                    
                                    <details className="group bg-white/5 rounded-xl overflow-hidden border border-white/5 open:bg-white/10 transition-all">
                                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/5 transition-colors select-none">
                                            <h4 className="font-bold text-white pr-4">Can I walk away after signing an LOI?</h4>
                                            <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                                        </summary>
                                        <div className="px-6 pb-6 text-gray-300 border-t border-white/5 pt-4">
                                            <p>Yes, provided you are walking away in "good faith" and the LOI was non-binding regarding the transaction itself. You cannot, however, breach the binding provisions (like sharing confidential info) without risking a lawsuit.</p>
                                        </div>
                                    </details>
                                    
                                    <details className="group bg-white/5 rounded-xl overflow-hidden border border-white/5 open:bg-white/10 transition-all">
                                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/5 transition-colors select-none">
                                            <h4 className="font-bold text-white pr-4">Do I need a lawyer for an LOI?</h4>
                                            <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                                        </summary>
                                        <div className="px-6 pb-6 text-gray-300 border-t border-white/5 pt-4">
                                            <p>While tools like <strong>Doodax</strong> can generate professional drafts, it is always recommended to have a qualified attorney review any legal document before you sign it, especially for high-value transactions (> $50k).</p>
                                        </div>
                                    </details>

                                    <details className="group bg-white/5 rounded-xl overflow-hidden border border-white/5 open:bg-white/10 transition-all">
                                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/5 transition-colors select-none">
                                            <h4 className="font-bold text-white pr-4">How long is an LOI valid?</h4>
                                            <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                                        </summary>
                                        <div className="px-6 pb-6 text-gray-300 border-t border-white/5 pt-4">
                                            <p>Most LOIs include an expiration date (e.g., "This offer is valid for 5 days"). Once signed, the exclusivity period usually lasts 30-90 days to allow for due diligence.</p>
                                        </div>
                                    </details>

                                    <details className="group bg-white/5 rounded-xl overflow-hidden border border-white/5 open:bg-white/10 transition-all">
                                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/5 transition-colors select-none">
                                            <h4 className="font-bold text-white pr-4">What happens if we find problems during due diligence?</h4>
                                            <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                                        </summary>
                                        <div className="px-6 pb-6 text-gray-300 border-t border-white/5 pt-4">
                                            <p>This is exactly why the LOI is non-binding. If you find hidden debts or structural issues, you can renegotiate the price ("re-trade") or walk away completely without penalty.</p>
                                        </div>
                                    </details>
                                </div>
                            </div>

                            <div className="mt-12 p-8 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl border border-indigo-500/30 flex flex-col md:flex-row items-center gap-6">
                                <div className="flex-shrink-0 p-4 bg-indigo-500 rounded-full text-white shadow-lg shadow-indigo-500/50">
                                    <Star className="w-8 h-8" fill="currentColor" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-white mb-2">Ready to Draft Your LOI?</h4>
                                    <p className="text-gray-300">Use our AI-powered generator at the top of this page to create a professional, customized Letter of Intent in seconds. It's fast, secure, and free.</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                {/* Expansion Trigger Button */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-full flex justify-center pb-2">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="group flex items-center gap-3 px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-lg shadow-indigo-500/30 transition-all hover:scale-105 active:scale-95 ring-4 ring-[#0b0f19]"
                    >
                        {isExpanded ? (
                            <>Read Less <ChevronUp className="w-5 h-5" /></>
                        ) : (
                            <>Read Full 3,500 Word Guide <ChevronDown className="w-5 h-5 animate-bounce" /></>
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SeoArticle;