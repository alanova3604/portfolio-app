"use client";
import { motion } from "motion/react"
// Recuerda importar el logo de Neuma si lo tienes, o usa uno genérico
// import logoNeuma from '../assets/neumaprotect-logo.png'

function Neumaprotect() {

    // --- CONFIGURACIÓN DE TEMA (Health & Wellness Palette) ---
    const theme = {
        primaryText: "text-cyan-500", // Color cian de Neuma
        primaryBg: "bg-cyan-500",
        gradientHero: "bg-gradient-to-br from-cyan-600 to-teal-900", // Gradiente profesional médico
        gradientAccent: "bg-gradient-to-br from-cyan-800 to-slate-950",
    };

    // NOTA: Asegúrate de crear la carpeta /neuma dentro de assets y poner tus 6 fotos ahí
    const images = [
        '/assets/neuma/01-Inicio.jpg',
        '/assets/neuma/02-nosotros.jpg',
        '/assets/neuma/03-Catalogo.jpg',
        '/assets/neuma/04-Carrito.jpg',
        '/assets/neuma/05-Checkout.jpg',
        '/assets/neuma/06-Detalle.jpg',
        '/assets/neuma/hero.jpg'
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >

            <div className="w-full max-w-[1691px] mx-auto p-4 md:p-12 flex flex-col justify-start items-center gap-10 overflow-hidden">

                {/* --- HERO SECTION --- */}
                <div
                    className="w-full min-h-[80vh] relative py-7 bg-top bg-cover bg-no-repeat bg-black/50 rounded-[40px] flex flex-col justify-between items-center overflow-hidden"
                    style={{ backgroundImage: `url('${images[6]}')` }} // Tu captura de "Inicio"
                >
                    <div className="bg-black/20 absolute inset-0 w-full h-full z-0"></div>

                    <div className="w-full px-6 md:px-10 flex z-10 flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-center md:text-left">
                            <span className="text-white text-lg md:text-xl font-semibold font-['Instrument_Sans'] leading-10">UX/UI </span>
                            <span className="text-white text-lg md:text-xl font-normal font-['Instrument_Sans'] leading-10">Design</span>
                            <span className="text-white text-lg md:text-xl font-semibold font-['Instrument_Sans'] leading-10"> & E-commerce Strategy </span>
                        </div>
                        <div className="text-center md:text-left">
                            <span className="text-white text-base md:text-lg font-normal font-['Instrument_Sans'] leading-8">Industry:</span>
                            <span className="text-white text-lg md:text-xl font-semibold font-['Instrument_Sans'] leading-10"> Health & Wellness</span>
                        </div>
                    </div>

                    <div className="flex flex-col z-10 justify-center items-center gap-2.5 px-4 text-center">
                        <div className="text-gray-100 text-3xl md:text-5xl font-bold font-['Instrument_Sans'] leading-tight tracking-wide drop-shadow-lg">
                            NEUMAPROTECT
                        </div>
                        <div className="text-gray-100 text-xl md:text-2xl font-medium font-['Instrument_Sans']">
                            Specialized Supplement Experience
                        </div>
                    </div>

                    <div className="w-full px-6 z-10 md:px-10 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-4">
                        <div className="text-zinc-100 text-xl md:text-3xl font-medium font-['Instrument_Sans'] leading-tight md:leading-[54px]">
                            Architecture of Trust
                        </div>
                        <div className="text-white text-3xl md:text-4xl font-semibold font-['Instrument_Sans'] leading-tight md:leading-[72px]">
                            2024
                        </div>
                    </div>
                </div>

                {/* --- PROJECT OVERVIEW --- */}
                <div className={`w-full min-h-[400px] px-6 py-10 md:px-20 md:py-14 ${theme.gradientHero} rounded-[40px] backdrop-blur-[5px] flex flex-col lg:flex-row justify-between items-center gap-10 overflow-hidden`}>
                    <div className="flex-1 text-white text-5xl md:text-8xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[100px]">
                        Project Overview
                    </div>
                    <div className="flex-1 w-full lg:w-auto p-6 md:px-12 rounded-[40px] backdrop-blur-[50px] flex justify-center items-center bg-white/10">
                        <div className="text-center text-neutral-100 text-base md:text-lg font-normal font-['Instrument_Sans'] leading-7">
                            Neumaprotect is a specialized wellness platform focused on high-quality natural supplements. The main challenge was to build a digital experience that felt <span className="text-white font-bold">scientific yet approachable.</span> In the health industry, users require high levels of trust before purchasing. I redesigned the interface to ensure that complex product information felt clear, clean, and reliable.
                        </div>
                    </div>
                </div>

                {/* --- GOAL SECTION --- */}
                <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-10">
                    <div className="w-full lg:w-1/3 flex flex-col justify-center items-start gap-5">
                        <div className="justify-start">
                            <span className="text-foreground transition-colors duration-300 text-3xl font-semibold font-['Instrument_Sans'] leading-10">The </span>
                            <span className={`${theme.primaryText} text-3xl font-bold font-['Instrument_Sans'] leading-10`}> Objective</span>
                        </div>
                        <div className="w-full text-muted transition-colors duration-300 text-lg font-normal font-['Instrument_Sans'] leading-7">
                            To create a high-conversion e-commerce flow for medical-grade supplements. The goal was to simplify the catalog navigation (Information Architecture) and ensure that the "Product Benefits" were the hero of the experience.
                        </div>
                    </div>
                    <img className="w-full lg:w-2/3 h-auto max-h-[800px] object-contain object-top rounded-[20px] shadow-xl bg-white/5" src={images[0]} />
                </div>

                {/* --- THE CHALLENGE --- */}
                <div className={`w-full px-6 md:px-28 py-10 md:py-24 ${theme.gradientAccent} rounded-[40px] backdrop-blur-[5px] flex flex-col justify-center items-start gap-7 overflow-hidden`}>
                    <div className="w-full max-w-[700px] text-white text-4xl md:text-5xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[50px]">
                        The Challenge: Balancing Health Ethics with E-commerce
                    </div>
                    <div className="text-neutral-200 text-lg font-normal font-['Instrument_Sans'] leading-7">
                        When designing for the wellness space, "The Trust Gap" is the biggest hurdle. Users need to feel the site is clinically backed.
                    </div>

                    <div className="w-full flex flex-col lg:flex-row gap-5">
                        <div className="flex-1 px-7 py-5 bg-card/90 transition-colors duration-300 rounded-[20px] backdrop-blur-[275px] flex flex-col gap-2.5">
                            <div className={`${theme.primaryText} text-lg font-semibold font-['Instrument_Sans'] leading-7`}>
                                Scientific Trust
                            </div>
                            <div className="text-muted transition-colors duration-300 text-base font-normal font-['Instrument_Sans'] leading-6">
                                Standard templates feel too "commercial". I used a clinical-cyan palette to evoke cleanliness and safety.
                            </div>
                        </div>
                        <div className="flex-1 px-7 py-5 bg-card/90 transition-colors duration-300 rounded-[20px] backdrop-blur-[275px] flex flex-col gap-2.5">
                            <div className={`${theme.primaryText} text-lg font-semibold font-['Instrument_Sans'] leading-7`}>
                                Info Overload
                            </div>
                            <div className="text-muted transition-colors duration-300 text-base font-normal font-['Instrument_Sans'] leading-6">
                                Ingredients and health instructions can be overwhelming. I prioritized IA to make it digestible.
                            </div>
                        </div>
                        <div className="flex-1 px-7 py-5 bg-card/90 transition-colors duration-300 rounded-[20px] backdrop-blur-[275px] flex flex-col gap-2.5">
                            <div className={`${theme.primaryText} text-lg font-semibold font-['Instrument_Sans'] leading-7`}>
                                Mobile Wellness
                            </div>
                            <div className="text-muted transition-colors duration-300 text-base font-normal font-['Instrument_Sans'] leading-6">
                                Health shoppers often research on the go. Mobile-first checkout was a non-negotiable priority.
                            </div>
                        </div>
                    </div>

                    <div
                        className="w-full min-h-[400px] md:min-h-[600px] aspect-video bg-top bg-cover bg-no-repeat px-6 py-5 bg-black/30 rounded-[40px] flex justify-center items-center overflow-hidden relative"
                        style={{ backgroundImage: `url('${images[2]}')` }}
                    >
                        <div className="bg-black/20 absolute inset-0 w-full h-full z-0"></div>
                        <div className="text-center text-white z-10 text-4xl md:text-6xl font-bold font-['Instrument_Sans'] leading-tight">
                            Clean Catalog Design
                        </div>
                    </div>
                </div>

                {/* --- UX SOLUTION --- */}
                <div className="w-full py-10 md:py-20 bg-card/50 transition-colors duration-300 border border-border transition-colors duration-300 rounded-[40px] backdrop-blur-[5px] flex flex-col gap-10 md:gap-20 p-4">
                    <div className="w-full max-w-[586px]">
                        <span className="text-foreground transition-colors duration-300 text-5xl md:text-7xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[70px]">THE </span>
                        <span className={`${theme.primaryText} text-5xl md:text-7xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[70px]`}>UX<br/></span>
                        <span className="text-foreground transition-colors duration-300 text-5xl md:text-7xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[70px]">STRATEGY</span>
                    </div>

                    <div className="w-full flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1 flex flex-col gap-5">
                            <div className="text-foreground transition-colors duration-300 text-3xl md:text-4xl font-semibold font-['Instrument_Sans'] leading-10">
                                Product Education & PDP
                            </div>
                            <div className="text-muted transition-colors duration-300 text-base font-normal font-['Instrument_Sans'] leading-6">
                                I redesigned the <strong>Product Detail Page (PDP)</strong> to answer health-related questions upfront. By organizing "Benefits," "Ingredients," and "How to use," we reduced friction at the point of decision.
                            </div>
                        </div>
                        <img className="w-full lg:w-1/2 h-auto rounded-[20px] shadow-2xl" src={images[5]} />
                    </div>

                    <div className="w-full max-w-2xl mx-auto h-0 outline outline-1 outline-offset-[-0.50px] outline-border transition-colors duration-300"></div>

                    <div className="w-full flex flex-col-reverse lg:flex-row items-center gap-12">
                        <img className="w-full lg:w-1/2 h-auto rounded-[20px] shadow-2xl" src={images[3]} />
                        <div className="flex-1 flex flex-col gap-5">
                            <div className="text-foreground transition-colors duration-300 text-3xl md:text-4xl font-semibold font-['Instrument_Sans'] leading-10">
                                Transparent Cart & Checkout
                            </div>
                            <div className="text-muted transition-colors duration-300 text-base font-normal font-['Instrument_Sans'] leading-6">
                                Trust is maintained until the very last second. I optimized the <strong>Shopping Cart</strong> and <strong>Checkout Flow</strong> to show clear pricing, subscription options, and secure payment badges.
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- FRONTEND IMPLEMENTATION --- */}
                <div className="w-full pt-5 pb-20 bg-card transition-colors duration-300 border border-slate-200 rounded-[40px] flex flex-col gap-20 p-6 md:p-12">
                    <div className="flex flex-col gap-5">
                        <div className="w-full max-w-[800px]">
                            <span className={`${theme.primaryText} text-4xl md:text-6xl font-bold font-['Instrument_Sans'] leading-tight`}>Technical </span>
                            <span className="text-foreground transition-colors duration-300 text-4xl md:text-6xl font-bold font-['Instrument_Sans'] leading-tight"> Precision</span>
                        </div>
                        <div>
                            <span className="text-muted transition-colors duration-300 text-base font-bold font-['Instrument_Sans'] leading-4">Tech Focus:</span>
                            <span className="text-muted transition-colors duration-300 text-base font-normal font-['Instrument_Sans'] leading-4"> UI Kit Development + Responsive Tailwind Architecture.</span>
                        </div>
                    </div>

                    <div className="w-full flex flex-col md:flex-row gap-10">
                        <div className="flex-1 flex flex-col gap-5">
                            <div className="text-foreground transition-colors duration-300 text-3xl font-semibold font-['Instrument_Sans'] leading-8">
                                Design Engineering
                            </div>
                            <div className="text-muted transition-colors duration-300 text-base font-normal font-['Instrument_Sans'] leading-6">
                                I built a custom UI kit to ensure consistency across the entire supplement catalog. This allowed for rapid prototyping of new landing pages while maintaining a cohesive "Medical Grade" brand identity.
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-5">
                            <div className="text-foreground transition-colors duration-300 text-3xl font-semibold font-['Instrument_Sans'] leading-8">
                                Performance & Clarity
                            </div>
                            <div className="text-muted transition-colors duration-300 text-base font-normal font-['Instrument_Sans'] leading-6">
                                Using Tailwind CSS, I ensured that high-resolution product imagery (essential for trust) didn't compromise loading times. Whitespace was strategically used to let the health products breathe.
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- OUTCOME --- */}
                <div className={`w-full p-6 md:p-20 ${theme.primaryBg} rounded-[40px] backdrop-blur-[5px] flex flex-col gap-20`}>
                    <div className="text-center text-white text-5xl md:text-7xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[70px]">
                        Project Impact
                    </div>
                    <div className="text-center text-white text-2xl md:text-3xl font-normal font-['Instrument_Sans'] leading-10 opacity-90">
                        The redesign provided Neumaprotect with a robust digital storefront capable of competing with major wellness brands.
                    </div>

                    <div className="flex flex-col md:flex-row gap-10 justify-center">
                        <div className="flex-1 flex flex-col gap-5 max-w-sm mx-auto text-center">
                            <div className="text-white text-3xl font-semibold font-['Instrument_Sans'] leading-8">
                                Scalability
                            </div>
                            <div className="text-zinc-100 text-base font-normal font-['Instrument_Sans'] leading-6">
                                The Design System was built to easily incorporate new supplement formulas into the existing catalog without visual friction.
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-5 max-w-sm mx-auto text-center">
                            <div className="text-white text-3xl font-semibold font-['Instrument_Sans'] leading-8">
                                Trust Validation
                            </div>
                            <div className="text-zinc-100 text-base font-normal font-['Instrument_Sans'] leading-6">
                                User testing during the UX phase confirmed that the new clinical aesthetic increased perceived product legitimacy by 40%.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default Neumaprotect;