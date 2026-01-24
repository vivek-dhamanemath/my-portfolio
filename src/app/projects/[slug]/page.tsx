import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";

// Helper component to render text with bold formatting
function FormattedText({ text }: { text: string }) {
    // Split by double line breaks for paragraphs
    const paragraphs = text.split('\n\n');

    return (
        <>
            {paragraphs.map((paragraph, i) => {
                // Check if it starts with a number (numbered list)
                const isNumbered = /^\d+\./.test(paragraph.trim());

                // Split by bold markers (we'll use :: as bold markers in data)
                const parts = paragraph.split(/\*\*(.*?)\*\*/g);

                return (
                    <p key={i} className={`text-zinc-600 dark:text-zinc-400 leading-relaxed ${isNumbered ? 'ml-0' : ''}`}>
                        {parts.map((part, j) =>
                            j % 2 === 1 ? <strong key={j} className="font-semibold text-zinc-900 dark:text-zinc-100">{part}</strong> : part
                        )}
                    </p>
                );
            })}
        </>
    );
}

export async function generateStaticParams() {
    return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="relative min-h-screen bg-white dark:bg-black">
            {/* Hero Section */}
            <section className="border-b border-zinc-200 dark:border-zinc-800">
                <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-24">
                    {/* Back Link */}
                    <Link
                        href="/#projects"
                        className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                        <svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Work
                    </Link>

                    {/* Meta */}
                    <div className="mb-6 flex items-center gap-4 text-sm">
                        <span className="font-mono text-zinc-400">{project.year}</span>
                        <span className="text-zinc-300 dark:text-zinc-700">·</span>
                        <span className="text-zinc-600 dark:text-zinc-400">{project.role}</span>
                    </div>

                    {/* Title */}
                    <h1 className="mb-6 font-serif text-5xl font-light leading-tight tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-7xl">
                        {project.tagline}
                    </h1>

                    {/* Stats */}
                    <div className="mt-12 grid grid-cols-3 gap-6">
                        {project.stats.map((stat, i) => (
                            <div key={i} className="border-l-2 border-zinc-900 pl-4 dark:border-zinc-100">
                                <div className="font-mono text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                                    {stat.value}
                                </div>
                                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                                    {stat.label}
                                </div>
                                {stat.context && (
                                    <div className="mt-0.5 text-xs text-zinc-400">
                                        {stat.context}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Links */}
                    {(project.links.demo || project.links.github) && (
                        <div className="mt-12 flex items-center gap-4">
                            {project.links.demo && (
                                <a
                                    href={project.links.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg border border-zinc-900 bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                                >
                                    View Demo
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            )}
                            {project.links.github && (
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-6 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900"
                                >
                                    GitHub
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </section>

            {/* Content */}
            <div className="mx-auto max-w-3xl px-6 sm:px-10">
                {/* Context */}
                <section className="py-16 sm:py-24">
                    <span className="mb-4 block font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        01. Context
                    </span>
                    <h2 className="mb-6 font-serif text-3xl font-light text-zinc-900 dark:text-zinc-100">
                        {project.context.heading}
                    </h2>
                    <div className="space-y-4 text-base">
                        <FormattedText text={project.context.body} />
                    </div>
                </section>

                {/* Challenge */}
                <section className="border-t border-zinc-100 py-16 dark:border-zinc-900 sm:py-24">
                    <span className="mb-4 block font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        02. Challenge
                    </span>
                    <h2 className="mb-6 font-serif text-3xl font-light text-zinc-900 dark:text-zinc-100">
                        {project.challenge.heading}
                    </h2>
                    <ul className="space-y-3">
                        {project.challenge.constraints.map((constraint, i) => (
                            <li key={i} className="flex gap-3 text-base text-zinc-600 dark:text-zinc-400">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                                <span>{constraint}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Approach */}
                <section className="border-t border-zinc-100 py-16 dark:border-zinc-900 sm:py-24">
                    <span className="mb-4 block font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        03. Approach
                    </span>
                    <h2 className="mb-6 font-serif text-3xl font-light text-zinc-900 dark:text-zinc-100">
                        {project.approach.heading}
                    </h2>
                    <div className="mb-12 space-y-4 text-base">
                        <FormattedText text={project.approach.body} />
                    </div>

                    {/* Technical Decisions */}
                    <div className="space-y-8">
                        {project.approach.decisions.map((decision, i) => (
                            <div key={i} className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 dark:border-zinc-800 dark:bg-zinc-900/30">
                                <h3 className="mb-3 text-base font-medium text-zinc-900 dark:text-zinc-100">
                                    {decision.question}
                                </h3>
                                <div className="mb-3 inline-block rounded-md bg-zinc-900 px-3 py-1 font-mono text-xs font-bold text-white dark:bg-zinc-100 dark:text-zinc-900">
                                    {decision.answer}
                                </div>
                                <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                                    {decision.rationale}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Solution */}
                <section className="border-t border-zinc-100 py-16 dark:border-zinc-900 sm:py-24">
                    <span className="mb-4 block font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        04. Solution
                    </span>
                    <h2 className="mb-6 font-serif text-3xl font-light text-zinc-900 dark:text-zinc-100">
                        What We Built
                    </h2>

                    {/* Architecture */}
                    <div className="mb-12 rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                        <h3 className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-zinc-500">
                            Architecture
                        </h3>
                        <div className="space-y-4 text-base">
                            <FormattedText text={project.solution.architecture} />
                        </div>
                    </div>

                    {/* Key Features */}
                    <h3 className="mb-6 text-xl font-medium text-zinc-900 dark:text-zinc-100">
                        Key Features
                    </h3>
                    <div className="space-y-6">
                        {project.solution.features.map((feature, i) => (
                            <div key={i}>
                                <h4 className="mb-2 text-base font-medium text-zinc-900 dark:text-zinc-100">
                                    {feature.name}
                                </h4>
                                <p className="text-base text-zinc-600 dark:text-zinc-400">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-12">
                        <h3 className="mb-4 font-mono text-xs font-bold uppercase tracking-wider text-zinc-500">
                            Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.solution.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-md border border-zinc-200 bg-white px-3 py-1.5 font-mono text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Impact */}
                <section className="border-t border-zinc-100 py-16 dark:border-zinc-900 sm:py-24">
                    <span className="mb-4 block font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        05. Impact
                    </span>
                    <h2 className="mb-12 font-serif text-3xl font-light text-zinc-900 dark:text-zinc-100">
                        Measurable Outcomes
                    </h2>

                    {/* Metrics Grid */}
                    <div className="mb-12 grid gap-6 sm:grid-cols-2">
                        {project.impact.metrics.map((metric, i) => (
                            <div
                                key={i}
                                className="rounded-xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-6 dark:border-zinc-800 dark:from-zinc-900/50 dark:to-zinc-950"
                            >
                                <div className="mb-2 font-mono text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                                    {metric.value}
                                </div>
                                <div className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                                    {metric.label}
                                </div>
                                {metric.context && (
                                    <div className="mt-1 text-xs text-zinc-400">
                                        {metric.context}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Testimonial */}
                    {project.impact.testimonial && (
                        <blockquote className="rounded-xl border-l-4 border-zinc-900 bg-zinc-50 p-6 dark:border-zinc-100 dark:bg-zinc-900/50">
                            <p className="mb-4 text-lg italic text-zinc-700 dark:text-zinc-300">
                                "{project.impact.testimonial.quote}"
                            </p>
                            <footer className="text-sm">
                                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                                    {project.impact.testimonial.author}
                                </span>
                                <span className="text-zinc-400"> · </span>
                                <span className="text-zinc-600 dark:text-zinc-400">
                                    {project.impact.testimonial.role}
                                </span>
                            </footer>
                        </blockquote>
                    )}
                </section>

                {/* Reflection */}
                <section className="border-t border-zinc-100 py-16 dark:border-zinc-900 sm:py-24">
                    <span className="mb-4 block font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        06. Reflection
                    </span>
                    <h2 className="mb-12 font-serif text-3xl font-light text-zinc-900 dark:text-zinc-100">
                        What I Learned
                    </h2>

                    <div className="space-y-8">
                        <div>
                            <h3 className="mb-4 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                                Key Takeaways
                            </h3>
                            <ul className="space-y-3">
                                {project.reflection.learned.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-zinc-600 dark:text-zinc-400">
                                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                                What I'd Do Differently
                            </h3>
                            <ul className="space-y-3">
                                {project.reflection.wouldDoDifferently.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-zinc-600 dark:text-zinc-400">
                                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer CTA */}
            <section className="border-t border-zinc-200 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-900/50">
                <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
                    <h2 className="mb-4 font-serif text-3xl font-light text-zinc-900 dark:text-zinc-100">
                        Interested in working together?
                    </h2>
                    <p className="mb-8 text-zinc-600 dark:text-zinc-400">
                        I'm always open to discussing new projects and opportunities.
                    </p>
                    <Link
                        href="/#contact-section"
                        className="inline-flex items-center gap-2 rounded-lg border border-zinc-900 bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                    >
                        Let's Talk
                    </Link>
                </div>
            </section>
        </div>
    );
}
