export type JournalCategory = 'work' | 'convocation' | 'farewell' | 'college' | 'travel' | 'other';

export interface Photo {
    url: string;
    caption?: string;
    alt?: string;
}

export interface JournalEntry {
    id: string;
    title: string;
    description: string;
    location: string;
    coordinates?: [number, number]; // [longitude, latitude]
    date: string; // "Dec 2024"
    photos: Photo[]; // Array of photos (1-5)
    category: JournalCategory;
    era: string; // "2020-2024" or specific year
    year: number; // For chronological grouping
    handwrittenNote?: string; // Margin annotation
}

export interface TimelineChapter {
    year: number;
    title: string;
    description: string;
}

export const journalEntries: JournalEntry[] = [
    {
        id: 'cdac-job-2025',
        title: 'The C-DAC Chapter',
        description: 'Embarked on my professional journey as a Project Associate at C-DAC Bengaluru. Contributing to critical government initiatives and advancing my technical expertise in a high-impact research environment.',
        location: 'C-DAC, Bengaluru, India',
        coordinates: [77.6412, 12.9719], // Approximate C-DAC Bengaluru coordinates
        date: 'Aug 2025',
        photos: [
            {
                url: '/journal/work/cdac-office.jpg',
                caption: 'C-DAC Office',
                alt: 'C-DAC Office'
            },
            {
                url: '/journal/work/desk-setup.jpg',
                caption: 'My workspace',
                alt: 'Work desk'
            },
            {
                url: '/journal/work/karnataka-rajyotsava.jpg',
                caption: 'Karnataka Rajyotsava Celebrations in C-DAC',
                alt: 'Karnataka Rajyotsava'
            }
        ],
        category: 'work',
        era: 'PROFESSIONAL_BEGINNINGS',
        year: 2025,
        handwrittenNote: 'First job. Big dreams.',
    },
    {
        id: 'convocation-2024',
        title: 'Master\'s Convocation',
        description: 'The culmination of two years of hard work, learning, and growth. Receiving my MCA degree was a moment of immense pride.',
        location: 'KLE Technological University, Hubballi',
        coordinates: [77.5946, 12.9716],
        date: 'Nov 2024',
        photos: [
            {
                url: '/journal/convocation/convocation.jpg',
                caption: 'Graduation ceremony',
                alt: 'Graduation ceremony'
            },
            {
                url: '/journal/convocation/convocation1.jpg',
                caption: 'With all college mates and professors',
                alt: 'Convocation ceremony'
            },
            {
                url: '/journal/convocation/convocation2.jpg',
                caption: 'The moment I received my degree',
                alt: 'Convocation ceremony'
            }
        ],
        category: 'convocation',
        era: 'POST-GRADUATION',
        year: 2024,
        handwrittenNote: 'A day I\'ll never forget...',
    },
    {
        id: 'college-farewell',
        title: 'Farewell - Final Chapter',
        description: 'Saying goodbye to the halls that saw us grow from students to professionals. A bittersweet celebration of friendships.',
        location: 'KLE Dr. M.S.Sheshgiri College of Engineering & Technology Belagavi',
        coordinates: [77.5806, 12.9724],
        date: 'Oct 2024',
        photos: [
            {
                url: '/journal/farewell/farewell.jpg',
                caption: 'With all college mates',
                alt: 'Farewell event'
            },
            {
                url: '/journal/farewell/farewell1.jpg',
                caption: 'Group photo with all college mates',
                alt: 'Group photo'
            },
            {
                url: '/journal/farewell/farewell2.jpg',
                caption: 'Momento received by the HOD',
                alt: 'Momento received by the HOD'
            },

        ],
        category: 'farewell',
        era: 'THE_END',
        year: 2024,
        handwrittenNote: 'The end of an era',
    },
    {
        id: 'college-diaries-01',
        title: 'College Diaries',
        description: 'Candid moments between lectures. These small coffee breaks and debates shaped our perspective more than textbooks ever could.',
        location: 'College Campus',
        coordinates: [77.6101, 12.9352],
        date: '2022 - 2024',
        photos: [
            {
                url: '/journal/college-diaries/college-life.jpg',
                caption: 'Moment in Computer lab',
                alt: 'Computer lab'
            },
            {
                url: '/journal/college-diaries/college-life1.jpg',
                caption: 'Dandiya celebrations',
                alt: 'Dandiya celebrations'
            },
            {
                url: '/journal/college-diaries/college-life2.jpg',
                caption: 'Moment with friends',
                alt: 'Moment with friends'
            }
        ],
        category: 'college',
        era: 'CAMPUS_DAYS',
        year: 2022 - 2024,
        handwrittenNote: 'Coffee & conversations',
    },
    {
        id: 'travel-diaries',
        title: 'Travel Diaries',
        description: 'Exploring new horizons, immersing in diverse cultures, and collecting memories from beautiful destinations across the country.',
        location: 'Various Locations, India',
        coordinates: [77.5946, 12.9716], // Default central coordinate
        date: '2022 - 2024',
        photos: [
            {
                url: '/journal/travel/mysore-palace.jpg',
                caption: 'The Royal Mysore Palace',
                alt: 'Mysore Palace'
            },
            {
                url: '/journal/travel/kolhapur-temple.jpg',
                caption: 'Spiritual moments in Kolhapur',
                alt: 'Kolhapur Temple'
            },
            {
                url: '/journal/travel/me.jpg',
                caption: 'Capturing moments',
                alt: 'Travel memory'
            }
        ],
        category: 'travel',
        era: 'ACADEMIC_BREAK',
        year: 2022 - 2024,
        handwrittenNote: 'Adventures & aesthetics',
    }

];

// Sort entries chronologically (newest first)
export const sortedJournalEntries = [...journalEntries].sort((a, b) => b.year - a.year);

// Group entries by year for timeline chapters
export const getEntriesByYear = (): Map<number, JournalEntry[]> => {
    const grouped = new Map<number, JournalEntry[]>();
    sortedJournalEntries.forEach(entry => {
        if (!grouped.has(entry.year)) {
            grouped.set(entry.year, []);
        }
        grouped.get(entry.year)!.push(entry);
    });
    return grouped;
};

// Timeline chapters metadata
export const timelineChapters: TimelineChapter[] = [
    {
        year: 2025,
        title: 'The Professional Era',
        description: 'Stepping into the world of technology and innovation.',
    },
    {
        year: 2024,
        title: 'The Graduate Era',
        description: 'A year of culmination, celebration, and new beginnings.',
    },
    {
        year: 2023,
        title: 'The Journey',
        description: 'Moments of growth, exploration, and discovery.',
    },
];

export const getJournalEntriesByCategory = (category: JournalCategory | 'all') => {
    if (category === 'all') return sortedJournalEntries;
    return sortedJournalEntries.filter(entry => entry.category === category);
};

export const journalCategories: { value: JournalCategory | 'all'; label: string }[] = [
    { value: 'all', label: 'All Entries' },
    { value: 'work', label: 'Work' },
    { value: 'convocation', label: 'Convocation' },
    { value: 'travel', label: 'Travel' },
    { value: 'farewell', label: 'Farewell' },
    { value: 'college', label: 'College' },
];

