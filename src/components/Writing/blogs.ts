export type BlogPlatform = "Medium" | "Dev.to" | "Hashnode" | "Personal";

export interface Blog {
    id: string;
    title: string;
    description: string;
    platform: BlogPlatform;
    platformUrl: string;
    publishedDate: string;
    tags: string[];
    featured?: boolean;
    readTime?: string;
    featuredImage?: string;
}

export const blogs: Blog[] = [
    {
        id: "blog-1",
        title: "My Interview Experience at C-DAC Bengaluru: A Realistic Breakdown of the Hiring Process",
        description: "I recently went through the hiring process at C-DAC Bengaluru for the role of Project Engineer (Software). Here’s a realistic, no-nonsense breakdown of what to expect, from the initial application to the final interview rounds. I’ll cover the technical depth, the types of questions asked, and how to prepare effectively.",
        platform: "Medium",
        platformUrl: "https://medium.com/@vivekjdwork/my-interview-experience-at-c-dac-bengaluru-a-realistic-breakdown-of-the-hiring-process-6778b04bf737",
        publishedDate: "2026-01-18",
        tags: ["C-DAC", "Interview Experience", "Project Engineer"],
        featured: false,
        readTime: "5 min read",
        featuredImage: "/blog/cdac-interview.jpg"
    }
    // {
    //     id: "blog-2",
    //     title: "Modern React Patterns in 2026",
    //     description: "Explore the latest React patterns including Server Components, Suspense, and concurrent rendering. A deep dive into modern React development.",
    //     platform: "Dev.to",
    //     platformUrl: "https://dev.to/yourusername/modern-react-patterns",
    //     publishedDate: "2026-01-10",
    //     tags: ["React", "Frontend", "JavaScript"],
    //     featured: true,
    //     readTime: "12 min read"
    // },

];

export type BlogCategory = "all" | "Frontend" | "Backend" | "Full-Stack" | "Design";

export const blogCategories = [
    { label: "All Articles", value: "all" as BlogCategory },
    { label: "Frontend", value: "Frontend" as BlogCategory },
    { label: "Backend", value: "Backend" as BlogCategory },
    { label: "Full-Stack", value: "Full-Stack" as BlogCategory },
    { label: "Design", value: "Design" as BlogCategory },
];

export function getBlogsByCategory(category: BlogCategory): Blog[] {
    if (category === "all") {
        return blogs;
    }
    return blogs.filter((blog) =>
        blog.tags.some((tag) => tag.toLowerCase().includes(category.toLowerCase()))
    );
}

export function getFeaturedBlogs(): Blog[] {
    return blogs.filter((blog) => blog.featured);
}

export function getPlatformIcon(platform: BlogPlatform): string {
    const icons: Record<BlogPlatform, string> = {
        "Medium": "M",
        "Dev.to": "D",
        "Hashnode": "H",
        "Personal": "P"
    };
    return icons[platform];
}

export function getPlatformColor(platform: BlogPlatform): string {
    const colors: Record<BlogPlatform, string> = {
        "Medium": "bg-zinc-900 dark:bg-white text-white dark:text-black",
        "Dev.to": "bg-zinc-800 dark:bg-zinc-200 text-white dark:text-black",
        "Hashnode": "bg-blue-600 text-white",
        "Personal": "bg-emerald-600 text-white"
    };
    return colors[platform];
}

export function getPlatformGradient(platform: BlogPlatform): string {
    const gradients: Record<BlogPlatform, string> = {
        "Medium": "from-zinc-50/50 to-transparent dark:from-zinc-900/30 dark:to-transparent",
        "Dev.to": "from-purple-50/50 to-transparent dark:from-purple-950/30 dark:to-transparent",
        "Hashnode": "from-blue-50/50 to-transparent dark:from-blue-950/30 dark:to-transparent",
        "Personal": "from-emerald-50/50 to-transparent dark:from-emerald-950/30 dark:to-transparent"
    };
    return gradients[platform];
}

export function getPlatformAccent(platform: BlogPlatform): string {
    const accents: Record<BlogPlatform, string> = {
        "Medium": "border-zinc-900 dark:border-zinc-100",
        "Dev.to": "border-purple-500 dark:border-purple-400",
        "Hashnode": "border-blue-500 dark:border-blue-400",
        "Personal": "border-emerald-500 dark:border-emerald-400"
    };
    return accents[platform];
}
