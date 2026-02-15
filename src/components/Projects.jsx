import React, { useState } from 'react';
import DetailModal from './DetailModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: '01',
            category: 'MOBILE ENGINEERING',
            title: 'E-Commerce App',
            year: 'Jan 2025',
            description: 'Built a scalable e-commerce application using Flutter for cross-platform (Android/iOS) functionality and a consistent, responsive user interface.',
            fullDescription: 'Integrated Google’s Firebase backend services for secure Authentication (login/signup), real-time data handling with Firestore (products, orders), and user profile management.',
            stack: ['Flutter', 'Dart', 'Firebase'],
            metric: 'CROSS-PLATFORM',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop'
        },
        {
            id: '02',
            category: 'AI & COMPUTER VISION',
            title: 'AI-Powered Assistive System',
            year: 'July 2024',
            description: 'Developed an AI-powered assistive system for the visually impaired with real-time object detection, face recognition, and text-to-speech capabilities.',
            fullDescription: 'Integrated features like currency detection, weather updates, and voice commands for hands-free interaction. Deployed on NVIDIA Jetson Xavier NX with GPU acceleration, achieving 90% accuracy in real-time scene analysis and audio feedback.',
            stack: ['Python', 'NVIDIA Jetson', 'PyCharm'],
            metric: '90% ACCURACY',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop'
        },
        {
            id: '03',
            category: 'IOT & MOBILE APP',
            title: 'Smart City Parking',
            year: '2023',
            description: 'Award-winning smart parking solution with IoT sensors, QR-based verification, and real-time availability tracking.',
            fullDescription: 'Won 1st prize in hackathon for developing innovative smart parking solution that digitizes urban parking infrastructure. Built Flutter-based cross-platform mobile application for real-time parking spot discovery and reservation. Implemented QR code-based verification system for contactless check-in and check-out. Integrated IoT sensors with Firebase Cloud Functions for automated occupancy detection and real-time updates. Developed admin web dashboard using React for parking management and analytics. Reduced average parking search time by 60% in pilot deployment. Implemented payment gateway integration for seamless transactions.',
            stack: ['Flutter', 'Firebase', 'IoT Sensors'],
            metric: '1st PRIZE',
            image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&h=600&fit=crop'
        },
        {
            id: '04',
            category: 'UI/UX DESIGN',
            title: 'Modern Portfolio V1',
            year: '2023',
            description: 'Minimalist architectural portfolio design focusing on smooth animations and technical precision.',
            fullDescription: 'Designed and developed a personal portfolio using React and Tailwind CSS, following a technical/architectural aesthetic. Implemented custom glassmorphism components and fluid background animations. Optimized for mobile responsiveness and SEO best practices.',
            stack: ['React', 'Tailwind', 'Framer Motion'],
            metric: 'TECHNICAL UI',
            image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop'
        },
        {
            id: '05',
            category: 'BACKEND SYSTEMS',
            title: 'API Gateway Service',
            year: '2024',
            description: 'Microservices gateway with rate limiting, logging, and automated documentation.',
            fullDescription: 'Built a robust API Gateway using Node.js and Express to manage microservices communication. Implemented Redis-based rate limiting and Winston logging for monitoring. Automated API documentation using Swagger UI.',
            stack: ['Node.js', 'Redis', 'Express'],
            metric: '<10ms OVERHEAD',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop'
        },
        {
            id: '06',
            category: 'MOBILE ENGINEERING',
            title: 'Inventory Sync App',
            year: '2023',
            description: 'Enterprise-grade offline-first mobile app for real-time inventory synchronization.',
            fullDescription: 'Developed an offline-first mobile application using Flutter and SQLite. Implemented background sync workers and conflict resolution logic for multi-user inventory management.',
            stack: ['Flutter', 'SQLite', 'Riverpod'],
            metric: 'OFFLINE-FIRST',
            image: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=800&h=600&fit=crop'
        }
    ];

    return (
        <section id="projects" className="relative py-12 md:py-16 overflow-hidden">
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
                    <h2 className="text-3xl md:text-6xl lg:text-8xl font-bold text-text tracking-tighter uppercase whitespace-nowrap" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                        SELECTED <span className="text-pista-dark">PROJECTS</span>
                    </h2>
                </div>

                {/* Single Column on Mobile, 2 on Tablet, 3 on Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedProject(project)}
                            className="group relative bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-pista/10 shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] animate-[fadeInUp_0.8s_ease-out] opacity-0 [animation-fill-mode:forwards] cursor-pointer"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            {/* Split Layout Container */}
                            <div className="flex flex-col md:flex-col h-full">
                                {/* Left Half - Image */}
                                <div className="relative w-full md:w-full h-48 md:h-56 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Image Overlay with Project ID */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                                    <div className="absolute top-4 left-4 text-6xl md:text-7xl font-black text-white/20 select-none group-hover:text-white/30 transition-colors">
                                        {project.id}
                                    </div>
                                    {/* Category Badge */}
                                    <div className="absolute top-4 right-4 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-pista-dark"></div>
                                        <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-white bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Right Half - Content */}
                                <div className="relative flex-1 p-5 md:p-6 flex flex-col justify-between">
                                    {/* Inner Kinetic Gradient Blob */}
                                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pista/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>

                                    <div className="relative z-10 space-y-3 md:space-y-4">
                                        {/* Title & Year */}
                                        <div className="flex justify-between items-start gap-2">
                                            <h3 className="text-lg md:text-xl font-bold text-text group-hover:text-pista-dark transition-colors duration-300 leading-tight">
                                                {project.title}
                                            </h3>
                                            <span className="text-xs font-bold text-text-light italic whitespace-nowrap">{project.year}</span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-[11px] md:text-sm text-text-muted leading-relaxed line-clamp-3">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack Pills */}
                                        <div className="flex flex-wrap gap-1.5 pt-1">
                                            {project.stack.map((tag, i) => (
                                                <span key={i} className="text-[8px] md:text-[9px] font-bold text-text-muted bg-[#FFFBF5] px-3 py-1.5 rounded-full border border-pista/20 group-hover:border-pista-dark/30 transition-colors">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Footer - Metric & Action Icon */}
                                    <div className="relative z-10 mt-4 flex items-end justify-between border-t border-pista/10 pt-4">
                                        <div className="space-y-0.5">
                                            <div className="text-[8px] md:text-[9px] font-black text-pista-dark/40 uppercase tracking-widest">metric</div>
                                            <div className="text-xs md:text-sm font-black text-text tracking-tighter">
                                                {project.metric}
                                            </div>
                                        </div>
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-text rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-110 group-hover:rotate-45 transition-all duration-500 shadow-xl group-hover:bg-pista-dark">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                                            </svg>
                                        </div>
                                    </div>
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
