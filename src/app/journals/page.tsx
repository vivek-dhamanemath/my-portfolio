"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import TimelineEntry from "@/components/Journal/TimelineEntry";
import TimelineChapter from "@/components/Journal/TimelineChapter";
import JournalSpotlight from "@/components/Journal/JournalSpotlight";
import {
    getJournalEntriesByCategory,
    journalCategories,
    timelineChapters,
    getEntriesByYear,
    type JournalCategory,
    type JournalEntry,
} from "@/components/Journal/journals";

function JournalsContent() {
    const searchParams = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState<JournalCategory | "all">("all");
    const [filteredEntries, setFilteredEntries] = useState<JournalEntry[]>([]);
    const [activeEntry, setActiveEntry] = useState<JournalEntry | null>(null);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
        const filtered = getJournalEntriesByCategory(selectedCategory);
        setFilteredEntries(filtered);
    }, [selectedCategory]);

    if (!hasMounted) return null;

    // Group entries by year for timeline view
    const entriesByYear = getEntriesByYear();
    const years = Array.from(entriesByYear.keys()).sort((a, b) => b - a);

    return (
        <div className="relative min-h-screen bg-[#F9F6F0] selection:bg-zinc-200 dark:bg-[#1a1612] dark:selection:bg-zinc-800">
            <Navbar />

            {/* Spotlight Modal */}
            <JournalSpotlight
                entry={activeEntry}
                onClose={() => setActiveEntry(null)}
            />

            <main className="mx-auto max-w-6xl px-6 pt-32 sm:px-10">

                {/* Back Navigation */}
                <Link
                    href="/"
                    className="group mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-300"
                >
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
                        ←
                    </span>
                    Back to Home
                </Link>

                {/* Hero Section - Vintage Journal Style */}
                <div className="mb-24">
                    <div className="flex flex-col gap-8">
                        {/* Main Title */}
                        <h1 className="font-serif text-7xl font-light leading-[0.95] tracking-tighter text-zinc-900 dark:text-zinc-100 sm:text-9xl">
                            The{" "}
                            <span className="italic text-zinc-500 dark:text-zinc-600">
                                Journals
                            </span>
                            .
                        </h1>

                        {/* Subtitle */}
                        <p className="max-w-2xl font-serif text-xl font-light italic leading-relaxed text-zinc-600 dark:text-zinc-500 sm:text-2xl">
                            A chronological collection of memories, milestones, and moments
                            that shaped the journey—preserved like Polaroids in a leather-bound diary.
                        </p>
                    </div>
                </div>

                {/* Category Filters */}
                <div className="mb-20 border-y border-zinc-300 py-8 dark:border-zinc-700">
                    <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
                        {journalCategories.map((category) => (
                            <button
                                key={category.value}
                                onClick={() => setSelectedCategory(category.value)}
                                className="group flex items-center gap-3 transition-all duration-500"
                            >
                                <span
                                    className={`h-1.5 w-1.5 rounded-full bg-zinc-900 transition-all duration-500 dark:bg-zinc-100 ${selectedCategory === category.value
                                        ? 'scale-125 opacity-100'
                                        : 'scale-50 opacity-0 group-hover:opacity-40'
                                        }`}
                                />
                                <span
                                    className={`font-mono text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${selectedCategory === category.value
                                        ? 'text-zinc-900 dark:text-zinc-100'
                                        : 'text-zinc-500 hover:text-zinc-700 dark:text-zinc-600 dark:hover:text-zinc-400'
                                        }`}
                                >
                                    {category.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Timeline Entries */}
                <div className="pb-32">
                    {years.map((year, yearIndex) => {
                        const yearEntries = entriesByYear.get(year) || [];
                        const chapter = timelineChapters.find(c => c.year === year);

                        // Filter by selected category
                        const filteredYearEntries = selectedCategory === 'all'
                            ? yearEntries
                            : yearEntries.filter(e => e.category === selectedCategory);

                        if (filteredYearEntries.length === 0) return null;

                        return (
                            <div key={year}>
                                {/* Chapter Divider */}
                                {chapter && (
                                    <TimelineChapter
                                        chapter={chapter}
                                        isFirst={yearIndex === 0}
                                    />
                                )}

                                {/* Timeline Entries */}
                                <div className="mt-16">
                                    {filteredYearEntries.map((entry, entryIndex) => (
                                        <div key={entry.id} className="scroll-mt-32">
                                            <TimelineEntry
                                                entry={entry}
                                                index={entryIndex}
                                                isLeft={entryIndex % 2 === 0}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Empty State */}
                {filteredEntries.length === 0 && (
                    <div className="py-32 text-center">
                        <p className="font-serif text-2xl italic text-zinc-500 dark:text-zinc-600">
                            No entries found for this category.
                        </p>
                    </div>
                )}
            </main>

            {/* Vintage Paper Texture Overlay */}
            <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] mix-blend-overlay dark:opacity-[0.06]">
                <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            {/* Footer */}
            <footer className="border-t border-zinc-300 py-16 text-center dark:border-zinc-700">
                <div className="flex flex-col items-center gap-4">
                    {/* Ornamental Divider */}
                    <div className="flex items-center gap-4">
                        <div className="h-[1px] w-8 bg-zinc-400 dark:bg-zinc-600" />
                        <div className="h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                        <div className="h-[1px] w-8 bg-zinc-400 dark:bg-zinc-600" />
                    </div>

                    <p className="font-serif text-xs italic text-zinc-600 dark:text-zinc-600">
                        © {new Date().getFullYear()} Vivek Dhamanemath. All stories reserved.
                    </p>
                </div>
            </footer>
        </div >
    );
}

export default function JournalsPage() {
    return (
        <Suspense
            fallback={
                <div className="flex h-screen items-center justify-center bg-[#F9F6F0] dark:bg-[#1a1612]">
                    <div className="animate-pulse font-mono text-xs uppercase tracking-widest text-zinc-500">
                        Loading Archive...
                    </div>
                </div>
            }
        >
            <JournalsContent />
        </Suspense>
    );
}
