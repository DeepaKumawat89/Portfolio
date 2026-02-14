import React from 'react';

const About = () => {
    return (
        <section id="about" className="relative py-32 bg-[#FFFBF5] overflow-hidden">
            {/* Structural Background Architectural Lines */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-[15%] w-px h-full bg-pista/20"></div>
                <div className="absolute top-0 left-[25%] w-px h-full bg-pista/10"></div>
                <div className="absolute bottom-[20%] left-0 w-full h-px bg-pista/20"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="mb-12 space-y-4 text-center">
                    <div className="flex items-center justify-center gap-4 animate-[fadeIn_0.6s_ease-out]">
                        <div className="h-px w-16 bg-pista-dark"></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-pista-dark">02 // PROFILE</span>
                        <div className="h-px w-16 bg-pista-dark"></div>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-bold text-text tracking-tighter uppercase" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                        About <span className="text-pista-dark">me</span>
                    </h2>
                </div>

                {/* Narrative Text Outside Cards */}
                <div className="max-w-5xl mx-auto mb-20 text-center space-y-8 animate-[fadeInUp_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                    <p className="text-lg md:text-2xl font-medium text-text-muted leading-relaxed text-justify max-w-5xl mx-auto px-4 md:px-0" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                        I am a dedicated developer who focuses on building structured, efficient, and scalable digital solutions. I combine strong problem-solving skills with a user-first approach to ensure that every application I create is both technically sound and easy to use. I believe in writing clean, maintainable code that supports long-term growth and performance.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-[10px] font-black text-pista-dark/40 uppercase tracking-[0.3em]">
                        <span>System Design</span>
                        <span className="text-pista-dark">•</span>
                        <span>Performance Ops</span>
                        <span className="text-pista-dark">•</span>
                        <span>Modern UI Physics</span>
                    </div>
                </div>

                {/* Education Section - Minimal Text */}
                <div className="max-w-4xl mx-auto text-center space-y-6 animate-[fadeInUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                    <div className="space-y-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-text" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                            Bachelor of Technology in Computer Science and Engineering
                        </h3>
                        <p className="text-lg md:text-xl text-pista-dark font-bold tracking-tight">
                            2021 — 2025
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-xl text-text font-medium" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                            D.Y. Patil College of Engineering and Technology, Kolhapur
                        </p>
                        <p className="text-lg text-text-muted font-bold tracking-widest uppercase">
                            CGPA: <span className="text-pista-dark font-black">7.87/10</span>
                        </p>
                    </div>
                </div>

                {/* Industrial Background Watermark */}
                <div className="absolute right-[-5%] bottom-[-5%] text-[15rem] font-black text-pista/5 select-none pointer-events-none transform rotate-3 overflow-hidden whitespace-nowrap">
                    IDENTITY
                </div>
            </div>
        </section>
    );
};

export default About;
