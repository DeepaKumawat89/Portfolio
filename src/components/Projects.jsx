import React, { useState } from 'react';
import DetailModal from './DetailModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: '01',
            category: 'FULL-STACK E-COMMERCE',
            title: 'E-Commerce Platform',
            year: '2024',
            description: 'Full-stack e-commerce application with product catalog, shopping cart, and secure checkout functionality.',
            fullDescription: 'Developed a comprehensive e-commerce platform using React for frontend and Spring Boot for backend services. Implemented product catalog management with search and filter capabilities, shopping cart functionality with real-time updates, and secure checkout process. Integrated MySQL database for data persistence and RESTful APIs for seamless frontend-backend communication. Created responsive UI with modern design patterns and optimized performance through code splitting and lazy loading. Implemented user authentication and authorization using JWT tokens. Added admin dashboard for product and order management.',
            stack: ['React', 'Spring Boot', 'MySQL'],
            metric: 'FULL-STACK'
        },
        {
            id: '02',
            category: 'AI & COMPUTER VISION',
            title: 'Vision Assistive AI',
            year: '2024',
            description: 'AI-powered assistive technology for visually impaired users using computer vision and edge computing.',
            fullDescription: 'Developed an intelligent assistive system for visually impaired individuals using NVIDIA Jetson platform for edge computing. Implemented real-time object detection and scene interpretation using Python and computer vision libraries. Created low-latency processing pipeline achieving 45ms response time for critical object recognition tasks. Integrated text-to-speech functionality for audio feedback on detected objects and obstacles. Utilized deep learning models optimized for edge deployment with TensorRT acceleration. Designed intuitive audio interface for seamless user interaction without visual feedback.',
            stack: ['Python', 'NVIDIA Jetson', 'OpenCV'],
            metric: '45ms LATENCY'
        },
        {
            id: '03',
            category: 'IOT & MOBILE APP',
            title: 'Smart City Parking',
            year: '2023',
            description: 'Award-winning smart parking solution with IoT sensors, QR-based verification, and real-time availability tracking.',
            fullDescription: 'Won 1st prize in hackathon for developing innovative smart parking solution that digitizes urban parking infrastructure. Built Flutter-based cross-platform mobile application for real-time parking spot discovery and reservation. Implemented QR code-based verification system for contactless check-in and check-out. Integrated IoT sensors with Firebase Cloud Functions for automated occupancy detection and real-time updates. Developed admin web dashboard using React for parking management and analytics. Reduced average parking search time by 60% in pilot deployment. Implemented payment gateway integration for seamless transactions.',
            stack: ['Flutter', 'Firebase', 'IoT Sensors'],
            metric: '1st PRIZE'
        }
    ];

    return (
        <section id="projects" className="relative py-12 md:py-16 bg-[#FFFBF5] overflow-hidden">
            {/* Structural Background Architectural Lines */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-[15%] w-px h-full bg-pista/20"></div>
                <div className="absolute top-0 right-[25%] w-px h-full bg-pista/10"></div>
                <div className="absolute bottom-[10%] left-0 w-full h-px bg-pista/20"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-8 md:mb-12 space-y-4 text-center">
                    <div className="flex items-center justify-center gap-4 animate-[fadeIn_0.6s_ease-out]">
                        <div className="h-px w-8 md:w-16 bg-pista-dark"></div>
                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] text-pista-dark">04 // WORKS</span>
                        <div className="h-px w-8 md:w-16 bg-pista-dark"></div>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-text tracking-tighter uppercase whitespace-nowrap" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                        SELECTED <span className="text-pista-dark">PROJECTS</span>
                    </h2>
                </div>

                {/* Single Column on Mobile, 3 Columns on Desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedProject(project)}
                            className="group relative bg-white rounded-2xl md:rounded-[2.5rem] p-4 md:p-10 flex flex-col justify-between border border-pista/10 shadow-sm hover:shadow-2xl hover:-translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] animate-[fadeInUp_0.8s_ease-out] opacity-0 [animation-fill-mode:forwards] cursor-pointer"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            {/* Inner Kinetic Gradient Blobs */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-pista/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>

                            <div className="relative z-10 space-y-4 md:space-y-8">
                                {/* Header: Category & Year */}
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-pista-dark"></div>
                                        <span className="text-[7px] md:text-[10px] font-black uppercase tracking-widest text-pista-dark/60">{project.category}</span>
                                    </div>
                                    <span className="text-xs font-bold text-text-light italic">{project.year}</span>
                                </div>

                                {/* Title & Main Info */}
                                <div className="space-y-4">
                                    <div className="text-5xl font-black text-pista-dark/5 absolute -top-4 -left-2 select-none group-hover:text-pista-dark/15 transition-colors">{project.id}</div>
                                    <h3 className="text-base md:text-3xl font-bold text-text group-hover:text-pista-dark transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-[11px] md:text-base text-text-muted leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="text-xs text-pista-dark font-semibold mt-2 flex items-center gap-1">
                                        <span>Click for full details</span>
                                        <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Tech Stack Pill Display */}
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {project.stack.map((tag, i) => (
                                        <span key={i} className="text-[7px] md:text-[9px] font-bold text-text-muted bg-[#FFFBF5] px-2 md:px-4 py-1.5 md:py-2 rounded-full border border-pista/20 group-hover:border-pista-dark/30 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Footer Metrics & Kinetic Link */}
                            <div className="relative z-10 mt-6 md:mt-12 flex items-end justify-between border-t border-pista/10 pt-4 md:pt-8">
                                <div className="space-y-0.5">
                                    <div className="text-[7px] md:text-[10px] font-black text-pista-dark/40 uppercase tracking-widest">metric</div>
                                    <div className="text-xs md:text-lg font-black text-text tracking-tighter">
                                        {project.metric}
                                    </div>
                                </div>
                                <div className="w-8 h-8 md:w-14 md:h-14 bg-text rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-110 group-hover:rotate-45 transition-all duration-500 shadow-xl group-hover:bg-pista-dark">
                                    <svg width="14" height="14" md:width="24" md:height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
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

            {/* Detail Modal */}
            <DetailModal
                isOpen={selectedProject !== null}
                onClose={() => setSelectedProject(null)}
                data={selectedProject}
                type="project"
            />
        </section>
    );
};

export default Projects;
