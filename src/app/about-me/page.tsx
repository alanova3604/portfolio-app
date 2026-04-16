"use client";

import { m } from "framer-motion";
import { Icon } from "@iconify/react";
import GeometricPattern from "@/components/GeometricPattern";

function AboutMe() {
    const headline = "Strategy & Craft";

    const storySections = [
        {
            title: "The Mission",
            content: "I'm a Product Designer & Design Engineer dedicated to building seamless, scalable digital products that empower users."
        },
        {
            title: "The Scope",
            content: "I architect user-centered interfaces and implement high-performance web experiences from discovery to deployment."
        },
        {
            title: "Philosophy",
            content: "I treat design as a problem-solving engine. I build cohesive systems where every interaction serves both the user and the bottom line."
        },
        {
            title: "Expertise",
            content: "Deep experience in SaaS ecosystems, high-conversion e-commerce, and specialized interactive tools."
        },
        {
            title: "Strategic Partnership",
            content: "I bridge the gap between business objectives and technical possibility through rapid iteration and radical transparency."
        }
    ];

    return (
        <main className="relative h-screen w-full bg-gradient-to-br from-black to-zinc-900 overflow-hidden flex flex-col items-center justify-center pt-24 pb-12 px-6">
            {/* Background Elements */}
            <GeometricPattern />

            {/* Diagonal Glow Animation */}
            <m.div
                initial={{ top: "-20%", left: "-20%", opacity: 0 }}
                animate={{ 
                    top: ["-20%", "120%"], 
                    left: ["-20%", "120%"],
                    opacity: [0, 0.1, 0] 
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 3
                }}
                className="absolute w-[1200px] h-[1200px] bg-sky-500/5 rounded-full blur-[200px] pointer-events-none z-0"
            />

            <div className="relative z-10 w-full max-w-[1800px] h-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
                <header className="mb-10 lg:mb-16">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-slate-400 tracking-tight leading-tight">
                        {headline.split("").map((char, index) => (
                          <m.span
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
                          </m.span>
                        ))}
                    </h1>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 lg:gap-20 items-start max-h-[65vh] overflow-y-auto lg:overflow-visible pr-4 custom-scrollbar">
                    {/* CORE STORY */}
                    <div className="space-y-10 lg:space-y-12">
                        {storySections.map((section, index) => (
                            <m.div 
                                key={section.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: headline.length * 0.05 + 0.2 + index * 0.1 }}
                                className="space-y-2 lg:space-y-3"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(0,122,255,0.8)]" />
                                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{section.title}</h2>
                                </div>
                                <p className="text-lg lg:text-xl font-medium text-slate-200 leading-relaxed max-w-2xl">
                                    {section.content}
                                </p>
                            </m.div>
                        ))}
                    </div>

                    {/* DETAILS ASIDE */}
                    <aside className="space-y-12 lg:pl-12 border-t lg:border-t-0 lg:border-l border-white/5 pt-10 lg:pt-0">
                        <div className="space-y-6">
                            <m.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">Education</m.h3>
                            <div className="space-y-6">
                                <m.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="space-y-1">
                                    <p className="text-lg font-medium text-slate-200">Animation Design</p>
                                    <p className="text-sm text-slate-500">Uni. Tecnologica de Mexico</p>
                                </m.div>
                                <m.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="space-y-1">
                                    <p className="text-lg font-medium text-slate-200 text-primary flex items-center gap-2">
                                        UX Design
                                        <Icon icon="solar:verified-check-bold" className="text-lg" />
                                    </p>
                                    <p className="text-sm text-slate-500">Google / Coursera Professional</p>
                                </m.div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <m.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">Current Status</m.h3>
                            <m.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }} className="space-y-2">
                                <div className="flex items-center gap-2 text-emerald-400">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    <p className="text-lg font-medium">Available for Remote Opportunities</p>
                                </div>
                                <p className="text-sm text-slate-500">Open to international collaborations.</p>
                            </m.div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Bottom Decorative Text */}
            <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none select-none z-0 opacity-[0.03]">
                <span className="text-[10vw] font-medium tracking-tighter whitespace-nowrap">
                    Context & Intent.
                </span>
            </div>
        </main>
    );
}

export default AboutMe;
