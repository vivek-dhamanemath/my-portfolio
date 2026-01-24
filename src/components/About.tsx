import Link from "next/link";

export default function About() {
    const CAPABILITIES = [
        "Frontend Engineering",
        "Backend Engineering",
        "Full Stack Engineering",
        "Rapid Prototyping"
    ];

    const DETAILS = [
        { label: "Focus", value: "Java Full-Stack" },
        { label: "Education", value: "Master of Computer Application (MCA)" },
        { label: "Location", value: "Bengaluru, India" }
    ];

    return (
        <section id="about" className="py-24 sm:py-32 scroll-mt-1">
            <div className="border-t border-zinc-200 pt-16 dark:border-zinc-800">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-12 sm:gap-16 lg:gap-24">
                    {/* Left Side: Visual Identity */}
                    <div className="sm:col-span-5 lg:col-span-4">
                        <div className="relative aspect-square w-full max-w-[280px] sm:max-w-none mx-auto overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 sm:sticky sm:top-32">
                            <img
                                src="/about/my-photo.jpg"
                                alt="Vivek Dhamanemath"
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Right Side: Narrative */}
                    <div className="sm:col-span-7 lg:col-span-8">
                        <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                            01. About
                        </span>
                        <h2 className="font-serif text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-7xl">
                            A focused approach <br />
                            to <span className="italic text-zinc-400 dark:text-zinc-600">innovation.</span>
                        </h2>

                        <p className="mt-8 font-sans text-lg font-light leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl md:mt-12">
                            I specialize in building high-performance digital products that combine
                            <span className="text-zinc-900 dark:text-zinc-200 font-medium"> technical precision </span>
                            with
                            <span className="text-zinc-900 dark:text-zinc-200 font-medium"> intentional design</span>.
                            With a focus on clean architecture and seamless user experiences, I help turn complex ideas into refined digital realities.
                        </p>

                        {/* Personal Details Grid */}
                        <div className="mt-12 grid grid-cols-2 gap-8 border-y border-zinc-100 py-10 dark:border-zinc-900 sm:grid-cols-3 md:mt-16">
                            {DETAILS.map((detail) => (
                                <div key={detail.label}>
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                                        {detail.label}
                                    </h4>
                                    <p className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                        {detail.value}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 md:mt-16">
                            <h3 className="font-sans text-xs font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
                                Core Capabilities
                            </h3>
                            <div className="mt-8 grid grid-cols-1 gap-y-4 sm:grid-cols-2">
                                {CAPABILITIES.map((capability) => (
                                    <div key={capability} className="flex items-center gap-3">
                                        <div className="h-[1px] w-4 bg-zinc-300 dark:bg-zinc-700" />
                                        <span className="font-sans text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                            {capability}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-16 flex flex-wrap gap-x-8 gap-y-4">
                            <Link
                                href="/about"
                                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100 transition-colors hover:text-zinc-600 dark:hover:text-zinc-400"
                            >
                                Know more about me
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </Link>

                            <Link
                                href="/journals"
                                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                            >
                                Exploring the archive
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">↗</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
