"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import JournalCard from "@/components/Journal/JournalCard";
import {
    journalEntries,
    getJournalEntriesByCategory,
    journalCategories,
    type JournalCategory,
} from "@/data/journals";

function JournalsContent() {
    const searchParams = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState<JournalCategory | "all">("all");
    const [filteredEntries, setFilteredEntries] = useState(journalEntries);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
        const filtered = getJournalEntriesByCategory(selectedCategory);
        setFilteredEntries(filtered);
    }, [selectedCategory]);

    if (!hasMounted) return null;

    return (
        <div className="relative min-h-screen bg-white selection:bg-zinc-100 dark:bg-black dark:selection:bg-zinc-900">
            <Navbar />

            <main className="mx-auto max-w-7xl px-6 pt-32 sm:px-10">
                {/* Back Navigation */}
                <Link
                    href="/about"
                    className="group mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
                        ←
                    </span>
                    Back to Biography
                </Link>

                {/* Hero Section - Magazine Style */}
                <div className="mb-20">
                    <div className="flex flex-col gap-4">
                        <span className="font-mono text-xs font-bold tracking-[0.4em] text-zinc-400 dark:text-zinc-600">
                            LIFELONG_ARCHIVE // 05
                        </span>
                        <h1 className="font-serif text-6xl font-light tracking-tighter text-zinc-900 dark:text-zinc-100 sm:text-9xl">
                            The <span className="italic text-zinc-400 dark:text-zinc-600">Journals.</span>
                        </h1>
                    </div>

                    <p className="mt-12 max-w-2xl font-sans text-lg font-light leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-2xl">
                        A curation of personal milestones, travel diaries, and pivotal moments
                        captured through the lens of time.
                    </p>
                </div>

                {/* Cinematic Category Filters */}
                <div className="mb-16 border-y border-zinc-200 py-8 dark:border-zinc-800">
                    <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
                        {journalCategories.map((category) => (
                            <button
                                key={category.value}
                                onClick={() => setSelectedCategory(category.value)}
                                className={`group flex items-center gap-3 transition-all duration-500`}
                            >
                                <span className={`h-1.5 w-1.5 rounded-full bg-zinc-900 transition-all duration-500 dark:bg-zinc-100 ${selectedCategory === category.value ? 'opacity-100 scale-125' : 'opacity-0 scale-50 group-hover:opacity-40'}`} />
                                <span className={`font-mono text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${selectedCategory === category.value ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-400 hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-400'}`}>
                                    {category.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Masonry-Like Grid */}
                <div className="columns-1 gap-8 space-y-8 pb-32 md:columns-2 lg:columns-3">
                    {filteredEntries.map((entry, index) => (
                        <div key={entry.id} className="break-inside-avoid">
                            <JournalCard
                                entry={entry}
                                index={index}
                            />
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredEntries.length === 0 && (
                    <div className="py-32 text-center">
                        <p className="font-serif text-2xl italic text-zinc-400 dark:text-zinc-600">
                            The archive for this era is currently empty.
                        </p>
                    </div>
                )}
            </main>

            {/* Global Grainy Background Filter (Subtle) */}
            <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] mix-blend-overlay dark:opacity-[0.05]">
                <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            <footer className="py-16 text-center">
                <div className="flex flex-col items-center gap-4">
                    <span className="font-mono text-[10px] tracking-[0.4em] text-zinc-300 dark:text-zinc-800 uppercase">
                        End of Archive // v1.0
                    </span>
                    <p className="text-xs text-zinc-500 dark:text-zinc-600">
                        © {new Date().getFullYear()} Vivek Dhamanemath. All stories reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default function JournalsPage() {
    return (
        <Suspense fallback={
            <div className="flex h-screen items-center justify-center bg-white dark:bg-black">
                <div className="font-mono text-xs tracking-widest text-zinc-400 animate-pulse uppercase">
                    Loading Archive...
                </div>
            </div>
        }>
            <JournalsContent />
        </Suspense>
    );
}
