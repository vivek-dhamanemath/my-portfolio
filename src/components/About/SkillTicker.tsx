"use client";

const SKILLS = [
    { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
    { name: "Spring Boot", icon: "https://cdn.simpleicons.org/springboot/white" },
    { name: "React", icon: "https://cdn.simpleicons.org/react/white" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/white" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/white" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/white" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/white" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/white" },
    { name: "Redis", icon: "https://cdn.simpleicons.org/redis/white" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git/white" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker/white" },
    { name: "AWS", icon: "https://skillicons.dev/icons?i=aws" },
    { name: "Postman", icon: "https://cdn.simpleicons.org/postman/white" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/white" },
    { name: "C", icon: "https://cdn.simpleicons.org/c/white" }
];

export default function SkillTicker() {
    // Standard double-buffer for infinite scroll
    const doubledSkills = [...SKILLS, ...SKILLS];

    return (
        <div className="relative w-full overflow-hidden bg-zinc-950 py-8 border-y border-zinc-900">
            <div className="flex animate-marquee whitespace-nowrap items-center w-max">
                {doubledSkills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-4 px-12">
                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className="h-6 w-6 object-contain opacity-90 transition-opacity hover:opacity-100"
                        />
                        <span className="text-sm font-bold uppercase tracking-[0.4em] text-zinc-100">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>

            {/* Subtle Gradient Overlays */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    animation: marquee 40s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}
