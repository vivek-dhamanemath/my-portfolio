export default function Contact() {
    return (
        <section id="contact" className="py-32 container mx-auto px-6 sm:px-10 scroll-mt-32">
            <div className="flex flex-col items-center text-center">
                {/* Editorial Label */}
                <span className="mb-8 font-sans text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                    04. Get in Touch
                </span>

                {/* Hero Invite */}
                <h2 className="mb-12 font-serif text-4xl font-light leading-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl md:text-7xl">
                    Have an idea? <br />
                    <span className="text-zinc-400 dark:text-zinc-600">Let's build it.</span>
                </h2>

                {/* The "Business Card" Action */}
                <a
                    href="mailto:vivekjdwork@gmail.com"
                    className="group relative inline-block transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                    <div className="relative z-10 border border-zinc-200 bg-white px-8 py-6 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50 sm:px-16 sm:py-10">
                        <span className="block font-serif text-3xl font-medium text-zinc-900 dark:text-zinc-100 sm:text-5xl">
                            vivekjdwork@gmail.com
                        </span>
                        <span className="mt-4 block text-xs font-bold uppercase tracking-widest text-zinc-400 transition-colors group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
                            Send me an email
                        </span>
                    </div>
                    {/* Decorative Shadow/Layer */}
                    <div className="absolute inset-0 z-0 translate-x-3 translate-y-3 border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-800 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4" />
                </a>

                {/* Details Footer */}
                <div className="mt-24 grid w-full max-w-2xl grid-cols-1 gap-12 border-t border-zinc-200 pt-12 dark:border-zinc-800 sm:grid-cols-2">
                    {/* Contact Info */}
                    <div className="flex flex-col items-center gap-2 sm:items-start text-sm">
                        <h4 className="font-bold uppercase tracking-widest text-zinc-400">Contact Details</h4>
                        <span className="mt-2 text-zinc-600 dark:text-zinc-300">+91 9902866318</span>
                        <span className="text-zinc-600 dark:text-zinc-300">Bengaluru, India</span>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col items-center gap-4 sm:items-end">
                        <h4 className="font-bold uppercase tracking-widest text-zinc-400">Social Presence</h4>
                        <div className="flex gap-6">
                            <a href="https://www.linkedin.com/in/vivek-dhamanemath/" className="group flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
                                LinkedIn
                                <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                            </a>
                            <a href="https://github.com/vivek-dhamanemath" className="group flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
                                GitHub
                                <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
