import React, { useState } from 'react';
import DetailModal from './DetailModal';

const Experience = () => {
    const [selectedExperience, setSelectedExperience] = useState(null);

    const experiences = [
        {
            id: '01',
            category: 'INDUSTRIAL SYSTEMS',
            company: 'Zanver Group of Industries',
            role: 'Flutter Developer Intern',
            period: '2024 – 2025',
            location: 'Kolhapur',
            description: 'Engineering precision RFID solutions for warehouse logistics, focusing on long-range material tracking and structural inventory optimization.',
            fullDescription: 'Developed advanced RFID-based warehouse management system using Flutter and Dart, enabling real-time inventory tracking with 30-meter scan range capability. Integrated RFID SDK for seamless hardware communication and implemented efficient data synchronization algorithms. Created intuitive mobile interface for warehouse staff to manage inventory operations, reducing manual data entry by 85%. Optimized app performance for industrial environments with offline-first architecture and background sync capabilities. Collaborated with hardware engineering team to calibrate RFID readers and troubleshoot integration issues.',
            stack: ['Flutter', 'RFID SDK', 'Dart'],
            metric: '30M SCAN RANGE',
            image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop'
        },
        {
            id: '02',
            category: 'ENTERPRISE SOLUTIONS',
            company: 'Siddham Innovation Center',
            role: 'Flutter Developer Intern',
            period: '2024',
            location: 'Kolhapur',
            description: 'Developing reactive management ecosystems for visitor and maintenance coordination, implementing high-performance API bridges.',
            fullDescription: 'Built comprehensive visitor management and maintenance coordination system using Flutter, Spring Boot, and GetX state management. Developed RESTful API integrations for real-time visitor check-in/check-out tracking and maintenance request workflows. Implemented reactive UI patterns with GetX for seamless state management across the application. Created notification system for instant alerts on visitor arrivals and maintenance updates. Achieved 95% crash-free rate through comprehensive error handling and testing. Optimized API response times and implemented efficient caching strategies for improved performance.',
            stack: ['Flutter', 'Spring Boot', 'GetX'],
            metric: '95% CRASH-FREE',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop'
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
                    <h2 className="text-3xl md:text-8xl font-bold text-text tracking-tighter uppercase whitespace-nowrap" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                        TECHNICAL <span className="text-pista-dark">HISTORY</span>
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

                {/* Grid Layout - Single Column on Mobile */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6 max-w-6xl mx-auto">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedExperience(exp)}
                            className="group relative bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-pista/10 shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] animate-[fadeInUp_0.8s_ease-out] opacity-0 [animation-fill-mode:forwards] cursor-pointer"
                            style={{ animationDelay: `${index * 0.15 + 0.4}s` }}
                        >
                            {/* Split Layout Container */}
                            <div className="flex flex-col h-full">
                                {/* Top Half - Image */}
                                <div className="relative w-full h-48 md:h-56 overflow-hidden">
                                    <img
                                        src={exp.image}
                                        alt={exp.company}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Image Overlay with Experience ID */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                                    <div className="absolute top-4 left-4 text-6xl md:text-7xl font-black text-white/20 select-none group-hover:text-white/30 transition-colors">
                                        {exp.id}
                                    </div>
                                    {/* Category Badge */}
                                    <div className="absolute top-4 right-4 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-pista-dark"></div>
                                        <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-white bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                            {exp.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Bottom Half - Content */}
                                <div className="relative flex-1 p-5 md:p-6 flex flex-col justify-between">
                                    {/* Inner Kinetic Gradient Blob */}
                                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pista/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>

                                    <div className="relative z-10 space-y-3 md:space-y-4">
                                        {/* Role & Period */}
                                        <div className="flex justify-between items-start gap-2">
                                            <h3 className="text-lg md:text-xl font-bold text-text group-hover:text-pista-dark transition-colors duration-300 leading-tight">
                                                {exp.role}
                                            </h3>
                                            <span className="text-xs font-bold text-text-light italic whitespace-nowrap">{exp.period}</span>
                                        </div>

                                        {/* Company & Location */}
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="text-sm md:text-base font-bold text-text">{exp.company}</span>
                                            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-pista"></span>
                                            <span className="text-[9px] md:text-[10px] font-black text-pista-dark uppercase tracking-widest">{exp.location}</span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-[11px] md:text-sm text-text-muted leading-relaxed line-clamp-3">
                                            {exp.description}
                                        </p>

                                        {/* Tech Stack Pills */}
                                        <div className="flex flex-wrap gap-1.5 pt-1">
                                            {exp.stack.map((tag, i) => (
                                                <span key={i} className="text-[8px] md:text-[9px] font-bold text-text-muted bg-[#FFFBF5] px-3 py-1.5 rounded-full border border-pista/20 group-hover:border-pista-dark/30 transition-colors uppercase tracking-tight">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Footer - Metric & Action Icon */}
                                    <div className="relative z-10 mt-4 flex items-end justify-between border-t border-pista/10 pt-4">
                                        <div className="space-y-0.5">
                                            <div className="text-[8px] md:text-[9px] font-black text-pista-dark/40 uppercase tracking-widest">metric</div>
                                            <div className="text-xs md:text-sm font-black text-text tracking-tighter italic">
                                                {exp.metric}
                                            </div>
                                        </div>
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-text rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-110 group-hover:rotate-45 transition-all duration-500 shadow-xl group-hover:bg-pista-dark">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                                            </svg>
                                        </div>
                                    </div>
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

            {/* Detail Modal */}
            <DetailModal
                isOpen={selectedExperience !== null}
                onClose={() => setSelectedExperience(null)}
                data={selectedExperience}
                type="experience"
            />
        </section>
    );
};

export default Experience;
