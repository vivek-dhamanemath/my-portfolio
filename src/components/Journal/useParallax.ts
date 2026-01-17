"use client";

import { useEffect, useRef, useState } from "react";

interface ParallaxOptions {
    speed?: number; // Parallax speed multiplier (0-1, where 0.5 = half speed)
    disabled?: boolean; // Disable on mobile for performance
}

export function useParallax({ speed = 0.5, disabled = false }: ParallaxOptions = {}) {
    const elementRef = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        if (disabled || !elementRef.current) return;

        const handleScroll = () => {
            if (!elementRef.current) return;

            const rect = elementRef.current.getBoundingClientRect();
            const elementTop = rect.top;
            const elementHeight = rect.height;
            const windowHeight = window.innerHeight;

            // Only calculate parallax when element is in viewport
            if (elementTop < windowHeight && elementTop + elementHeight > 0) {
                const scrolled = windowHeight - elementTop;
                const parallaxOffset = scrolled * speed;
                setOffset(parallaxOffset);
            }
        };

        // Initial calculation
        handleScroll();

        // Throttled scroll listener for performance
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [speed, disabled]);

    return { elementRef, offset };
}
