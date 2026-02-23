import React from 'react';

const Hero = () => {
    return (
        <section className="relative md:min-h-screen flex items-center overflow-hidden">
            {/* Decorative Background Shapes */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Top Right - Rotated Square */}
                <div
                    className="absolute -top-32 -right-32 w-[400px] h-[400px] md:w-[600px] md:h-[600px] opacity-20 blur-3xl animate-[float_8s_ease-in-out_infinite] rotate-45"
                    style={{
                        background: 'linear-gradient(135deg, var(--color-pista) 0%, transparent 100%)',
                        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
                    }}
                ></div>

                {/* Bottom Left - Organic Triangle Shape */}
                <div
                    className="absolute -bottom-40 -left-40 w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-30 blur-3xl animate-[float_10s_ease-in-out_infinite_2s]"
                    style={{
                        background: 'linear-gradient(45deg, var(--color-cream) 0%, var(--color-pista) 60%, transparent 100%)',
                        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                        transform: 'rotate(25deg)'
                    }}
                ></div>

                {/* Center - Hexagon Shape */}
                <div
                    className="absolute top-1/3 right-1/4 w-[350px] h-[350px] md:w-[500px] md:h-[500px] opacity-15 blur-2xl animate-[pulse_6s_ease-in-out_infinite]"
                    style={{
                        background: 'radial-gradient(circle, var(--color-pista) 0%, transparent 100%)',
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                    }}
                ></div>

                {/* Top Left - Rounded Rectangle */}
                <div
                    className="absolute top-20 left-10 w-[250px] h-[180px] md:w-[400px] md:h-[280px] opacity-25 blur-2xl animate-[float_7s_ease-in-out_infinite_1s] -rotate-12"
                    style={{
                        background: 'linear-gradient(120deg, var(--color-white) 0%, var(--color-pista) 70%, transparent 100%)',
                        borderRadius: '40% 60% 60% 40% / 60% 40% 60% 40%'
                    }}
                ></div>

                {/* Bottom Right - Diamond */}
                <div
                    className="absolute bottom-32 right-20 w-[200px] h-[200px] md:w-[300px] md:h-[300px] opacity-20 blur-2xl animate-[float_9s_ease-in-out_infinite_3s] rotate-45"
                    style={{
                        background: 'linear-gradient(90deg, var(--color-pista) 0%, transparent 100%)'
                    }}
                ></div>
            </div>

            {/* Architectural Background Lines */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-[15%] w-px h-full bg-pista/20"></div>
                <div className="absolute top-0 left-[50%] w-px h-full bg-pista/10"></div>
                <div className="absolute top-[40%] left-0 w-full h-px bg-pista/20"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-24 pb-10 md:pt-0 md:pb-0">
                <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 md:gap-24">

                    {/* Left: Content */}
                    <div className="max-w-4xl space-y-10 lg:space-y-24 w-full text-center lg:text-left">
                        <div className="space-y-4 lg:space-y-6">
                            <div className="flex items-center justify-center lg:justify-start gap-4 animate-[fadeIn_0.6s_ease-out]">
                                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-pista-dark">Portfolio // 2026</span>
                                <div className="h-px w-12 md:w-24 bg-pista-dark"></div>
                            </div>
                            <div className="space-y-0">
                                <h1
                                    className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-bold text-text leading-[0.85] tracking-tighter animate-[slideInLeft_0.8s_cubic-bezier(0.16,1,0.3,1)]"
                                    style={{
                                        fontFamily: "'Times New Roman', Times, serif"
                                    }}
                                >
                                    DEEPAK
                                </h1>
                                <h1
                                    className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-bold text-pista-dark leading-[0.85] tracking-tighter sm:translate-x-6 md:translate-x-12 animate-[slideInLeft_1s_cubic-bezier(0.16,1,0.3,1)]"
                                    style={{
                                        fontFamily: "'Times New Roman', Times, serif"
                                    }}
                                >
                                    KUMAWAT
                                </h1>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-center lg:items-center justify-center lg:justify-start animate-[fadeInUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                            <p
                                className="text-sm md:text-lg text-text-muted max-w-sm leading-relaxed border-t-4 md:border-t-0 md:border-l-4 border-pista pt-4 md:pt-0 md:pl-6"
                                style={{ fontFamily: "'Times New Roman', Times, serif" }}
                            >
                                Software Engineer with expertise in system design. Building high-performance, scalable solutions.
                            </p>

                            <div className="flex flex-col gap-4 md:gap-6 items-center lg:items-start">
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

                    {/* Right: Large Abstract Geometric Element - Now visible on tablet+ */}
                    <div className="relative hidden md:block group">
                        <div className="relative w-64 h-96 lg:w-80 lg:h-[500px] border-[15px] lg:border-[20px] border-pista/10 rounded-t-full flex items-center justify-center animate-[fadeInUp_1.2s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                            <div className="absolute -inset-6 lg:-inset-10 border border-pista/30 rounded-t-full group-hover:scale-105 transition-transform duration-700"></div>
                            <div className="absolute -inset-12 lg:-inset-20 border border-pista/10 rounded-t-full group-hover:scale-110 transition-transform duration-1000"></div>

                            <div className="z-10 text-center space-y-2">
                                <div className="text-9xl lg:text-[12rem] font-black text-pista-dark opacity-20 select-none">D</div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 lg:w-48 lg:h-48 bg-white/40 backdrop-blur-3xl rounded-full shadow-2xl border border-white/50 flex flex-col items-center justify-center p-4 lg:p-8 group-hover:rotate-[360deg] transition-transform duration-[2s]">
                                    <div className="text-2xl lg:text-4xl font-black text-text">OPEN</div>
                                    <div className="text-[6px] lg:text-[8px] font-black uppercase tracking-widest text-text-muted">To Work</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Status Indicator */}
                        <div className="absolute bottom-5 -right-5 lg:bottom-10 lg:-right-10 glass px-4 py-2 lg:px-6 lg:py-4 rounded-full border-pista/20 animate-[float_4s_ease-in-out_infinite]">
                            <div className="flex items-center gap-2 lg:gap-3">
                                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-pista-dark animate-pulse"></div>
                                <span className="text-[8px] lg:text-[10px] font-bold uppercase tracking-widest">Available Now</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Signature Line */}
            <div className="absolute bottom-3 md:bottom-10 left-0 w-full px-4 md:px-6 hidden md:flex justify-between items-center opacity-30">
                <span className="text-[7px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.5em]">01 — INTRODUCTION</span>
                <span className="text-[7px] md:text-xs text-text-muted font-bold uppercase">BASED IN INDIA</span>
            </div>
        </section>
    );
};

export default Hero;
