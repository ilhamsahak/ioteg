"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[80px] flex items-center ${scrolled
                    ? "bg-brand-dark/95 backdrop-blur-md shadow-2xl border-b border-white/5"
                    : "bg-brand-dark/80 backdrop-blur-md"
                }`}
        >
            <div className="mx-auto max-w-[1536px] px-6 w-full flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <img
                        src="/Logo image/ioteg-logo.png"
                        alt="IOTEG Logo"
                        className={`transition-all duration-300 ${scrolled ? "h-12" : "h-16"} w-auto hover:scale-105 brightness-0 invert`}
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink href="#services">Services</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#about">About</NavLink>
                    <Link
                        href="#contact"
                        className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(255,44,0,0.2)] hover:shadow-[0_8px_30px_rgba(255,44,0,0.4)]"
                    >
                        Consultation
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white z-50 p-2"
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-brand-dark/95 backdrop-blur-xl flex flex-col justify-center items-center space-y-8 z-40 animate-fade-in-down">
                    <MobileNavLink href="#services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
                    <MobileNavLink href="#projects" onClick={() => setIsOpen(false)}>Projects</MobileNavLink>
                    <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
                    <Link
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="mt-4 bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-[0_4px_20px_rgba(255,44,0,0.2)] hover:shadow-[0_8px_30px_rgba(255,44,0,0.4)]"
                    >
                        Consultation
                    </Link>
                </div>
            )}
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-white/80 hover:text-white transition-colors font-medium text-sm uppercase tracking-widest relative group"
        >
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
        </Link>
    );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="text-white/90 hover:text-accent transition-colors font-bold text-2xl uppercase tracking-widest"
        >
            {children}
        </Link>
    );
}
