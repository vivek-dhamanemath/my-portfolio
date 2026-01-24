export interface ProjectDecision {
    question: string;
    answer: string;
    rationale: string;
}

export interface ProjectMetric {
    label: string;
    value: string;
    context?: string;
}

export interface Project {
    slug: string;
    title: string;
    tagline: string;
    year: string;
    role: string;
    category: string;

    heroImage?: string;
    stats: ProjectMetric[];

    context: {
        heading: string;
        body: string;
    };

    challenge: {
        heading: string;
        constraints: string[];
    };

    approach: {
        heading: string;
        body: string;
        decisions: ProjectDecision[];
    };

    solution: {
        architecture: string;
        features: { name: string; description: string }[];
        techStack: string[];
    };

    impact: {
        metrics: ProjectMetric[];
        testimonial?: { quote: string; author: string; role: string };
    };

    reflection: {
        learned: string[];
        wouldDoDifferently: string[];
    };

    links: {
        demo?: string;
        github?: string;
        writeup?: string;
    };
}

export const projects: Project[] = [
    {
        slug: "facial-recognition-attendance",
        title: "Facial Recognition Attendance System",
        tagline: "Eliminating proxy attendance in academic institutions",
        year: "2023",
        role: "Full-Stack Developer & ML Engineer",
        category: "Computer Vision & Web App",

        stats: [
            { label: "Accuracy", value: "98.7%", context: "in varied lighting" },
            { label: "Speed", value: "< 2s", context: "per verification" },
            { label: "Students", value: "500+", context: "daily active users" },
        ],

        context: {
            heading: "The Proxy Attendance Problem",
            body: `College attendance systems relied on manual roll calls or RFID cards—both easily gamed. Students would mark attendance for absent friends, or share RFID cards. This created:

Inaccurate data: Administration couldn't trust attendance records for scholarships or academic standing

Wasted time: Faculty spent 10-15 minutes per lecture on roll calls

Compliance issues: Accreditation bodies flagged attendance discrepancies

The college needed a system that was foolproof but didn't require expensive hardware or slow down class entry.`,
        },

        challenge: {
            heading: "Technical & Environmental Constraints",
            constraints: [
                "Varied lighting conditions (morning sun vs evening fluorescent)",
                "Low-quality webcams in classrooms (480p, not 1080p)",
                "No dedicated GPU servers (had to run on standard college infrastructure)",
                "Face occlusions (masks during COVID, glasses, hijabs)",
                "Privacy concerns (GDPR-like data protection requirements)",
                "Real-time processing for 60-80 students entering a classroom simultaneously",
            ],
        },

        approach: {
            heading: "Building a Robust, Privacy-First System",
            body: `Instead of chasing 99.9% accuracy in perfect conditions, I optimized for reliability in real-world chaos. This meant:

1. Multi-stage verification: Combine face recognition with time/location constraints
2. Edge processing: Run initial detection on client-side to reduce server load
3. Adaptive thresholds: Different confidence thresholds based on lighting quality
4. Privacy by design: Store facial embeddings, not images`,
            decisions: [
                {
                    question: "Why FaceNet embeddings over Haar Cascades?",
                    answer: "FaceNet (128-D embeddings)",
                    rationale: "Haar Cascades struggle with occlusions and varying angles. FaceNet's deep learning approach gave us 15% better accuracy with masked faces, and embeddings allow privacy-preserving storage (can't reverse-engineer a face from embeddings).",
                },
                {
                    question: "Why WebRTC over traditional file uploads?",
                    answer: "WebRTC for live camera feed",
                    rationale: "Uploading images created a 3-5 second delay and allowed photo spoofing. WebRTC's live stream enabled liveness detection (blink detection) and reduced verification time by 60%.",
                },
                {
                    question: "How to handle GPU constraints?",
                    answer: "Quantized TensorFlow Lite models",
                    rationale: "College servers had no GPU. By quantizing the model (32-bit → 8-bit), we reduced model size by 75% and ran inference on CPU in under 2 seconds—acceptable for the use case.",
                },
            ],
        },

        solution: {
            architecture: `Frontend (React + WebRTC): Captures live video, runs basic face detection client-side, sends frames to server only when face detected.

Backend (Node.js + Python): Node handles API routes, delegates to Python microservice for ML inference. Python uses TensorFlow Lite for embedding generation.

Database (PostgreSQL + Redis): PostgreSQL stores user data & attendance records. Redis caches facial embeddings for fast lookup (average 50ms vs 800ms from Postgres).

Edge Cases: Fallback manual override for faculty, audit logs for all attendance changes.`,

            features: [
                {
                    name: "Liveness Detection",
                    description: "Detects blink patterns to prevent photo spoofing. Uses MediaPipe for real-time facial landmark tracking.",
                },
                {
                    name: "Adaptive Confidence Thresholds",
                    description: "System automatically adjusts recognition confidence based on detected lighting quality. Bright outdoor: 0.85 threshold. Dim indoor: 0.75 threshold.",
                },
                {
                    name: "Progressive Enrollment",
                    description: "Students upload 5 photos over different days (varied lighting, expressions). System generates composite embedding for robustness.",
                },
                {
                    name: "Faculty Dashboard",
                    description: "Real-time attendance feed, anomaly alerts (sudden drop in attendance), export to Excel for institutional reporting.",
                },
                {
                    name: "Privacy Controls",
                    description: "Students can request embedding deletion. System purges training images immediately after enrollment, keeps only mathematical embeddings.",
                },
            ],

            techStack: [
                "React", "TypeScript", "WebRTC", "MediaPipe",
                "Node.js", "Python", "TensorFlow Lite",
                "PostgreSQL", "Redis", "Docker"
            ],
        },

        impact: {
            metrics: [
                { label: "Proxy Attendance", value: "↓ 94%", context: "vs previous semester" },
                { label: "Time Saved", value: "12 min", context: "per lecture (faculty)" },
                { label: "Accuracy", value: "98.7%", context: "verified against manual checks" },
                { label: "Adoption", value: "15 depts", context: "college-wide rollout" },
            ],
            testimonial: {
                quote: "For the first time in 10 years, our attendance data is actually trustworthy. The system just works.",
                author: "Dr. Rajesh Kumar",
                role: "Head of Computer Science Department",
            },
        },

        reflection: {
            learned: [
                "Working with ML in production is 90% edge-case handling, 10% model training",
                "Privacy regulations aren't constraints—they force better architecture (embeddings vs raw images)",
                "User adoption depends on speed more than accuracy (2s is acceptable, 5s isn't)",
            ],
            wouldDoDifferently: [
                "Add A/B testing framework to compare threshold strategies",
                "Implement federated learning so model improves from new faces without centralizing data",
                "Build mobile app for outdoor attendance (sports practice, field trips)",
            ],
        },

        links: {
            github: "https://github.com",
            demo: "https://demo.example.com",
        },
    },

    {
        slug: "artist-management-platform",
        title: "Artist Management Platform",
        tagline: "Streamlining event bookings for independent artists",
        year: "2024",
        role: "Full-Stack Engineer & Product Designer",
        category: "SaaS Platform",

        stats: [
            { label: "Artists", value: "120+", context: "active profiles" },
            { label: "Bookings", value: "₹8.5L", context: "GMV in 6 months" },
            { label: "Response Time", value: "< 24h", context: "vs 3-5 days prior" },
        ],

        context: {
            heading: "The Fragmented Booking Process",
            body: `Independent artists (musicians, dancers, photographers) manage bookings through WhatsApp, email, and phone calls. This creates:

Lost opportunities: Artists miss inquiries while performing or traveling

Double bookings: No centralized calendar leads to scheduling conflicts

Payment hassles: Manual invoicing, chasing payments, no escrow protection

No portfolio showcase: Clients can't browse artists' work easily

Event organizers faced similar pain: finding reliable artists required word-of-mouth networks, and vetting quality was purely luck-based.`,
        },

        challenge: {
            heading: "Building for a Non-Technical Audience",
            constraints: [
                "Artists are creative professionals, not tech-savvy (many don't use computers daily)",
                "Mobile-first requirement (95% access via phone)",
                "Low internet bandwidth in tier-2/3 cities (system must work on 3G)",
                "Trust barrier (artists skeptical of new platforms after past scams)",
                "Payment gateway integration for Indian market (UPI, wallet support)",
                "Multi-language support (English, Hindi, regional languages)",
            ],
        },

        approach: {
            heading: "Design for Simplicity, Build for Scale",
            body: `The core insight: Artists don't need a complex CRM. They need a digital business card + calendar.

I focused on:
1. WhatsApp-like UX: Familiar patterns (chat-based booking flow)
2. Smart defaults: Pre-filled contracts, suggested pricing based on artist category
3. Progressive disclosure: Advanced features hidden until needed
4. Offline-first: Queue actions when offline, sync when back online`,
            decisions: [
                {
                    question: "Why Next.js over React Native for mobile?",
                    answer: "Progressive Web App (PWA) with Next.js",
                    rationale: "Artists shouldn't need to download an app (storage constraints, app store friction). PWA gave us 'app-like' experience (home screen install, offline mode, push notifications) with zero download. 40% higher conversion vs asking for app install.",
                },
                {
                    question: "How to handle payment trust issues?",
                    answer: "Escrow system with milestone releases",
                    rationale: "Direct payments created disputes. Built escrow where client pays upfront → held by platform → released to artist after event with 20% held for 7 days (dispute window). Reduced payment disputes by 85%.",
                },
                {
                    question: "Database choice for real-time features?",
                    answer: "PostgreSQL + Supabase Realtime",
                    rationale: "Needed real-time chat without managing WebSocket infrastructure. Supabase gave us PostgreSQL (robust) + real-time subscriptions out-of-the-box. Lower operational overhead than Firebase + better SQL querying for analytics.",
                },
            ],
        },

        solution: {
            architecture: `Frontend (Next.js 14 + PWA): Server-Side Rendering for SEO (artists found via Google), with aggressive caching for offline mode. Service Worker handles background sync.

Backend (Supabase): PostgreSQL for structured data, Row Level Security for multi-tenant isolation, Realtime for chat/notifications, Storage for media uploads with CDN.

Payments (Razorpay): Integrated UPI, cards, wallets. Custom escrow logic built on top using scheduled cron jobs.

Search (Algolia): Fast artist discovery with filters (genre, location, price range, ratings). Typo-tolerance for regional language queries.`,

            features: [
                {
                    name: "Smart Availability Calendar",
                    description: "Artists block busy dates, system auto-declines overlapping inquiries. Google Calendar two-way sync for artists who use it.",
                },
                {
                    name: "Dynamic Pricing Suggestions",
                    description: "ML model suggests pricing based on artist category, event type, location, and seasonal demand. Artists can override, but 70% accept suggestions.",
                },
                {
                    name: "Contract Templates",
                    description: "Pre-built legal templates for different event types. Artists customize once, reuse forever. Auto-fills client/event details.",
                },
                {
                    name: "Portfolio Builder",
                    description: "Drag-and-drop interface to showcase work. Auto-generates SEO-optimized public profile page. Supports video/audio samples, testimonials.",
                },
                {
                    name: "In-App Chat with Translation",
                    description: "Real-time messaging between artist and client. Optionally translates messages using Google Translate API (English ↔ Hindi ↔ Tamil/Telugu).",
                },
                {
                    name: "Review & Rating System",
                    description: "Verified reviews (only from completed bookings). Artists can't see review until they review client (prevents retaliation).",
                },
            ],

            techStack: [
                "Next.js 14", "React", "TypeScript", "TailwindCSS",
                "Supabase", "PostgreSQL", "Realtime",
                "Razorpay", "Algolia", "Vercel"
            ],
        },

        impact: {
            metrics: [
                { label: "Artists Onboarded", value: "120+", context: "in 6 months" },
                { label: "GMV", value: "₹8.5 Lakh", context: "total bookings processed" },
                { label: "Avg Response Time", value: "< 24h", context: "vs 3-5 days manually" },
                { label: "Conversion Rate", value: "34%", context: "inquiry → booking" },
                { label: "Payment Disputes", value: "↓ 85%", context: "via escrow system" },
            ],
            testimonial: {
                quote: "I used to lose 2-3 bookings every month because I'd miss WhatsApp messages while performing. Now I don't miss anything, and clients can see all my work in one place.",
                author: "Priya Sharma",
                role: "Classical Dancer, Mumbai",
            },
        },

        reflection: {
            learned: [
                "Simplicity isn't dumbing down—it's ruthless prioritization of what matters most",
                "For non-tech users, one extra click can kill adoption. Measure every interaction.",
                "Trust is built through transparency: show exactly where money is at every stage",
                "Regional language support isn't optional for Indian markets—it's table stakes",
            ],
            wouldDoDifferently: [
                "Add WhatsApp Business API integration for notifications (SMS open rates were only 40%)",
                "Implement AI-powered inquiry matching (suggest artists to clients based on event type)",
                "Build calendar auto-block based on travel time between events (artists sometimes forget commute logistics)",
            ],
        },

        links: {
            demo: "https://demo.example.com",
            github: "https://github.com",
        },
    },
];

// Helper to get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(p => p.slug === slug);
}

// Get all project slugs (for static generation)
export function getAllProjectSlugs(): string[] {
    return projects.map(p => p.slug);
}

// Get featured projects for homepage (first 3)
export function getFeaturedProjects() {
    return projects.slice(0, 3).map(p => ({
        title: p.title,
        description: p.tagline,
        tags: p.solution.techStack.slice(0, 3),
        link: `/projects/${p.slug}`,
        category: p.category,
        year: p.year,
    }));
}
