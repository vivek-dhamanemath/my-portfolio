"use client";

import { useEffect, useState } from "react";

export default function Hero() {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [languageIndex, setLanguageIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const languages = [
        { lang: "English", firstName: "Vivek", lastName: "Dhamanemath" },
        { lang: "ಕನ್ನಡ", firstName: "ವಿವೇಕ", lastName: "ಧಾಮಣೇಮಠ" },
        { lang: "हिंदी", firstName: "विवेक", lastName: "धामणेमठ" },
        { lang: "मराठी", firstName: "विवेक", lastName: "धामणेमठ" },
        { lang: "తెలుగు", firstName: "వివేక్", lastName: "ధామణేమఠ" },
        { lang: "தமிழ்", firstName: "விவேக்", lastName: "தாமணேமட்" },
        { lang: "മലയാളം", firstName: "വിവേക്", lastName: "ധാമണേമഠ" },
    ];

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString("en-US", {
                timeZone: "Asia/Kolkata",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            });
            const dateString = now.toLocaleDateString("en-US", {
                timeZone: "Asia/Kolkata",
                weekday: "short",
                day: "numeric",
                month: "short",
            });
            setTime(`${timeString} IST`);
            setDate(dateString);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const languageInterval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setLanguageIndex((prev) => (prev + 1) % languages.length);
                setFade(true);
            }, 300);
        }, 4000);
        return () => clearInterval(languageInterval);
    }, []);

    return (
        <section id="home" className="relative flex min-h-[90vh] flex-col items-center justify-center pt-32 text-center scroll-mt-32">

            {/* Live IST Clock Stamp */}
            <div className="absolute top-32 right-5 hidden flex-col items-end gap-0.5 sm:flex lg:right-[2%] xl:right-[-2%]">
                <span className="font-sans text-xs font-bold tracking-widest text-zinc-500 dark:text-zinc-400 tabular-nums">
                    {time || "00:00 IST"}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    {date || "BENGALURU"}
                </span>
            </div>

            <div className="mb-12 inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-zinc-50/50 px-5 py-2 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                    Available for opportunities
                </span>
            </div>

            <h1 className={`relative z-10 flex flex-col items-center font-serif text-6xl font-black uppercase tracking-tighter transition-all duration-500 sm:text-9xl ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <span className="text-zinc-900 dark:text-zinc-100">
                    {languages[languageIndex].firstName}
                </span>
                {/* Hollow Text Effect */}
                <span className="text-transparent [-webkit-text-stroke:1px_theme(colors.zinc.900)] opacity-80 decoration-zinc-900/20 underline-offset-8 transition-all hover:opacity-100 dark:[-webkit-text-stroke:1px_theme(colors.zinc.100)] dark:decoration-zinc-100/20">
                    {languages[languageIndex].lastName}
                </span>
            </h1>

            <p className="mt-12 max-w-xl font-sans text-lg font-light leading-relaxed tracking-wide text-zinc-600 dark:text-zinc-400 sm:text-xl">
                Building digital experiences with <br className="hidden sm:block" />
                <span className="font-serif italic text-zinc-900 dark:text-zinc-100">precision</span> & <span className="font-serif italic text-zinc-900 dark:text-zinc-100">purpose</span>.
            </p>

            <div className="mt-16 flex flex-col items-center gap-6 sm:flex-row">
                <a href="#projects" className="group flex items-center gap-2 border-b-2 border-zinc-900 pb-1 font-sans text-xs font-bold uppercase tracking-widest text-zinc-900 transition-colors hover:border-transparent dark:border-zinc-100 dark:text-zinc-100">
                    View Portfolio
                </a>
                <span className="hidden text-zinc-300 dark:text-zinc-700 sm:block">/</span>
                <a href="#contact" className="group flex items-center gap-2 border-b-2 border-transparent pb-1 font-sans text-xs font-bold uppercase tracking-widest text-zinc-500 transition-colors hover:border-zinc-900 hover:text-zinc-900 dark:text-zinc-500 dark:hover:border-zinc-100 dark:hover:text-zinc-100">
                    Get in touch
                </a>
            </div>
        </section>
    );
}
