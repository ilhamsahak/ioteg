"use client";

export default function VibrationTech() {
    return (
        <section className="py-32 relative overflow-hidden bg-gradient-to-b from-brand-dark via-black to-brand-dark">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px]" />

            <div className="mx-auto max-w-[1536px] px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center py-10 sm:py-20">
                    {/* Left Side - Content */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-6">
                            COMING SOON
                        </div>

                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight text-white">
                            RIDE <span className="text-accent">SMOOTHER.</span><br />
                            FEEL <span className="text-accent">BETTER.</span>
                        </h2>

                        <p className="text-[#E2E2E2] text-lg font-light leading-relaxed mb-8">
                            We're developing cutting-edge technology to counter vibrations experienced by motorcycle riders.
                            Our innovative solution aims to enhance rider comfort and reduce fatigue on long journeys.
                        </p>

                        <div className="space-y-4 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                                <div>
                                    <h4 className="text-white font-bold mb-1">Advanced Vibration Dampening</h4>
                                    <p className="text-[#E2E2E2]/90 text-sm">Intelligent system that adapts to different riding conditions</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                                <div>
                                    <h4 className="text-white font-bold mb-1">Enhanced Rider Comfort</h4>
                                    <p className="text-[#E2E2E2]/90 text-sm">Reduces fatigue and improves overall riding experience</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                                <div>
                                    <h4 className="text-white font-bold mb-1">IoT Integration</h4>
                                    <p className="text-[#E2E2E2]/90 text-sm">Real-time monitoring and data-driven optimization</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-accent text-white px-8 py-3.5 rounded-full font-bold shadow-[0_0_40px_rgba(255,44,0,0.3)] hover:shadow-[0_0_60px_rgba(255,44,0,0.5)] transition-all hover:-translate-y-1">
                                NOTIFY ME
                            </button>
                            <button className="glass text-white px-8 py-3.5 rounded-full font-bold transition-all hover:bg-white/10">
                                LEARN MORE
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Visual */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative group">
                            {/* Glowing effect */}
                            <div className="absolute -inset-8 bg-accent/20 rounded-[4rem] blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />

                            {/* Main visual container */}
                            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-[3rem] p-12 overflow-hidden">
                                {/* Grid pattern overlay */}
                                <div className="absolute inset-0 bg-grid opacity-20" />

                                {/* Motorcycle helmet illustration */}
                                <div className="relative z-10 flex items-center justify-center h-[400px]">
                                    <div className="relative">
                                        {/* Vibration waves animation */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-64 h-64 border-2 border-accent/30 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                                            <div className="absolute w-48 h-48 border-2 border-accent/20 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
                                            <div className="absolute w-32 h-32 border-2 border-accent/10 rounded-full animate-ping" style={{ animationDuration: '1.5s', animationDelay: '1s' }} />
                                        </div>

                                        {/* Center icon */}
                                        <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-accent to-accent/70 rounded-3xl flex items-center justify-center shadow-[0_0_60px_rgba(255,44,0,0.4)]">
                                            <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Tech specs overlay */}
                                <div className="absolute bottom-8 left-8 right-8 glass rounded-2xl p-4">
                                    <div className="flex items-center justify-between text-xs">
                                        <div>
                                            <div className="text-[#E2E2E2]/70 mb-1 text-xs">STATUS</div>
                                            <div className="text-accent font-bold">IN DEVELOPMENT</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[#E2E2E2]/70 mb-1 text-xs">LAUNCH</div>
                                            <div className="text-white font-bold">2026</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
