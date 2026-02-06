"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VibrationTech from "@/components/VibrationTech";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Navbar />
      <Hero />
      <VibrationTech />

      {/* Trusted By Section (Simple Text Scroll) */}
      <section className="py-12 border-y border-white/5 bg-black/50 overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll gap-20">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex gap-20">
              <span className="text-white/20 text-xl font-bold uppercase tracking-[1em]">MPOB</span>
              <span className="text-white/20 text-xl font-bold uppercase tracking-[1em]">MTDC</span>
              <span className="text-white/20 text-xl font-bold uppercase tracking-[1em]">SLAIM</span>
              <span className="text-white/20 text-xl font-bold uppercase tracking-[1em]">UPM</span>
              <span className="text-white/20 text-xl font-bold uppercase tracking-[1em]">UTM</span>
            </div>
          ))}
        </div>
      </section>

      <div id="about" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-white">
        <div className="mx-auto max-w-[1536px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              {/* About Us Image */}
              <div className="relative z-10 overflow-hidden rounded-2xl sm:rounded-3xl">
                <img
                  src="/about-us-image/about-us.jpg"
                  alt="About Iotegrity Engineering"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-accent font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-4 sm:mb-6">Our Story</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tighter mb-6 sm:mb-8 leading-tight text-[#0A0A0A]">
                LEAVE IT <span className="text-accent whitespace-nowrap">TO US.</span>
              </h3>
              <p className="text-[#0A0A0A]/80 text-base sm:text-lg font-light leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Founded in 2021 in Malaysia, Iotegrity specializes in IoT, data acquisition,
                automation, and renewable energy. We provide innovative solutions for food
                security, production, and education.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h4 className="text-[#0A0A0A] font-bold mb-2 uppercase tracking-tighter text-sm sm:text-base">Vision</h4>
                  <p className="text-[#0A0A0A]/70 text-xs sm:text-sm font-light">To be the global leader in sustainable engineering through innovative IoT solutions.</p>
                </div>
                <div>
                  <h4 className="text-[#0A0A0A] font-bold mb-2 uppercase tracking-tighter text-sm sm:text-base">Mission</h4>
                  <p className="text-[#0A0A0A]/70 text-xs sm:text-sm font-light">Delivering results, reliability, and repeatability for SMEs and educational institutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Services />
      <Stats />
      <Projects />
      <Footer />

      {/* Global CSS for the scroll animation */}
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </main >
  );
}
