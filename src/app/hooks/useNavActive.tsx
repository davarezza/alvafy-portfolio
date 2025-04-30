'use client';

import { useEffect, useState } from 'react';

export const useNavActive = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) {
        console.warn(`Section with id "${id}" not found!`);
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { 
          threshold: 0.3, // Lebih sensitif
          rootMargin: '-100px 0px 0px 0px' // Kompensasi fixed header
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, [sectionIds]);

  return activeSection;
};