"use client";
import "../styles/components/projects.scss"
import {motion} from "motion/react";
import Link from 'next/link';

const latinTaxImg = '/assets/lta/01-banner.webp';
const ClaroImg = '/assets/claro/01-banner.webp';
const logoLatin = '/assets/logo-lta.png';
const logoClaro = '/assets/claro-de-luna-logo.png';

function Projects() {


  return (
    <motion.div
      initial={{ x: 3000 }}
      animate={{ x: 0 }}
      exit={{ x: 3000, opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <div className="grid grid-row-2 md:grid-row-1 md:grid-cols-2 gr h-screen">

            <div className="grid grid-rows-2">
                <Link href="/lta-tax" className="w-full bg-[#249480] px-20 py-7 h-full
              relative
            transition-all duration-700 inline-flex flex-col justify-center items-start gap-2.5">
                    <div className="transition-opacity duration-500 ease-in-out
                hover:opacity-100 opacity-0 w-full h-full z-0 bg-cover bg-center inset-0 absolute"
                         style={{ backgroundImage: `url(${latinTaxImg})` }}
                    ></div>
                    <div className="z-3">
                        <img className="h-14" src={logoLatin}/>
                        <div className="justify-start text-neutral-200 text-xl font-semibold font-['Instrument_Sans'] leading-10">LMS System Migration</div>
                    </div>
                </Link>

                <Link href="/neumaprotect" className="w-full bg-[#0891b2] px-20 py-7 h-full
              relative
            transition-all duration-700 inline-flex flex-col justify-center items-start gap-2.5">
                    <div className="transition-opacity duration-500 ease-in-out
                hover:opacity-100 opacity-0 w-full h-full z-0 bg-cover bg-center inset-0 absolute"
                    ></div>
                    <div className="z-3 flex flex-col items-start">
                        <h2 className="text-white text-3xl font-bold font-['Instrument_Sans'] mb-2 tracking-wide">NEUMAPROTECT</h2>
                        <div className="justify-start text-neutral-200 text-xl font-semibold font-['Instrument_Sans'] leading-10">Health & Wellness Platform</div>
                    </div>
                </Link>

            </div>

            <Link href="/claro-de-luna" className="w-full bg-[#00B2DF] px-20 py-7 h-full
              relative
            transition-all duration-700 inline-flex flex-col justify-center items-start gap-2.5">
                <div className="transition-opacity duration-500 ease-in-out
                hover:opacity-100 opacity-0 w-full h-full z-0 bg-cover bg-center inset-0 absolute"
                     style={{ backgroundImage: `url(${ClaroImg})` }}
                ></div>
                <div className="z-3">
                    <img className="h-14" src={logoClaro}/>
                    <div className="justify-start text-neutral-200 text-xl font-semibold font-['Instrument_Sans'] leading-10">E-commerce UX Modernization</div>
                </div>
            </Link>
        </div>


    </motion.div>
  )
}

export default Projects;