const PROJECTS = [
    {
        title: "Project One",
        description: "A comprehensive solution for managing complex workflows and team collaboration.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        link: "#",
    },
    {
        title: "Project Two",
        description: "An AI-powered dashboard providing real-time analytics and predictive insights.",
        tags: ["React", "Python", "Cloud"],
        link: "#",
    },
    {
        title: "Project Three",
        description: "A secure and efficient platform for digital asset management and distribution.",
        tags: ["Node.js", "PostgreSQL", "Docker"],
        link: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 sm:py-32 scroll-mt-1">
            <div className="border-t border-zinc-200 pt-16 dark:border-zinc-800">
                <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                    01. Projects
                </span>
                <h2 className="mb-12 font-serif text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-7xl">
                    Featured <span className="italic text-zinc-400 dark:text-zinc-600">work.</span>
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {PROJECTS.map((project, index) => (
                        <div key={index} className="group relative rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-black dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-white">
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="rounded-md bg-zinc-100 px-2 py-1 text-[10px] font-medium uppercase tracking-wider dark:bg-zinc-800">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <a href={project.link} className="absolute inset-0" aria-label={`View ${project.title}`}></a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
