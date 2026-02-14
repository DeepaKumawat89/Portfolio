import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-32 md:pt-20 bg-[#FFFBF5] overflow-hidden">
            {/* Architectural Background Lines */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-[15%] w-px h-full bg-pista/20"></div>
                <div className="absolute top-0 left-[50%] w-px h-full bg-pista/10"></div>
                <div className="absolute top-[40%] left-0 w-full h-px bg-pista/20"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 pb-20 md:pb-0">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 md:gap-24">

                    {/* Left: Content */}
                    <div className="max-w-3xl space-y-12 lg:space-y-24 w-full">
                        <div className="space-y-4 lg:space-y-6">
                            <div className="flex items-center gap-4 animate-[fadeIn_0.6s_ease-out]">
                                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-pista-dark">Portfolio // 2024</span>
                                <div className="h-px w-12 md:w-24 bg-pista-dark"></div>
                            </div>
                            <div className="space-y-0 text-left">
                                <h1 className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-bold text-text leading-[0.85] tracking-tighter animate-[slideInLeft_0.8s_cubic-bezier(0.16,1,0.3,1)]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                                    DEEPAK
                                </h1>
                                <h1 className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-bold text-pista-dark leading-[0.85] tracking-tighter translate-x-2 md:translate-x-12 animate-[slideInLeft_1s_cubic-bezier(0.16,1,0.3,1)]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                                    KUMAWAT
                                </h1>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start md:items-center animate-[fadeInUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                            <p className="text-base md:text-lg text-text-muted max-w-sm leading-relaxed border-l-4 border-pista pl-6">
                                Specialized in <span className="text-text font-bold">Flutter Engineering</span> & System Architecture. Building digital infrastructures that scale.
                            </p>

                            <div className="flex flex-col gap-4 md:gap-6">
                                <a href="#projects" className="text-[10px] md:text-sm font-black uppercase tracking-widest text-text group flex items-center gap-4 hover:gap-8 transition-all">
                                    <span>Explore Work</span>
                                    <span className="text-pista-dark text-lg md:text-xl">→</span>
                                </a>
                                <a href="#contact" className="text-[10px] md:text-sm font-black uppercase tracking-widest text-text-muted group flex items-center gap-4 hover:gap-8 transition-all">
                                    <span>Get in Touch</span>
                                    <span className="text-pista/50 text-lg md:text-xl">↘</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Large Abstract Geometric Element */}
                    <div className="relative hidden lg:block group">
                        <div className="relative w-80 h-[500px] border-[20px] border-pista/10 rounded-t-full flex items-center justify-center animate-[fadeInUp_1.2s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                            <div className="absolute -inset-10 border border-pista/30 rounded-t-full group-hover:scale-105 transition-transform duration-700"></div>
                            <div className="absolute -inset-20 border border-pista/10 rounded-t-full group-hover:scale-110 transition-transform duration-1000"></div>

                            <div className="z-10 text-center space-y-2">
                                <div className="text-[12rem] font-black text-pista-dark opacity-20 select-none">D</div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/40 backdrop-blur-3xl rounded-full shadow-2xl border border-white flex flex-col items-center justify-center p-8 group-hover:rotate-[360deg] transition-transform duration-[2s]">
                                    <div className="text-4xl font-black text-text">15+</div>
                                    <div className="text-[8px] font-black uppercase tracking-widest text-text-muted">Live Apps</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Status Indicator */}
                        <div className="absolute bottom-10 -right-10 glass px-6 py-4 rounded-full border-pista/20 animate-[float_4s_ease-in-out_infinite]">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-pista-dark animate-pulse"></div>
                                <span className="text-[10px] font-bold uppercase tracking-widest">Available Now</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Signature Line */}
            <div className="absolute bottom-6 md:bottom-10 left-0 w-full px-6 flex justify-between items-center opacity-30">
                <span className="text-[8px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.5em]">01 — INTRODUCTION</span>
                <span className="text-[8px] md:text-xs text-text-muted font-bold uppercase">BASED IN INDIA</span>
            </div>
        </section>
    );
};

export default Hero;
