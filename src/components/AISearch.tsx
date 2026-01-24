"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Sparkles, CornerDownLeft, Command, Loader2 } from "lucide-react";

export default function AISearch() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [answer, setAnswer] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [suggestions] = useState([
        "What is Vivek's experience with Java?",
        "Show me his Cloud certifications",
        "How did he build this portfolio?",
        "What projects use React?"
    ]);
    const modalRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Toggle on Cmd+K or Ctrl+K
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Focus input when modal opens
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        } else {
            setQuery("");
            setAnswer("");
        }
    }, [isOpen]);

    const handleSearch = async (text: string = query) => {
        if (!text.trim() || isLoading) return;

        setIsLoading(true);
        setAnswer("");

        try {
            const res = await fetch("/api/ai-search", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: text }),
            });

            const data = await res.json();

            if (data.error) {
                setAnswer("Sorry, I encountered an error. Please ensure the API key is configured.");
            } else {
                setAnswer(data.answer);
                if (data.scrollTarget) {
                    const element = document.getElementById(data.scrollTarget);
                    if (element) {
                        setIsOpen(false);
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }
            }
        } catch (error) {
            setAnswer("Failed to connect to the AI service.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Search Trigger (Mobile/Desktop) */}
            <button
                onClick={() => setIsOpen(true)}
                className="group flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50/50 px-3 py-1.5 transition-all hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-800"
            >
                <Search className="h-4 w-4 text-zinc-500" />
                <span className="hidden text-xs font-medium text-zinc-400 sm:inline-block">Ask AI...</span>
                <div className="hidden items-center gap-1 rounded border border-zinc-200 bg-white px-1.5 py-0.5 text-[10px] uppercase text-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 lg:flex">
                    <Command className="h-2.5 w-2.5" /> K
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4 backdrop-blur-sm bg-zinc-950/20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            ref={modalRef}
                            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
                        >
                            {/* Search Bar */}
                            <div className="flex items-center gap-3 border-b border-zinc-100 p-4 dark:border-zinc-800">
                                <Search className="h-5 w-5 text-zinc-500" />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                                    placeholder="Ask anything about Vivek..."
                                    className="flex-1 bg-transparent font-sans text-base outline-none text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
                                />
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="rounded-md p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                                >
                                    <X className="h-4 w-4 text-zinc-400" />
                                </button>
                            </div>

                            <div className="max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
                                {!answer && !isLoading && (
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                                            <Sparkles className="h-3 w-3" />
                                            Suggestions
                                        </div>
                                        <div className="grid gap-2">
                                            {suggestions.map((suggestion) => (
                                                <button
                                                    key={suggestion}
                                                    onClick={() => {
                                                        setQuery(suggestion);
                                                        handleSearch(suggestion);
                                                    }}
                                                    className="flex items-center justify-between rounded-xl border border-zinc-100 p-3 text-left text-sm transition-all hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
                                                >
                                                    <span className="text-zinc-600 dark:text-zinc-400">{suggestion}</span>
                                                    <CornerDownLeft className="h-3 w-3 text-zinc-300" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {isLoading && (
                                    <div className="flex flex-col items-center justify-center py-12 gap-4">
                                        <Loader2 className="h-8 w-8 animate-spin text-zinc-300" />
                                        <span className="text-sm italic text-zinc-500">Consulting Vivek's archives...</span>
                                    </div>
                                )}

                                {answer && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="space-y-4"
                                    >
                                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                                            AI Response
                                            {answer.includes("Demo Mode") && (
                                                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[9px] text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                                                    Demo Mode
                                                </span>
                                            )}
                                        </div>
                                        <div className="rounded-2xl bg-zinc-50 p-6 font-sans text-base leading-relaxed text-zinc-800 dark:bg-zinc-800/50 dark:text-zinc-200">
                                            {answer}
                                        </div>
                                        <button
                                            onClick={() => {
                                                setQuery("");
                                                setAnswer("");
                                                inputRef.current?.focus();
                                            }}
                                            className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                                        >
                                            Ask another question
                                        </button>
                                    </motion.div>
                                )}
                            </div>

                            <div className="flex items-center justify-between border-t border-zinc-100 bg-zinc-50/50 px-4 py-2 text-[10px] text-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/50">
                                <span>Powered by Gemini 1.5 Flash</span>
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center gap-1"><CornerDownLeft className="h-2.5 w-2.5" /> Search</span>
                                    <span className="flex items-center gap-1"><kbd className="px-1 rounded border border-zinc-300 dark:border-zinc-700">ESC</kbd> Close</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
