import React from 'react';

const Skills = () => {
    const technologies = [
        { name: 'React', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><circle cx="12" cy="12" r="2" /><path d="M12 12c4.418 0 8-1.79 8-4s-3.582-4-8-4-8 1.79-8 4 3.582 4 8 4Z" /><path d="M12 12c1.79 4.418 4 8 4 8s4-3.582 4-8-1.79-8-4-8-4 3.582-4 8Z" /><path d="M12 12c-1.79 4.418-4 8-4 8s-4-3.582-4-8 1.79-8 4-8 4 3.582 4 8Z" /></svg> },
        { name: 'Flutter', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" /></svg> },
        { name: 'Java', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M17 8c.5-2 2-2 2-2" /><path d="M13 8c.5-2 2-2 2-2" /><path d="M9 8c.5-2 2-2 2-2" /><path d="M20 12c.5 0 1.5 0 2 .5" /><path d="M4 12c-.5 0-1.5 0-2 .5" /><path d="M12 15c-4 0-6-1-6-3s2-3 6-3 6 1 6 3-2 3-6 3Z" /><path d="M6 12c0 2 1 4 6 4s6-2 6-4" /></svg> },
        { name: 'Python', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M12 10V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2c0 1-1 2-2 2h-4" /><path d="M12 14v6c0 1-1 2-2 2H6c-1 0-2-1-2-2v-2c0-1 1-2 2-2h4" /></svg> },
        { name: 'REST API', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg> },
        { name: 'MySQL', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" /></svg> },
        { name: 'MongoDB', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" /><path d="M12 12h.01" /></svg> },
        { name: 'Firebase', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M12 2 3.5 20.5 12 17l8.5 3.5L12 2Z" /></svg> },
        { name: 'Git', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M6 9v12" /><path d="M18 15V9a5 5 0 0 0-5-5h-2" /></svg> },
        { name: 'GitHub', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg> },
        { name: 'IntelliJ IDEA', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg> },
        { name: 'Android Studio', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m6 8 2 2 2-2" /><path d="m14 8 2 2 2-2" /><path d="M9 13h6" /></svg> },
        { name: 'VS Code', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="7.5 4.21 12 6.81 16.5 4.21" /><polyline points="7.5 19.79 12 17.19 16.5 19.79" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" x2="12" y1="22.08" y2="12" /></svg> }
    ];

    return (
        <section id="skills" className="relative py-12 md:py-16 bg-[#FFFBF5] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-8 md:mb-12 space-y-4">
                    <div className="flex items-center justify-center gap-4 animate-[fadeIn_0.6s_ease-out]">
                        <div className="h-px w-8 md:w-12 bg-pista-dark/20"></div>
                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-pista-dark/60">Professional Tech Stack</span>
                        <div className="h-px w-8 md:w-12 bg-pista-dark/20"></div>
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-text tracking-tighter uppercase animate-[fadeInUp_0.8s_ease-out] whitespace-nowrap" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                        Technical <span className="text-pista-dark">Expertise</span>
                    </h2>
                </div>

                {/* Badge Grid - Staggered Rows */}
                <div className="space-y-4 md:space-y-6 max-w-7xl mx-auto">
                    {/* Row 1 */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                        {technologies.slice(0, 6).map((tech, idx) => (
                            <TechBadge key={idx} tech={tech} delay={idx * 0.05} />
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                        {technologies.slice(6, 11).map((tech, idx) => (
                            <TechBadge key={idx} tech={tech} delay={(idx + 6) * 0.05} />
                        ))}
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                        {technologies.slice(11, 13).map((tech, idx) => (
                            <TechBadge key={idx} tech={tech} delay={(idx + 11) * 0.05} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Extracted Badge Component for cleaner row logic
const TechBadge = ({ tech, delay }) => (
    <div
        className="group flex items-center gap-3 md:gap-5 bg-white border border-pista/20 px-5 py-3 md:px-8 md:py-5 rounded-full shadow-sm hover:bg-pista-dark hover:border-pista-dark hover:shadow-lg hover:shadow-pista/20 hover:-translate-y-1 transition-all duration-300 cursor-default animate-[fadeInUp_0.6s_ease-out] opacity-0 [animation-fill-mode:forwards]"
        style={{ animationDelay: `${delay}s` }}
    >
        <span className="w-5 h-5 md:w-7 md:h-7 text-pista-dark group-hover:text-white transition-colors duration-300">
            {tech.icon}
        </span>
        <span className="text-sm md:text-xl font-bold text-text-muted group-hover:text-white transition-colors duration-300 tracking-tight">
            {tech.name}
        </span>
    </div>
);

export default Skills;
