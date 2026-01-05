import Link from "next/link";
import Navbar from "@/components/Navbar";
import IntroductionSection from "@/components/About/IntroductionSection";
import EducationSection from "@/components/About/EducationSection";
import WhatIDoSection from "@/components/About/WhatIDoSection";
import InspirationSection from "@/components/About/InspirationSection";
import SkillTicker from "@/components/About/SkillTicker";
import ProfileSidebar from "@/components/About/ProfileSidebar";

export default function AboutPage() {
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

                <div className="mt-20">
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
                        <div className="lg:col-span-7">
                            <IntroductionSection />
                        </div>
                        <ProfileSidebar />
                    </div>

                    <div className="my-16 -mx-6 sm:-mx-10">
                        <SkillTicker />
                    </div>

                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
                        <div className="lg:col-span-8 flex flex-col gap-24">
                            <EducationSection />
                            <WhatIDoSection />
                        </div>

                        <aside className="lg:col-span-4 flex flex-col gap-12 sticky top-48 h-fit">
                            <InspirationSection />
                        </aside>
                    </div>
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
