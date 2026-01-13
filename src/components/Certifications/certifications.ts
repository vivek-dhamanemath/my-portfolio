export type CertificationCategory = 'cloud' | 'frontend' | 'backend' | 'devops' | 'other';

export interface Certification {
    id: string;
    name: string;
    issuer: string;
    issueDate: string; // "Jan 2024" format
    credentialId: string;
    verificationUrl: string;
    logo: string; // "/certifications/aws-logo.svg"
    image?: string; // "/certifications/certs/aws-cert.jpg"
    category: CertificationCategory;
    skills: string[];
    featured: boolean; // Show on homepage
}

export const certifications: Certification[] = [
    {
        id: 'spring-boot-course',
        name: 'Spring Boot Course',
        issuer: 'Scaler',
        issueDate: 'Jan 2026',
        credentialId: 'AWS-SAA-2023-12345',
        verificationUrl: 'https://moonshot.scaler.com/s/sl/DSUqCQscOS?_gl=1*ec0wwf*_gcl_au*Njc0Mjg0NDI5LjE3NjgxMjgzNzU.*FPAU*MTMzMzAwOTQzOS4xNzY4MTI4Mzcy*_ga*ODYyMDQzNDQuMTc2ODEyODM3NQ..*_ga_53S71ZZG1X*czE3NjgzMjE2MTMkbzIkZzEkdDE3NjgzMjM3NjIkajYwJGwwJGg3MTk0ODQyNTk.',
        logo: '/certifications/spring.svg',
        image: '/certifications/certs/spring.png',
        category: 'backend',
        skills: ['Spring Boot', 'Spring MVC', 'Spring Data JPA', 'RESTful APIs', 'Dependency Injection'],
        featured: true,
    },

    {
        id: 'oracle-java-foundations',
        name: 'Oracle Java Foundations',
        issuer: 'Oracle',
        issueDate: 'Dec 2023',
        credentialId: 'Oracle Java Foundations',
        verificationUrl: 'https://www.oracle.com/java/technologies/javase-certification.html',
        logo: '/certifications/java.svg',
        image: '/certifications/certs/java-cert.png',
        category: 'backend',
        skills: ['Java Fundamentals', 'Object-Oriented Programming', 'Java Syntax', 'Data Types'],
        featured: false,
    },

    {
        id: 'docker-essentials',
        name: 'Docker Essentials: A Developer Introduction',
        issuer: 'IBM',
        issueDate: 'Dec 2023',
        credentialId: 'Docker Essentials: A Developer Introduction',
        verificationUrl: 'https://www.oracle.com/java/technologies/javase-certification.html',
        logo: '/certifications/docker.svg',
        image: '/certifications/certs/docker-cert.png',
        category: 'devops',
        skills: ['Docker', 'Containerization', 'Docker Images', 'Docker Compose', 'Container Deployment'],
        featured: false,
    },

    {
        id: 'javascript-essentials',
        name: 'JavaScript Essentials',
        issuer: 'CISCO',
        issueDate: 'Dec 2023',
        credentialId: 'JavaScript Essentials',
        verificationUrl: 'https://www.cisco.com/certification/verify',
        logo: '/certifications/javascript.svg',
        image: '/certifications/certs/javascript-cert.png',
        category: 'frontend',
        skills: ['JavaScript', 'DOM Manipulation', 'ES6+', 'Async Programming', 'Web Development'],
        featured: false,
    },

    {
        id: 'oci-foundations-associate',
        name: 'OCI Foundations Associate',
        issuer: 'Oracle',
        issueDate: 'Dec 2023',
        credentialId: 'OCI Foundations Associate',
        verificationUrl: 'https://www.oracle.com/java/technologies/javase-certification.html',
        logo: '/certifications/cloud.svg',
        image: '/certifications/certs/cloud-cert.png',
        category: 'cloud',
        skills: ['Oracle Cloud', 'Cloud Infrastructure', 'Cloud Networking', 'Cloud Storage', 'Identity Management'],
        featured: true,
    },

    {
        id: 'learn-nextjs',
        name: 'Official "Learn Next.js" by Vercel',
        issuer: 'Vercel',
        issueDate: 'Dec 2023',
        credentialId: 'Learn Next.js',
        verificationUrl: 'https://www.vercel.com/learn/nextjs',
        logo: '/certifications/nextjs.svg',
        image: '/certifications/certs/nextjs-cert.png',
        category: 'frontend',
        skills: ['Next.js', 'React', 'TypeScript', 'Performance', 'Hooks', 'State Management'],
        featured: false,
    },

    {
        id: 'meta-frontend-professional',
        name: 'Meta Front-End Professional',
        issuer: 'Meta',
        issueDate: 'Dec 2023',
        credentialId: 'META-REACT-ADV-8901',
        verificationUrl: 'https://www.meta.com/learn/nextjs',
        logo: '/certifications/meta.svg',
        image: '/certifications/certs/meta-cert.png',
        category: 'frontend',
        skills: ['React', 'TypeScript', 'Performance', 'Hooks', 'State Management'],
        featured: true,
    },

    // {
    //     id: 'react-advanced',
    //     name: 'Advanced React & Performance',
    //     issuer: 'Meta Frontend Academy',
    //     issueDate: 'Aug 2023',
    //     credentialId: 'META-REACT-ADV-8901',
    //     verificationUrl: 'https://www.coursera.org/verify',
    //     logo: '/certifications/react.svg',
    //     category: 'frontend',
    //     skills: ['React', 'TypeScript', 'Performance', 'Hooks', 'State Management'],
    //     featured: true,
    // },
    // {
    //     id: 'nodejs-professional',
    //     name: 'Node.js Professional Certification',
    //     issuer: 'OpenJS Foundation',
    //     issueDate: 'May 2023',
    //     credentialId: 'NODEJS-PRO-2023-5678',
    //     verificationUrl: 'https://openjsf.org/certification',
    //     logo: '/certifications/nodejs.svg',
    //     category: 'backend',
    //     skills: ['Node.js', 'Express', 'REST API', 'WebSockets', 'Microservices'],
    //     featured: true,
    // },
    // {
    //     id: 'docker-kubernetes',
    //     name: 'Docker & Kubernetes Administrator',
    //     issuer: 'Cloud Native Computing Foundation',
    //     issueDate: 'Mar 2023',
    //     credentialId: 'CKA-2023-3456',
    //     verificationUrl: 'https://www.cncf.io/certification',
    //     logo: '/certifications/kubernetes.svg',
    //     category: 'devops',
    //     skills: ['Docker', 'Kubernetes', 'Container Orchestration', 'CI/CD', 'DevOps'],
    //     featured: false,
    // },
    // {
    //     id: 'java-spring-boot',
    //     name: 'Java Spring Boot Specialist',
    //     issuer: 'Spring Academy',
    //     issueDate: 'Jan 2023',
    //     credentialId: 'SPRING-BOOT-2023-7890',
    //     verificationUrl: 'https://spring.io/certification',
    //     logo: '/certifications/spring.svg',
    //     category: 'backend',
    //     skills: ['Java', 'Spring Boot', 'JPA', 'Microservices', 'REST API'],
    //     featured: true,
    // },
];

export const getCertificationsByCategory = (category: CertificationCategory | 'all') => {
    if (category === 'all') return certifications;
    return certifications.filter(cert => cert.category === category);
};

export const getFeaturedCertifications = () => {
    return certifications.filter(cert => cert.featured);
};

export const categories: { value: CertificationCategory | 'all'; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'cloud', label: 'Cloud' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'devops', label: 'DevOps' },
];
