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
        <section className="relative min-h-[100svh] flex items-center bg-brand-light overflow-hidden pt-[80px]">
            {/* Hero Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-images/ioteg-hero-desktop.png"
                    alt="IOTEG Engineering Solutions"
                    fill
                    priority
                    className="object-cover object-center lg:object-right"
                    sizes="100vw"
                />
            </div>

            <div className="mx-auto max-w-[1536px] px-6 w-full relative z-10 flex flex-col lg:flex-row items-center lg:justify-start h-full pb-12 lg:pb-0">
                {/* Hero Content Card - Left Aligned */}
                <div
                    className="w-full max-w-xl lg:max-w-2xl p-8 sm:p-10 lg:p-14 bg-white/70 backdrop-blur-xl rounded-[2.5rem] border border-white/50 shadow-xl relative overflow-hidden text-center lg:text-left mt-10 lg:mt-0 animate-fade-in"
                    ref={containerRef}
                    style={{ transition: 'transform 0.1s ease-out', perspective: '1000px' }}
                >
                    <div className="relative z-10 flex flex-col items-center lg:items-start">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-brand-dark/10 bg-white/50 text-brand-dark/80 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-6 sm:mb-8 animate-fade-in">
                            ESTABLISHED 2021
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 sm:mb-8 leading-[0.95] text-brand-dark transition-all duration-500 cursor-default group/title font-heading italic animate-slide-up delay-100">
                            INNOVATIVE <br />
                            <span className="text-accent transition-all duration-500 group-hover/title:drop-shadow-[0_0_20px_rgba(255,44,0,0.2)]">SOLUTIONS</span>
                        </h1>

                        <p className="text-brand-dark/80 text-lg sm:text-xl max-w-lg mb-8 sm:mb-10 font-medium leading-relaxed font-body animate-slide-up delay-200">
                            Engineering excellence through IoT, automation, and renewable energy.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start animate-slide-up delay-300">
                            <button className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-full text-lg font-bold shadow-[0_4px_20px_rgba(255,44,0,0.2)] hover:shadow-[0_8px_30px_rgba(255,44,0,0.4)] transition-all hover:-translate-y-1">
                                GET STARTED
                            </button>
                            <button className="w-full sm:w-auto bg-white/40 border-2 border-brand-dark/10 text-brand-dark px-8 py-4 rounded-full text-lg font-bold transition-all hover:bg-white hover:border-white shadow-sm">
                                OUR PROJECTS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
