// sections/Header.tsx
'use client';

import { useNavActive } from "@/app/hooks/useNavActive";
import Link from "next/link";

export const Header = () => {
  const sections = ['home', 'projects', 'about', 'contact'];
  const activeSection = useNavActive(sections);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-2 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {sections.map((section) => (
          <Link
            key={section}
            href={`#${section}`}
            className={`nav-item px-4 py-2 rounded-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              activeSection === section 
                ? 'bg-white text-gray-900' 
                : 'hover:bg-white/20'
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </nav>
    </div>
  );
};