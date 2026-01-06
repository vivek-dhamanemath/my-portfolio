export default function WhatIDoSection() {
    const SERVICES = [
        {
            id: "01",
            title: "System Architecture",
            description: "Designing scalable, cloud-native backend systems that drive business growth/resilience while maintaining code quality."
        },
        {
            id: "02",
            title: "Frontend Experience",
            description: "Crafting pixel-perfect, high-performance interfaces that prioritize intuitive user interaction and accessibility."
        }
    ];

    return (
        <section>
            <h2 className="mb-10 text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">What I Do</h2>

            <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:gap-20">
                {SERVICES.map((service) => (
                    <div key={service.id} className="group relative pt-6">
                        {/* Giant Editorial Number */}
                        <span className="absolute -top-10 -left-6 -z-10 font-serif text-[10rem] leading-none text-zinc-50 dark:text-zinc-900/50 transition-colors duration-500 group-hover:text-zinc-100 dark:group-hover:text-zinc-800">
                            {service.id}
                        </span>

                        {/* Content */}
                        <div className="relative pl-4">
                            <h3 className="mb-4 font-serif text-3xl text-zinc-900 dark:text-zinc-100 sm:text-4xl">
                                {service.title}
                            </h3>
                            <p className="max-w-xs text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
