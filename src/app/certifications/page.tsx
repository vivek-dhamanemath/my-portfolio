"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CertificationCard from "@/components/Certifications/CertificationCard";
import CertificateModal from "@/components/Certifications/CertificateModal";
import {
    certifications,
    getCertificationsByCategory,
    categories,
    type Certification,
    type CertificationCategory,
} from "@/components/Certifications/certifications";

function CertificationsContent() {
    const searchParams = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState<
        CertificationCategory | "all"
    >("all");
    const [filteredCerts, setFilteredCerts] = useState(certifications);
    const [totalCount, setTotalCount] = useState(0);
    const [displayCount, setDisplayCount] = useState(0);
    const [hasMounted, setHasMounted] = useState(false);
    const [activeCertification, setActiveCertification] = useState<Certification | null>(null);

    useEffect(() => {
        setHasMounted(true);
        const filtered = getCertificationsByCategory(selectedCategory);
        setFilteredCerts(filtered);
        setTotalCount(certifications.length);

        // Handle deep-linked certificate view
        const viewId = searchParams.get("view");
        if (viewId) {
            const cert = certifications.find(c => c.id === viewId);
            if (cert) {
                setActiveCertification(cert);
            }
        }

        // Animated counter effect
        let start = 0;
        const end = filtered.length;
        const duration = 1000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setDisplayCount(end);
                clearInterval(timer);
            } else {
                setDisplayCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [selectedCategory, searchParams]);

    if (!hasMounted) return null;

    return (
        <div className="relative min-h-screen bg-white selection:bg-zinc-100 dark:bg-black dark:selection:bg-zinc-900">
            <Navbar />
            <main className="mx-auto max-w-5xl px-6 pt-32 sm:px-10">
                {/* Back Navigation */}
                <Link
                    href="/#certifications"
                    className="group mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
                        ←
                    </span>
                    Back to home
                </Link>

                {/* Hero Section */}
                <div className="mb-16">
                    <h1 className="font-serif text-5xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-8xl">
                        All{" "}
                        <span className="italic text-zinc-400 dark:text-zinc-600">
                            Certifications
                        </span>
                    </h1>
                    <div className="mt-6 flex items-baseline gap-3">
                        <span className="font-mono text-4xl font-bold tabular-nums text-zinc-900 dark:text-zinc-100 sm:text-6xl">
                            {displayCount}
                        </span>
                        <span className="text-lg font-light text-zinc-500 dark:text-zinc-400">
                            professional credentials
                        </span>
                    </div>
                </div>

                {/* Category Filters */}
                <div className="mb-12 border-y border-zinc-200 py-6 dark:border-zinc-800">
                    <div className="flex flex-wrap gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.value}
                                onClick={() => setSelectedCategory(category.value)}
                                className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${selectedCategory === category.value
                                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black"
                                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800"
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 gap-6 pb-24 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    {filteredCerts.map((certification, index) => (
                        <CertificationCard
                            key={certification.id}
                            certification={certification}
                            index={index}
                        />
                    ))}
                </div>

                {/* Empty State */}
                {filteredCerts.length === 0 && (
                    <div className="py-24 text-center">
                        <p className="text-lg font-light text-zinc-500 dark:text-zinc-400">
                            No certifications found in this category.
                        </p>
                    </div>
                )}
            </main>

            <footer className="py-12 text-center text-xs text-zinc-500 dark:text-zinc-600">
                © {new Date().getFullYear()} Vivek Dhamanemath. Built with Next.js &
                Tailwind.
            </footer>

            {/* Deep-Linked Modal */}
            {activeCertification && (
                <CertificateModal
                    certification={activeCertification}
                    isOpen={true}
                    onClose={() => setActiveCertification(null)}
                />
            )}
        </div>
    );
}

export default function CertificationsPage() {
    return (
        <Suspense fallback={
            <div className="flex h-screen items-center justify-center bg-white dark:bg-black">
                <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-zinc-900 dark:border-white"></div>
            </div>
        }>
            <CertificationsContent />
        </Suspense>
    );
}
