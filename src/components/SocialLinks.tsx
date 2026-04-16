"use client";

import { Icon } from "@iconify/react";

const SocialLinks = () => {
  const socialItems = [
    { label: "GitHub", href: "https://github.com/alanvalcala", icon: "line-md:github-loop" },
    { label: "Figma", href: "https://figma.com/", icon: "solar:figma-bold-duotone" },
  ];

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="h-16 px-3 py-2 bg-white/10 rounded-[30px] backdrop-blur-2xl flex items-center gap-1 shadow-xl">
        {socialItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 group"
            title={item.label}
          >
            <Icon icon={item.icon} className="text-2xl transition-transform group-hover:scale-110" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
