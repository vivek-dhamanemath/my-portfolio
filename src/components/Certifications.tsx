"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import CertificationCard from "./Certifications/CertificationCard";
import { getFeaturedCertifications } from "./Certifications/certifications";

export default function Certifications() {
    const [isVisible, setIsVisible] = useState(true); // Default to true to ensure visibility during debugging
    const [hasMounted, setHasMounted] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        setHasMounted(true);
        // We still use the observer for the scroll animation, but we set initial isVisible to true if preferred
        // or keep it false and ensure the observer works.
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const featuredCertifications = getFeaturedCertifications();

    if (!hasMounted) return null;

    return (
        <section
            id="certifications"
            ref={sectionRef}
            className="py-24 sm:py-32 scroll-mt-1"
        >
            <div className="border-t border-zinc-200 pt-16 dark:border-zinc-800">
                {/* Section Header */}
                <div className="mb-16">
                    <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                        02. Certifications
                    </span>
                    <h2 className="font-serif text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-7xl">
                        Continuous{" "}
                        <span className="italic text-zinc-400 dark:text-zinc-600">
                            learning.
                        </span>
                    </h2>
                    <p className="mt-8 max-w-2xl font-sans text-lg font-light leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
                        Industry-recognized certifications that validate expertise across
                        cloud architecture, modern frameworks, and full-stack development.
                    </p>
                </div>

                {/* Certifications Editorial Grid */}
                <div
                    className={`relative grid grid-cols-1 gap-6 transition-all duration-1000 md:grid-cols-2 md:gap-8 lg:grid-cols-3 ${isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-12 opacity-0"
                        }`}
                >
                    {featuredCertifications.map((certification, index) => (
                        <CertificationCard
                            key={certification.id}
                            certification={certification}
                            index={index}
                            isLandingPage={true}
                        />
                    ))}
                </div>

                {/* View All Link */}
                <div className={`mt-20 flex justify-center transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <Link
                        href="/certifications"
                        className="group relative flex flex-col items-center gap-4"
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 transition-colors group-hover:text-zinc-900 dark:text-zinc-500 dark:group-hover:text-zinc-100">
                            Explore All Credentials
                        </span>
                        <div className="h-[1px] w-12 bg-zinc-200 transition-all duration-500 group-hover:w-24 group-hover:bg-zinc-900 dark:bg-zinc-800 dark:group-hover:bg-zinc-100" />
                        <span className="font-serif text-3xl italic text-zinc-300 transition-colors group-hover:text-zinc-500 dark:text-zinc-700 dark:group-hover:text-zinc-400">
                            Full Gallery →
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
