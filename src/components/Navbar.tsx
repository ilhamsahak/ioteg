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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-sm shadow-md py-3" : "bg-white/60 backdrop-blur-sm py-3"
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <img
                        src="/Logo image/ioteg-logo.png"
                        alt="IOTEG Logo"
                        className={`transition-all duration-300 ${scrolled ? "h-14" : "h-20"} w-auto hover:scale-105`}
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink href="#services">Services</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#about">About</NavLink>
                    <Link
                        href="#contact"
                        className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
                    >
                        Consultation
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-[#0A0A0A] z-50 p-2"
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
                <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg border-t border-[#0A0A0A]/10">
                    <div className="container mx-auto px-4 py-6 space-y-4">
                        <MobileNavLink href="#services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
                        <MobileNavLink href="#projects" onClick={() => setIsOpen(false)}>Projects</MobileNavLink>
                        <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
                        <Link
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg shadow-accent/20"
                        >
                            Consultation
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-[#0A0A0A]/70 hover:text-accent transition-colors font-semibold text-sm uppercase tracking-wider"
        >
            {children}
        </Link>
    );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="block text-[#0A0A0A] hover:text-accent transition-colors font-semibold text-lg uppercase tracking-wider py-2"
        >
            {children}
        </Link>
    );
}
