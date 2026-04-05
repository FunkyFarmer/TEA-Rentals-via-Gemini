/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] font-sans selection:bg-[#C8A96E] selection:text-white">
      {/* Navigation Bar */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#FAF8F5] py-4 shadow-[0_2px_10px_rgba(26,26,26,0.05)]' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a 
            href="#home" 
            className={`font-serif text-2xl tracking-wide transition-colors duration-500 ${
              scrolled || mobileMenuOpen ? 'text-[#1A1A1A]' : 'text-white'
            }`}
          >
            TEA Rentals
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10">
            {['Collections', 'About', 'Inquire'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-sm tracking-wide transition-colors duration-300 hover:text-[#C8A96E] ${
                  scrolled ? 'text-[#1A1A1A]' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="text-[#1A1A1A]" size={28} />
            ) : (
              <Menu className={scrolled ? 'text-[#1A1A1A]' : 'text-white'} size={28} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#FAF8F5] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {['Collections', 'About', 'Inquire'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            onClick={() => setMobileMenuOpen(false)}
            className="font-serif text-4xl text-[#1A1A1A] hover:text-[#C8A96E] transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://placehold.co/1920x1080/3D3530/FAF8F5?text=+" 
            alt="Hero Background" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#1D1612]/45"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl px-6 flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-accent text-[#C8A96E] uppercase tracking-[0.15em] text-[0.75rem] font-semibold mb-6 block"
          >
            By The Event Architect
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-serif text-white text-5xl md:text-7xl mb-6 leading-[1.1]"
          >
            Every Table Tells a Story
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-white/90 text-lg md:text-xl mb-10 font-light max-w-2xl"
          >
            Premium lifestyle curation and rental collections for events that deserve to be remembered.
          </motion.p>
          
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            href="#catalogue" 
            className="border border-[#C8A96E] text-white font-accent uppercase tracking-[0.1em] text-[0.8rem] py-4 px-10 hover:bg-[#C8A96E] hover:text-white transition-all duration-300"
          >
            Explore Collections
          </motion.a>
        </div>
      </section>

      {/* Intro Strip */}
      <section className="bg-white border-b border-[#E8E2D9] py-16 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12"
        >
          <div className="font-serif text-xl text-[#3D3530] text-center">
            Tablescapes — Composed with intention
          </div>
          <div className="w-10 h-[1px] md:w-[1px] md:h-10 bg-[#C8A96E]/50"></div>
          <div className="font-serif text-xl text-[#3D3530] text-center">
            Curated Entrances — First impressions, elevated
          </div>
          <div className="w-10 h-[1px] md:w-[1px] md:h-10 bg-[#C8A96E]/50"></div>
          <div className="font-serif text-xl text-[#3D3530] text-center">
            Lounge & Photo Setups — Spaces that feel alive
          </div>
        </motion.div>
      </section>
      
      {/* Spacer for scrolling demonstration (to be replaced by Catalogue later) */}
      <div className="h-screen bg-[#FAF8F5]"></div>
    </div>
  );
}
