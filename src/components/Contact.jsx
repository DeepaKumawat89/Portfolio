import React, { useState } from 'react';

const Contact = () => {
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

    // GOOGLE FORM CONFIGURATION
    // Step 1: ✅ Form URL is set (change viewform to formResponse)
    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLScjYYvHNXpeLx1Ihj9lXfZIki11dv5v_V8IIEskzpv56MYbKg/formResponse";

    // Step 2: ⚠️ REPLACE THESE ENTRY IDs WITH YOUR ACTUAL VALUES
    // To find entry IDs:
    // 1. Open your form: https://docs.google.com/forms/d/e/1FAIpQLScjYYvHNXpeLx1Ihj9lXfZIki11dv5v_V8IIEskzpv56MYbKg/viewform
    // 2. Right-click on Name field → Inspect → Find <input name="entry.XXXXXXXXX">
    // 3. Copy the number after "entry." and paste below
    // 4. Repeat for Email, Subject, and Message fields
    const FORM_FIELDS = {
        name: "entry.1947188305",      // ✅ Set: Name entry ID
        email: "entry.1812072245",    // ✅ Set: Email entry ID
        subject: "entry.834818569",   // ✅ Set: Subject entry ID
        message: "entry.1261339297"   // ✅ Set: Message entry ID
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Create FormData object for Google Forms
            const formDataToSend = new FormData();
            formDataToSend.append(FORM_FIELDS.name, formData.name);
            formDataToSend.append(FORM_FIELDS.email, formData.email);
            formDataToSend.append(FORM_FIELDS.subject, formData.subject);
            formDataToSend.append(FORM_FIELDS.message, formData.message);

            // Submit to Google Forms
            await fetch(GOOGLE_FORM_ACTION_URL, {
                method: 'POST',
                body: formDataToSend,
                mode: 'no-cors' // Required for Google Forms
            });

            // Success!
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Clear success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-12 md:py-16 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-pista/5 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-pista/10 rounded-full blur-[60px] md:blur-[100px] -z-10"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                        {/* Left Side: Info */}
                        <div className="space-y-8 md:space-y-12 animate-[fadeInLeft_0.8s_ease-out]">
                            <div className="space-y-4 md:space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pista/10 border border-pista/20">
                                    <div className="w-2 h-2 rounded-full bg-pista-dark animate-pulse"></div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-pista-dark">Open for Opportunities</span>
                                </div>
                                <h2 className="text-4xl md:text-7xl font-bold text-text tracking-tighter uppercase whitespace-nowrap" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                                    Let's <span className="text-pista-dark">Connect</span>
                                </h2>
                                <p className="text-base md:text-lg text-text-muted leading-relaxed max-w-md">
                                    I am currently seeking <span className="text-text font-bold">internship</span> and <span className="text-text font-bold">full-time</span> software engineering opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                                </p>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 group">
                                            <div className="w-12 h-12 shrink-0 rounded-2xl bg-white shadow-sm flex items-center justify-center text-pista-dark group-hover:bg-pista-dark group-hover:text-white transition-all duration-300">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Email</p>
                                                <p className="text-[13px] sm:text-sm font-bold text-text break-words">deepakkumawat31434@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 group">
                                            <div className="w-12 h-12 shrink-0 rounded-2xl bg-white shadow-sm flex items-center justify-center text-pista-dark group-hover:bg-pista-dark group-hover:text-white transition-all duration-300">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Phone</p>
                                                <p className="text-sm font-bold text-text">+91 8956799668</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <a
                                            href="https://github.com/DeepaKumawat89"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 group cursor-pointer"
                                        >
                                            <div className="w-12 h-12 shrink-0 rounded-2xl bg-white shadow-sm flex items-center justify-center text-pista-dark group-hover:bg-pista-dark group-hover:text-white transition-all duration-300">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22" /></svg>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted">GitHub</p>
                                                <p className="text-sm font-bold text-text group-hover:text-pista-dark transition-colors">/DeepaKumawat89</p>
                                            </div>
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/deepak-kumawat01/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 group cursor-pointer"
                                        >
                                            <div className="w-12 h-12 shrink-0 rounded-2xl bg-white shadow-sm flex items-center justify-center text-pista-dark group-hover:bg-pista-dark group-hover:text-white transition-all duration-300">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted">LinkedIn</p>
                                                <p className="text-sm font-bold text-text group-hover:text-pista-dark transition-colors">Deepak Kumawat</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <a
                                    href="/Deepak_Kumawat_Resume.pdf"
                                    download="Deepak_Kumawat_Resume.pdf"
                                    className="inline-flex items-center gap-4 px-8 py-4 bg-text text-white rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-pista-dark transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group"
                                >
                                    <span>Download Resume</span>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-y-1 transition-transform"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
                                </a>
                            </div>
                        </div>

                        {/* Right Side: Form Card */}
                        <div className="animate-[fadeInRight_0.8s_ease-out]">
                            <div className="bg-white/40 backdrop-blur-xl border border-white p-8 md:p-12 rounded-[2rem] shadow-2xl relative group">
                                {/* Subtle inner glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-pista/5 to-transparent rounded-[2rem] -z-10"></div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-text-muted ml-1">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-white/60 border border-pista/20 rounded-2xl px-6 py-4 outline-none focus:border-pista-dark focus:ring-4 focus:ring-pista/10 transition-all font-medium text-text placeholder:text-text/20"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-text-muted ml-1">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-white/60 border border-pista/20 rounded-2xl px-6 py-4 outline-none focus:border-pista-dark focus:ring-4 focus:ring-pista/10 transition-all font-medium text-text placeholder:text-text/20"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-text-muted ml-1">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Project Inquiry"
                                            className="w-full bg-white/60 border border-pista/20 rounded-2xl px-6 py-4 outline-none focus:border-pista-dark focus:ring-4 focus:ring-pista/10 transition-all font-medium text-text placeholder:text-text/20"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-text-muted ml-1">Message</label>
                                        <textarea
                                            rows="4"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Let's talk about your vision..."
                                            className="w-full bg-white/60 border border-pista/20 rounded-2xl px-6 py-6 outline-none focus:border-pista-dark focus:ring-4 focus:ring-pista/10 transition-all font-medium text-text placeholder:text-text/20 resize-none"
                                            required
                                        ></textarea>
                                    </div>

                                    {/* Success/Error Messages */}
                                    {submitStatus === 'success' && (
                                        <div className="bg-pista-dark/10 border border-pista-dark/30 text-pista-dark px-6 py-4 rounded-2xl text-sm font-bold animate-[fadeIn_0.3s_ease-out]">
                                            ✓ Message sent successfully! I'll get back to you soon.
                                        </div>
                                    )}
                                    {submitStatus === 'error' && (
                                        <div className="bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-2xl text-sm font-bold animate-[fadeIn_0.3s_ease-out]">
                                            ✗ Something went wrong. Please try again or email me directly.
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-5 bg-pista-dark text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-text hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-3">
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                                        </span>
                                    </button>
                                </form>
                            </div>

                            {/* Decorative Watermark */}
                            <div className="mt-8 text-right pr-4">
                                <span className="text-[10px] font-black text-pista-dark/20 uppercase tracking-[0.5em]">2026 System Terminal</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
