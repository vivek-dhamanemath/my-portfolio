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
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-10">Education</h2>
            <div className="flex flex-col gap-12">
                {EDUCATION.map((edu, index) => (
                    <div key={index} className="flex gap-6 sm:gap-10">
                        <div className="flex-shrink-0">
                            <div className="h-20 w-20 overflow-hidden rounded-full border border-zinc-100 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 flex items-center justify-center">
                                <img
                                    src={edu.logo}
                                    alt={edu.school}
                                    className="h-14 w-14 object-contain transition-all duration-500"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 transition-transform duration-500 hover:translate-x-1">
                            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{edu.school}</h3>
                            <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{edu.degree}</p>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{edu.period}</p>
                            <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                                {edu.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
