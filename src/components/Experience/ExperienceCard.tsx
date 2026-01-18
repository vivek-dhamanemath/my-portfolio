import { Experience, isCurrentRole } from "./experiences";
import Image from "next/image";

interface ExperienceCardProps {
    experience: Experience;
    isDetailed?: boolean;
}

export default function ExperienceCard({ experience, isDetailed = false }: ExperienceCardProps) {
    const isCurrent = isCurrentRole(experience);

    return (
        <div className="group relative">
            {/* Timeline Connector */}
            <div className="absolute left-0 top-0 flex h-full w-12 items-start justify-center">
                {/* Vertical Line */}
                <div className="absolute top-6 h-full w-[2px] bg-zinc-200 dark:bg-zinc-800" />

                {/* Timeline Dot */}
                <div className={`relative z-10 mt-6 flex h-4 w-4 items-center justify-center rounded-full border-2 ${isCurrent
                    ? "border-zinc-900 bg-zinc-900 dark:border-zinc-100 dark:bg-zinc-100"
                    : "border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-950"
                    }`}>
                    {isCurrent && (
                        <div className="h-2 w-2 animate-pulse rounded-full bg-white dark:bg-zinc-950" />
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="ml-12 pb-12">
                <div className="rounded-xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:border-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-100">
                    {/* Header */}
                    <div className="mb-4 flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <div className="mb-2 flex items-center gap-2">
                                {isCurrent && (
                                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                                        Current
                                    </span>
                                )}
                                <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
                                    {experience.type}
                                </span>
                            </div>

                            <h3 className="mb-1 font-serif text-xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-2xl">
                                {experience.role}
                            </h3>

                            <div className="mb-2 flex flex-wrap items-center gap-2 text-sm">
                                <a
                                    href={experience.companyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-zinc-700 transition-colors hover:text-zinc-900 hover:underline dark:text-zinc-300 dark:hover:text-zinc-100"
                                >
                                    {experience.company}
                                </a>
                                {experience.location && (
                                    <>
                                        <span className="text-zinc-400">•</span>
                                        <span className="text-zinc-500 dark:text-zinc-500">{experience.location}</span>
                                    </>
                                )}
                            </div>

                            <p className="text-xs text-zinc-500 dark:text-zinc-500">
                                {experience.duration}
                            </p>
                        </div>

                        {/* Company Logo */}
                        {experience.logo && (
                            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
                                <Image
                                    src={experience.logo}
                                    alt={experience.company}
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                        )}
                    </div>

                    {/* Description (detailed view only) */}
                    {isDetailed && (
                        <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                            {experience.description}
                        </p>
                    )}

                    {/* Achievements */}
                    {isDetailed ? (
                        <ul className="mb-4 space-y-2">
                            {experience.achievements.map((achievement, index) => (
                                <li key={index} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    <span className="mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                                    <span className="flex-1">{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                            {experience.achievements[0]}
                        </p>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-md bg-zinc-100 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
