"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/Writing/BlogCard";
import {
    blogs,
    getBlogsByCategory,
    blogCategories,
    type BlogCategory,
} from "@/components/Writing/blogs";

export default function WritingPage() {
    const [selectedCategory, setSelectedCategory] = useState<BlogCategory>("all");
    const [filteredBlogs, setFilteredBlogs] = useState(blogs);
    const [displayCount, setDisplayCount] = useState(0);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
        const filtered = getBlogsByCategory(selectedCategory);
        setFilteredBlogs(filtered);

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
    }, [selectedCategory]);

    if (!hasMounted) return null;

    return (
        <div className="relative min-h-screen bg-white selection:bg-zinc-100 dark:bg-black dark:selection:bg-zinc-900">
            <Navbar />
            <main className="mx-auto max-w-5xl px-6 pt-32 sm:px-10">
                {/* Back Navigation */}
                <Link
                    href="/"
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
                        Writing &{" "}
                        <span className="italic text-zinc-400 dark:text-zinc-600">
                            Insights
                        </span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
                        Technical articles, tutorials, and thoughts on software development.
                        Sharing knowledge across{" "}
                        <span className="font-medium text-zinc-900 dark:text-zinc-100">
                            Medium
                        </span>,{" "}
                        <span className="font-medium text-zinc-900 dark:text-zinc-100">
                            Dev.to
                        </span>, and other platforms.
                    </p>
                    <div className="mt-6 flex items-baseline gap-3">
                        <span className="font-mono text-4xl font-bold tabular-nums text-zinc-900 dark:text-zinc-100 sm:text-6xl">
                            {displayCount}
                        </span>
                        <span className="text-lg font-light text-zinc-500 dark:text-zinc-400">
                            published articles
                        </span>
                    </div>
                </div>

                {/* Category Filters */}
                <div className="mb-12 border-y border-zinc-200 py-6 dark:border-zinc-800">
                    <div className="flex flex-wrap gap-3">
                        {blogCategories.map((category) => (
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

                {/* Featured Section */}
                {/* {selectedCategory === "all" && (
                    <div className="mb-16">
                        <div className="mb-8 flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-sm dark:bg-white">
                                ★
                            </span>
                            <h2 className="font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
                                Featured Articles
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                            {blogs
                                .filter((blog) => blog.featured)
                                .map((blog, index) => (
                                    <BlogCard key={blog.id} blog={blog} index={index} />
                                ))}
                        </div>
                    </div>
                )} */}

                {/* All Articles */}
                <div className="mb-8">
                    <h2 className="mb-6 font-serif text-2xl font-light text-zinc-900 dark:text-zinc-100">
                        {selectedCategory === "all" ? "All Articles" : `${selectedCategory} Articles`}
                    </h2>
                    <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                        {filteredBlogs.map((blog, index) => (
                            <BlogCard key={blog.id} blog={blog} index={index} />
                        ))}
                    </div>
                </div>

                {/* Empty State */}
                {filteredBlogs.length === 0 && (
                    <div className="py-24 text-center">
                        <p className="text-lg font-light text-zinc-500 dark:text-zinc-400">
                            No articles found in this category.
                        </p>
                    </div>
                )}
            </main>

            <footer className="py-12 text-center text-xs text-zinc-500 dark:text-zinc-600">
                © {new Date().getFullYear()} Vivek Dhamanemath. Built with Next.js &
                Tailwind.
            </footer>
        </div>
    );
}
