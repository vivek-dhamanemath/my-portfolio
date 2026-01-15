"use client";

import { useState } from "react";
import type { JournalEntry } from "@/data/journals";

interface JournalCardProps {
    entry: JournalEntry;
    index: number;
}

export default function JournalCard({ entry, index }: JournalCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    // Dynamic sizing for masonry-like effect
    const heights = ["h-[300px]", "h-[450px]", "h-[380px]"];
    const cardHeight = heights[index % heights.length];

    return (
        <div
            className={`group relative w-full ${cardHeight} overflow-hidden rounded-xl bg-zinc-100 transition-all duration-700 dark:bg-zinc-900`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Base Image */}
            <img
                src={entry.image}
                alt={entry.title}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                onError={(e) => {
                    e.currentTarget.src = `https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop`; // Fallback to a cinematic tech-like image
                }}
            />

            {/* Cinematic Film Grain Overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-15 mix-blend-overlay dark:opacity-25">
                <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40"></div>
            </div>

            {/* Light Leak Effect on Hover */}
            <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-tr from-orange-500/0 via-red-500/0 to-yellow-500/0 opacity-0 transition-opacity duration-1000 group-hover:from-orange-500/10 group-hover:via-transparent group-hover:to-yellow-500/10 group-hover:opacity-100`}
            />

            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

            {/* "Journal Entry" Stamp - Fixed Top Left */}
            <div className="absolute left-6 top-6 z-10">
                <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-[9px] font-bold tracking-[0.3em] text-white/40">
                        ARCHIVE_JOURNAL
                    </span>
                    <span className="font-mono text-[10px] font-black tracking-widest text-white/90">
                        // {entry.era}
                    </span>
                </div>
            </div>

            {/* Bottom Content Area */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-6 translation-all duration-500 group-hover:translate-y-[-8px]">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="h-[1px] w-6 bg-white/30" />
                        <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                            {entry.location}
                        </span>
                    </div>

                    <h3 className="font-serif text-2xl font-light text-white sm:text-3xl">
                        {entry.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 max-w-xs text-xs font-light leading-relaxed text-zinc-300 opacity-0 transition-all duration-500 group-hover:opacity-100">
                        {entry.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                        <span className="font-mono text-[9px] tracking-widest text-white/50 uppercase">
                            {entry.date}
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[8px] uppercase tracking-tighter text-white/60">
                            {entry.category}
                        </span>
                    </div>
                </div>
            </div>

            {/* Interactive Focus Corner Detail */}
            <div className="absolute right-4 top-4 h-8 w-8 opacity-0 transition-all duration-700 group-hover:opacity-100">
                <div className="absolute right-0 top-0 h-[1px] w-4 bg-white/40" />
                <div className="absolute right-0 top-0 h-4 w-[1px] bg-white/40" />
            </div>
        </div>
    );
}
