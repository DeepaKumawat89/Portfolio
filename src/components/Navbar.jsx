import React, { useState, useEffect } from 'react';

const Navbar = ({ isDarkMode, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 transition-all duration-500">
            <nav
                className={`transition-all duration-500 ease-in-out flex items-center justify-between px-6 md:px-10 py-3 rounded-full shadow-2xl ${scrolled
                    ? 'glass w-full max-w-5xl border-white/40 shadow-pista-shadow/10'
                    : 'bg-white/40 backdrop-blur-md w-full max-w-6xl border-transparent'
                    }`}
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
                {/* Logo */}
                <a href="#" className="text-2xl font-bold text-text hover:text-pista-dark transition-all duration-300 flex items-center gap-3 group">
                    <div className="w-10 h-10 gradient-pista rounded-xl flex items-center justify-center text-white text-base font-black shadow-lg shadow-pista/20 group-hover:rotate-[15deg] transition-all duration-500">
                        D
                    </div>
                    <span className="hidden sm:inline tracking-tighter text-2xl" style={{ fontFamily: "'Times New Roman', Times, serif" }}>Deepak.k</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1 lg:gap-2 p-1 bg-white/5 rounded-full border border-white/10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-5 py-2 text-[11px] font-black uppercase tracking-widest text-text-muted hover:text-pista-dark transition-all duration-500 rounded-full hover:bg-pista-light/10 relative group"
                        >
                            {link.name}
                            <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-pista-dark rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></span>
                        </a>
                    ))}

                    <div className="w-px h-6 bg-pista/10 mx-3"></div>

                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-text hover:text-pista-dark hover:scale-110 transition-all duration-300 mr-2 relative overflow-hidden group"
                        aria-label="Toggle Theme"
                    >
                        <div className={`transition-all duration-500 ${isDarkMode ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
                        </div>
                        <div className={`absolute transition-all duration-500 ${isDarkMode ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                        </div>
                    </button>

                    <a
                        href="#contact"
                        className="px-8 py-2.5 gradient-pista text-white rounded-full text-[11px] font-black uppercase tracking-widest hover:shadow-2xl hover:shadow-pista/40 transition-all duration-500 hover:scale-105 active:scale-95 shadow-lg"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Icons Container */}
                <div className="flex items-center gap-3 md:hidden">
                    {/* Theme Toggle Button (Mobile) */}
                    <button
                        onClick={toggleTheme}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 border border-white/20 text-text hover:text-pista-dark transition-all duration-300 relative overflow-hidden"
                        aria-label="Toggle Theme"
                    >
                        <div className={`transition-all duration-500 ${isDarkMode ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
                        </div>
                        <div className={`absolute transition-all duration-500 ${isDarkMode ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                        </div>
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="w-10 h-10 flex items-center justify-center text-text hover:text-pista-dark transition-all duration-300 rounded-full hover:bg-pista-light/20 relative z-50 bg-white/50"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M12 12h8M4 18h16" /></svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop Overlay with Blur */}
                        <div
                            className="fixed top-20 left-0 right-0 bottom-0 bg-black/50 backdrop-blur-md z-30 md:hidden animate-[fadeIn_0.3s_ease-out]"
                            onClick={() => setMobileMenuOpen(false)}
                        ></div>

                        {/* Mobile Menu */}
                        <div className="absolute top-full left-0 right-0 mt-4 mx-2 p-6 bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-pista/20 animate-[fadeIn_0.3s_ease-out] md:hidden z-50 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="py-4 px-6 text-lg font-bold text-text hover:text-pista-dark hover:bg-pista-light/20 transition-all duration-300 rounded-xl flex justify-between items-center group"
                                >
                                    {link.name}
                                    <span className="w-1.5 h-1.5 bg-pista-dark rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-4 py-4 gradient-pista text-white text-center rounded-xl font-bold uppercase tracking-widest hover:shadow-lg transition-all"
                            >
                                Hire Me
                            </a>
                        </div>
                    </>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
