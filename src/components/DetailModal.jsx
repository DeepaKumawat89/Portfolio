import React, { useEffect } from 'react';

const DetailModal = ({ isOpen, onClose, data, type }) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEscape);
        }
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen || !data) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center animate-[fadeIn_0.3s_ease-out]">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full h-full md:h-[90vh] md:max-w-4xl md:my-8 bg-cream md:rounded-3xl shadow-2xl overflow-hidden animate-[slideUp_0.4s_ease-out]">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-10 h-10 md:w-12 md:h-12 bg-text/90 hover:bg-pista-dark rounded-full flex items-center justify-center text-white transition-all duration-300 hover:rotate-90 shadow-lg"
                    aria-label="Close"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Scrollable Content */}
                <div className="h-full overflow-y-auto">
                    <div className="p-6 md:p-12 space-y-8">
                        {/* Header Section */}
                        <div className="space-y-6">
                            {/* Category & ID */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-pista-dark animate-pulse"></div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-pista-dark/60">
                                        {data.category}
                                    </span>
                                </div>
                                <div className="text-6xl md:text-8xl font-black text-pista-dark/10 select-none">
                                    {data.id}
                                </div>
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl md:text-6xl font-bold text-text tracking-tight" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                                {type === 'project' ? data.title : data.role}
                            </h1>

                            {/* Subtitle Info */}
                            {type === 'experience' && (
                                <div className="flex flex-wrap items-center gap-3 text-lg md:text-2xl">
                                    <span className="font-bold text-text">{data.company}</span>
                                    <span className="w-2 h-2 rounded-full bg-pista"></span>
                                    <span className="font-black text-pista-dark uppercase tracking-wide text-sm">{data.location}</span>
                                    <span className="w-2 h-2 rounded-full bg-pista"></span>
                                    <span className="font-bold text-text-light italic">{data.period}</span>
                                </div>
                            )}

                            {type === 'project' && (
                                <div className="flex items-center gap-4">
                                    <span className="text-xl font-bold text-text-light italic">{data.year}</span>
                                </div>
                            )}

                            {/* Metric Badge & GitHub Link */}
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="inline-flex items-center gap-3 bg-pista-dark/10 px-6 py-3 rounded-full border-2 border-pista-dark/20">
                                    <div className="text-xs font-black text-pista-dark/40 uppercase tracking-widest">Metric</div>
                                    <div className="text-xl font-black text-text tracking-tighter">{data.metric}</div>
                                </div>

                                {data.live && (
                                    <a
                                        href={data.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-pista-dark text-white px-6 py-3 rounded-full border-2 border-pista-dark hover:bg-text hover:border-text transition-all duration-300 shadow-lg group/btn"
                                    >
                                        <span className="text-sm font-black uppercase tracking-widest">Live Demo</span>
                                        <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                )}

                                {data.github && (
                                    <a
                                        href={data.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-text text-white px-6 py-3 rounded-full border-2 border-text hover:bg-pista-dark hover:border-pista-dark transition-all duration-300 shadow-lg group/btn"
                                    >
                                        <span className="text-sm font-black uppercase tracking-widest">View Source</span>
                                        <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-pista/20"></div>

                        {/* Project/Experience Image */}
                        {data.image && (
                            <div className="relative w-full h-[250px] md:h-[450px] rounded-2xl overflow-hidden border border-pista/10 shadow-inner">
                                <img
                                    src={data.detailImage || data.image}
                                    alt={data.title || data.role}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        )}

                        {/* Divider */}
                        <div className="h-px bg-pista/20"></div>

                        {/* Full Description */}
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-text">Overview</h2>
                            <p className="text-base md:text-lg text-text-muted leading-relaxed">
                                {data.fullDescription}
                            </p>
                        </div>

                        {/* Tech Stack */}
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-text">Technologies</h2>
                            <div className="flex flex-wrap gap-3">
                                {data.stack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-sm font-bold text-text bg-white px-6 py-3 rounded-full border-2 border-pista/30 hover:border-pista-dark transition-colors shadow-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Additional Details Section */}
                        <div className="space-y-4 bg-white rounded-2xl p-6 md:p-8 border border-pista/20">
                            <h2 className="text-2xl md:text-3xl font-bold text-text">Key Highlights</h2>
                            <ul className="space-y-3 text-base md:text-lg text-text-muted">
                                {type === 'project' && (
                                    <>
                                        <li className="flex items-start gap-3">
                                            <span className="text-pista-dark mt-1">▸</span>
                                            <span>Cross-platform development with modern architecture patterns</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-pista-dark mt-1">▸</span>
                                            <span>Performance optimization and efficient state management</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-pista-dark mt-1">▸</span>
                                            <span>Real-time data synchronization and cloud integration</span>
                                        </li>
                                    </>
                                )}
                                {type === 'experience' && (
                                    <>
                                        <li className="flex items-start gap-3">
                                            <span className="text-pista-dark mt-1">▸</span>
                                            <span>Hands-on experience with enterprise-level systems</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-pista-dark mt-1">▸</span>
                                            <span>Collaborative development in agile environment</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-pista-dark mt-1">▸</span>
                                            <span>Focus on code quality and best practices</span>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>

                        {/* Bottom Padding for scroll */}
                        <div className="h-8"></div>
                    </div>
                </div>

                {/* Decorative Background Elements */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-pista/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-pista/5 rounded-full blur-3xl pointer-events-none"></div>
            </div>
        </div>
    );
};

export default DetailModal;
