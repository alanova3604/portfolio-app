"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import GeometricPattern from "@/components/GeometricPattern";

function Contact() {
    const headline = "Start a Strategic Conversation";
    
    // 1. Estados para el formulario, errores y estatus de envío
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    // 2. Manejador de cambios en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    // 3. Validación y Envío
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setStatus('loading');

        try {
            const response = await fetch("https://formspree.io/f/xaqjkjyb", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: "", email: "", phone: "", message: "" });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <main className="relative h-screen w-full bg-gradient-to-br from-black to-zinc-900 overflow-hidden flex flex-col items-center justify-center pt-24 pb-12 px-6">
            {/* Background Elements */}
            <GeometricPattern />

            {/* Diagonal Glow Animation */}
            <motion.div
                initial={{ top: "-20%", left: "-20%", opacity: 0 }}
                animate={{ 
                    top: ["-20%", "120%"], 
                    left: ["-20%", "120%"],
                    opacity: [0, 0.1, 0] 
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 5
                }}
                className="absolute w-[1000px] h-[1000px] bg-sky-400/10 rounded-full blur-[180px] pointer-events-none z-0"
            />

            <div className="relative z-10 w-full max-w-[1800px] px-6 md:px-12 lg:px-24">
                <header className="mb-12">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-slate-400 tracking-tight leading-tight">
                        {headline.split("").map((char, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.05,
                              delay: index * 0.05,
                              ease: "easeIn",
                            }}
                          >
                            {char}
                          </motion.span>
                        ))}
                    </h1>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-24 items-start h-full max-h-[60vh] overflow-y-auto lg:overflow-visible pr-2 custom-scrollbar">
                    {/* FORMULARIO GLASSMORFICO */}
                    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* NAME */}
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: headline.length * 0.05 + 0.2 }}
                                className={`relative group p-4 rounded-2xl bg-white/[0.03] border backdrop-blur-md transition-all duration-300 ${errors.name ? 'border-red-500/50 bg-red-500/5' : 'border-white/5 hover:border-white/10 hover:bg-white/[0.05]'}`}
                            >
                                <label className={`text-xs font-semibold uppercase tracking-wider mb-1 block ${errors.name ? 'text-red-400' : 'text-slate-500'}`}>
                                    {errors.name || "Name"}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-transparent outline-none text-foreground text-lg"
                                    placeholder="Enter your name"
                                />
                            </motion.div>

                            {/* EMAIL */}
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: headline.length * 0.05 + 0.3 }}
                                className={`relative group p-4 rounded-2xl bg-white/[0.03] border backdrop-blur-md transition-all duration-300 ${errors.email ? 'border-red-500/50 bg-red-500/5' : 'border-white/5 hover:border-white/10 hover:bg-white/[0.05]'}`}
                            >
                                <label className={`text-xs font-semibold uppercase tracking-wider mb-1 block ${errors.email ? 'text-red-400' : 'text-slate-500'}`}>
                                    {errors.email || "Email"}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-transparent outline-none text-foreground text-lg"
                                    placeholder="your@email.com"
                                />
                            </motion.div>
                        </div>

                        {/* PHONE */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: headline.length * 0.05 + 0.4 }}
                            className="relative group p-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05]"
                        >
                            <label className="text-xs font-semibold uppercase tracking-wider mb-1 block text-slate-500">Phone Number (Optional)</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-transparent outline-none text-foreground text-lg"
                                placeholder="+1 (555) 000-0000"
                            />
                        </motion.div>

                        {/* MESSAGE */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: headline.length * 0.05 + 0.5 }}
                            className={`relative group p-4 rounded-2xl bg-white/[0.03] border backdrop-blur-md transition-all duration-300 ${errors.message ? 'border-red-500/50 bg-red-500/5' : 'border-white/5 hover:border-white/10 hover:bg-white/[0.05]'}`}
                        >
                            <label className={`text-xs font-semibold uppercase tracking-wider mb-1 block ${errors.message ? 'text-red-400' : 'text-slate-500'}`}>
                                {errors.message || "Message"}
                            </label>
                            <textarea
                                rows={3}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-transparent outline-none text-foreground text-lg resize-none"
                                placeholder="Describe the problem we're solving..."
                            ></textarea>
                        </motion.div>

                        {/* BOTÓN */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: headline.length * 0.05 + 0.6 }}
                            className="flex items-center gap-6"
                        >
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className={`group h-16 px-10 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 ${
                                    status === 'loading' ? 'bg-zinc-800 text-slate-500 cursor-not-allowed' : 'bg-primary text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(0,122,255,0.3)] shadow-lg'
                                }`}
                            >
                                {status === 'loading' ? (
                                    <Icon icon="eos-icons:loading" className="text-2xl" />
                                ) : status === 'success' ? (
                                    "Message Sent!"
                                ) : (
                                    <span className="flex items-center gap-3">
                                        Send Message
                                        <Icon icon="solar:round-arrow-right-up-bold" className="text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </span>
                                )}
                            </button>

                            {status === 'success' && (
                                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-400 font-medium">Thanks! I'll be in touch soon.</motion.span>
                            )}
                            {status === 'error' && (
                                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 font-medium">Something went wrong. Try again.</motion.span>
                            )}
                        </motion.div>
                    </form>

                    {/* CONTACT INFO ASIDE */}
                    <aside className="space-y-10 lg:pl-12 border-t lg:border-t-0 lg:border-l border-white/5 pt-10 lg:pt-0 lg:ml-auto">
                        <div className="space-y-3">
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">Contact Details</motion.p>
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }} className="space-y-1 text-2xl md:text-3xl font-medium text-slate-200">
                                <p>Alan Valdez</p>
                                <p className="text-slate-500">Guadalajara, Mexico</p>
                            </motion.div>
                        </div>

                        <div className="space-y-3">
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">Let's Connect</motion.p>
                            <ul className="space-y-4">
                                <motion.li initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }}>
                                    <a href="https://www.linkedin.com/in/alanvalcala" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-xl text-slate-300 hover:text-primary transition-all duration-300">
                                        LinkedIn
                                        <Icon icon="solar:arrow-right-up-linear" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </a>
                                </motion.li>
                                <motion.li initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.6 }}>
                                    <a href="https://wa.me/523315316226" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-xl text-slate-300 hover:text-primary transition-all duration-300">
                                        WhatsApp
                                        <Icon icon="solar:arrow-right-up-linear" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </a>
                                </motion.li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Bottom Decorative Text */}
            <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none select-none z-0 opacity-[0.03]">
                <span className="text-[10vw] font-medium tracking-tighter whitespace-nowrap">
                    Vision & Collaboration.
                </span>
            </div>
        </main>
    );
}

export default Contact;