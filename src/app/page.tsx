"use client";
import {Icon} from "@iconify/react";
import { motion } from "motion/react";
import EnterAnimation from "@/components/animate/EnterAnimation";
import Projects from "@/components/Projects";
import { useState } from "react";

function Home() {
    const [openProjects, setOpenProjects] = useState(false);

    return (
        <motion.div
            className="w-full h-full"
            initial={{ x: 3000 }}
            animate={{ x: 0 }}
            exit= {{ x: 3000, opacity: 0 }}
            transition={{
                duration: .2,
                ease: "easeOut"
            }}>

            {openProjects ? (
                <Projects />
            ) : (
                <div className="flex flex-col justify-between h-full min-h-[80vh] px-6 py-10 md:py-[65px] md:pl-[65px]">

                    <div>
                        <div className="text-[42px] sm:text-[60px] lg:text-[90px] xl:text-[100px] font-semibold leading-[1.1] md:leading-[1.2] tracking-tight text-foreground transition-colors duration-300">
                            <EnterAnimation className="inline-block" tag="span" duration={.1}>
                                Designing
                            </EnterAnimation>
                            {' '}
                            <EnterAnimation tag="span" duration={.2}>
                                intuitive
                            </EnterAnimation>
                            {' '}
                            <EnterAnimation tag="span" duration={.3}>
                                experiences
                            </EnterAnimation>
                            {' '}
                            <EnterAnimation tag="span" duration={.4}>
                                with
                            </EnterAnimation>
                            {' '}
                            <EnterAnimation tag="span" duration={.5}>
                                a
                            </EnterAnimation>
                            {' '}
                            <EnterAnimation tag="span" duration={.6}>
                                Front-end
                            </EnterAnimation>
                            {' '}
                            <EnterAnimation tag="span" duration={.7}>
                                vision.
                            </EnterAnimation>
                        </div>

                        <div className="text-sm md:text-[14px] my-6 md:my-5 text-muted font-medium transition-colors duration-300">
                            Stack: Vue.js 3 • Tailwind CSS • Figma • Laravel • React • Adobe
                        </div>

                        <div className="text-lg md:text-[20px] max-w-full md:max-w-[1120px] mt-2 leading-relaxed md:leading-[1.8] text-foreground/80 dark:text-foreground/70 transition-colors duration-300">
                            <EnterAnimation tag="div" duration={.8}>
                                I’m Alan Alcalá, a UX Designer and Front-End Developer focused on creating digital products that are functional,
                            </EnterAnimation>
                            <EnterAnimation tag="div" duration={.9}>
                                aesthetic, and easy to use. Explore my projects to see how I transform ideas into interactive, user-centered experiences.
                            </EnterAnimation>
                        </div>
                    </div>

                    <div className="mt-12 md:mt-auto">
                        <EnterAnimation tag="div" duration={1.1}>
                            <motion.button
                                onClick={() => setOpenProjects(true)}
                                className="text-2xl md:text-[40px] text-primary font-bold flex items-center gap-3 md:gap-4 group cursor-pointer transition-colors duration-300"
                                whileHover={{ x: 10 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View my work
                                <Icon className="text-4xl md:text-5xl mt-[3px] transition-transform group-hover:rotate-45" icon="line-md:arrow-right-circle" />
                            </motion.button>
                        </EnterAnimation>
                    </div>
                </div>
            )}
        </motion.div>
    )
}

export default Home;
