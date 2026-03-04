import React, { useState } from 'react';
import DetailModal from './DetailModal';
import SpotlightCard from './SpotlightCard';
import ecommerceImg from '../Images/E-Commerce App.png';
import assistiveSysImg from '../Images/ai_assistive_system_new.png';
import assistiveSysDetailImg from '../Images/dd.jpg';
import recruiterImg from '../Images/Recruiter App.png';
import todoImg from '../Images/WorkFlow - App.png';
import calculatorImg from '../Images/Calculator_Mobile_App.png';
import notesImg from '../Images/Notes_website.png';

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
            image: ecommerceImg,
            github: 'https://github.com/DeepaKumawat89/E_commerce-App'
        },
        {
            id: '02',
            category: 'MOBILE ENGINEERING',
            title: 'Recruiter Mobile App',
            year: '2024',
            description: 'A dedicated recruiter application for posting internships, assessing candidate profiles, and real-time communication.',
            fullDescription: 'Developed a recruiter-centric mobile application using Flutter and Firebase. The app enables recruiters to post jobs and internships, review and assessment candidate profiles with detailed skill breakdowns, and engage in real-time chat with potential hires. Implemented efficient state management using Provider for a smooth user experience.',
            stack: ['Flutter', 'Firebase', 'Dart', 'Provider'],
            metric: 'STATE MGMT',
            image: recruiterImg,
            github: 'https://github.com/DeepaKumawat89/ARMII_Recruiter_app'
        },
        {
            id: '03',
            category: 'AI & COMPUTER VISION',
            title: 'AI-Powered Assistive System',
            year: 'July 2024',
            description: 'Developed an AI-powered assistive system for the visually impaired with real-time object detection, face recognition, and text-to-speech capabilities.',
            fullDescription: 'Integrated features like currency detection, weather updates, and voice commands for hands-free interaction. Deployed on NVIDIA Jetson Xavier NX with GPU acceleration, achieving 90% accuracy in real-time scene analysis and audio feedback.',
            stack: ['Python', 'NVIDIA Jetson', 'PyCharm'],
            metric: '90% ACCURACY',
            image: assistiveSysImg,
            detailImage: assistiveSysDetailImg,
            github: 'https://github.com/DeepaKumawat89/AI-Powered-Assistive-System-for-the-Visually-Impaired'
        },
        {
            id: '04',
            category: 'UTILITY APP',
            title: 'To-Do App',
            year: 'Oct 2024',
            description: 'A feature-rich To-Do application built with Flutter for efficient task management and organization.',
            fullDescription: 'Developed a clean and intuitive To-Do application using Flutter. Features include task categorization, priority levels, and persistent storage using SQLite. Designed with a focus on productivity and smooth user interactions across mobile platforms.',
            stack: ['Flutter', 'Dart', 'SQLite'],
            metric: 'OFFLINE PRODUCTIVITY',
            image: todoImg,
            github: 'https://github.com/DeepaKumawat89/To_do_App'
        },
        {
            id: '05',
            category: 'UTILITY APP',
            title: 'Calculator App',
            year: 'Nov 2024',
            description: 'A sleek and functional calculator application built with Flutter, featuring a responsive UI and calculation history.',
            fullDescription: 'Developed a high-performance calculator app using Flutter and Dart. Implemented advanced arithmetic logic and local storage to persist calculation history across sessions, ensuring a seamless user experience.',
            stack: ['Flutter', 'Dart', 'Shared Preferences'],
            metric: 'LOCAL STORAGE',
            image: calculatorImg,
            github: 'https://github.com/DeepaKumawat89/Calculator-App'
        },
        {
            id: '06',
            category: 'WEB ENGINEERING',
            title: 'Notes Website',
            year: 'Dec 2024',
            description: 'A comprehensive notes-taking platform built with React, featuring secure authentication and cloud storage for media.',
            fullDescription: 'Developed a feature-rich web application for managing digital notes. Integrated Firebase for robust user authentication and real-time database management. Utilized Cloudinary for efficient image and file uploads, and styled with Tailwind CSS for a modern, responsive user interface.',
            stack: ['React', 'Firebase', 'Cloudinary', 'Tailwind CSS'],
            metric: 'CLOUD SYNC',
            image: notesImg,
            live: 'https://notes-website-mu.vercel.app'
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
                        <SpotlightCard
                            key={index}
                            onClick={() => setSelectedProject(project)}
                            className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl overflow-hidden border border-pista/10 shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] animate-[fadeInUp_0.8s_ease-out] opacity-0 [animation-fill-mode:forwards] cursor-pointer"
                            style={{ animationDelay: `${index * 0.15}s` }}
                            spotlightColor="rgba(197, 225, 165, 0.2)"
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
                        </SpotlightCard>
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
