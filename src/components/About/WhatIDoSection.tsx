export default function WhatIDoSection() {
    return (
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
    );
}
