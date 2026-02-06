"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current || window.innerWidth < 1024) return;
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 15;
            const y = (clientY / window.innerHeight - 0.5) * 15;
            containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-[100svh] flex items-center bg-brand-dark overflow-hidden pt-20 lg:pt-0">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center py-12 lg:py-20">

                    {/* Left Column: Hero Content Card */}
                    <div className="flex justify-center lg:justify-start w-full" ref={containerRef} style={{ transition: 'transform 0.1s ease-out', perspective: '1000px' }}>
                        <div className="w-full max-w-xl p-8 sm:p-12 lg:p-16 bg-white/5 backdrop-blur-md rounded-[2.5rem] sm:rounded-[4rem] border border-white/10 shadow-2xl relative overflow-hidden text-center sm:text-left">
                            <div className="relative z-10">
                                <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-6 sm:mb-8 animate-fade-in">
                                    ESTABLISHED 2021
                                </div>

                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-6 sm:mb-8 leading-[0.9] text-white transition-all duration-500 hover:scale-[1.02] cursor-default group/title font-heading italic">
                                    INNOVATIVE <br />
                                    <span className="text-accent transition-all duration-500 group-hover/title:drop-shadow-[0_0_20px_rgba(255,44,0,0.4)]">SOLUTIONS</span>
                                </h1>

                                <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-md mb-8 sm:mb-12 font-light leading-relaxed transition-all duration-500 hover:text-white cursor-default mx-auto sm:mx-0 font-body">
                                    Engineering excellence through IoT, automation, and renewable energy.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start">
                                    <button className="w-full sm:w-auto bg-accent text-white px-8 sm:px-10 py-4 rounded-full text-base sm:text-lg font-bold shadow-[0_0_40px_rgba(255,44,0,0.3)] hover:shadow-[0_0_60px_rgba(255,44,0,0.5)] transition-all hover:-translate-y-1">
                                        GET STARTED
                                    </button>
                                    <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 sm:px-10 py-4 rounded-full text-base sm:text-lg font-bold transition-all hover:bg-white hover:text-brand-dark">
                                        OUR PROJECTS
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Hero Image container */}
                    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] animate-fade-in-slow">
                        {/* Desktop Image */}
                        <div className="relative w-full h-full">
                            <Image
                                src="/hero images/ioteg-hero-desktop.png"
                                alt="IOTEG Engineering Solutions"
                                fill
                                priority
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        {/* Decorative floating elements */}
                        <div className="absolute top-1/4 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent z-20" />
        </section>
    );
}
