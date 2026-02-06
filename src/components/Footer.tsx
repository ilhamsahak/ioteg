"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-brand-dark pt-16 sm:pt-24 lg:pt-32 pb-8 sm:pb-12 border-t border-white/5">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 mb-16 sm:mb-24 lg:mb-32">
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6 sm:mb-8 leading-[0.9] text-white">
                            LET&apos;S BUILD <br />
                            <span className="text-accent underline">THINGS</span> RIGHT.
                        </h2>
                        <p className="text-white text-base sm:text-lg max-w-md font-light mb-8 sm:mb-10">
                            Transforming businesses through intelligent engineering and sustainable innovation since 2021.
                        </p>
                        <div className="flex gap-4">
                            {/* Social placeholders */}
                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent text-white transition-all cursor-pointer">
                                <span className="text-xs">FB</span>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent text-white transition-all cursor-pointer">
                                <span className="text-xs">LN</span>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent text-white transition-all cursor-pointer">
                                <span className="text-xs">IG</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-accent/5 p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[3rem] border border-accent/10">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 tracking-tight text-white">CONTACT US</h3>

                        <div className="space-y-6">
                            {/* Phone Number */}
                            <div className="group">
                                <p className="text-accent text-xs font-bold tracking-widest uppercase mb-2">Phone</p>
                                <a
                                    href="tel:+60112915639"
                                    className="text-white text-lg sm:text-xl font-semibold hover:text-accent transition-colors flex items-center gap-3"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    +60 11-2915 3639
                                </a>
                            </div>

                            {/* Email */}
                            <div className="group">
                                <p className="text-accent text-xs font-bold tracking-widest uppercase mb-2">Email</p>
                                <a
                                    href="mailto:info@ioteg.com"
                                    className="text-white text-xl font-semibold hover:text-accent transition-colors flex items-center gap-3"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    info@ioteg.com
                                </a>
                            </div>

                            {/* CTA Button */}
                            <div className="pt-4">
                                <a
                                    href="mailto:info@ioteg.com"
                                    className="block w-full bg-accent text-white py-6 rounded-2xl font-bold uppercase tracking-widest hover:scale-[1.02] transition-all text-center"
                                >
                                    Get In Touch
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-[10px] uppercase tracking-[0.4em] font-bold text-white">
                    <span>&copy; 2026 IOTEGRITY ENGINEERING. ALL RIGHTS RESERVED.</span>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <Link href="#" className="text-white hover:text-accent transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-white hover:text-accent transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
