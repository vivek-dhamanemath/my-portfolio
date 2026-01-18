export type ExperienceType = "Full-time" | "Internship" | "Contract" | "Freelance";

export interface Experience {
    id: string;
    company: string;
    role: string;
    type: ExperienceType;
    duration: string;
    startDate: string; // For sorting
    endDate?: string; // undefined means current
    location?: string;
    description: string;
    achievements: string[];
    technologies: string[];
    companyUrl?: string;
    logo?: string;
}

export const experiences: Experience[] = [
    {
        id: "exp-1",
        company: "C-DAC Bengaluru",
        role: "Project Associate (SDE)",
        type: "Full-time",
        duration: "August 2025 - Present",
        startDate: "2025-08-20",
        location: "Bengaluru, India",
        description: "Working on cutting-edge software solutions and research projects at India's premier R&D organization.",
        achievements: [
            "Developed and deployed scalable web applications using React and Spring Boot",
            "Implemented RESTful APIs and integrated third-party services",
            "Collaborated with cross-functional teams to deliver critical government projects on schedule"
        ],
        technologies: ["Java", "Spring Boot", "React", "Docker", "Kubernetes", "AWS", "PostgreSQL"],
        companyUrl: "https://www.cdac.in/",
        logo: "/experience/cdac-logo.png"
    },
    {
        id: "exp-2",
        company: "WORKFLOW SOFTWARES",
        role: "Java Intern",
        type: "Internship",
        duration: "June 2024 - September 2024",
        startDate: "2024-06-01",
        endDate: "2024-09-30",
        location: "Remote",
        description: "Contributed to full-stack development of SaaS product during internship.",
        achievements: [
            "Built responsive frontend components using React and TypeScript",
            "Implemented Bank Management System using Java and MySQL",
            "Participated in agile development cycle and code reviews"
        ],
        technologies: ["React", "Java", "Spring Boot", "MySQL", "Git"],
        companyUrl: "https://workflowsoftwares.in/",
        logo: "/experience/wfs-logo.png"
    }
];

export function getExperiencesByType(type: ExperienceType | "all"): Experience[] {
    if (type === "all") {
        return experiences;
    }
    return experiences.filter((exp) => exp.type === type);
}

export function getFeaturedExperiences(limit: number = 2): Experience[] {
    return experiences.slice(0, limit);
}

export function isCurrentRole(experience: Experience): boolean {
    return !experience.endDate;
}
