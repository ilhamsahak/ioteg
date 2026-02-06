"use client";

// Abstract SVG Illustrations for each project category
const ProjectIllustration = ({ category }: { category: string }) => {
    if (category === "IoT") {
        return (
            <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                <rect width="400" height="300" fill="#E2E2E2" />
                {/* Smart city grid pattern */}
                <circle cx="100" cy="100" r="40" fill="#FF2C00" opacity="0.2" />
                <circle cx="300" cy="100" r="40" fill="#FF2C00" opacity="0.2" />
                <circle cx="100" cy="200" r="40" fill="#FF2C00" opacity="0.2" />
                <circle cx="300" cy="200" r="40" fill="#FF2C00" opacity="0.2" />

                <circle cx="100" cy="100" r="15" fill="#0A0A0A" />
                <circle cx="300" cy="100" r="15" fill="#0A0A0A" />
                <circle cx="100" cy="200" r="15" fill="#0A0A0A" />
                <circle cx="300" cy="200" r="15" fill="#0A0A0A" />
                <circle cx="200" cy="150" r="20" fill="#FF2C00" />

                {/* Connection lines */}
                <line x1="100" y1="100" x2="200" y2="150" stroke="#FF2C00" strokeWidth="2" opacity="0.5" />
                <line x1="300" y1="100" x2="200" y2="150" stroke="#FF2C00" strokeWidth="2" opacity="0.5" />
                <line x1="100" y1="200" x2="200" y2="150" stroke="#FF2C00" strokeWidth="2" opacity="0.5" />
                <line x1="300" y1="200" x2="200" y2="150" stroke="#FF2C00" strokeWidth="2" opacity="0.5" />

                {/* Building silhouettes */}
                <rect x="50" y="180" width="30" height="100" fill="#0A0A0A" opacity="0.3" />
                <rect x="250" y="160" width="40" height="120" fill="#0A0A0A" opacity="0.3" />
            </svg>
        );
    }

    if (category === "Biotech") {
        return (
            <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                <rect width="400" height="300" fill="#E2E2E2" />
                {/* Plant/growth visualization */}
                <path d="M 200 250 Q 180 200 200 150 Q 220 200 200 250" fill="#0A0A0A" opacity="0.2" />
                <circle cx="200" cy="150" r="30" fill="#FF2C00" opacity="0.3" />
                <circle cx="200" cy="150" r="15" fill="#FF2C00" />

                {/* Leaf shapes */}
                <ellipse cx="160" cy="180" rx="25" ry="40" fill="#0A0A0A" opacity="0.2" transform="rotate(-30 160 180)" />
                <ellipse cx="240" cy="180" rx="25" ry="40" fill="#0A0A0A" opacity="0.2" transform="rotate(30 240 180)" />

                {/* Data points */}
                <circle cx="150" cy="120" r="8" fill="#FF2C00" />
                <circle cx="250" cy="120" r="8" fill="#FF2C00" />
                <circle cx="180" cy="220" r="8" fill="#FF2C00" />
                <circle cx="220" cy="220" r="8" fill="#FF2C00" />

                {/* Growth chart bars */}
                <rect x="50" y="200" width="20" height="50" fill="#0A0A0A" opacity="0.3" rx="2" />
                <rect x="80" y="180" width="20" height="70" fill="#FF2C00" opacity="0.5" rx="2" />
                <rect x="110" y="160" width="20" height="90" fill="#FF2C00" opacity="0.7" rx="2" />
            </svg>
        );
    }

    if (category === "Automation") {
        return (
            <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                <rect width="400" height="300" fill="#E2E2E2" />
                {/* Gear/cog system */}
                <circle cx="150" cy="150" r="60" fill="none" stroke="#0A0A0A" strokeWidth="8" opacity="0.3" />
                <circle cx="150" cy="150" r="40" fill="none" stroke="#FF2C00" strokeWidth="4" />
                <circle cx="150" cy="150" r="20" fill="#FF2C00" />

                <circle cx="270" cy="150" r="50" fill="none" stroke="#0A0A0A" strokeWidth="8" opacity="0.3" />
                <circle cx="270" cy="150" r="35" fill="none" stroke="#FF2C00" strokeWidth="4" />
                <circle cx="270" cy="150" r="15" fill="#FF2C00" />

                {/* Connecting belt/chain */}
                <rect x="150" y="135" width="120" height="30" fill="#0A0A0A" opacity="0.1" rx="15" />

                {/* Robot arm segments */}
                <rect x="80" y="200" width="100" height="15" fill="#0A0A0A" opacity="0.4" rx="7" />
                <rect x="150" y="180" width="80" height="15" fill="#FF2C00" opacity="0.6" rx="7" transform="rotate(-30 190 187)" />

                {/* Control panel */}
                <rect x="300" y="50" width="80" height="100" fill="#0A0A0A" opacity="0.2" rx="8" />
                <rect x="310" y="70" width="20" height="20" fill="#FF2C00" rx="4" />
                <rect x="340" y="70" width="20" height="20" fill="#FF2C00" opacity="0.5" rx="4" />
            </svg>
        );
    }

    // Sustainability/Clean Energy
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect width="400" height="300" fill="#E2E2E2" />
            {/* Solar panel grid */}
            <rect x="80" y="100" width="240" height="120" fill="#0A0A0A" opacity="0.2" rx="8" />
            <line x1="200" y1="100" x2="200" y2="220" stroke="#FF2C00" strokeWidth="2" opacity="0.5" />
            <line x1="80" y1="160" x2="320" y2="160" stroke="#FF2C00" strokeWidth="2" opacity="0.5" />

            {/* Sun/energy source */}
            <circle cx="320" cy="80" r="35" fill="#FF2C00" opacity="0.3" />
            <circle cx="320" cy="80" r="20" fill="#FF2C00" />

            {/* Energy rays */}
            <line x1="320" y1="40" x2="320" y2="20" stroke="#FF2C00" strokeWidth="3" opacity="0.6" />
            <line x1="360" y1="80" x2="380" y2="80" stroke="#FF2C00" strokeWidth="3" opacity="0.6" />
            <line x1="350" y1="50" x2="365" y2="35" stroke="#FF2C00" strokeWidth="3" opacity="0.6" />

            {/* Power flow visualization */}
            <path d="M 200 220 L 200 250" stroke="#FF2C00" strokeWidth="4" opacity="0.7" />
            <circle cx="200" cy="260" r="10" fill="#FF2C00" />

            {/* Battery/storage */}
            <rect x="170" y="240" width="60" height="40" fill="#0A0A0A" opacity="0.3" rx="4" />
            <rect x="175" y="245" width="50" height="30" fill="#FF2C00" opacity="0.5" rx="2" />
        </svg>
    );
};

const projects = [
    {
        id: 1,
        title: "Smart City Grid",
        category: "IoT",
        description: "Intelligent energy management for modern urban infrastructure."
    },
    {
        id: 2,
        title: "Precision Agri",
        category: "Biotech",
        description: "Automated crop monitoring and resource optimization systems."
    },
    {
        id: 3,
        title: "Industrial AI",
        category: "Automation",
        description: "Next-gen robotics and machine learning for manufacturing."
    },
    {
        id: 4,
        title: "Clean Energy",
        category: "Sustainability",
        description: "Renewable energy integration and storage solutions."
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-16 sm:py-24 lg:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Redesigned Header Section */}
                <div className="relative mb-12 sm:mb-16 lg:mb-20">
                    {/* Subtle Background Text */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
                        <h2 className="text-[8rem] sm:text-[12rem] lg:text-[18rem] font-black tracking-tighter text-[#0A0A0A] whitespace-nowrap">
                            PORTFOLIO
                        </h2>
                    </div>

                    {/* Main Content */}
                    <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                        {/* Eyebrow */}
                        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <div className="h-[1px] w-8 sm:w-12 bg-accent/50" />
                            <span className="text-accent font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[10px] sm:text-[11px] uppercase">
                                Proven Impact
                            </span>
                            <div className="h-[1px] w-8 sm:w-12 bg-accent/50" />
                        </div>

                        {/* Main Heading */}
                        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0A0A0A] mb-4 sm:mb-6 leading-[1.1] uppercase">
                            Engineering
                            <br />
                            <span className="text-accent italic font-black">Excellence</span>
                        </h3>

                        {/* Subheading */}
                        <p className="text-[#0A0A0A]/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                            Transforming industries through innovative solutions and cutting-edge technology
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {projects.map((p) => (
                        <div key={p.id} className="group">
                            {/* Image Container - No Overlay */}
                            <div className="relative overflow-hidden rounded-2xl mb-6 bg-[#E2E2E2] aspect-[4/3]">
                                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                                    <ProjectIllustration category={p.category} />
                                </div>
                            </div>

                            {/* Text Content Below Image */}
                            <div className="space-y-3 sm:space-y-4">
                                {/* Category Badge */}
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-accent" />
                                    <span className="text-accent text-xs font-bold tracking-widest uppercase">
                                        {p.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight">
                                    {p.title}
                                </h4>

                                {/* Description */}
                                <p className="text-[#0A0A0A]/70 text-sm sm:text-base leading-relaxed">
                                    {p.description}
                                </p>

                                {/* View Project Link */}
                                <div className="pt-1">
                                    <button className="text-accent text-sm font-semibold uppercase tracking-wider hover:gap-3 flex items-center gap-2 transition-all group/btn">
                                        View Project
                                        <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
