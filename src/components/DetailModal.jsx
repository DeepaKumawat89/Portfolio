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
            <div className="relative w-full h-full md:h-[90vh] md:max-w-4xl md:my-8 bg-[#FFFBF5] md:rounded-3xl shadow-2xl overflow-hidden animate-[slideUp_0.4s_ease-out]">
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

                            {/* Metric Badge */}
                            <div className="inline-flex items-center gap-3 bg-pista-dark/10 px-6 py-3 rounded-full border-2 border-pista-dark/20">
                                <div className="text-xs font-black text-pista-dark/40 uppercase tracking-widest">Metric</div>
                                <div className="text-xl font-black text-text tracking-tighter">{data.metric}</div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-pista/20"></div>

                        {/* Project/Experience Image */}
                        {data.image && (
                            <div className="relative w-full h-[250px] md:h-[450px] rounded-2xl overflow-hidden border border-pista/10 shadow-inner">
                                <img
                                    src={data.image}
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
