"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current || window.innerWidth < 1024) return;
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 10;
            const y = (clientY / window.innerHeight - 0.5) * 10;
            containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="relative h-[100svh] flex items-center overflow-hidden bg-brand-dark">
            {/* Optimized Background Image Container */}
            <div className="absolute inset-0 z-0">
                {/* Desktop Background */}
                <div className="hidden md:block absolute inset-0">
                    <Image
                        src="/hero images/ioteg-hero-desktop.png"
                        alt="Background"
                        fill
                        priority
                        className="object-cover object-center"
                        quality={90}
                    />
                </div>
                {/* Mobile Background */}
                <div className="md:hidden absolute inset-0">
                    <Image
                        src="/hero images/ioteg-hero-mobile.png"
                        alt="Background"
                        fill
                        priority
                        className="object-cover object-center"
                        quality={85}
                    />
                </div>

                {/* Responsive Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/60 via-brand-dark/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-brand-dark/20" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
                <div className="max-w-4xl" ref={containerRef} style={{ transition: 'transform 0.1s ease-out', perspective: '1000px' }}>
                    <div className="inline-block w-full max-w-xl p-8 sm:p-12 lg:p-14 bg-white/[0.03] backdrop-blur-md rounded-[2.5rem] sm:rounded-[3.5rem] border border-white/10 shadow-2xl relative overflow-hidden group text-center sm:text-left">
                        <div className="relative z-10">
                            <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/90 text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-6 sm:mb-8 animate-fade-in">
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
                                <button className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 sm:px-10 py-4 rounded-full text-base sm:text-lg font-bold transition-all hover:bg-white hover:text-brand-dark">
                                    OUR PROJECTS
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Polish Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent z-20 pointer-events-none" />
        </section>
    );
}
