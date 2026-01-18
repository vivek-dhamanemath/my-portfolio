"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { name: "Home", href: "/#home" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/#projects" },
        { name: "Certifications", href: "/certifications" },
        { name: "Writing", href: "/writing" },
        { name: "Journal", href: "/journals" },
        { name: "Contact", href: "/#contact" },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-0 inset-x-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
            <div className="flex items-center justify-between px-6 py-4 sm:px-12">
                {/* Logo */}
                <Link href="/" className="font-serif text-lg font-medium tracking-tight text-zinc-900 dark:text-zinc-100 z-50 relative">
                    Vivek JD
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-black dark:hover:text-white ${pathname === link.href ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-600 dark:text-zinc-400"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="group relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
                    aria-label="Toggle Menu"
                    aria-expanded={isOpen}
                >
                    <span className={`block h-[2px] w-6 bg-current transition-transform duration-300 ease-out text-zinc-900 dark:text-zinc-100 ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
                    <span className={`block h-[2px] w-6 bg-current transition-opacity duration-300 text-zinc-900 dark:text-zinc-100 ${isOpen ? "opacity-0" : "opacity-100"}`} />
                    <span className={`block h-[2px] w-6 bg-current transition-transform duration-300 ease-out text-zinc-900 dark:text-zinc-100 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <div
                className={`fixed inset-0 z-[100] flex flex-col h-screen w-screen bg-white dark:bg-black transition-opacity duration-300 md:hidden ${isOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
                    }`}
            >
                {/* Header Spacer for close button alignment */}
                <div className="flex h-[72px] items-center justify-end px-6 sm:px-12">
                    {/* Close button is handled by the fixed button in main nav, but we keep this spacer or we can just centre everything */}
                </div>

                <div className="flex flex-1 flex-col items-center justify-center gap-8 pb-20">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="font-serif text-4xl font-light text-zinc-900 transition-colors hover:text-zinc-500 dark:text-zinc-100 dark:hover:text-zinc-400"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}

