"use client";
import { motion } from "motion/react"
// Asegúrate de tener un logo para este proyecto o usa uno genérico por mientras
const logoClaro = '/assets/claro-de-luna-logo.png';

function ClaroDeLuna() {

    // --- CONFIGURACIÓN DE TEMA ---
    // Aquí controlas el color principal de todo el componente
    const theme = {
        primaryText: "text-cyan-600", // Color para textos destacados
        primaryBg: "bg-cyan-600",     // Color para fondos sólidos
        gradientHero: "bg-gradient-to-br from-cyan-700 to-slate-900", // Gradiente oscuro (Overview)
        gradientAccent: "bg-gradient-to-br from-blue-900 to-slate-950", // Gradiente secundario (Challenge)
    };

    // NOTA: Asegúrate de crear la carpeta /claro dentro de assets y poner tus fotos ahí (01, 02, etc.)
    const images = [
        '/assets/claro/01-banner.webp',
        '/assets/claro/02.webp',
        '/assets/claro/03.webp',
        '/assets/claro/04.webp',
        '/assets/claro/05.webp',
        '/assets/claro/06.webp'
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }} // Animación más sutil y elegante para joyería
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >

            <div className="w-full max-w-[1691px] mx-auto p-4 md:p-12 flex flex-col justify-start items-center gap-10 overflow-hidden">

                {/* --- HERO SECTION --- */}
                <div
                    className="w-full min-h-[80vh] relative py-7 bg-center bg-cover bg-black/50 rounded-[40px] flex flex-col justify-between items-center overflow-hidden"
                    style={{ backgroundImage: `url('${images[0]}')` }} // Imagen Principal (Hero)
                >
                    <div className="bg-black/40 absolute inset-0 w-full h-full z-0"></div>

                    <div className="w-full px-6 md:px-10 flex z-10 flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-center md:text-left">
                            <span className="text-white text-lg md:text-xl font-semibold font-['Instrument_Sans'] leading-10">UX/UI </span>
                            <span className="text-white text-lg md:text-xl font-normal font-['Instrument_Sans'] leading-10">Redesign</span>
                            <span className="text-white text-lg md:text-xl font-semibold font-['Instrument_Sans'] leading-10"> & Implementation </span>
                        </div>
                        <div className="text-center md:text-left">
                            <span className="text-white text-base md:text-lg font-normal font-['Instrument_Sans'] leading-8">Tech:</span>
                            <span className="text-white text-lg md:text-xl font-semibold font-['Instrument_Sans'] leading-10"> Laravel Blade, Tailwind, Nubir Engine</span>
                        </div>
                    </div>

                    <div className="flex flex-col z-10 justify-center items-center gap-2.5 px-4 text-center">
                        {/* Si no tienes logo, puedes comentar esta línea */}
                        <img className="w-full max-w-[200px] h-auto object-contain brightness-0 invert" src={logoClaro} alt="Logo" />

                        <div className="text-gray-100 text-2xl md:text-3xl font-semibold font-['Instrument_Sans'] leading-tight md:leading-[54px] tracking-wide">
                            Jewelry E-commerce Experience
                        </div>
                    </div>

                    <div className="w-full px-6 z-10 md:px-10 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-4">
                        <div className="text-zinc-200 text-xl md:text-3xl font-medium font-['Instrument_Sans'] leading-tight md:leading-[54px]">
                            Building Trust & Visual Elegance
                        </div>
                        <div className="text-white text-3xl md:text-4xl font-semibold font-['Instrument_Sans'] leading-tight md:leading-[72px]">
                            2025
                        </div>
                    </div>
                </div>

                {/* --- PROJECT OVERVIEW --- */}
                <div className={`w-full min-h-[400px] px-6 py-10 md:px-20 md:py-14 ${theme.gradientHero} rounded-[40px] backdrop-blur-[5px] flex flex-col lg:flex-row justify-between items-center gap-10 overflow-hidden`}>
                    <div className="flex-1 text-white text-5xl md:text-8xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[100px]">
                        Project Overview
                    </div>
                    <div className="flex-1 w-full lg:w-auto p-6 md:px-12 rounded-[40px] backdrop-blur-[50px] flex justify-center items-center bg-white/10">
                        <div className="text-center text-neutral-200 text-base md:text-lg font-normal font-['Instrument_Sans'] leading-7">
                            "Claro de Luna" is a jewelry brand running on our proprietary Nubir Engine. The previous iteration faced a critical problem:
                            <span className="text-white font-bold"> The "Trust Gap". </span>
                            Users felt the site looked outdated and insecure, leading to cart abandonment. The goal was to redesign the experience to feel premium yet accessible ("Juvenile & Trustworthy"), proving that a small brand can offer a high-end experience.
                        </div>
                    </div>
                </div>

                {/* --- GOAL SECTION --- */}
                <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-10">
                    <div className="w-full lg:w-1/3 flex flex-col justify-center items-start gap-5">
                        <div className="justify-start">
                            <span className="text-foreground text-3xl font-semibold font-['Instrument_Sans'] leading-10">The </span>
                            <span className={`${theme.primaryText} text-3xl font-bold font-['Instrument_Sans'] leading-10`}> Objective</span>
                        </div>
                        <div className="w-full text-muted text-lg font-normal font-['Instrument_Sans'] leading-7">
                            To create a UI that balances elegance with familiarity. We needed to move away from technical jargon (like "10k Gold") towards user-centric categories, while making the limited catalog feel curated rather than empty.
                        </div>
                    </div>
                    {/* IMAGEN 2: Una vista bonita del Home nuevo */}
                    <img className="w-full lg:w-2/3 h-auto min-h-[300px] object-cover rounded-[20px] shadow-[inset_3px_5px_23px_0px_rgba(0,0,0,0.25)]" src={images[1]} />
                </div>

                {/* --- THE CHALLENGE --- */}
                <div className={`w-full px-6 md:px-28 py-10 md:py-24 ${theme.gradientAccent} rounded-[40px] backdrop-blur-[5px] flex flex-col justify-center items-start gap-7 overflow-hidden`}>
                    <div className="w-full max-w-[600px] text-white text-4xl md:text-5xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[50px]">
                        The Challenge: Overcoming "The Scam Aesthetic"
                    </div>
                    <div className="text-neutral-200 text-lg font-normal font-['Instrument_Sans'] leading-7">
                        When a jewelry site looks old or has small images, users assume it's fake. We identified three major friction points:
                    </div>

                    <div className="w-full flex flex-col lg:flex-row gap-5">
                        <div className="flex-1 px-7 py-5 bg-card/90 rounded-[20px] backdrop-blur-[275px] flex flex-col gap-2.5 transition-colors duration-300">
                            <div className={`${theme.primaryText} text-lg font-semibold font-['Instrument_Sans'] leading-7`}>
                                Perception of Value
                            </div>
                            <div className="text-muted text-base font-normal font-['Instrument_Sans'] leading-6 transition-colors duration-300">
                                Small product cards made expensive jewelry look cheap. We needed to increase visual density.
                            </div>
                        </div>
                        <div className="flex-1 px-7 py-5 bg-card/90 rounded-[20px] backdrop-blur-[275px] flex flex-col gap-2.5 transition-colors duration-300">
                            <div className={`${theme.primaryText} text-lg font-semibold font-['Instrument_Sans'] leading-7`}>
                                Confusing Navigation
                            </div>
                            <div className="text-muted text-base font-normal font-['Instrument_Sans'] leading-6 transition-colors duration-300">
                                Categories like "10k Gold" were too technical. Users buy "Rings" or "Gifts", not "Karats".
                            </div>
                        </div>
                        <div className="flex-1 px-7 py-5 bg-card/90 rounded-[20px] backdrop-blur-[275px] flex flex-col gap-2.5 transition-colors duration-300">
                            <div className={`${theme.primaryText} text-lg font-semibold font-['Instrument_Sans'] leading-7`}>
                                Limited Catalog
                            </div>
                            <div className="text-muted text-base font-normal font-['Instrument_Sans'] leading-6 transition-colors duration-300">
                                Having few products made the site feel empty. We used layout tricks to make the collection feel "Exclusive" instead of small.
                            </div>
                        </div>
                    </div>

                    {/* IMAGEN 3: Captura del sitio VIEJO (o un wireframe) */}
                    <div
                        className="w-full h-[400px] md:h-[600px] bg-center px-6 py-5 bg-black/30 rounded-[40px] flex justify-center items-center overflow-hidden relative"
                        style={{ backgroundImage: `url('${images[2]}')` }}
                    >
                        <div className="bg-black/50 absolute inset-0 w-full h-full z-0"></div>
                        <div className="text-center text-white/80 z-10 text-4xl md:text-6xl font-bold font-['Instrument_Sans'] leading-tight">
                            Previous Experience
                        </div>
                    </div>
                </div>

                {/* --- UX SOLUTION --- */}
                <div className="w-full py-10 md:py-20 bg-card/50 border border-border rounded-[40px] backdrop-blur-[5px] flex flex-col gap-10 md:gap-20 p-4 transition-colors duration-300">
                    <div className="w-full max-w-[586px]">
                        <span className="text-foreground text-5xl md:text-7xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[70px]">THE </span>
                        <span className={`${theme.primaryText} text-5xl md:text-7xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[70px]`}>UX<br/></span>
                        <span className="text-foreground text-5xl md:text-7xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[70px]">STRATEGY</span>
                    </div>

                    {/* SOLUCIÓN 1: Navegación y Filtros */}
                    <div className="w-full flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1 flex flex-col gap-5">
                            <div className="text-foreground text-3xl md:text-4xl font-semibold font-['Instrument_Sans'] leading-10 transition-colors duration-300">
                                Intuitive Discovery & Filters
                            </div>
                            <div className="text-neutral-500 text-base font-normal font-['Instrument_Sans'] leading-6">
                                We implemented a <strong>Filter System</strong> on listing pages. This helps users always know "where they are". <br/><br/>
                                Instead of technical categories, we simplified the IA to natural language: <em>Rings, Bracelets, Necklaces</em>. This reduced the cognitive load for casual buyers.
                            </div>
                        </div>
                        {/* IMAGEN 4: Vista de Categorías con Filtros */}
                        <img className="w-full lg:w-1/2 h-auto rounded-[20px] shadow-2xl" src={images[3]} />
                    </div>

                    <div className="w-full max-w-2xl mx-auto h-0 outline outline-1 outline-offset-[-0.50px] outline-zinc-300"></div>

                    {/* SOLUCIÓN 2: Regalos y Buscador */}
                    <div className="w-full flex flex-col-reverse lg:flex-row items-center gap-12">
                        {/* IMAGEN 5: Sección de "Regalos" o Cards grandes */}
                        <img className="w-full lg:w-1/2 h-auto rounded-[20px] shadow-2xl" src={images[4]} />

                        <div className="flex-1 flex flex-col gap-5">
                            <div className="text-foreground text-3xl md:text-4xl font-semibold font-['Instrument_Sans'] leading-10 transition-colors duration-300">
                                Strategic Layout: <br/>Browsing over Searching
                            </div>
                            <div className="text-neutral-500 text-base font-normal font-['Instrument_Sans'] leading-6">
                                <span className="text-black font-semibold">The "Amazon" Dilemma:</span> While a search bar was requested, I argued that for a boutique brand, discovery is key. <br/><br/>
                                We replaced the prominent search with curated "Gift Personas" (For Mom, For Partner). We also increased the <strong>Product Card Size</strong> significantly to showcase the jewelry details, building trust through transparency.
                            </div>
                        </div>
                    </div>
                </div>

                <img className="w-full h-auto min-h-[300px] object-cover rounded-[20px] shadow-[inset_0px_4px_40px_0px_rgba(0,0,0,0.25)]"
                     src={images[5]} />

                {/* --- FRONTEND IMPLEMENTATION --- */}
                <div className="w-full pt-5 pb-20 bg-card border border-border rounded-[40px] flex flex-col gap-20 p-6 md:p-12 transition-colors duration-300">
                    <div className="flex flex-col gap-5">
                        <div className="w-full max-w-[800px]">
                            <span className={`${theme.primaryText} text-4xl md:text-6xl font-bold font-['Instrument_Sans'] leading-tight`}>Standardized </span>
                            <span className="text-foreground text-4xl md:text-6xl font-bold font-['Instrument_Sans'] leading-tight"> Development</span>
                        </div>
                        <div>
                            <span className="text-muted text-base font-bold font-['Instrument_Sans'] leading-4">Tech Stack:</span>
                            <span className="text-muted text-base font-normal font-['Instrument_Sans'] leading-4"> Laravel Blade + Tailwind CSS (Nubir Engine Standard).</span>
                        </div>
                    </div>

                    <div className="w-full flex flex-col md:flex-row gap-10">
                        <div className="flex-1 flex flex-col gap-5">
                            <div className="text-black text-3xl font-semibold font-['Instrument_Sans'] leading-8">
                                Why no React/Vue here?
                            </div>
                            <div className="text-neutral-500 text-base font-normal font-['Instrument_Sans'] leading-6">
                                To maintain consistency with the company's ecosystem (Nubir Engine), I implemented the redesign using Laravel Blade templates. This ensured seamless integration with the existing backend logic while completely modernizing the frontend layer.
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-5">
                            <div className="text-black text-3xl font-semibold font-['Instrument_Sans'] leading-8">
                                Tailwind Architecture
                            </div>
                            <div className="text-neutral-500 text-base font-normal font-['Instrument_Sans'] leading-6">
                                I established a Design System within Tailwind config to manage the "Premium" color palette and spacing, ensuring that despite the limited catalog, the whitespace made the site feel expensive, not empty.
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- OUTCOME --- */}
                <div className={`w-full p-6 md:p-20 ${theme.primaryBg} rounded-[40px] backdrop-blur-[5px] flex flex-col gap-20`}>
                    <div className="text-center text-white text-5xl md:text-7xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[70px]">
                        Current Status
                    </div>
                    <div className="text-center text-white text-2xl md:text-3xl font-normal font-['Instrument_Sans'] leading-10 opacity-90">
                        The UX/UI phase is complete. The project is currently queued for development within the Nubir Engine ecosystem.
                    </div>

                    <div className="flex flex-col md:flex-row gap-10 justify-center">
                        <div className="flex-1 flex flex-col gap-5 max-w-sm mx-auto text-center">
                            <div className="text-white text-3xl font-semibold font-['Instrument_Sans'] leading-8">
                                Design Handover
                            </div>
                            <div className="text-zinc-100 text-base font-normal font-['Instrument_Sans'] leading-6">
                                All high-fidelity prototypes and assets have been prepared for the Blade/Laravel implementation team.
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-5 max-w-sm mx-auto text-center">
                            <div className="text-white text-3xl font-semibold font-['Instrument_Sans'] leading-8">
                                Future Validation
                            </div>
                            <div className="text-zinc-100 text-base font-normal font-['Instrument_Sans'] leading-6">
                                Post-launch strategy includes installing Microsoft Clarity to validate if the new "Gift" categories successfully reduce bounce rates.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default ClaroDeLuna