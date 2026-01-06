const EDUCATION = [
    {
        school: "KLE Technological University Hubli, Karnataka",
        degree: "Master of Computer Applications",
        period: "2022 - 2024",
        description: "Specialized in Advanced Data Structures, Cloud Computing, and Enterprise Java. Graduated with distinction.",
        logo: "/about/KLE logo.jpg"
    },
    {
        school: "Rani Chennamma University Belagavi, Karnataka",
        degree: "Bachelor of Science (CS)",
        period: "2018 - 2021",
        description: "Focused on Software Engineering principles, Web Technologies, and Database Management Systems.",
        logo: "/about/RCU logo.jpg"
    }
];

export default function EducationSection() {
    return (
        <section>
            <h2 className="mb-10 text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Education</h2>

            <div className="relative ml-3 space-y-12 border-l-2 border-zinc-100 dark:border-zinc-800 md:ml-6">
                {EDUCATION.map((edu, index) => (
                    <div key={index} className="relative pl-8 md:pl-12">
                        {/* Timeline Marker (Logo) */}
                        <div className="absolute -left-[41px] top-0 flex h-20 w-20 items-center justify-center rounded-full bg-white ring-4 ring-white dark:bg-black dark:ring-black">
                            <img
                                src={edu.logo}
                                alt={edu.school}
                                className="h-full w-full rounded-full object-contain p-2 opacity-80"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                                {edu.period}
                            </span>
                            <h3 className="font-serif text-xl font-medium text-zinc-900 dark:text-zinc-100">
                                {edu.school}
                            </h3>
                            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                                {edu.degree}
                            </p>
                            <p className="mt-2 max-w-lg text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                                {edu.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
