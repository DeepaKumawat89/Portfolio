import React from 'react';

const Experience = () => {
    const experiences = [
        {
            id: '01',
            category: 'INDUSTRIAL SYSTEMS',
            company: 'Zanver Group of Industries',
            role: 'Flutter Developer Intern',
            period: '2024 – 2025',
            location: 'Kolhapur',
            description: 'Engineering precision RFID solutions for warehouse logistics, focusing on long-range material tracking and structural inventory optimization.',
            stack: ['Flutter', 'RFID SDK', 'Dart'],
            metric: '30M SCAN RANGE'
        },
        {
            id: '02',
            category: 'ENTERPRISE SOLUTIONS',
            company: 'Siddham Innovation Center',
            role: 'Flutter Developer Intern',
            period: '2024',
            location: 'Kolhapur',
            description: 'Developing reactive management ecosystems for visitor and maintenance coordination, implementing high-performance API bridges.',
            stack: ['Flutter', 'Spring Boot', 'GetX'],
            metric: '95% CRASH-FREE'
        }
    ];

    return (
        <section id="experience" className="relative py-12 md:py-16 bg-[#FFFBF5] overflow-hidden">
            {/* Structural Background Architectural Lines */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-[15%] w-px h-full bg-pista/20"></div>
                <div className="absolute top-0 right-[25%] w-px h-full bg-pista/10"></div>
                <div className="absolute bottom-[20%] left-0 w-full h-px bg-pista/20"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <div className="mb-4 md:mb-6 space-y-4 text-center text-balance">
                    <div className="flex items-center justify-center gap-4 animate-[fadeIn_0.6s_ease-out]">
                        <div className="h-px w-8 md:w-16 bg-pista-dark"></div>
                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] text-pista-dark">03 // CAREER</span>
                        <div className="h-px w-8 md:w-16 bg-pista-dark"></div>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-bold text-text tracking-tighter uppercase" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                        TECHNICAL <span className="text-pista-dark text-nowrap">HISTORY</span>
                    </h2>
                </div>

                {/* Narrative Text Outside Cards */}
                <div className="max-w-3xl mx-auto mb-8 md:mb-12 text-center animate-[fadeInUp_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                    <p className="text-lg md:text-2xl font-bold text-text-muted leading-relaxed italic opacity-60 px-4 md:px-0" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                        "Engineering precision at the intersection of logistics and logic."
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-8">
                        <div className="text-center">
                            <div className="text-2xl font-black text-text tracking-tighter">2+</div>
                            <div className="text-[8px] font-black uppercase tracking-widest text-pista-dark/40">INTERNSHIPS</div>
                        </div>
                        <div className="h-8 w-px bg-pista/20"></div>
                        <div className="text-center">
                            <div className="text-2xl font-black text-text tracking-tighter">100%</div>
                            <div className="text-[8px] font-black uppercase tracking-widest text-pista-dark/40">COMMITMENT</div>
                        </div>
                    </div>
                </div>

                {/* Grid Layout - Matching Projects Style */}
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 md:gap-10 max-w-6xl mx-auto">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl md:rounded-[2.5rem] p-4 md:p-12 flex flex-col justify-between border border-pista/10 shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] animate-[fadeInUp_0.8s_ease-out] opacity-0 [animation-fill-mode:forwards]"
                            style={{ animationDelay: `${index * 0.15 + 0.4}s` }}
                        >
                            {/* Inner Kinetic Gradient Blobs */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 md:w-48 md:h-48 bg-pista/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>

                            <div className="relative z-10 space-y-4 md:space-y-10">
                                {/* Header: Category & Period */}
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-pista-dark"></div>
                                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-pista-dark/60">{exp.category}</span>
                                    </div>
                                    <span className="text-[10px] md:text-xs font-bold text-text-light italic">{exp.period}</span>
                                </div>

                                {/* Title & Role */}
                                <div className="space-y-4">
                                    <div className="text-5xl md:text-6xl font-black text-pista-dark/5 absolute -top-4 -left-2 select-none group-hover:text-pista-dark/15 transition-colors">{exp.id}</div>
                                    <h3 className="text-base md:text-4xl font-bold text-text group-hover:text-pista-dark transition-colors duration-300">
                                        {exp.role}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="text-sm md:text-xl font-bold text-text">{exp.company}</span>
                                        <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-pista"></span>
                                        <span className="w-full md:w-auto text-[10px] font-black text-pista-dark uppercase tracking-widest">{exp.location}</span>
                                    </div>
                                    <p className="text-sm md:text-base text-text-muted leading-relaxed opacity-80">
                                        {exp.description}
                                    </p>
                                </div>

                                {/* Stack Pills */}
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {exp.stack.map((tag, i) => (
                                        <span key={i} className="text-[7px] md:text-[9px] font-bold text-text-muted bg-[#FFFBF5] px-2 md:px-5 py-1 md:py-2 rounded-full border border-pista/20 group-hover:border-pista-dark/30 transition-colors uppercase tracking-tight">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Footer Metrics & Kinetic Link */}
                            <div className="relative z-10 mt-6 md:mt-12 flex items-end justify-between border-t border-pista/10 pt-4 md:pt-8">
                                <div className="space-y-0.5">
                                    <div className="text-[7px] md:text-[10px] font-black text-pista-dark/40 uppercase tracking-widest">metric</div>
                                    <div className="text-sm md:text-xl font-black text-text tracking-tighter italic">
                                        {exp.metric}
                                    </div>
                                </div>
                                <div className="w-8 h-8 md:w-14 md:h-14 bg-text rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-110 group-hover:rotate-45 transition-all duration-500 shadow-xl group-hover:bg-pista-dark">
                                    <svg width="14" height="14" md:width="24" md:height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Industrial Background Watermark */}
                <div className="absolute left-[-5%] bottom-[-5%] text-6xl md:text-[15rem] font-black text-pista/5 select-none pointer-events-none transform -rotate-3 overflow-hidden whitespace-nowrap">
                    EVOLUTION
                </div>
            </div>
        </section>
    );
};

export default Experience;
