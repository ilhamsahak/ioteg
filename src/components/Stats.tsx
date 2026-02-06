"use client";

const stats = [
    { label: "Successful Projects", value: "150+" },
    { label: "Expert Engineers", value: "24/7" },
    { label: "Sustainable Impact", value: "100%" },
    { label: "Innovation Awards", value: "12" },
];

export default function Stats() {
    return (
        <section className="py-12 sm:py-16 lg:py-24 bg-accent relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10" />
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 text-center text-white">
                    {stats.map((s, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black italic tracking-tighter mb-2 group-hover:scale-110 transition-transform">
                                {s.value}
                            </span>
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] opacity-80">{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
