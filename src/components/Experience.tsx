"use client";

import Link from "next/link";
import ExperienceCard from "./Experience/ExperienceCard";
import { getFeaturedExperiences } from "./Experience/experiences";

export default function Experience() {
    const featuredExperiences = getFeaturedExperiences(2);

    return (
        <section id="experience" className="py-24 sm:py-32 scroll-mt-1">
            <div className="border-t border-zinc-200 pt-16 dark:border-zinc-800">
                <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                    02. Experience
                </span>
                <h2 className="mb-12 font-serif text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-7xl">
                    Professional{" "}
                    <span className="italic text-zinc-400 dark:text-zinc-600">
                        Journey.
                    </span>
                </h2>

                {/* Timeline */}
                <div className="relative mb-12">
                    {featuredExperiences.map((experience) => (
                        <ExperienceCard
                            key={experience.id}
                            experience={experience}
                            isDetailed={false}
                        />
                    ))}
                </div>

                {/* View All Link */}
                <div className="flex justify-center">
                    <Link
                        href="/experience"
                        className="group relative flex flex-col items-center gap-4"
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 transition-colors group-hover:text-zinc-900 dark:text-zinc-500 dark:group-hover:text-zinc-100">
                            View Full Timeline
                        </span>
                        <div className="h-[1px] w-12 bg-zinc-200 transition-all duration-500 group-hover:w-24 group-hover:bg-zinc-900 dark:bg-zinc-800 dark:group-hover:bg-zinc-100" />
                        <span className="font-serif text-3xl italic text-zinc-300 transition-colors group-hover:text-zinc-500 dark:text-zinc-700 dark:group-hover:text-zinc-400">
                            Full Experience →
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
