import Link from "next/link";
import { useState } from "react";
import type { Certification } from "./certifications";
import CertificateModal from "./CertificateModal";

interface CertificationCardProps {
    certification: Certification;
    index?: number;
    isLandingPage?: boolean;
}

const categoryColors: Record<string, string> = {
    cloud: "bg-sky-500/10 text-sky-700 dark:text-sky-400",
    frontend: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
    backend: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
    devops: "bg-orange-500/10 text-orange-700 dark:text-orange-400",
    other: "bg-zinc-500/10 text-zinc-700 dark:text-zinc-400",
};

export default function CertificationCard({ certification, index = 0, isLandingPage = false }: CertificationCardProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <>
            <div
                className="group relative h-[380px] overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-500 hover:border-zinc-300 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
                style={{
                    animationDelay: `${index * 100}ms`,
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Background Watermark Logo - Premium Detail */}
                <div className="pointer-events-none absolute -right-4 -top-4 h-32 w-32 opacity-[0.03] transition-all duration-700 group-hover:scale-125 group-hover:opacity-[0.07] dark:opacity-[0.05] dark:group-hover:opacity-[0.1]">
                    <img
                        src={certification.logo}
                        alt=""
                        className="h-full w-full object-contain grayscale"
                    />
                </div>

                {/* Spotlight Effect */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                        background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.03), transparent 60%)`,
                    }}
                />

                {/* Theme Glow Border - Top */}
                <div
                    className={`absolute inset-x-0 top-0 h-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${categoryColors[certification.category].split(' ')[0]}`}
                />

                {/* Main Content Container */}
                <div className="relative z-10 flex h-full flex-col">
                    {/* Header: Category & Badge */}
                    <div className="mb-6 flex items-center justify-between">
                        <span
                            className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${categoryColors[certification.category]}`}
                        >
                            {certification.category}
                        </span>

                        <div className="relative flex h-5 w-5 items-center justify-center">
                            <div className="absolute h-full w-full animate-ping rounded-full bg-emerald-500 opacity-20" />
                            <div className="relative flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500">
                                <svg
                                    className="h-2.5 w-2.5 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Visual Center: Logo & Info */}
                    <div className="flex flex-1 flex-col items-center justify-center text-center">
                        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-zinc-50 p-5 transition-transform duration-500 group-hover:scale-110 dark:bg-zinc-900/50">
                            <img
                                src={certification.logo}
                                alt={`${certification.issuer} logo`}
                                className="h-full w-full object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                                onError={(e) => {
                                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23ddd' width='100' height='100'/%3E%3Ctext x='50' y='50' font-size='14' text-anchor='middle' dominant-baseline='middle' fill='%23666'%3ECert%3C/text%3E%3C/svg%3E";
                                }}
                            />
                        </div>

                        <h3 className="mb-2 max-w-[240px] font-sans text-lg font-medium leading-tight text-zinc-900 dark:text-zinc-100">
                            {certification.name}
                        </h3>

                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                            {certification.issuer}
                        </p>

                        <div className="mt-4 flex items-center justify-center text-[10px] font-mono tracking-widest text-zinc-400 opacity-60">
                            {certification.issueDate}
                        </div>
                    </div>

                    {/* Kinetic Reveal Section (Slides up on hover) */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-[100%] bg-white/80 p-6 backdrop-blur-md transition-transform duration-500 ease-out group-hover:translate-y-0 dark:bg-zinc-950/80">
                        {/* Skills Container */}
                        <div className="mb-6 flex flex-wrap justify-center gap-2">
                            {certification.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-md border border-zinc-200 bg-white/50 px-2 py-1 text-[9px] font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-3">
                            {isLandingPage ? (
                                <Link
                                    href={`/certifications?view=${certification.id}`}
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 py-2.5 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-white"
                                >
                                    View Certificate
                                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </Link>
                            ) : (
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 py-2.5 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-white"
                                >
                                    View Certificate
                                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </button>
                            )}

                            <a
                                href={certification.verificationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-full items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                            >
                                Official Verification
                                <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {!isLandingPage && (
                <CertificateModal
                    certification={certification}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </>
    );
}


