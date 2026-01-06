export default function InspirationSection() {
    return (
        <div className="text-center py-8 sm:py-16">
            <blockquote className="font-serif text-3xl font-light italic leading-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl md:text-5xl">
                &ldquo;The best way to <span className="text-zinc-400 dark:text-zinc-600">predict</span> the future <br className="hidden sm:block" />
                is to <span className="text-zinc-400 dark:text-zinc-600">invent</span> it.&rdquo;
            </blockquote>
            <cite className="mt-8 block font-sans text-xs font-bold uppercase tracking-widest text-zinc-400 not-italic">
                — Alan Kay
            </cite>
        </div>
    );
}
