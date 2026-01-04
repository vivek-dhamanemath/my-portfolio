import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
    const TECH_STACK = [
        { category: "Languages", skills: ["Java", "Python", "C"] },
        { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
        { category: "Backend", skills: ["Spring Boot", "REST APIs", "Microservices"] },
        { category: "Database", skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
        { category: "Tools", skills: ["Git", "Docker", "AWS", "Postman"] }
    ];

    return (
        <div className="relative min-h-screen bg-white selection:bg-zinc-100 dark:bg-black dark:selection:bg-zinc-900">
            <Navbar />

            <main className="mx-auto max-w-4xl px-6 pt-48 pb-32 sm:px-10">
                <div className="border-b border-zinc-100 pb-16 dark:border-zinc-900">
                    <Link
                        href="/#about"
                        className="group mb-12 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                    >
                        <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">←</span>
                        Back to Overview
                    </Link>

                    <h1 className="font-serif text-6xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-8xl">
                        The Story Behind <br />
                        the <span className="italic text-zinc-400 dark:text-zinc-600">Code.</span>
                    </h1>
                </div>

                <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-12">
                    <div className="lg:col-span-8 flex flex-col gap-12">
                        <section>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">Introduction</h2>
                            <p className="font-sans text-xl font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
                                My journey into software engineering began with a fascination for how logic translates into digital experiences.
                                Holding a <span className="text-zinc-900 dark:text-zinc-100 font-medium">Master of Computer Application (MCA)</span>,
                                I've combined rigorous academic foundation with hands-on building.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">Technical Philosophy</h2>
                            <p className="font-sans text-lg font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
                                I believe code is more than just instructions; it's a medium for solving human problems.
                                My focus on <span className="text-zinc-900 dark:text-zinc-100 font-medium">Java Full-Stack</span> development allows me
                                to bridge the gap between robust backend systems and intuitive, beautiful user interfaces.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">What I Do</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
                                <div>
                                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Architecting Systems</h3>
                                    <p className="text-sm text-zinc-500 leading-relaxed">Designing scalable architectures that can grow with the business, focusing on microservices and cloud-native solutions.</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Crafting Experiences</h3>
                                    <p className="text-sm text-zinc-500 leading-relaxed">Creating pixel-perfect interfaces that prioritize user experience and performance across all devices.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <aside className="lg:col-span-4 flex flex-col gap-12">
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-8 border-b border-zinc-100 pb-2 dark:border-zinc-900">Expertise</h2>
                            <div className="flex flex-col gap-10">
                                {TECH_STACK.map((item) => (
                                    <div key={item.category}>
                                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100 mb-4">{item.category}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {item.skills.map((skill) => (
                                                <span key={skill} className="text-xs text-zinc-500 border border-zinc-100 dark:border-zinc-900 px-2 py-1 rounded-sm">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6 border-b border-zinc-100 pb-2 dark:border-zinc-900">Inspiration</h2>
                            <p className="text-sm italic text-zinc-500 leading-relaxed">
                                "The best way to predict the future is to invent it." — Alan Kay
                            </p>
                        </div>
                    </aside>
                </div>
            </main>

            <footer className="border-t border-zinc-100 py-16 dark:border-zinc-900">
                <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Let's build something together</p>
                    <Link href="/#contact" className="mt-4 inline-block font-serif text-3xl font-light text-zinc-900 hover:text-zinc-400 dark:text-zinc-100 transition-colors">
                        Get in touch
                    </Link>
                </div>
            </footer>
        </div>
    );
}
