export default function Hero() {
    return (
        <section id="home" className="flex min-h-[90vh] flex-col items-center justify-center pt-32 text-center">
            <div className="mb-8 inline-block rounded-full border border-zinc-200 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                Available for new opportunities
                {/* Independent Software Engineer */}
            </div>

            <h1 className="font-serif text-6xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-9xl">
                Vivek <br />
                <span className="italic text-zinc-400 dark:text-zinc-600">Dhamanemath</span>
            </h1>

            <div className="mt-12 h-16 w-[1px] bg-zinc-200 dark:bg-zinc-800" />

            <p className="mt-12 max-w-2xl font-sans text-xl font-light leading-relaxed tracking-wide text-zinc-600 dark:text-zinc-400 sm:text-2xl">
                Building digital experiences <br className="hidden sm:block" />
                with <span className="font-medium italic text-zinc-900 dark:text-zinc-200">precision</span> & <span className="font-medium italic text-zinc-900 dark:text-zinc-200">purpose</span>.
            </p>

            <div className="mt-16 flex flex-col items-center gap-6 sm:flex-row">
                <a href="#projects" className="group flex items-center gap-2 font-sans text-sm font-bold tracking-widest uppercase text-zinc-900 dark:text-zinc-100">
                    View Portfolio
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <div className="hidden h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-700 sm:block" />
                <a href="#contact" className="group flex items-center gap-2 font-sans text-sm font-bold tracking-widest uppercase text-zinc-900 dark:text-zinc-100">
                    Get in touch
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
            </div>
        </section>
    );
}
