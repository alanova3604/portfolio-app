"use client";
import '../styles/components/navbar.scss'
const Photo = "/assets/photo.jpg";
import {Icon} from "@iconify/react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

function NavBar({ openProjects }: any) {
    const pathname = usePathname();

    // Mantenemos tu estado, pero que en Desktop (lg) sea ignorado por el layout fijo
    const [openNav, setOpenNav] = useState(true);

    useEffect(() => {
        setOpenNav(openProjects);
    }, [openProjects]);

    const toggleNav = () => setOpenNav(!openNav);

    const getLinkClass = (path: any) => {
        return pathname === path
            ? "text-black font-bold"
            : "text-gray-500 hover:text-black-400";
    };

    return (
        /* Mantenemos tus 100vh, tus paddings de 62px y 69px */
        <div className={`transition-all duration-400 sticky top-0 flex flex-col h-[100vh] py-[20px] px-[20px] lg:py-[62px] lg:px-[50px] border-r border-gray-100 bg-white z-50 navbar
            ${openNav ? "w-full md:w-[300px]" : "w-[100px] lg:w-[300px]"} `}>

            {/* BOTÓN: Solo aparece si está en modo "cerrado" o en móvil */}
            <button className="lg:hidden w-fit h-fit mb-10" onClick={toggleNav}>
                <Icon className="text-black text-5xl" icon={openNav ? "ic:round-close" : "ic:round-menu"} />
            </button>

            {/* NAV: Recuperamos tus fuentes y transiciones de hover pl-5 */}
            <nav className={`flex flex-col gap-1 text-[20px] transition-all duration-400 origin-left whitespace-nowrap
                ${openNav
                ? "opacity-100 visible scale-x-100"
                : "opacity-0 invisible scale-x-0 lg:opacity-100 lg:visible lg:scale-100" // En LG siempre visible
            }`}>

                <Link className={`pl-0 p-3 hover:pl-5 transition-all duration-400 ${getLinkClass("/")}`} href='/'>Home</Link>
                <Link className={`pl-0 p-3 hover:pl-5 transition-all duration-400 ${getLinkClass("/about-me")}`} href='/about-me'>About Me</Link>
                <Link className={`pl-0 p-3 hover:pl-5 transition-all duration-400 ${getLinkClass("/contact")}`} href='/contact'>Contact</Link>
            </nav>

            {/* PERFIL: Abajo con tus tamaños originales */}
            <div className="mt-auto flex items-center gap-3 relative">
                <div className="photo shrink-0">
                    <img className='w-[40px] h-[40px] max-w-[40px] rounded-full' src={Photo} alt="Alan Valdez" />
                </div>
                {/* El nombre desaparece en móvil si está cerrado, pero en LG siempre se ve */}
                <div className={`flex items-center gap-0 transition-opacity duration-300
                    ${openNav ? "opacity-100" : "opacity-0 lg:opacity-100"}`}>
                    <span className='text-[18px] font-semibold whitespace-nowrap'>Alan Valdez</span>
                    <Icon className="text-blue-600 text-3xl mt-[3px]" icon="bitcoin-icons:verify-filled" />
                </div>
            </div>
        </div>
    );
}

export default NavBar;
