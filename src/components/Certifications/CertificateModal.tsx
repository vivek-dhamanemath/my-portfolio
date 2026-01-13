"use client";

import { useEffect, useState } from "react";
import type { Certification } from "./certifications";

interface CertificateModalProps {
    certification: Certification;
    isOpen: boolean;
    onClose: () => void;
}

export default function CertificateModal({
    certification,
    isOpen,
    onClose,
}: CertificateModalProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        if (isOpen) {
            console.log("Opening Modal for:", certification.name, "Path:", certification.image);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isMounted || !isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-zinc-950">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4 dark:border-zinc-800">
                    <div>
                        <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                            {certification.name}
                        </h3>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">
                            Issued by {certification.issuer} • {certification.issueDate}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded-full p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Body - Certificate Image */}
                <div className="relative overflow-auto p-4 sm:p-8">
                    <div className="flex items-center justify-center rounded-lg bg-zinc-100 p-2 dark:bg-zinc-900 min-h-[40vh]">
                        {certification.image ? (
                            <img
                                key={certification.image} // Add key to force reload on path change
                                src={certification.image}
                                alt={`${certification.name} certificate`}
                                className="max-h-[60vh] object-contain shadow-lg"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                        // Clear existing error messages if any
                                        const existingError = parent.querySelector('.error-message');
                                        if (existingError) existingError.remove();

                                        const errorMsg = document.createElement('div');
                                        errorMsg.className = 'error-message text-center p-12 text-zinc-500';
                                        errorMsg.innerHTML = `
                                            <p class="font-bold mb-2">Image Not Found</p>
                                            <p class="text-xs font-mono break-all">${certification.image}</p>
                                        `;
                                        parent.appendChild(errorMsg);
                                    }
                                }}
                            />
                        ) : (
                            <div className="p-12 text-zinc-500">
                                No certificate image provided.
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col items-center justify-between gap-4 border-t border-zinc-200 px-6 py-4 dark:border-zinc-800 sm:flex-row">
                    <div className="flex flex-wrap gap-2">
                        {certification.skills.map((skill) => (
                            <span
                                key={skill}
                                className="rounded-md bg-zinc-100 px-2 py-1 text-[10px] font-medium text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                    <a
                        href={certification.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-2 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-zinc-700 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-300"
                    >
                        Verify Official Link
                        <svg
                            className="h-3 w-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
