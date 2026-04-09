"use client";

import { motion } from "motion/react"
import EnterAnimation from "@/components/animate/EnterAnimation";

function AboutMe() {

    return (


        <motion.div
            initial={{x: 3000}}
            animate={{x: 0}}
            exit={{x: 3000, opacity: 0}}
            transition={{
                duration: .2,
                ease: "easeOut"
            }}>

            <section className="flex flex-col lg:flex-row min-h-screen bg-background overflow-hidden transition-colors duration-300">

                <div className="flex-1 px-8 py-14 md:px-12 lg:px-24 flex flex-col gap-16">

                    <h1 className="flex flex-col md:flex-row justify-center md:justify-start gap-4 text-7xl md:text-8xl lg:text-8xl font-bold text-foreground tracking-tight leading-[0.9] transition-colors duration-300">
                        <EnterAnimation className="mr-5" tag="span" duration={.1}>
                            Design
                        </EnterAnimation>
                        <EnterAnimation className="mr-5" tag="span" duration={.2}>
                            &
                        </EnterAnimation>
                        <EnterAnimation className="mr-5" tag="span" duration={.3}>
                            Code
                        </EnterAnimation>
                    </h1>

                    <div className="flex flex-col gap-10">

                        <div className="space-y-4">
                            <EnterAnimation tag="div" duration={.4} className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 bg-primary rounded-sm transition-colors duration-300"></div>
                                <h2 className="text-2xl font-normal text-foreground transition-colors duration-300">Who I Am</h2>
                            </EnterAnimation>
                            <EnterAnimation tag="p" duration={1} className="pl-6 text-muted text-base font-semibold leading-relaxed transition-colors duration-300">
                                UX/UI Designer and Front-End Developer focused on building clear, usable, and scalable
                                digital products.
                            </EnterAnimation>
                        </div>

                        <div className="space-y-4">
                            <EnterAnimation tag="div" duration={.5} className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 bg-primary rounded-sm transition-colors duration-300"></div>
                                <h2 className="text-2xl font-normal text-foreground transition-colors duration-300">What I Do</h2>
                            </EnterAnimation>
                            <EnterAnimation tag="p" duration={1.1} className="pl-6 text-muted text-base font-semibold leading-relaxed transition-colors duration-300">
                                I design user-centered interfaces and implement responsive web experiences, from concept
                                to production.
                            </EnterAnimation>
                        </div>

                        <EnterAnimation tag="div" duration={.6} className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 bg-primary rounded-sm transition-colors duration-300"></div>
                                <h2 className="text-2xl font-normal text-foreground transition-colors duration-300">My Approach</h2>
                            </div>
                            <EnterAnimation tag="p" duration={1.2} className="pl-6 text-muted text-base font-semibold leading-relaxed transition-colors duration-300">
                                I focus on clarity, usability, and accessibility, turning complex requirements into
                                intuitive user flows.
                            </EnterAnimation>
                        </EnterAnimation>

                        <div className="space-y-4">
                            <EnterAnimation tag="div" duration={.7} className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 bg-primary rounded-sm transition-colors duration-300"></div>
                                <h2 className="text-2xl font-normal text-foreground transition-colors duration-300">Experience Snapshot</h2>
                            </EnterAnimation>
                            <EnterAnimation tag="p" duration={1.2} className="pl-6 text-muted text-base font-semibold leading-relaxed transition-colors duration-300">
                                Experience working on SaaS platforms, e-commerce products, dashboards, and mobile-first
                                applications used by thousands of users.
                            </EnterAnimation>
                        </div>

                        <div className="space-y-4">
                            <EnterAnimation tag="div" duration={.8} className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 bg-primary rounded-sm transition-colors duration-300"></div>
                                <h2 className="text-2xl font-normal text-foreground transition-colors duration-300">Tools I Use</h2>
                            </EnterAnimation>
                            <EnterAnimation tag="p" duration={1.3} className="pl-6 text-muted text-base font-semibold leading-relaxed transition-colors duration-300">
                                Figma for UX/UI and prototyping, HTML, CSS, and JavaScript for implementation, with experience in modern frameworks and agile workflows.
                            </EnterAnimation>
                        </div>

                        <div className="space-y-4">
                            <EnterAnimation tag="div" duration={.9} className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 bg-primary rounded-sm transition-colors duration-300"></div>
                                <h2 className="text-2xl font-normal text-foreground transition-colors duration-300">How I Work</h2>
                            </EnterAnimation>
                            <EnterAnimation tag="p" duration={1.4} className="pl-6 text-muted text-base font-semibold leading-relaxed transition-colors duration-300">
                                I collaborate closely with designers, developers, and stakeholders, iterating quickly and aligning design decisions with business goals.
                            </EnterAnimation>
                        </div>

                        <div className="space-y-4">
                            <EnterAnimation tag="div" duration={1} className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 bg-primary rounded-sm transition-colors duration-300"></div>
                                <h2 className="text-2xl font-normal text-foreground transition-colors duration-300">Currently</h2>
                            </EnterAnimation>
                            <EnterAnimation tag="p" duration={1.5} className="pl-6 text-muted text-base font-semibold leading-relaxed transition-colors duration-300">
                                Currently working as a UX/UI Designer and Front-End Developer, open to remote and
                                international opportunities.
                            </EnterAnimation>
                        </div>

                    </div>
                </div>

                <aside
                    className="bg-card w-full lg:w-96 px-8 py-14 lg:pt-56 flex flex-col items-start lg:items-end gap-14 text-left lg:text-right border-l border-border transition-colors duration-300">

                    <div className="space-y-5">
                        <h3 className="text-muted text-sm font-semibold uppercase tracking-widest transition-colors duration-300">Education</h3>
                        <div className="space-y-4">
                            <div>
                                <EnterAnimation tag="p" duration={.5} className="text-foreground text-xl font-normal transition-colors duration-300">Animation Design</EnterAnimation>
                                <EnterAnimation tag="p" duration={.6} className="text-foreground/80 dark:text-foreground/70 text-base font-light transition-colors duration-300">Universidad Tecnologica de Mexico</EnterAnimation>
                            </div>
                            <div>
                                <EnterAnimation tag="p" duration={.7} className="text-foreground text-xl font-normal transition-colors duration-300">UX Design</EnterAnimation>
                                <EnterAnimation tag="p" duration={.8} className="text-foreground/80 dark:text-foreground/70 text-base font-light transition-colors duration-300">Google / Coursera</EnterAnimation>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <h3 className="text-muted text-sm font-semibold uppercase tracking-widest transition-colors duration-300">Experience</h3>
                        <div>
                            <EnterAnimation tag="p" duration={.9} className="text-foreground text-xl font-normal transition-colors duration-300">Nubir Estudio Digital</EnterAnimation>
                            <EnterAnimation tag="p" duration={1} className="text-foreground/80 dark:text-foreground/70 text-base font-light transition-colors duration-300">2023 / Currently</EnterAnimation>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <h3 className="text-muted text-sm font-semibold uppercase tracking-widest transition-colors duration-300">Projects</h3>
                        <div className="space-y-4">
                            <div>
                                <EnterAnimation tag="p" duration={1.1} className="text-foreground text-xl font-normal transition-colors duration-300">Nubitrack</EnterAnimation>
                                <EnterAnimation tag="p" duration={1.2} className="text-foreground/80 dark:text-foreground/70 text-base font-light transition-colors duration-300">Location App</EnterAnimation>
                            </div>
                            <div>
                                <EnterAnimation tag="p" duration={1.3} className="text-foreground text-xl font-normal transition-colors duration-300">Terravento</EnterAnimation>
                                <EnterAnimation tag="p" duration={1.4} className="text-foreground/80 dark:text-foreground/70 text-base font-light transition-colors duration-300">Booking</EnterAnimation>
                            </div>
                            <div>
                                <EnterAnimation tag="p" duration={1.5} className="text-foreground text-xl font-normal transition-colors duration-300">Jewerly</EnterAnimation>
                                <EnterAnimation tag="p" duration={1.6} className="text-foreground/80 dark:text-foreground/70 text-base font-light transition-colors duration-300">Ecommerce</EnterAnimation>
                            </div>
                        </div>
                    </div>

                </aside>
            </section>

        </motion.div>

    )
}

export default AboutMe
