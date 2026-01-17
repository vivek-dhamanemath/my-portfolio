"use client";

import React, { useEffect, useRef, useState } from "react";
import type { JournalEntry } from "./journals";
import PhotoCarousel from "./PhotoCarousel";

interface TimelineEntryProps {
    entry: JournalEntry;
    index: number;
    isLeft: boolean; // Alternating layout
}

export default function TimelineEntry({ entry, index, isLeft }: TimelineEntryProps) {
    const [isVisible, setIsVisible] = useState(false);
    const entryRef = useRef<HTMLDivElement>(null);

    // Intersection Observer for reveal animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (entryRef.current) {
            observer.observe(entryRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={entryRef}
            className={`relative mb-24 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className={`flex flex-col gap-8 lg:flex-row lg:gap-16 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                {/* Photo Carousel Container */}
                <div className="group relative flex-1">
                    <PhotoCarousel
                        photos={entry.photos}
                        entryIndex={index}
                        title={entry.title}
                        date={entry.date}
                        location={entry.location}
                    />
                </div>

                {/* Content Container */}
                <div className={`flex flex-1 flex-col justify-center ${isLeft ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'}`}>
                    {/* Handwritten Note */}
                    {entry.handwrittenNote && (
                        <div
                            className={`mb-6 transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : `${isLeft ? 'translate-x-8' : '-translate-x-8'} opacity-0`
                                }`}
                            style={{ transitionDelay: `${index * 100 + 300}ms` }}
                        >
                            <p className="font-handwriting text-2xl text-zinc-600 dark:text-zinc-400">
                                "{entry.handwrittenNote}"
                            </p>
                        </div>
                    )}

                    {/* Location & Date */}
                    <div className="mb-4 flex items-center gap-3">
                        <div className="h-[1px] w-8 bg-zinc-300 dark:bg-zinc-700" />
                        <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
                            {entry.location} • {entry.date}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="mb-4 font-serif text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
                        {entry.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {entry.description}
                    </p>

                    {/* Category/Era Tag */}
                    <div className="inline-flex items-center gap-2">
                        <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                            {entry.era}
                        </span>
                    </div>


                </div>
            </div>
        </div >
    );
}
