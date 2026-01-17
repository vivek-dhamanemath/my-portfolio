import React from "react";
import type { JournalEntry } from "./journals";

interface TimelineSpineProps {
    entries: JournalEntry[];
    activeIndex: number;
    onEntryClick: (index: number) => void;
}

export default function TimelineSpine({ entries, activeIndex, onEntryClick }: TimelineSpineProps) {
    return (
        <div className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1 lg:flex xl:left-12">
            <div className="relative flex flex-col items-center gap-4">
                {/* Continuous Line Background */}
                <div className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 bg-zinc-200 dark:bg-zinc-800" />

                {/* Progress Line */}
                <div
                    className="absolute left-1/2 top-0 w-[2px] -translate-x-1/2 bg-zinc-900 transition-all duration-500 dark:bg-zinc-100"
                    style={{ height: `${(activeIndex / (entries.length - 1 || 1)) * 100}%` }}
                />

                {entries.map((entry, index) => {
                    const isActive = index === activeIndex;
                    const isPast = index <= activeIndex;

                    return (
                        <button
                            key={entry.id}
                            onClick={() => onEntryClick(index)}
                            className="group relative flex items-center justify-center p-2 outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 rounded-full"
                            aria-label={`Scroll to ${entry.title}`}
                        >
                            {/* Label Tooltip (Hover) */}
                            <span className="absolute left-10 w-max origin-left scale-0 rounded-md bg-zinc-900 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white opacity-0 shadow-xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-100 dark:text-zinc-900">
                                {entry.year} • {entry.title}
                            </span>

                            {/* Dot */}
                            <div
                                className={`relative z-10 rounded-full border-2 transition-all duration-300 ${isPast
                                    ? 'border-zinc-900 bg-zinc-900 dark:border-zinc-100 dark:bg-zinc-100'
                                    : 'border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900'
                                    } ${isActive ? 'h-4 w-4 scale-125' : 'h-3 w-3 hover:scale-110'}`}
                            />
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
