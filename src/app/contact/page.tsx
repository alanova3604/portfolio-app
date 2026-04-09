"use client";

import { useState } from "react";
import { motion } from "motion/react";
import EnterAnimation from "@/components/animate/EnterAnimation";

function Contact() {
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

        // Limpiar error del campo cuando el usuario escribe
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

        // Validaciones
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

        // Envío a Formspree
        setStatus('loading');

        try {
            const response = await fetch("https://formspree.io/f/xaqjkjyb", { // Tu código aquí
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: "", email: "", phone: "", message: "" }); // Limpiar form
                setTimeout(() => setStatus('idle'), 5000); // Resetear estado después de 5s
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <motion.div
            initial={{ x: 3000 }}
            animate={{ x: 0 }}
            exit={{ x: 3000, opacity: 0 }}
            transition={{ duration: .2, ease: "easeOut" }}
        >
            <section className="min-h-screen bg-background px-8 py-16 md:px-24 flex flex-col gap-12 justify-between transition-colors duration-300">
                <header>
                    <h1 className="flex flex-wrap text-6xl md:text-8xl font-bold font-['Instrument_Sans'] tracking-tight text-foreground transition-colors duration-300">
                        <EnterAnimation className="mr-5" tag="span" duration={.1}>Let’s</EnterAnimation>
                        <EnterAnimation className="mr-5" tag="span" duration={.2}>Work</EnterAnimation>
                        <EnterAnimation className="mr-5" tag="span" duration={.3}>Together</EnterAnimation>
                    </h1>
                </header>

                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* FORMULARIO REACTIVO */}
                    <form className="flex-1 w-full space-y-8" onSubmit={handleSubmit} noValidate>

                        {/* NAME */}
                        <EnterAnimation duration={.4} tag="div" className={`border-b py-3 transition-colors ${errors.name ? 'border-red-500' : 'border-border'}`}>
                            <label className={`block text-sm mb-1 transition-colors ${errors.name ? 'text-red-500' : 'text-muted'}`}>
                                {errors.name || "Name"}
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-transparent outline-none text-foreground placeholder-muted transition-colors"
                            />
                        </EnterAnimation>

                        {/* EMAIL */}
                        <EnterAnimation duration={.45} tag="div" className={`border-b py-3 transition-colors ${errors.email ? 'border-red-500' : 'border-border'}`}>
                            <label className={`block text-sm mb-1 transition-colors ${errors.email ? 'text-red-500' : 'text-muted'}`}>
                                {errors.email || "Email"}
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-transparent outline-none text-foreground transition-colors"
                            />
                        </EnterAnimation>

                        {/* PHONE */}
                        <EnterAnimation duration={.5} tag="div" className="border-b border-border py-3 transition-colors">
                            <label className="block text-muted text-sm mb-1 transition-colors">Phone Number (Optional)</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-transparent outline-none text-foreground transition-colors"
                            />
                        </EnterAnimation>

                        {/* MESSAGE */}
                        <EnterAnimation duration={.55} tag="div" className={`border-b py-3 transition-colors ${errors.message ? 'border-red-500' : 'border-border'}`}>
                            <label className={`block text-sm mb-1 transition-colors ${errors.message ? 'text-red-500' : 'text-muted'}`}>
                                {errors.message || "Message"}
                            </label>
                            <textarea
                                rows={4}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-transparent outline-none text-foreground resize-none transition-colors"
                            ></textarea>
                        </EnterAnimation>

                        {/* BOTÓN Y ESTADOS */}
                        <EnterAnimation tag="div" duration={.6} className="flex items-center gap-4">
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className={`w-24 h-24 rounded-full flex items-center justify-center font-medium transition-all ${
                                    status === 'loading' ? 'bg-muted scale-95' : 'bg-foreground hover:scale-105 text-background'
                                }`}
                            >
                                {status === 'loading' ? (
                                    <svg className="animate-spin h-6 w-6 text-background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : status === 'success' ? (
                                    "Sent!"
                                ) : (
                                    "Send"
                                )}
                            </button>

                            {/* Mensajes de Feedback Externos */}
                            {status === 'success' && (
                                <span className="text-green-600 text-sm font-medium animate-pulse">Thanks! I'll be in touch.</span>
                            )}
                            {status === 'error' && (
                                <span className="text-red-500 text-sm font-medium">Something went wrong. Try again.</span>
                            )}
                        </EnterAnimation>
                    </form>

                    <aside className=" w-full lg:w-1/3 flex flex-col items-end gap-10 text-right">
                        {/* ... (Tu aside se queda igual) ... */}
                        <div className="space-y-2">
                            <EnterAnimation duration={.7} tag="p" className="text-muted text-xs font-semibold uppercase tracking-wider transition-colors">Name</EnterAnimation>
                            <EnterAnimation duration={.8} tag="p" className="text-foreground text-xl transition-colors">Alan Valdez</EnterAnimation>
                        </div>

                        <div className="space-y-2">
                            <EnterAnimation duration={.9} tag="p" className="text-muted text-xs font-semibold uppercase tracking-wider transition-colors">Location</EnterAnimation>
                            <EnterAnimation duration={1} tag="p" className="text-foreground text-xl transition-colors">Guadalajara, Mexico</EnterAnimation>
                        </div>

                        <div className="space-y-2">
                            <EnterAnimation duration={1.1} className="text-muted text-xs font-semibold uppercase tracking-wider transition-colors">Social Media</EnterAnimation>
                            <ul className="text-foreground text-xl space-y-1 transition-colors">
                                <EnterAnimation duration={1.2} tag="li" className="hover:underline hover:text-primary transition-colors"><a href="https://www.linkedin.com/in/alanvalcala" target="_blank" rel="noreferrer">LinkedIn</a></EnterAnimation>
                                <EnterAnimation duration={1.2} tag="li" className="hover:underline hover:text-primary transition-colors"><a href="https://wa.me/523315316226" target="_blank" rel="noreferrer">WhatsApp</a></EnterAnimation>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>
        </motion.div>
    )
}

export default Contact;