"use client";

const services = [
    {
        title: "Internet of Things",
        desc: "Remote monitoring and control systems for Home & Industrial Automation.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.345 6.344a11 11 0 0115.31 0" />
            </svg>
        ),
    },
    {
        title: "Data Acquisition",
        desc: "Environmental monitoring, air/water quality, and industrial production data logging.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    },
    {
        title: "Artificial Intelligence",
        desc: "Predictive maintenance and machine learning models for failure prevention.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    },
    {
        title: "Sustainable Biotech",
        desc: "Smart IoT monitoring for precision agriculture and community projects.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
    },
];

export default function Services() {
    return (
        <section id="services" className="py-16 sm:py-24 lg:py-32 bg-[#E2E2E2] relative">
            <div className="mx-auto max-w-[1536px] px-6">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 sm:mb-16 lg:mb-20 gap-6 sm:gap-8 text-center md:text-left">
                    <div className="max-w-2xl mx-auto md:mx-0">
                        <h2 className="text-accent font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-3 sm:mb-4">Our Expertise</h2>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#0A0A0A]">
                            BEYOND <span className="italic text-[#0A0A0A]/40">ENGINEERING</span>.
                        </h3>
                    </div>
                    <p className="text-[#0A0A0A]/70 max-w-sm font-light text-center md:text-right text-sm sm:text-base mx-auto md:mx-0">
                        We merge technology with sustainability to create impact that lasts generations.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {services.map((s, i) => (
                        <div
                            key={i}
                            className="group p-8 sm:p-10 glass rounded-2xl sm:rounded-[3rem] bg-white hover:bg-accent transition-all duration-500 hover:-translate-y-4"
                        >
                            <div className="mb-6 sm:mb-10 text-accent group-hover:text-white transition-colors">
                                {s.icon}
                            </div>
                            <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#0A0A0A] group-hover:text-white uppercase tracking-tighter transition-colors">
                                {s.title}
                            </h4>
                            <p className="text-[#0A0A0A]/70 group-hover:text-white/90 font-light leading-relaxed transition-colors text-sm sm:text-base">
                                {s.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
