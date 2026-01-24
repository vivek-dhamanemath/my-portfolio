import { getFeaturedProjects } from "@/data/projects";

const projects = getFeaturedProjects();

export default function Projects() {
    return (
        <section id="projects" className="py-24 sm:py-32 scroll-mt-1">
            <div className="border-t border-zinc-200 pt-16 dark:border-zinc-800">
                <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                    03. Projects
                </span>
                <h2 className="mb-12 font-serif text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-7xl">
                    Featured <span className="italic text-zinc-400 dark:text-zinc-600">work.</span>
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            className="group relative rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-900 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-100"
                        >
                            <div className="mb-2 flex items-center justify-between">
                                <span className="font-mono text-xs text-zinc-400">{project.year}</span>
                                <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
                                    {project.category}
                                </span>
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-zinc-900 transition-colors group-hover:text-zinc-600 dark:text-zinc-100 dark:group-hover:text-zinc-400">
                                {project.title}
                            </h3>
                            <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag: string) => (
                                    <span key={tag} className="rounded-md bg-zinc-100 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="absolute bottom-6 right-6 text-zinc-300 transition-all group-hover:translate-x-1 group-hover:text-zinc-900 dark:text-zinc-700 dark:group-hover:text-zinc-100">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
