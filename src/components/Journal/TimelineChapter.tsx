"use client";

import React from "react";
import type { TimelineChapter } from "./journals";

interface TimelineChapterProps {
    chapter: TimelineChapter;
    isFirst?: boolean;
}

export default function TimelineChapterComponent({ chapter, isFirst = false }: TimelineChapterProps) {
    return (
        <div className={`relative ${isFirst ? 'mt-0' : 'mt-32'} mb-20`}>
            {/* Ink Blot Transition (not on first chapter) */}
            {!isFirst && (
                <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                    <div className="h-8 w-8 rounded-full bg-zinc-900/10 blur-sm dark:bg-zinc-100/10" />
                </div>
            )}

            {/* Chapter Container */}
            <div className="relative border-y border-zinc-200 py-12 dark:border-zinc-800">
                {/* Ornamental Top Line */}
                <div className="mx-auto mb-8 flex w-full max-w-md items-center justify-center gap-4">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-zinc-300 to-transparent dark:via-zinc-700" />
                    <div className="h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-zinc-300 to-transparent dark:via-zinc-700" />
                </div>

                {/* Year Badge */}
                <div className="mb-4 text-center">
                    <span className="inline-block rounded-full border border-zinc-300 bg-white px-6 py-2 font-mono text-sm font-bold tracking-widest text-zinc-900 dark:border-zinc-700 dark:bg-black dark:text-zinc-100">
                        {chapter.year}
                    </span>
                </div>

                {/* Chapter Title */}
                <h2 className="mb-4 text-center font-serif text-5xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl">
                    {chapter.title}
                </h2>

                {/* Chapter Description */}
                <p className="mx-auto max-w-2xl text-center font-serif text-lg italic leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {chapter.description}
                </p>

                {/* Ornamental Bottom Line */}
                <div className="mx-auto mt-8 flex w-full max-w-md items-center justify-center gap-4">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-zinc-300 to-transparent dark:via-zinc-700" />
                    <div className="h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-zinc-300 to-transparent dark:via-zinc-700" />
                </div>
            </div>

            {/* Torn Paper Edge Effect */}
            {!isFirst && (
                <div className="absolute -top-1 left-0 right-0 h-2 bg-gradient-to-b from-white/50 to-transparent dark:from-black/50"
                    style={{
                        clipPath: 'polygon(0 0, 2% 100%, 4% 0, 6% 100%, 8% 0, 10% 100%, 12% 0, 14% 100%, 16% 0, 18% 100%, 20% 0, 22% 100%, 24% 0, 26% 100%, 28% 0, 30% 100%, 32% 0, 34% 100%, 36% 0, 38% 100%, 40% 0, 42% 100%, 44% 0, 46% 100%, 48% 0, 50% 100%, 52% 0, 54% 100%, 56% 0, 58% 100%, 60% 0, 62% 100%, 64% 0, 66% 100%, 68% 0, 70% 100%, 72% 0, 74% 100%, 76% 0, 78% 100%, 80% 0, 82% 100%, 84% 0, 86% 100%, 88% 0, 90% 100%, 92% 0, 94% 100%, 96% 0, 98% 100%, 100% 0)'
                    }}
                />
            )}
        </div>
    );
}
