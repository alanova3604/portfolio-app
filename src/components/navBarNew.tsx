"use client";
import {Icon} from "@iconify/react";
// In Next.js, images in 'public' can be referenced from the root '/'
const Photo = "/assets/photo.jpg";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

function NavBarNew() {
    const pathname = usePathname();
    const [openNav, setOpenNav] = useState(false);

    const toggleNav = () => setOpenNav(!openNav);

    useEffect(() => {
        setOpenNav(false);
    }, [pathname]);

    const getLinkClass = (path: any) => {
        return pathname === path
            ? "text-foreground font-bold"
            : "text-muted hover:text-foreground";
    };

    return (
        <div className={`py-4 px-6 flex justify-between items-center bg-background
         lg:flex-col lg:h-screen lg:w-[250px] lg:sticky lg:top-0 lg:shrink-0
         lg:border-r lg:border-border transition-colors duration-300
         `}>

            <button onClick={toggleNav} className={`group cursor-pointer h-10 w-10 rounded-lg z-20 ${openNav ? 'active' : ''} 
                lg:hidden
            `}>
                <div className="grid justify-items-center gap-1.5">
                    <span className="h-1 w-8 rounded-full bg-foreground transition group-[.active]:rotate-45 group-[.active]:translate-y-2.5"></span>
                    <span className="h-1 w-8 rounded-full bg-foreground group-[.active]:scale-x-0 transition"></span>
                    <span className="h-1 w-8 rounded-full bg-foreground group-[.active]:-rotate-45 group-[.active]:-translate-y-2.5"></span>
                </div>
            </button>


            <nav
                className={`absolute top-0 bg-background py-20 px-7 transition-all duration-500 flex flex-col gap-1 h-screen z-10 ${openNav ? 'left-0 w-screen ' : 'left-[-1000px] w-fit'}
    lg:static lg:py-10 lg:px-0 lg:h-auto lg:bg-transparent`}
            >
                {/* Agregamos 'inline-block' y cambiamos pl-5 por translate-x */}
                <Link className={`text-lg p-3 transition-all duration-300 hover:translate-x-3 inline-block ${getLinkClass("/")}
     lg:text-xl`}
                      href='/'>Home</Link>

                <Link className={`text-lg p-3 transition-all duration-300 hover:translate-x-3 inline-block ${getLinkClass("/about-me")}
     lg:text-xl`}
                      href='/about-me'>About Me</Link>

                <Link className={`text-lg p-3 transition-all duration-300 hover:translate-x-3 inline-block ${getLinkClass("/contact")}
     lg:text-xl`}
                      href='/contact'>Contact</Link>
            </nav>

            <div className="mt-auto flex flex-col lg:items-center gap-6 pb-4">
                
                <div className="flex items-center gap-3 relative">
                    <div className="photo shrink-0">
                        <img className='w-[40px] h-[40px] max-w-[40px] rounded-full' src={Photo} alt="Alan Valdez"/>
                    </div>
                    <div className="flex items-center gap-0 transition-opacity duration-300">
                        <span className='hidden'>Alan Valdez</span>
                        <Icon className="text-blue-600 text-3xl mt-[25px] ml-[-25px]" icon="bitcoin-icons:verify-filled"/>
                    </div>
                </div>
            </div>

        </div>
);
}

export default NavBarNew;
