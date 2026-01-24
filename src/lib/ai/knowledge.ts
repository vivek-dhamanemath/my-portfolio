export const portfolioData = {
    bio: {
        name: "Vivek Dhamanemath",
        focus: "Java Full-Stack Developer",
        education: "Master of Computer Application (MCA)",
        location: "Bengaluru, India",
        summary: "I specialize in building high-performance digital products that combine technical precision with intentional design. With a focus on clean architecture and seamless user experiences, I help turn complex ideas into refined digital realities."
    },
    experiences: [
        {
            company: "C-DAC Bengaluru",
            role: "Project Associate (SDE)",
            duration: "August 2025 - Present",
            location: "Bengaluru, India",
            description: "Working on cutting-edge software solutions and research projects at India's premier R&D organization.",
            achievements: [
                "Developed and deployed scalable web applications using React and Spring Boot",
                "Implemented RESTful APIs and integrated third-party services",
                "Collaborated with cross-functional teams to deliver critical government projects on schedule"
            ],
            technologies: ["Java", "Spring Boot", "React", "Docker", "Kubernetes", "AWS", "PostgreSQL"]
        },
        {
            company: "WORKFLOW SOFTWARES",
            role: "Java Intern",
            duration: "June 2024 - September 2024",
            location: "Remote",
            description: "Contributed to full-stack development of SaaS product during internship.",
            achievements: [
                "Built responsive frontend components using React and TypeScript",
                "Implemented Bank Management System using Java and MySQL",
                "Participated in agile development cycle and code reviews"
            ],
            technologies: ["React", "Java", "Spring Boot", "MySQL", "Git"]
        }
    ],
    projects: [
        {
            title: "Project One",
            description: "A comprehensive solution for managing complex workflows and team collaboration.",
            tags: ["Next.js", "TypeScript", "Tailwind"]
        },
        {
            title: "Project Two",
            description: "An AI-powered dashboard providing real-time analytics and predictive insights.",
            tags: ["React", "Python", "Cloud"]
        },
        {
            title: "Project Three",
            description: "A secure and efficient platform for digital asset management and distribution.",
            tags: ["Node.js", "PostgreSQL", "Docker"]
        }
    ],
    certifications: [
        {
            name: "Spring Boot Course",
            issuer: "Scaler",
            date: "Jan 2026",
            skills: ["Spring Boot", "Spring MVC", "Spring Data JPA", "RESTful APIs", "Dependency Injection"]
        },
        {
            name: "Oracle Java Foundations",
            issuer: "Oracle",
            date: "Dec 2023",
            skills: ["Java Fundamentals", "Object-Oriented Programming", "Java Syntax", "Data Types"]
        },
        {
            name: "Docker Essentials: A Developer Introduction",
            issuer: "IBM",
            date: "Dec 2023",
            skills: ["Docker", "Containerization", "Docker Images", "Docker Compose", "Container Deployment"]
        },
        {
            name: "JavaScript Essentials",
            issuer: "CISCO",
            date: "Dec 2023",
            skills: ["JavaScript", "DOM Manipulation", "ES6+", "Async Programming", "Web Development"]
        },
        {
            name: "OCI Foundations Associate",
            issuer: "Oracle",
            date: "Dec 2023",
            skills: ["Oracle Cloud", "Cloud Infrastructure", "Cloud Networking", "Cloud Storage", "Identity Management"]
        },
        {
            name: "Official \"Learn Next.js\" by Vercel",
            issuer: "Vercel",
            date: "Dec 2023",
            skills: ["Next.js", "React", "TypeScript", "Performance", "Hooks", "State Management"]
        },
        {
            name: "Meta Front-End Professional",
            issuer: "Meta",
            date: "Dec 2023",
            skills: ["React", "TypeScript", "Performance", "Hooks", "State Management"]
        }
    ],
    capabilities: [
        "Frontend Engineering",
        "Backend Engineering",
        "Full Stack Engineering",
        "Rapid Prototyping"
    ],
    technicalStack: {
        languages: ["Java", "JavaScript", "TypeScript", "Python"],
        frameworks: ["React", "Next.js", "Spring Boot", "Node.js", "Express"],
        tools: ["Docker", "Kubernetes", "Git", "PostgreSQL", "MySQL", "AWS", "Oracle Cloud"]
    },
    portfolioBuildInfo: "This portfolio is built using Next.js 15, TypeScript, and Tailwind CSS. It features a custom editorial design with smooth scrolling, dark mode support, and a responsive layout. It uses framer-motion for animations and the Gemini API for the AI-powered search features. The architecture follows a component-based approach with clean separation of concerns."
};

export const knowledgeBasePrompt = `
You are the AI assistant for Vivek Dhamanemath's professional portfolio. 
Your goal is to answer questions about Vivek's experience, projects, certifications, and skills using the following data:

${JSON.stringify(portfolioData, null, 2)}

Rules:
1. Be professional, concise, and helpful.
2. If the user asks about something not in the data, politely say you don't have that information but invite them to contact Vivek.
3. If they ask about how the portfolio was built, refer to the 'portfolioBuildInfo' section.
4. Keep the tone sophisticated and editorial, matching the portfolio's design.
5. If the user asks to "show" or "see" a certain section (like "Show me your projects"), include a special directive in your response like [SCROLL:projects].
6. Vivek JD is the same person as Vivek Dhamanemath.
`;
