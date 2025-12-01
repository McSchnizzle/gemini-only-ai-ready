'use client';

import { useState, useEffect } from 'react';
import { 
  Bot, 
  Server, 
  LineChart, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Menu, 
  X,
  MessageSquare
} from 'lucide-react';
import ContactModal from '@/components/ContactModal';
import { motion } from 'framer-motion';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  // Countdown timer logic
  useEffect(() => {
    const targetDate = new Date('2026-01-01T00:00:00');

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        setTimeLeft(`${days}d ${hours}h ${minutes}m until 2026`);
      } else {
        setTimeLeft("Welcome to the Year of AI");
      }
    };

    const timer = setInterval(updateTimer, 60000); // Update every minute
    updateTimer();

    return () => clearInterval(timer);
  }, []);

  const openModal = () => setIsModalOpen(true);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden font-sans">
      
      {/* Top Banner */}
      <div className="bg-cascadia-green text-cascadia-light text-xs sm:text-sm py-2 text-center font-medium tracking-wide">
        <span className="opacity-80">Countdown to the Year of AI: </span>
        <span className="text-cascadia-amber font-bold ml-2">{timeLeft}</span>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 bg-cascadia-green rounded-lg flex items-center justify-center text-white">
                 {/* Abstract Node/Leaf Icon */}
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L12 22" />
                    <path d="M12 22C12 22 4 18 4 12C4 6 12 2 12 2" />
                    <path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2" />
                    <circle cx="12" cy="12" r="3" fill="currentColor" className="text-cascadia-amber" stroke="none"/>
                 </svg>
              </div>
              <span className="font-heading font-bold text-xl text-cascadia-green tracking-tight">
                VITAL <span className="font-normal text-cascadia-grey">ENTERPRISES</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-cascadia-grey hover:text-cascadia-green font-medium transition-colors">Services</a>
              <a href="#hardware" className="text-cascadia-grey hover:text-cascadia-green font-medium transition-colors">Hardware</a>
              <a href="#pricing" className="text-cascadia-grey hover:text-cascadia-green font-medium transition-colors">Pricing</a>
              <button 
                onClick={openModal}
                className="bg-cascadia-amber text-cascadia-green font-bold px-6 py-2.5 rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-md"
              >
                Free Consult
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-cascadia-green">
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 p-4 space-y-4">
             <a href="#services" className="block text-cascadia-grey font-medium" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
             <a href="#hardware" className="block text-cascadia-grey font-medium" onClick={() => setIsMobileMenuOpen(false)}>Hardware</a>
             <a href="#pricing" className="block text-cascadia-grey font-medium" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
             <button 
                onClick={() => { openModal(); setIsMobileMenuOpen(false); }}
                className="w-full bg-cascadia-amber text-cascadia-green font-bold py-3 rounded-lg"
              >
                Free Consult
              </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-cascadia-light">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%">
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2F4F4F" strokeWidth="0.5"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-heading font-extrabold text-cascadia-green leading-tight mb-6"
            >
              Is Your Business Ready for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cascadia-green to-emerald-600">
                2026: The Year of AI?
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-cascadia-grey mb-10 leading-relaxed"
            >
              Secure, practical AI solutions for Portland's regional economy. 
              From intelligent voice agents to air-gapped supercomputers, we bridge the gap between legacy business and future intelligence.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button 
                onClick={openModal}
                className="w-full sm:w-auto px-8 py-4 bg-cascadia-green text-white font-bold rounded-lg hover:bg-emerald-900 transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                Claim Free Dec 2025 Strategy Session <ArrowRight size={20} className="text-cascadia-amber"/>
              </button>
              <a 
                href="#hardware"
                className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-cascadia-green text-cascadia-green font-bold rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center"
              >
                View Hardware
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-cascadia-light border border-slate-100 hover:border-cascadia-amber/50 transition-all hover:shadow-xl group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-cascadia-green mb-6 group-hover:scale-110 transition-transform">
                <Bot size={32} />
              </div>
              <h3 className="text-2xl font-bold text-cascadia-green mb-3">24/7 Voice Agents</h3>
              <p className="text-cascadia-grey leading-relaxed">
                Never miss a lead. Our AI handles scheduling, intake, and qualification while you're on the job site or in a meeting.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-cascadia-light border border-slate-100 hover:border-cascadia-amber/50 transition-all hover:shadow-xl group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-cascadia-green mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold text-cascadia-green mb-3">On-Prem Security</h3>
              <p className="text-cascadia-grey leading-relaxed">
                Sovereign AI that lives in your office. Keep client data secure with air-gapped Nvidia DGX Spark systems.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-cascadia-light border border-slate-100 hover:border-cascadia-amber/50 transition-all hover:shadow-xl group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-cascadia-green mb-6 group-hover:scale-110 transition-transform">
                <LineChart size={32} />
              </div>
              <h3 className="text-2xl font-bold text-cascadia-green mb-3">AEO & GEO Ranking</h3>
              <p className="text-cascadia-grey leading-relaxed">
                Don't just rank on Google. We optimize your digital presence to be the top answer on ChatGPT, Claude, and Perplexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Spotlight */}
      <section id="hardware" className="py-24 bg-cascadia-green text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-cascadia-amber/20 text-cascadia-amber text-sm font-bold mb-6">
                THE SOVEREIGN AI BOX
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">The Power of the Cloud, On Your Desk.</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Meet the Nvidia DGX Spark. A dedicated AI supercomputer for your business. 
                Process legal contracts, analyze patient records, or train internal models without a single byte of data leaving your building.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-cascadia-amber" /> <span>128GB Unified Memory for Large Models</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-cascadia-amber" /> <span>Air-Gapped Privacy & Compliance</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-cascadia-amber" /> <span>Zero Monthly Cloud API Fees</span>
                </li>
              </ul>
              <div className="flex items-center gap-4">
                 <span className="text-3xl font-bold text-white">$10k</span>
                 <span className="text-slate-400">One-time Setup Package</span>
              </div>
            </div>
            
            <div className="relative">
                {/* Hardware Placeholder Visualization */}
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-800 to-black shadow-2xl border border-slate-700 flex flex-col items-center justify-center p-8 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-black opacity-80"></div>
                    
                    {/* Device Representation */}
                    <div className="relative z-10 w-3/4 h-1/2 bg-gradient-to-t from-slate-400 to-slate-200 rounded-lg shadow-inner flex items-center justify-center">
                        <div className="w-full h-2 bg-slate-900 absolute bottom-4 opacity-20 filter blur-sm"></div>
                        <Cpu size={64} className="text-slate-600 opacity-50" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-500 font-mono text-xs tracking-widest">NVIDIA DGX SPARK</div>
                    </div>

                    {/* Holographic UI Effect */}
                    <div className="absolute top-1/4 w-full h-full bg-gradient-to-b from-cascadia-amber/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute bottom-8 text-cascadia-amber font-mono text-xs animate-pulse">
                        STATUS: ONLINE // MODEL: LLAMA-3-70B
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-cascadia-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-heading font-bold text-cascadia-green mb-4">Simple, Transparent Pricing</h2>
             <p className="text-cascadia-grey max-w-2xl mx-auto">Choose the model that fits your maturity level. From getting found online to securing your internal data.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Subscription Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 hover:scale-105 transition-transform duration-300">
                <div className="mb-6">
                   <h3 className="text-xl font-bold text-cascadia-green">Strategic Partner</h3>
                   <div className="text-4xl font-bold text-cascadia-green mt-4 mb-2">$500 - $1k<span className="text-lg text-cascadia-grey font-normal">/mo</span></div>
                   <p className="text-cascadia-grey text-sm">For businesses needing visibility and ongoing automation updates.</p>
                </div>
                <hr className="border-slate-100 my-6"/>
                <ul className="space-y-4 mb-8">
                   <li className="flex items-center gap-3 text-sm text-cascadia-green"><CheckCircle2 size={18} className="text-cascadia-amber"/> Quarterly Strategy Audits</li>
                   <li className="flex items-center gap-3 text-sm text-cascadia-green"><CheckCircle2 size={18} className="text-cascadia-amber"/> AEO/GEO Content Updates</li>
                   <li className="flex items-center gap-3 text-sm text-cascadia-green"><CheckCircle2 size={18} className="text-cascadia-amber"/> 24/7 Chat/Voice Agent Maint.</li>
                </ul>
                <button onClick={openModal} className="w-full py-3 border-2 border-cascadia-green text-cascadia-green font-bold rounded-lg hover:bg-cascadia-green hover:text-white transition-colors">
                  Start Subscription
                </button>
              </div>

              {/* Hardware Card */}
              <div className="bg-cascadia-green rounded-2xl shadow-xl border border-cascadia-green p-8 text-white hover:scale-105 transition-transform duration-300 relative">
                <div className="absolute top-0 right-0 bg-cascadia-amber text-cascadia-green text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">MOST SECURE</div>
                <div className="mb-6">
                   <h3 className="text-xl font-bold text-white">Sovereign Infrastructure</h3>
                   <div className="text-4xl font-bold text-white mt-4 mb-2">$10,000<span className="text-lg text-slate-300 font-normal"> one-time</span></div>
                   <p className="text-slate-300 text-sm">Complete ownership of your AI stack. Hardware + Setup.</p>
                </div>
                <hr className="border-slate-600 my-6"/>
                <ul className="space-y-4 mb-8">
                   <li className="flex items-center gap-3 text-sm text-slate-100"><CheckCircle2 size={18} className="text-cascadia-amber"/> Nvidia DGX Spark Unit</li>
                   <li className="flex items-center gap-3 text-sm text-slate-100"><CheckCircle2 size={18} className="text-cascadia-amber"/> Local Model Fine-tuning</li>
                   <li className="flex items-center gap-3 text-sm text-slate-100"><CheckCircle2 size={18} className="text-cascadia-amber"/> Staff Training Day included</li>
                </ul>
                <button onClick={openModal} className="w-full py-3 bg-cascadia-amber text-cascadia-green font-bold rounded-lg hover:bg-white transition-colors">
                  Order Hardware
                </button>
              </div>
           </div>
        </div>
      </section>

      {/* About / Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <span className="font-heading font-bold text-xl text-white tracking-tight mb-4 block">
                VITAL <span className="font-normal text-slate-500">ENTERPRISES</span>
              </span>
              <p className="text-slate-400 max-w-sm">
                Built for the real economy. We serve non-technical businesses like Percasso Coffee and DeSantis Landscaping. 
                No buzzwords, just results.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-cascadia-amber transition-colors">Web Redesign</a></li>
                <li><a href="#" className="hover:text-cascadia-amber transition-colors">Voice Agents</a></li>
                <li><a href="#" className="hover:text-cascadia-amber transition-colors">Sovereign AI</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-cascadia-amber transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cascadia-amber transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Vital Enterprises. Made in Portland, OR.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button onClick={openModal} className="w-14 h-14 bg-cascadia-green text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-emerald-800 transition-colors animate-bounce-slow">
           <MessageSquare size={24} />
        </button>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}