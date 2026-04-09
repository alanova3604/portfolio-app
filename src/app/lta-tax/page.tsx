"use client";

import { motion } from "motion/react"
const logoLatin = '/assets/logo-lta.png';
function AboutMe() {



    const images = [
        '/assets/lta/01-banner.webp',
        '/assets/lta/02-dashboard.jpg',
        '/assets/lta/03-latintax.png',
        '/assets/lta/04-cursos.jpg',
        '/assets/lta/05-mis-cursos.jpg',
        '/assets/lta/06-navbar.png'
    ];

    return (


        <motion.div
            initial={{x: 3000}}
            animate={{x: 0}}
            exit={{x: 3000, opacity: 0}}
            transition={{
                duration: .2,
                ease: "easeOut"
            }}>

            <div
                className="w-full max-w-[1691px]  mx-auto p-4 md:p-12 flex flex-col justify-start items-center gap-10 overflow-hidden">

                <div
                    className="w-full min-h-[80vh] h-[70vh] relative h-auto py-7 bg-center bg-cover bg-black/50  rounded-[40px] flex flex-col justify-between items-center overflow-hidden"
                    style={{ backgroundImage: `url('${images[0]}')` }}>
                    <div className="bg-[rgba(0,0,0,.5)] absolute inset-0 w-full h-full z-0"></div>

                    <div className="w-full px-6 md:px-10 flex z-10 flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-center md:text-left">
                            <span
                                className="text-white text-lg md:text-xl font-semibold font-['Instrument_Sans'] leading-10">UX/UI </span>
                            <span
                                className="text-white text-lg md:text-xl font-normal font-['Instrument_Sans'] leading-10">Designer</span>
                            <span
                                className="text-white text-lg md:text-xl font-semibold font-['Instrument_Sans'] leading-10"> & Front-End </span>
                            <span
                                className="text-white text-lg md:text-xl font-normal font-['Instrument_Sans'] leading-10">Developer</span>
                        </div>
                        <div className="text-center md:text-left">
                            <span
                                className="text-white text-base md:text-lg font-normal font-['Instrument_Sans'] leading-8">Stack:</span>
                            <span
                                className="text-white text-lg md:text-xl font-semibold font-['Instrument_Sans'] leading-10"> Vue.js, Tailwind CSS, HTML5</span>
                        </div>
                    </div>

                    <div className="flex flex-col z-10 justify-center items-center gap-2.5 px-4 text-center">
                        <img className="w-full max-w-[300px] h-auto object-contain" src={logoLatin}/>
                        <div
                            className="text-gray-200 text-2xl md:text-3xl font-semibold font-['Instrument_Sans'] leading-tight md:leading-[54px]">Education
                            Platform Redesign
                        </div>
                    </div>

                    <div
                        className="w-full px-6 z-10 md:px-10 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-4">
                        <div
                            className="text-zinc-300 text-xl md:text-3xl font-medium font-['Instrument_Sans'] leading-tight md:leading-[54px]">A
                            Case Study in UX and Technical Innovation
                        </div>
                        <div
                            className="text-white text-3xl md:text-4xl font-semibold font-['Instrument_Sans'] leading-tight md:leading-[72px]">2026
                        </div>
                    </div>
                </div>

                <div
                    className="w-full min-h-[400px] px-6 py-10 md:px-20 md:py-14 bg-gradient-to-br from-teal-600 to-teal-800 rounded-[40px] backdrop-blur-[5px] flex flex-col lg:flex-row justify-between items-center gap-10 overflow-hidden">
                    <div
                        className="flex-1 text-white text-5xl md:text-8xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[100px]">Project
                        Overview
                    </div>
                    <div
                        className="flex-1 w-full lg:w-auto p-6 md:px-12 rounded-[40px] backdrop-blur-[50px] flex justify-center items-center bg-white/10">
                        <div
                            className="text-center text-neutral-200 text-base md:text-lg font-normal font-['Instrument_Sans'] leading-7">
                            LTA Academy provides professional certification courses for accountants. They approached us
                            with a platform built on WordPress that was struggling to scale. The reliance on plugins
                            created performance bottlenecks, and the interface was confusing for students trying to
                            navigate between purchasing courses and studying them.
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-10">
                    <div className="w-full lg:w-1/3 flex flex-col justify-center items-start gap-5">
                        <div className="justify-start">
                            <span
                                className="text-foreground transition-colors duration-300 text-3xl font-semibold font-['Instrument_Sans'] leading-10">My</span>
                            <span
                                className="text-teal-600 text-3xl font-bold font-['Instrument_Sans'] leading-10"> Goal</span>
                        </div>
                        <div className="w-full text-muted transition-colors duration-300 text-lg font-normal font-['Instrument_Sans'] leading-7">
                            My Goal was to migrate the ecosystem to a custom Vue.js architecture, separating the
                            marketing landing page from the student learning platform.
                        </div>
                    </div>
                    <img
                        className="w-full lg:w-2/3 h-auto min-h-[300px] object-cover rounded-[20px] shadow-[inset_3px_5px_23px_0px_rgba(0,0,0,0.25)]"
                        src={images[1]}/>
                </div>

                <div
                    className="w-full px-6 md:px-28 py-10 md:py-24 bg-gradient-to-br from-purple-800 to-violet-950 rounded-[40px] backdrop-blur-[5px] flex flex-col justify-center items-start gap-7 overflow-hidden">
                    <div
                        className="w-full max-w-[586px] text-white text-4xl md:text-5xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[50px]">The
                        Challenge
                    </div>
                    <div className="text-neutral-200 text-lg font-normal font-['Instrument_Sans'] leading-7">The
                        original WordPress site combined the storefront and the classroom into one messy interface.
                        Users faced three critical pain points:
                    </div>

                    <div className="w-full flex flex-col lg:flex-row gap-5">
                        <div
                            className="flex-1 px-7 py-5 bg-card/70 transition-colors duration-300 rounded-[20px] backdrop-blur-[275px] flex flex-col gap-2.5">
                            <div
                                className="text-teal-600 text-lg font-semibold font-['Instrument_Sans'] leading-7">Confusing
                                Navigation:
                            </div>
                            <div
                                className="text-muted transition-colors duration-300 text-base font-normal font-['Instrument_Sans'] leading-6">Students
                                couldn't distinguish between courses they owned ("My Courses") and courses available for
                                purchase ("Catalog").
                            </div>
                        </div>
                        <div
                            className="flex-1 px-7 py-5 bg-card/70 transition-colors duration-300 rounded-[20px] backdrop-blur-[275px] flex flex-col gap-2.5">
                            <div className="text-teal-600 text-lg font-semibold font-['Instrument_Sans'] leading-7">High
                                Friction
                            </div>
                            <div
                                className="text-muted transition-colors duration-300 text-base font-normal font-['Instrument_Sans'] leading-6">There
                                was no clear "Start Course" path.
                            </div>
                        </div>
                        <div
                            className="flex-1 px-7 py-5 bg-card/70 transition-colors duration-300 rounded-[20px] backdrop-blur-[275px] flex flex-col gap-2.5">
                            <div
                                className="text-teal-600 text-lg font-semibold font-['Instrument_Sans'] leading-7">Technical
                                Limitations
                            </div>
                            <div className="text-muted transition-colors duration-300 text-base font-normal font-['Instrument_Sans'] leading-6">To
                                properly support live events and create a more flexible user experience, we moved away
                                from a theme-based CMS.
                            </div>
                        </div>
                    </div>

                    <div
                        className="w-full h-[400px] md:h-[773px] bg-center px-6 py-5 bg-black/30 rounded-[40px] flex justify-center items-center overflow-hidden"
                        style={{ backgroundImage: `url('${images[2]}')` }}>
                        <div
                            className="text-center text-foreground transition-colors duration-300/20 text-4xl md:text-8xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[100px]">Previous
                            Platform
                        </div>
                    </div>
                </div>

                <div
                    className="w-full py-10 md:py-20 bg-card/20 transition-colors duration-300 rounded-[40px] backdrop-blur-[5px] flex flex-col gap-10 md:gap-20 p-4">
                    <div className="w-full max-w-[586px]">
                        <span
                            className="text-foreground transition-colors duration-300 text-5xl md:text-7xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[70px]">THE </span>
                        <span
                            className="text-teal-600 text-5xl md:text-7xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[70px]">UX<br/></span>
                        <span
                            className="text-foreground transition-colors duration-300 text-5xl md:text-7xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[70px]">SOLUTION</span>
                    </div>

                    <div className="w-full flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1 flex flex-col gap-5">
                            <div
                                className="text-foreground transition-colors duration-300 text-3xl md:text-4xl font-semibold font-['Instrument_Sans'] leading-10">The
                                "Command Center" Dashboard
                            </div>
                            <div className="text-muted transition-colors duration-300 text-base font-normal font-['Instrument_Sans'] leading-6">I
                                moved away from a vertical scrolling site to a layout with a persistent Left Sidebar.
                                This gave users quick access to their account, certificates, and library from anywhere.
                            </div>
                        </div>
                        <img className="w-full max-w-3/4  h-full object-cover rounded-[20px]" src={images[5]}/>
                    </div>

                    <div
                        className="w-full max-w-2xl mx-auto h-0 outline outline-1 outline-offset-[-0.50px] outline-border transition-colors duration-300"></div>

                    <div className="w-full flex flex-col-reverse lg:flex-row items-center gap-12">
                        <img
                            className="w-full lg:w-1/2 h-auto rounded-[20px] shadow-[inset_0px_4px_40px_0px_rgba(0,0,0,0.25)]"
                            src={images[4]}/>
                        <div className="flex-1 flex flex-col gap-5">
                            <div
                                className="text-foreground transition-colors duration-300 text-3xl md:text-4xl font-semibold font-['Instrument_Sans'] leading-10">Restructuring
                                the "Student Journey"
                            </div>
                            <div className="text-muted transition-colors duration-300 text-base font-normal font-['Instrument_Sans'] leading-6">
                                We created two distinct views to solve the navigation confusion:<br/><br/>
                                <span className="text-neutral-700 font-semibold">My Courses:</span> Focused on progress.
                                Cards feature prominent progress bars and a "Resume" button.<br/>
                                <span className="text-neutral-700 font-semibold">Explore (Catalog):</span> Focused on
                                discovery. We added advanced filtering (by Topic, Certification, Price).
                            </div>
                        </div>
                    </div>

                    <img className="w-full h-auto min-h-[300px] object-cover rounded-[20px] shadow-[inset_0px_4px_40px_0px_rgba(0,0,0,0.25)]"
                         src={images[3]} />

                    <div
                        className="w-full max-w-2xl mx-auto h-0 outline outline-1 outline-offset-[-0.50px] outline-border transition-colors duration-300"></div>
                </div>

                <div
                    className="w-full pt-5 pb-20 bg-card/20 transition-colors duration-300 rounded-[40px] backdrop-blur-[5px] flex flex-col gap-20 p-4">
                    <div className="flex flex-col gap-5">
                        <div className="w-full max-w-[586px]">
                            <span
                                className="text-teal-600 text-5xl md:text-7xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[70px]">Front-End</span>
                            <span
                                className="text-foreground transition-colors duration-300 text-5xl md:text-7xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[70px]"> Implementation</span>
                        </div>
                        <div>
                            <span
                                className="text-muted transition-colors duration-300 text-base font-bold font-['Instrument_Sans'] leading-4">Note:</span>
                            <span className="text-muted transition-colors duration-300 text-base font-normal font-['Instrument_Sans'] leading-4"> I was responsible for the client-side architecture and visual implementation.</span>
                        </div>
                    </div>

                    <div
                        className="text-muted transition-colors duration-300 text-3xl md:text-4xl font-semibold font-['Instrument_Sans'] leading-10">I
                        chose Vue.js combined with Tailwind CSS for this migration.
                    </div>

                    <div className="w-full flex flex-col md:flex-row gap-10">
                        <div className="flex-1 flex flex-col gap-5">
                            <div className="text-foreground transition-colors duration-300 text-3xl font-semibold font-['Instrument_Sans'] leading-8">Why
                                Vue.js?
                            </div>
                            <div
                                className="text-muted transition-colors duration-300 text-base font-normal font-['Instrument_Sans'] leading-6">It
                                allowed for an SPA (Single Page Application) feel. Students can switch between the
                                Dashboard and a Video Lesson instantly, without the page reloads typical of WordPress.
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-5">
                            <div className="text-foreground transition-colors duration-300 text-3xl font-semibold font-['Instrument_Sans'] leading-8">Why
                                Tailwind?
                            </div>
                            <div
                                className="text-muted transition-colors duration-300 text-base font-normal font-['Instrument_Sans'] leading-6">It
                                allowed me to build the complex "Dashboard Grid" layout that pre-made WordPress themes
                                couldn't handle, ensuring pixel-perfect consistency with my Figma designs.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full p-6 md:p-20 bg-teal-600 rounded-[40px] backdrop-blur-[5px] flex flex-col gap-20">
                    <div
                        className="text-center text-white text-5xl md:text-7xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[70px]">The
                        Outcome
                    </div>
                    <div
                        className="text-center text-white text-3xl md:text-4xl font-semibold font-['Instrument_Sans'] leading-10">The
                        migration transformed LTA Academy from a "website" into a true EdTech Platform.
                    </div>

                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="flex-1 flex flex-col gap-5">
                            <div
                                className="text-white text-3xl font-semibold font-['Instrument_Sans'] leading-8">Clarity
                            </div>
                            <div className="text-zinc-100 text-base font-normal font-['Instrument_Sans'] leading-6">The
                                separation of "Sales" and "Study" environments reduced user confusion.
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-5">
                            <div
                                className="text-white text-3xl font-semibold font-['Instrument_Sans'] leading-8">Engagement
                            </div>
                            <div className="text-zinc-100 text-base font-normal font-['Instrument_Sans'] leading-6"> The
                                visual progress tracking in the new dashboard encourages students to complete their
                                certifications.
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-5">
                            <div
                                className="text-white text-3xl font-semibold font-['Instrument_Sans'] leading-8">Flexibility
                            </div>
                            <div className="text-zinc-100 text-base font-normal font-['Instrument_Sans'] leading-6">The
                                client can now manage event banners dynamically without breaking the layout.
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div className="w-full py-10 bg-card/20 transition-colors duration-300 rounded-[40px] backdrop-blur-[5px] flex flex-col gap-10 p-4">*/}
                {/*    <div*/}
                {/*        className="text-teal-600 text-5xl md:text-7xl font-bold font-['Instrument_Sans'] leading-tight md:leading-[70px]">GALLERY*/}
                {/*    </div>*/}

                {/*    <div className="w-full flex flex-col lg:flex-row gap-6">*/}
                {/*        <div className="flex-1 flex flex-col gap-6">*/}
                {/*            <img className="w-full h-auto object-cover rounded-[20px]"*/}
                {/*                 src="https://placehold.co/834x322"/>*/}
                {/*            <div className="flex flex-col md:flex-row gap-6">*/}
                {/*                <div className="flex-1 flex flex-col gap-5">*/}
                {/*                    <img className="w-full h-auto object-cover rounded-[20px]"*/}
                {/*                         src="https://placehold.co/510x266"/>*/}
                {/*                    <img className="w-full h-auto object-cover rounded-[20px]"*/}
                {/*                         src="https://placehold.co/510x266"/>*/}
                {/*                </div>*/}
                {/*                <img className="w-full md:w-72 h-auto object-cover rounded-[20px]"*/}
                {/*                     src="https://placehold.co/300x553"/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="flex-1 flex flex-col gap-6">*/}
                {/*            <div className="flex flex-col md:flex-row gap-6">*/}
                {/*                <img className="flex-1 w-full h-auto object-cover rounded-[20px]"*/}
                {/*                     src="https://placehold.co/405x284"/>*/}
                {/*                <img className="flex-1 w-full h-auto object-cover rounded-[20px]"*/}
                {/*                     src="https://placehold.co/405x284"/>*/}
                {/*            </div>*/}
                {/*            <img className="w-full h-auto object-cover rounded-[20px]"*/}
                {/*                 src="https://placehold.co/834x284"/>*/}
                {/*            <div className="flex flex-col md:flex-row gap-6">*/}
                {/*                <img className="flex-1 w-full h-auto object-cover rounded-[20px]"*/}
                {/*                     src="https://placehold.co/405x284"/>*/}
                {/*                <img className="flex-1 w-full h-auto object-cover rounded-[20px]"*/}
                {/*                     src="https://placehold.co/405x284"/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>


        </motion.div>

    )
}

export default AboutMe
