"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ExperienceCard from "@/components/Experience/ExperienceCard";
import { experiences, getExperiencesByType, type ExperienceType } from "@/components/Experience/experiences";

const experienceTypes = [
    { label: "All Roles", value: "all" },
    { label: "Full-time", value: "Full-time" as ExperienceType },
    { label: "Internship", value: "Internship" as ExperienceType },
];

export default function ExperiencePage() {
    const [selectedType, setSelectedType] = useState<ExperienceType | "all">("all");
    const [filteredExperiences, setFilteredExperiences] = useState(experiences);
    const [displayCount, setDisplayCount] = useState(0);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
        const filtered = getExperiencesByType(selectedType);
        setFilteredExperiences(filtered);

        // Animated counter effect
        let start = 0;
        const end = filtered.length;
        const duration = 1000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setDisplayCount(end);
                clearInterval(timer);
            } else {
                setDisplayCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [selectedType]);

    if (!hasMounted) return null;

    return (
        <div className="relative min-h-screen bg-white selection:bg-zinc-100 dark:bg-black dark:selection:bg-zinc-900">
            <Navbar />
            <main className="mx-auto max-w-5xl px-6 pt-32 sm:px-10">
                {/* Back Navigation */}
                <Link
                    href="/#experience"
                    className="group mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
                        ←
                    </span>
                    Back to home
                </Link>

                {/* Hero Section */}
                <div className="mb-16">
                    <h1 className="font-serif text-5xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-8xl">
                        Professional{" "}
                        <span className="italic text-zinc-400 dark:text-zinc-600">
                            Experience
                        </span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
                        A comprehensive timeline of my professional journey, showcasing roles, achievements, and the technologies I've worked with.
                    </p>
                    <div className="mt-6 flex items-baseline gap-3">
                        <span className="font-mono text-4xl font-bold tabular-nums text-zinc-900 dark:text-zinc-100 sm:text-6xl">
                            {displayCount}
                        </span>
                        <span className="text-lg font-light text-zinc-500 dark:text-zinc-400">
                            professional roles
                        </span>
                    </div>
                </div>

                {/* Type Filters */}
                <div className="mb-12 border-y border-zinc-200 py-6 dark:border-zinc-800">
                    <div className="flex flex-wrap gap-3">
                        {experienceTypes.map((type) => (
                            <button
                                key={type.value}
                                onClick={() => setSelectedType(type.value as ExperienceType | "all")}
                                className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${selectedType === type.value
                                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black"
                                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800"
                                    }`}
                            >
                                {type.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Experience Timeline */}
                <div className="relative pb-24">
                    {filteredExperiences.map((experience) => (
                        <ExperienceCard
                            key={experience.id}
                            experience={experience}
                            isDetailed={true}
                        />
                    ))}
                </div>

                {/* Empty State */}
                {filteredExperiences.length === 0 && (
                    <div className="py-24 text-center">
                        <p className="text-lg font-light text-zinc-500 dark:text-zinc-400">
                            No experience found in this category.
                        </p>
                    </div>
                )}
            </main>

            <footer className="py-12 text-center text-xs text-zinc-500 dark:text-zinc-600">
                © {new Date().getFullYear()} Vivek Dhamanemath. Built with Next.js &
                Tailwind.
            </footer>
        </div>
    );
}
