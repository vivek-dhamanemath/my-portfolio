"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AISearch from "./AISearch";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Strategic 3-tier navigation structure
    const navigation = {
        work: [
            { name: "Work", href: "/#projects" },
            { name: "Career", href: "/experience" },
            { name: "Credentials", href: "/certifications" },
        ],
        insights: [
            { name: "Insights", href: "/writing" },
            { name: "Moments", href: "/journals" },
        ],
        connect: [
            { name: "Let's Talk", href: "/#contact-section" },
        ]
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href === "/" && pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 inset-x-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
            <div className="flex items-center justify-between px-6 py-4 sm:px-12">
                {/* Logo with Tagline */}
                <Link
                    href="/"
                    onClick={(e) => handleLinkClick(e, "/")}
                    className="group z-50 relative flex flex-col"
                >
                    <span className="font-serif text-lg font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
                        Vivek JD
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 dark:text-zinc-600 transition-colors group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
                        Building with Precision
                    </span>
                </Link>

                {/* Desktop Navigation - Story + 3 Tier Structure */}
                <div className="hidden lg:flex items-center gap-10">
                    {/* Story - Standalone */}
                    <Link
                        href="/about"
                        onClick={(e) => handleLinkClick(e, "/about")}
                        className="group relative text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
                    >
                        Story
                        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-zinc-900 transition-all duration-300 group-hover:w-full dark:bg-zinc-100" />
                    </Link>

                    {/* Separator */}
                    <div className="h-4 w-[1px] bg-zinc-200 dark:bg-zinc-800" />

                    {/* Work */}
                    <div className="flex items-center gap-6">
                        {navigation.work.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="group relative text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-zinc-900 transition-all duration-300 group-hover:w-full dark:bg-zinc-100" />
                            </Link>
                        ))}
                    </div>

                    {/* Separator */}
                    <div className="h-4 w-[1px] bg-zinc-200 dark:bg-zinc-800" />

                    {/* Insights */}
                    <div className="flex items-center gap-6">
                        {navigation.insights.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="group relative text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-zinc-900 transition-all duration-300 group-hover:w-full dark:bg-zinc-100" />
                            </Link>
                        ))}
                    </div>

                    {/* Separator */}
                    <div className="h-4 w-[1px] bg-zinc-200 dark:bg-zinc-800" />

                    {/* Connect */}
                    <div className="flex items-center gap-6">
                        {navigation.connect.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="group relative text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-zinc-900 transition-all duration-300 group-hover:w-full dark:bg-zinc-100" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Utilities */}
                <div className="flex items-center gap-3">
                    {/* Status Badge */}
                    <div className="hidden lg:flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 dark:border-emerald-900/30 dark:bg-emerald-900/10">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                        </span>
                        <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                            Open to Work
                        </span>
                    </div>

                    <AISearch />

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="group relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 lg:hidden"
                        aria-label="Toggle Menu"
                        aria-expanded={isOpen}
                    >
                        <span className={`block h-[2px] w-6 bg-current transition-transform duration-300 ease-out text-zinc-900 dark:text-zinc-100 ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
                        <span className={`block h-[2px] w-6 bg-current transition-opacity duration-300 text-zinc-900 dark:text-zinc-100 ${isOpen ? "opacity-0" : "opacity-100"}`} />
                        <span className={`block h-[2px] w-6 bg-current transition-transform duration-300 ease-out text-zinc-900 dark:text-zinc-100 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                    </button>
                </div>
            </div>

            {/* Mobile "Dossier" Menu */}
            <div
                className={`fixed right-0 top-0 z-[100] h-screen w-80 max-w-[85vw] transform bg-white shadow-2xl transition-transform duration-300 dark:bg-zinc-950 lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Header */}
                <div className="border-b border-zinc-100 px-6 py-5 dark:border-zinc-900">
                    <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                            Navigation
                        </span>
                        <button
                            onClick={toggleMenu}
                            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Navigation Sections */}
                <div className="overflow-y-auto px-6 py-6">
                    {/* Story Section */}
                    <div className="mb-8">
                        <Link
                            href="/about"
                            onClick={(e) => handleLinkClick(e, "/about")}
                            className="block py-3 font-sans text-lg font-medium text-zinc-900 transition-colors hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
                        >
                            → Story
                        </Link>
                    </div>

                    <div className="mb-6 h-[1px] bg-zinc-100 dark:bg-zinc-900" />

                    {/* Work Section */}
                    <div className="mb-8">
                        <div className="mb-3 flex items-center gap-2">
                            <div className="h-[1px] w-4 bg-zinc-300 dark:bg-zinc-700" />
                            <h3 className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                                Work
                            </h3>
                        </div>
                        <div className="space-y-2">
                            {navigation.work.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                    className="block py-2 font-sans text-base font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
                                >
                                    → {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Insights Section */}
                    <div className="mb-8">
                        <div className="mb-3 flex items-center gap-2">
                            <div className="h-[1px] w-4 bg-zinc-300 dark:bg-zinc-700" />
                            <h3 className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                                Insights
                            </h3>
                        </div>
                        <div className="space-y-2">
                            {navigation.insights.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                    className="block py-2 font-sans text-base font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
                                >
                                    → {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Connect Section */}
                    <div className="mb-8">
                        <div className="mb-3 flex items-center gap-2">
                            <div className="h-[1px] w-4 bg-zinc-300 dark:bg-zinc-700" />
                            <h3 className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                                Connect
                            </h3>
                        </div>
                        <div className="space-y-2">
                            {navigation.connect.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                    className="block py-2 font-sans text-base font-medium text-zinc-900 transition-colors hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
                                >
                                    → {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Status */}
                    <div className="mt-8 rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900/30 dark:bg-emerald-900/10">
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                            </span>
                            <span className="font-mono text-xs font-medium uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                                Open to Work
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[90] bg-zinc-900/20 backdrop-blur-sm lg:hidden"
                    onClick={toggleMenu}
                />
            )}
        </nav>
    );
}
