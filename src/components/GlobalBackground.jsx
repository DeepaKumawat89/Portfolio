import React from 'react';

const GlobalBackground = () => {
    return (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            {/* Global Cream Base */}
            <div className="absolute inset-0 bg-[#FFFBF5]"></div>

            {/* Subtle Technical Grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(var(--color-pista) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            {/* Large Decorative Circles/Blobs (Soft) */}
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-pista/5 blur-[120px] animate-[float_15s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-pista/10 blur-[100px] animate-[float_20s_ease-in-out_infinite_2s]"></div>

            {/* Architectural Shapes Scattered */}

            {/* Top Left - Triangle Outline */}
            <div
                className="absolute top-[8%] left-[5%] w-64 h-64 border border-pista/10 rotate-12 animate-[float_10s_ease-in-out_infinite]"
                style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
            ></div>

            {/* Top Right - Concentric Circles (Blueprint Style) */}
            <div className="absolute top-[2%] right-[10%] w-72 h-72 opacity-10 animate-[spin_30s_linear_infinite]">
                <div className="absolute inset-0 border border-dashed border-pista rounded-full"></div>
                <div className="absolute inset-8 border border-pista/40 rounded-full"></div>
                <div className="absolute inset-16 border border-dashed border-pista/20 rounded-full"></div>
            </div>

            {/* Left Side - Vertical Ruler/Scale */}
            <div className="absolute top-[20%] left-[2%] h-[300px] w-4 flex flex-col justify-between opacity-20">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className={`h-px bg-pista ${i % 5 === 0 ? 'w-full' : 'w-1/2'}`}></div>
                ))}
            </div>

            {/* Middle Left - Isometric Hex-Grid Fragment */}
            <div
                className="absolute top-[40%] left-[-5%] w-80 h-80 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(30deg, var(--color-pista) 1px, transparent 1px), linear-gradient(-30deg, var(--color-pista) 1px, transparent 1px)`,
                    backgroundSize: '40px 70px'
                }}
            ></div>

            {/* Middle Right - Technical Crosshair/Target */}
            <div className="absolute top-[30%] right-[5%] w-48 h-48 opacity-10 flex items-center justify-center animate-[pulse_8s_ease-in-out_infinite]">
                <div className="absolute w-full h-px bg-pista"></div>
                <div className="absolute h-full w-px bg-pista"></div>
                <div className="absolute w-2/3 h-2/3 border border-pista rounded-full"></div>
                <div className="absolute w-4 h-4 border-2 border-pista-dark rotate-45"></div>
            </div>

            {/* Middle Center - Semi-Circle Gauge */}
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] border-t-2 border-pista/[0.03] rounded-t-full -z-10 pointer-events-none"></div>

            {/* Bottom Left - Zigzag/Sawtooth Architectural Element */}
            <div className="absolute bottom-[20%] left-[10%] w-64 h-32 opacity-5"
                style={{
                    backgroundImage: `linear-gradient(45deg, var(--color-pista) 25%, transparent 25%), linear-gradient(-45deg, var(--color-pista) 25%, transparent 25%)`,
                    backgroundSize: '20px 20px'
                }}
            ></div>

            {/* Bottom Right - L-Bracket Corner Frame */}
            <div className="absolute bottom-[8%] right-[8%] w-40 h-40 opacity-20 flex">
                <div className="absolute bottom-0 right-0 w-full h-1 bg-pista-dark/20"></div>
                <div className="absolute bottom-0 right-0 h-full w-1 bg-pista-dark/20"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-pista-dark animate-pulse"></div>
            </div>

            {/* Scattered Data Points / Bits */}
            <div className="absolute top-[15%] left-[45%] w-1 h-8 bg-pista/20 animate-bounce"></div>
            <div className="absolute top-[75%] left-[35%] w-8 h-1 bg-pista/20 animate-pulse"></div>

            {/* Extended Architectural Lines with Variable Opacity */}
            <div className="absolute top-0 left-[8%] w-px h-full bg-pista/[0.04]"></div>
            <div className="absolute top-0 right-[8%] w-px h-full bg-pista/[0.04]"></div>
            <div className="absolute top-0 left-[25%] w-px h-full bg-pista/[0.02]"></div>
            <div className="absolute top-0 right-[25%] w-px h-full bg-pista/[0.02]"></div>

            <div className="absolute top-[15%] left-0 w-full h-px bg-pista/[0.03]"></div>
            <div className="absolute top-[85%] left-0 w-full h-px bg-pista/[0.03]"></div>
        </div>
    );
};

export default GlobalBackground;
