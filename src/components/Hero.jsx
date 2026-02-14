import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center bg-[#FFFBF5] overflow-hidden">
            {/* Decorative Background Shapes */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Top Right - Rotated Square */}
                <div
                    className="absolute -top-32 -right-32 w-[400px] h-[400px] md:w-[600px] md:h-[600px] opacity-20 blur-3xl animate-[float_8s_ease-in-out_infinite] rotate-45"
                    style={{
                        background: 'linear-gradient(135deg, rgba(174, 213, 129, 0.4) 0%, rgba(174, 213, 129, 0.1) 50%, transparent 100%)',
                        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
                    }}
                ></div>

                {/* Bottom Left - Organic Triangle Shape */}
                <div
                    className="absolute -bottom-40 -left-40 w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-30 blur-3xl animate-[float_10s_ease-in-out_infinite_2s]"
                    style={{
                        background: 'linear-gradient(45deg, rgba(255, 251, 245, 0.8) 0%, rgba(174, 213, 129, 0.3) 60%, transparent 100%)',
                        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                        transform: 'rotate(25deg)'
                    }}
                ></div>

                {/* Center - Hexagon Shape */}
                <div
                    className="absolute top-1/3 right-1/4 w-[350px] h-[350px] md:w-[500px] md:h-[500px] opacity-15 blur-2xl animate-[pulse_6s_ease-in-out_infinite]"
                    style={{
                        background: 'radial-gradient(circle, rgba(174, 213, 129, 0.4) 0%, rgba(174, 213, 129, 0.1) 50%, transparent 100%)',
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                    }}
                ></div>

                {/* Top Left - Rounded Rectangle */}
                <div
                    className="absolute top-20 left-10 w-[250px] h-[180px] md:w-[400px] md:h-[280px] opacity-25 blur-2xl animate-[float_7s_ease-in-out_infinite_1s] -rotate-12"
                    style={{
                        background: 'linear-gradient(120deg, rgba(255, 255, 255, 0.7) 0%, rgba(174, 213, 129, 0.2) 70%, transparent 100%)',
                        borderRadius: '40% 60% 60% 40% / 60% 40% 60% 40%'
                    }}
                ></div>

                {/* Bottom Right - Diamond */}
                <div
                    className="absolute bottom-32 right-20 w-[200px] h-[200px] md:w-[300px] md:h-[300px] opacity-20 blur-2xl animate-[float_9s_ease-in-out_infinite_3s] rotate-45"
                    style={{
                        background: 'linear-gradient(90deg, rgba(174, 213, 129, 0.3) 0%, transparent 100%)'
                    }}
                ></div>
            </div>

            {/* Architectural Background Lines */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-[15%] w-px h-full bg-pista/20"></div>
                <div className="absolute top-0 left-[50%] w-px h-full bg-pista/10"></div>
                <div className="absolute top-[40%] left-0 w-full h-px bg-pista/20"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 pb-8 md:pb-0">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 md:gap-24">

                    {/* Left: Content */}
                    <div className="max-w-3xl space-y-12 lg:space-y-24 w-full">
                        <div className="space-y-4 lg:space-y-6">
                            <div className="flex items-center gap-4 animate-[fadeIn_0.6s_ease-out]">
                                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-pista-dark">Portfolio // 2026</span>
                                <div className="h-px w-12 md:w-24 bg-pista-dark"></div>
                            </div>
                            <div className="space-y-0 text-left">
                                <h1
                                    className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-bold text-text leading-[0.85] tracking-tighter animate-[slideInLeft_0.8s_cubic-bezier(0.16,1,0.3,1)]"
                                    style={{
                                        fontFamily: "'Times New Roman', Times, serif",
                                        textShadow: `
1px 1px 0 rgba(44, 62, 80, 0.1),
    2px 2px 0 rgba(44, 62, 80, 0.1),
        3px 3px 0 rgba(44, 62, 80, 0.1),
            4px 4px 0 rgba(44, 62, 80, 0.1),
                5px 5px 0 rgba(44, 62, 80, 0.1),
                    6px 6px 0 rgba(44, 62, 80, 0.1),
                        7px 7px 10px rgba(0, 0, 0, 0.1)
                            `
                                    }}
                                >
                                    DEEPAK
                                </h1>
                                <h1
                                    className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-bold text-pista-dark leading-[0.85] tracking-tighter translate-x-2 md:translate-x-12 animate-[slideInLeft_1s_cubic-bezier(0.16,1,0.3,1)]"
                                    style={{
                                        fontFamily: "'Times New Roman', Times, serif",
                                        textShadow: `
1px 1px 0 rgba(174, 213, 129, 0.3),
    2px 2px 0 rgba(174, 213, 129, 0.3),
        3px 3px 0 rgba(174, 213, 129, 0.3),
            4px 4px 0 rgba(174, 213, 129, 0.3),
                5px 5px 0 rgba(174, 213, 129, 0.3),
                    6px 6px 0 rgba(174, 213, 129, 0.3),
                        7px 7px 10px rgba(0, 0, 0, 0.15)
                            `
                                    }}
                                >
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
                                    <div className="text-4xl font-black text-text">OPEN</div>
                                    <div className="text-[8px] font-black uppercase tracking-widest text-text-muted">To Work</div>
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
            <div className="absolute bottom-3 md:bottom-10 left-0 w-full px-4 md:px-6 flex justify-between items-center opacity-30">
                <span className="text-[7px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.5em]">01 — INTRODUCTION</span>
                <span className="text-[7px] md:text-xs text-text-muted font-bold uppercase">BASED IN INDIA</span>
            </div>
        </section>
    );
};

export default Hero;
