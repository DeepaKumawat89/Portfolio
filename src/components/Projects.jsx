import React from 'react';

const Projects = () => {
    const projects = [
        {
            id: '01',
            category: 'UI/UX ARCHITECTURE',
            title: 'E-Commerce Platform',
            year: '2024',
            description: 'Building a high-performance rendering engine for mobile commerce. Focused on state management and real-time sync.',
            stack: ['Flutter', 'GetX', 'Firebase'],
            metric: '95% CRASH-FREE'
        },
        {
            id: '02',
            category: 'SYSTEM INTELLIGENCE',
            title: 'Vision Assistive AI',
            year: '2024',
            description: 'Architecting an edge-computing bridge for scene interpretation. Implementing low-latency CV pipelines.',
            stack: ['NVIDIA', 'Jetson', 'Python'],
            metric: '45ms LATENCY'
        },
        {
            id: '03',
            category: 'URBAN INFRASTRUCTURE',
            title: 'Smart City Parking',
            year: '2023',
            description: 'Digitizing physical parking assets through cloud-based verification and automated sensor integration.',
            stack: ['Flutter', 'Cloud Functions', 'QR'],
            metric: '1st PRIZE'
        }
    ];

    return (
        <section id="projects" className="relative py-32 bg-[#FFFBF5] overflow-hidden">
            {/* Structural Background Architectural Lines */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-[15%] w-px h-full bg-pista/20"></div>
                <div className="absolute top-0 right-[25%] w-px h-full bg-pista/10"></div>
                <div className="absolute bottom-[10%] left-0 w-full h-px bg-pista/20"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-12 md:mb-20 space-y-4 text-center">
                    <div className="flex items-center justify-center gap-4 animate-[fadeIn_0.6s_ease-out]">
                        <div className="h-px w-8 md:w-16 bg-pista-dark"></div>
                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] text-pista-dark">04 // WORKS</span>
                        <div className="h-px w-8 md:w-16 bg-pista-dark"></div>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-text tracking-tighter uppercase" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                        SELECTED <span className="text-pista-dark">PROJECTS</span>
                    </h2>
                </div>

                {/* 3-Column Rounded Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 flex flex-col justify-between border border-pista/10 shadow-sm hover:shadow-2xl hover:-translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] animate-[fadeInUp_0.8s_ease-out] opacity-0 [animation-fill-mode:forwards]"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            {/* Inner Kinetic Gradient Blobs */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-pista/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>

                            <div className="relative z-10 space-y-8">
                                {/* Header: Category & Year */}
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-pista-dark"></div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-pista-dark/60">{project.category}</span>
                                    </div>
                                    <span className="text-xs font-bold text-text-light italic">{project.year}</span>
                                </div>

                                {/* Title & Main Info */}
                                <div className="space-y-4">
                                    <div className="text-5xl font-black text-pista-dark/5 absolute -top-4 -left-2 select-none group-hover:text-pista-dark/15 transition-colors">{project.id}</div>
                                    <h3 className="text-3xl font-bold text-text group-hover:text-pista-dark transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-base text-text-muted leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Stack Pill Display */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.stack.map((tag, i) => (
                                        <span key={i} className="text-[9px] font-bold text-text-muted bg-[#FFFBF5] px-4 py-2 rounded-full border border-pista/20 group-hover:border-pista-dark/30 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Footer Metrics & Kinetic Link */}
                            <div className="relative z-10 mt-12 flex items-end justify-between border-t border-pista/10 pt-8">
                                <div className="space-y-1">
                                    <div className="text-[10px] font-black text-pista-dark/40 uppercase tracking-widest">PERFORMANCE metric</div>
                                    <div className="text-lg font-black text-text tracking-tighter">
                                        {project.metric}
                                    </div>
                                </div>
                                <div className="w-14 h-14 bg-text rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-110 group-hover:rotate-45 transition-all duration-500 shadow-xl group-hover:bg-pista-dark">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Industrial Background Watermark */}
                <div className="absolute left-[-5%] bottom-[5%] text-[15rem] font-black text-pista/5 select-none pointer-events-none transform -rotate-6">
                    ENGINEERING
                </div>
            </div>
        </section>
    );
};

export default Projects;
