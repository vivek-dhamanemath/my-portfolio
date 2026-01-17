"use client";

import React from "react";
import { JournalEntry } from "./journals";

interface JournalSpotlightProps {
    entry: JournalEntry | null;
    onClose: () => void;
}

export default function JournalSpotlight({ entry, onClose }: JournalSpotlightProps) {
    if (!entry) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-white/90 p-4 backdrop-blur-xl dark:bg-black/90 sm:p-12">
            <button
                onClick={onClose}
                className="absolute top-8 right-8 z-[210] flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 transition-transform hover:scale-110 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
            >
                <span className="text-2xl font-light">×</span>
            </button>

            <div className="relative grid h-full w-full max-w-7xl animate-in fade-in zoom-in duration-700 grid-cols-1 gap-12 sm:grid-cols-2">
                {/* Visual Content */}
                <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900">
                    <img
                        src={entry.photos[0].url}
                        alt={entry.title}
                        className="h-full w-full object-cover transition-transform duration-[2s] hover:scale-110"
                    />

                    {/* Era Badge in Modal */}
                    <div className="absolute bottom-10 left-10">
                        <span className="rounded-full bg-white/20 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                            {entry.era}
                        </span>
                    </div>
                </div>

                {/* Narrative Content */}
                <div className="flex flex-col justify-center gap-8">
                    <div>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-600">
                            {entry.date} // {entry.location}
                        </span>
                        <h2 className="mt-4 font-serif text-5xl font-light tracking-tighter text-zinc-900 dark:text-zinc-100 sm:text-7xl">
                            {entry.title.split(' ').map((word, i) => (
                                <React.Fragment key={i}>
                                    {i % 2 === 1 ? <span className="italic text-zinc-400 dark:text-zinc-600">{word} </span> : word + ' '}
                                </React.Fragment>
                            ))}
                        </h2>
                    </div>

                    <p className="max-w-md font-sans text-lg font-light leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
                        {entry.description}
                    </p>

                    <div className="h-[1px] w-12 bg-zinc-200 dark:bg-zinc-800" />

                    <div className="flex items-center gap-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100">
                            Category:
                        </span>
                        <span className="rounded-full border border-zinc-200 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                            {entry.category}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
