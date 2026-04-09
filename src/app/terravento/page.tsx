"use client";
import { motion } from "motion/react"
// Asumiendo que usarás el mismo logo o uno de Terravento, si no tienes logo svg, puedes comentar la línea de img
// import logoTerravento from '../assets/logo-terravento.png'

function Terravento() {

    // Asegúrate de guardar tus imágenes (Inicio.jpg, Terrazas.jpg, etc.) en esta ruta
    const images = [
        '/assets/terravento/banner-terravento.webp',
        '/assets/terravento/terravento-logo.webp',
        '', '', '', '', ''
    ];

    // Mapeo sugerido de índices de imágenes (ajusta según el orden en que se carguen):
    // images[0] -> Inicio.jpg (Hero)
    // images[1] -> DetalleTerrazas.jpg (Goal)
    // images[2] -> Mi Perfil.jpg (Challenge Background)
    // images[3] -> InformaciónGeneral.jpg (Solution 1)
    // images[4] -> Terrazas.jpg (Solution 2)
    // images[5] -> Calendario.jpg (Solution 3)

    return (
        <motion.div
            initial={{x: 3000}}
            animate={{x: 0}}
            exit={{x: 3000, opacity: 0}}
            transition={{
                duration: .2,
                ease: "easeOut"
            }}>

            <div className="w-full max-w-[1691px] mx-auto p-4 md:p-12 flex flex-col justify-start items-center gap-10 overflow-hidden">

                {/* HERO SECTION */}
                <div
                    className="w-full min-h-[80vh] h-[70vh] relative h-auto py-7 bg-center bg-cover bg-black/50 rounded-[40px] flex flex-col justify-between items-center overflow-hidden"
                    // SUGERENCIA: Usar 'Inicio.jpg' aquí
                    style={{ backgroundImage: `url('${images[0]}')` }}>
                    <div className="bg-[rgba(0,0,0,.4)] absolute inset-0 w-full h-full z-0"></div>

                    <div className="w-full px-6 md:px-10 flex z-10 flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-center md:text-left">
                            <span className="text-white text-lg md:text-xl font-semibold font-['Instrument_Sans'] leading-10">UX/UI Lead </span>
                            <span className="text-white text-lg md:text-xl font-normal font-['Instrument_Sans'] leading-10">& </span>
                            <span className="text-white text-lg md:text-xl font-semibold font-['Instrument_Sans'] leading-10">Full-Stack </span>
                            <span className="text-white text-lg md:text-xl font-normal font-['Instrument_Sans'] leading-10">Developer</span>
                        </div>
                        <div className="text-center md:text-left">
                            <span className="text-white text-base md:text-lg font-normal font-['Instrument_Sans'] leading-8">Stack:</span>
                            <span className="text-white text-lg md:text-xl font-semibold font-['Instrument_Sans'] leading-10"> Laravel, Vue.js, Bootstrap</span>
                        </div>
                    </div>

                    <div className="flex flex-col z-10 justify-center items-center gap-2.5 px-4 text-center">
                        {/* <img className="w-full max-w-[300px] h-auto object-contain" src={logoTerravento}/> */}
                        <h1 className="text-white text-5xl md:text-7xl font-bold font-['Instrument_Sans'] tracking-tight">TERRAVENTO</h1>
                        <div className="text-gray-200 text-2xl md:text-3xl font-semibold font-['Instrument_Sans'] leading-tight md:leading-[54px]">
                            The "Airbnb" for Event Venues
                        </div>
                    </div>

                    <div className="w-full px-6 z-10 md:px-10 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-4">
                        <div className="text-muted transition-colors duration-300 text-xl md:text-3xl font-medium font-['Instrument_Sans'] leading-tight md:leading-[54px]">
                            Centralizing the connection between<br/>hosts and party planners.
                        </div>
                        <div className="text-white text-3xl md:text-4xl font-semibold font-['Instrument_Sans'] leading-tight md:leading-[72px]">
                            2024
                        </div>
                    </div>
                </div>

                {/* PROJECT OVERVIEW */}
                <div className="w-full min-h-[400px] px-6 py-10 md:px-20 md:py-14 bg-gradient-to-br from-[#EF5949] to-[#C03525] rounded-[40px] backdrop-blur-[5px] flex flex-col lg:flex-row justify-between items-center gap-10 overflow-hidden">
                    <div className="flex-1 text-white text-5xl md:text-8xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[100px]">
                        Project Overview
                    </div>
                    <div className="flex-1 w-full lg:w-auto p-6 md:px-12 rounded-[40px] backdrop-blur-[50px] flex justify-center items-center bg-white/10">
                        <div className="text-center text-neutral-100 text-base md:text-lg font-normal font-['Instrument_Sans'] leading-7">
                            Terravento is a platform designed to simplify the search and reservation of terraces in Guadalajara.
                            The market was fragmented; users had to search one by one, making the process tedious.
                            We built a centralized ecosystem where users can find the perfect venue, and owners can professionally manage their businesses.
                        </div>
                    </div>
                </div>

                {/* MY GOAL SECTION */}
                <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-10">
                    <div className="w-full lg:w-1/3 flex flex-col justify-center items-start gap-5">
                        <div className="justify-start">
                            <span className="text-foreground transition-colors duration-300 text-3xl font-semibold font-['Instrument_Sans'] leading-10">My</span>
                            <span className="text-[#EF5949] text-3xl font-bold font-['Instrument_Sans'] leading-10"> Role</span>
                        </div>
                        <div className="w-full text-muted transition-colors duration-300 text-lg font-normal font-['Instrument_Sans'] leading-7">
                            As the UX/UI Lead and Front-End Developer, my goal was to design a "Chill" and approachable brand identity, avoiding overly elegant stiffness.
                            Technically, I was tasked with creating an MVP that could handle complex booking logic across different business models.
                        </div>
                    </div>
                    {/* SUGERENCIA: Usar 'DetalleTerrazas.jpg' aquí para mostrar el producto final atractivo */}
                    <img className="w-full lg:w-2/3 h-auto min-h-[300px] object-cover rounded-[20px] shadow-[inset_3px_5px_23px_0px_rgba(0,0,0,0.25)]" src={images[1]}/>
                </div>

                {/* THE CHALLENGE */}
                <div className="w-full px-6 md:px-28 py-10 md:py-24 bg-gradient-to-br from-slate-800 to-slate-950 rounded-[40px] backdrop-blur-[5px] flex flex-col justify-center items-start gap-7 overflow-hidden">
                    <div className="w-full max-w-[586px] text-white text-4xl md:text-5xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[50px]">
                        The Challenge
                    </div>
                    <div className="text-neutral-200 text-lg font-normal font-['Instrument_Sans'] leading-7">
                        The main technical and design hurdle was the lack of standardization in how terrace owners managed their venues.
                    </div>

                    <div className="w-full flex flex-col lg:flex-row gap-5">
                        <div className="flex-1 px-7 py-5 bg-white/10 rounded-[20px] backdrop-blur-[275px] flex flex-col gap-2.5">
                            <div className="text-[#EF5949] text-lg font-semibold font-['Instrument_Sans'] leading-7">
                                Decentralized Data
                            </div>
                            <div className="text-muted transition-colors duration-300 text-base font-normal font-['Instrument_Sans'] leading-6">
                                There was no central database. We had to create a platform that incentivized owners to digitize their inventory.
                            </div>
                        </div>
                        <div className="flex-1 px-7 py-5 bg-white/10 rounded-[20px] backdrop-blur-[275px] flex flex-col gap-2.5">
                            <div className="text-[#EF5949] text-lg font-semibold font-['Instrument_Sans'] leading-7">
                                Diverse Business Rules
                            </div>
                            <div className="text-muted transition-colors duration-300 text-base font-normal font-['Instrument_Sans'] leading-6">
                                Every owner managed bookings differently. We had to abstract these rules into a flexible system (Laravel/Blade).
                            </div>
                        </div>
                        <div className="flex-1 px-7 py-5 bg-white/10 rounded-[20px] backdrop-blur-[275px] flex flex-col gap-2.5">
                            <div className="text-[#EF5949] text-lg font-semibold font-['Instrument_Sans'] leading-7">
                                Trust & Approachability
                            </div>
                            <div className="text-muted transition-colors duration-300 text-base font-normal font-['Instrument_Sans'] leading-6">
                                The UI needed to feel friendly and safe ("Chill" vibes) to encourage users to book through a new platform.
                            </div>
                        </div>
                    </div>

                    {/* SUGERENCIA: Usar 'Mi Perfil.jpg' para mostrar la complejidad del sistema pero limpio */}
                    <div className="w-full h-[400px] md:h-[600px] bg-top bg-cover px-6 py-5 bg-black/30 rounded-[40px] flex justify-center items-center overflow-hidden border border-white/10"
                         style={{ backgroundImage: `url('${images[2]}')` }}>
                    </div>
                </div>

                {/* UX SOLUTION SECTION */}
                <div className="w-full py-10 md:py-20 bg-card/20 transition-colors duration-300 rounded-[40px] backdrop-blur-[5px] flex flex-col gap-10 md:gap-20 p-4">
                    <div className="w-full max-w-[650px]">
                        <span className="text-foreground transition-colors duration-300 text-5xl md:text-7xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[70px]">THE </span>
                        <span className="text-[#EF5949] text-5xl md:text-7xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[70px]">ECOSYSTEM<br/></span>
                        <span className="text-foreground transition-colors duration-300 text-5xl md:text-7xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[70px]">SOLUTION</span>
                    </div>

                    {/* SOLUTION 1: Onboarding */}
                    <div className="w-full flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1 flex flex-col gap-5">
                            <div className="text-foreground transition-colors duration-300 text-3xl md:text-4xl font-semibold font-['Instrument_Sans'] leading-10">
                                Friendly Onboarding
                            </div>
                            <div className="text-muted transition-colors duration-300 text-base font-normal font-['Instrument_Sans'] leading-6">
                                We designed a dynamic form with tooltips to guide non-technical owners through the process of uploading their venue.
                                The clean UI reduces friction and ensures high-quality data entry.
                            </div>
                        </div>
                        {/* SUGERENCIA: Usar 'InformaciónGeneral.jpg' */}
                        <img className="w-full lg:w-1/2 h-auto rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)]" src={images[3]}/>
                    </div>

                    <div className="w-full max-w-2xl mx-auto h-0 outline outline-1 outline-offset-[-0.50px] outline-border transition-colors duration-300"></div>

                    {/* SOLUTION 2: Dashboard & Calendar */}
                    <div className="w-full flex flex-col-reverse lg:flex-row items-center gap-12">
                        {/* SUGERENCIA: Usar 'Calendario.jpg' o 'Terrazas.jpg' */}
                        <img className="w-full lg:w-1/2 h-auto rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)]" src={images[5]}/>
                        <div className="flex-1 flex flex-col gap-5">
                            <div className="text-foreground transition-colors duration-300 text-3xl md:text-4xl font-semibold font-['Instrument_Sans'] leading-10">
                                Management Center
                            </div>
                            <div className="text-muted transition-colors duration-300 text-base font-normal font-['Instrument_Sans'] leading-6">
                                The "Big Idea" was to give owners a reason to stay. We built a calendar and dashboard MVP allowing them
                                to centralize their business operations, not just receive bookings.
                            </div>
                        </div>
                    </div>

                    {/* SUGERENCIA: Usar 'Terrazas.jpg' para mostrar la lista de propiedades */}
                    <img className="w-full h-auto min-h-[300px] object-cover rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)]" src={images[4]} />
                </div>

                {/* TECH STACK */}
                <div className="w-full pt-5 pb-20 bg-card/40 transition-colors duration-300 rounded-[40px] backdrop-blur-[5px] flex flex-col gap-20 p-4">
                    <div className="flex flex-col gap-5">
                        <div className="w-full max-w-[586px]">
                            <span className="text-[#EF5949] text-5xl md:text-7xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[70px]">Tech</span>
                            <span className="text-foreground transition-colors duration-300 text-5xl md:text-7xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[70px]"> Implementation</span>
                        </div>
                        <div>
                            <span className="text-muted transition-colors duration-300 text-base font-bold font-['Instrument_Sans'] leading-4">Note:</span>
                            <span className="text-muted transition-colors duration-300 text-base font-normal font-['Instrument_Sans'] leading-4"> I worked directly with Laravel & Blade, integrating Vue components.</span>
                        </div>
                    </div>

                    <div className="w-full flex flex-col md:flex-row gap-10">
                        <div className="flex-1 flex flex-col gap-5">
                            <div className="text-foreground transition-colors duration-300 text-3xl font-semibold font-['Instrument_Sans'] leading-8">
                                Why Laravel + Vue?
                            </div>
                            <div className="text-muted transition-colors duration-300 text-base font-normal font-['Instrument_Sans'] leading-6">
                                We needed a robust backend (Laravel) to handle the complex booking logic and user roles, paired with Vue.js
                                to create interactive, reactive components for the search filters and calendar without reloading the page.
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-5">
                            <div className="text-foreground transition-colors duration-300 text-3xl font-semibold font-['Instrument_Sans'] leading-8">
                                Bootstrap & Styling
                            </div>
                            <div className="text-muted transition-colors duration-300 text-base font-normal font-['Instrument_Sans'] leading-6">
                                To align with the existing team workflow and ensure rapid MVP delivery, we utilized Bootstrap.
                                However, we customized the variables to achieve the specific "#EF5949" branding and the "Chill/Friendly" aesthetic.
                            </div>
                        </div>
                    </div>
                </div>

                {/* OUTCOME */}
                <div className="w-full p-6 md:p-20 bg-[#EF5949] rounded-[40px] backdrop-blur-[5px] flex flex-col gap-20">
                    <div className="text-center text-white text-5xl md:text-7xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[70px]">
                        The Outcome
                    </div>

                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="flex-1 flex flex-col gap-5 items-center text-center">
                            <div className="text-white text-6xl font-bold font-['Instrument_Sans'] leading-[80px]">
                                4,000+
                            </div>
                            <div className="text-zinc-100 text-xl font-medium font-['Instrument_Sans'] leading-6">
                                Active Users
                            </div>
                            <div className="text-zinc-200 text-base font-normal font-['Instrument_Sans'] leading-6">
                                Successfully validated the MVP as a primary method for finding venues in Guadalajara.
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-5 items-center text-center">
                            <div className="text-white text-6xl font-bold font-['Instrument_Sans'] leading-[80px]">
                                MVP
                            </div>
                            <div className="text-zinc-100 text-xl font-medium font-['Instrument_Sans'] leading-6">
                                Validated Product
                            </div>
                            <div className="text-zinc-200 text-base font-normal font-['Instrument_Sans'] leading-6">
                                Created a scalable database of terraces that didn't exist before.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default Terravento