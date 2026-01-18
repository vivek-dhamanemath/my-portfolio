import { Blog, getPlatformColor } from "./blogs";
import Image from "next/image";

interface BlogCardProps {
    blog: Blog;
    index: number;
}

export default function BlogCard({ blog, index }: BlogCardProps) {
    // Format date to readable format
    const formattedDate = new Date(blog.publishedDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <article
            className="group relative flex gap-6 border-b border-zinc-200 py-6 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900/30"
            style={{
                animationDelay: `${index * 100}ms`,
            }}
        >
            {/* Content Section - Left */}
            <div className="flex-1">
                {/* Platform Badge */}
                <div className="mb-3 flex items-center gap-2">
                    <span
                        className={`inline-flex items-center rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getPlatformColor(
                            blog.platform
                        )}`}
                    >
                        {blog.platform}
                    </span>
                    {blog.featured && (
                        <span className="flex items-center gap-1 text-[10px] font-semibold text-zinc-600 dark:text-zinc-400">
                            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            Featured
                        </span>
                    )}
                </div>

                {/* Title */}
                <h3 className="mb-2 font-serif text-xl font-bold leading-tight text-zinc-900 dark:text-zinc-100 sm:text-2xl">
                    {blog.title}
                </h3>

                {/* Description */}
                <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {blog.description}
                </p>

                {/* Meta Info - Bottom */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500">
                    <time className="font-medium">{formattedDate}</time>
                    {blog.readTime && (
                        <>
                            <span>•</span>
                            <span>{blog.readTime}</span>
                        </>
                    )}
                    {blog.tags.length > 0 && (
                        <>
                            <span>•</span>
                            <div className="flex flex-wrap gap-2">
                                {blog.tags.map((tag) => (
                                    <span key={tag} className="rounded bg-zinc-100 px-2 py-0.5 text-[10px] font-medium dark:bg-zinc-800">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Image Section - Right */}
            {blog.featuredImage && (
                <div className="relative h-28 w-40 flex-shrink-0 overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-900 sm:h-32 sm:w-48">
                    <Image
                        src={blog.featuredImage}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 160px, 192px"
                    />
                </div>
            )}

            {/* Clickable Overlay */}
            <a
                href={blog.platformUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0"
                aria-label={`Read ${blog.title} on ${blog.platform}`}
            >
                <span className="sr-only">Read article</span>
            </a>
        </article>
    );
}
