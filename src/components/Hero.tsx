"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 20;
            const y = (clientY / window.innerHeight - 0.5) * 20;
            containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-16">
            {/* Responsive Background Images */}
            {/* Desktop Image */}
            <div
                className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/hero images/ioteg-hero-desktop.png')`,
                }}
            />

            {/* Mobile Image */}
            <div
                className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/hero images/ioteg-hero-mobile.png')`,
                }}
            />

            {/* Lighter overlay for text readability while showing background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#E2E2E2]/80 via-[#E2E2E2]/40 to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div
                    className="max-w-4xl mx-auto sm:mx-0 text-center sm:text-left p-8 sm:p-16 bg-white/10 backdrop-blur-xl rounded-[2.5rem] sm:rounded-[4rem] border border-white/20 shadow-2xl relative overflow-hidden group"
                    ref={containerRef}
                    style={{ transition: 'transform 0.1s ease-out' }}
                >
                    <div className="relative z-10">
                        <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-6 sm:mb-8 animate-fade-in">
                            ESTABLISHED 2021
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-6 sm:mb-8 leading-[0.9] text-[#0A0A0A] transition-all duration-500 hover:scale-[1.02] cursor-default group/title">
                            INNOVATIVE <br />
                            <span className="text-accent transition-all duration-500 group-hover/title:drop-shadow-[0_0_20px_rgba(255,44,0,0.4)]">SOLUTIONS</span>
                        </h1>

                        <p className="text-[#0A0A0A]/80 text-base sm:text-lg md:text-xl max-w-xl mb-8 sm:mb-12 font-light leading-relaxed transition-all duration-500 hover:text-[#0A0A0A] cursor-default mx-auto sm:mx-0">
                            Engineering excellence through IoT, automation, and renewable energy.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start">
                            <button className="w-full sm:w-auto bg-accent text-white px-8 sm:px-10 py-4 rounded-full text-base sm:text-lg font-bold shadow-[0_0_40px_rgba(255,44,0,0.3)] hover:shadow-[0_0_60px_rgba(255,44,0,0.5)] transition-all hover:-translate-y-1">
                                GET STARTED
                            </button>
                            <button className="w-full sm:w-auto bg-white border-2 border-[#0A0A0A] text-[#0A0A0A] px-8 sm:px-10 py-4 rounded-full text-base sm:text-lg font-bold transition-all hover:bg-[#0A0A0A] hover:text-white">
                                OUR PROJECTS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
