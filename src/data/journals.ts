export type JournalCategory = 'convocation' | 'farewell' | 'college' | 'travel' | 'other';

export interface JournalEntry {
    id: string;
    title: string;
    description: string;
    location: string;
    coordinates?: [number, number]; // [longitude, latitude]
    date: string; // "Dec 2024"
    image: string; // "/journal/event-name.jpg"
    category: JournalCategory;
    era: string; // "2020-2024" or specific year
}

export const journalEntries: JournalEntry[] = [
    {
        id: 'convocation-2024',
        title: 'Master\'s Convocation',
        description: 'The culmination of two years of hard work, learning, and growth. Receiving my MCA degree was a moment of immense pride.',
        location: 'Belagavi, India',
        coordinates: [77.5946, 12.9716],
        date: 'June 2024',
        image: '/journal/convocation.jpg',
        category: 'convocation',
        era: 'POST-GRADUATION',
    },
    {
        id: 'goa-travel-2023',
        title: 'Coastal Reflections',
        description: 'Finding peace and inspiration along the shores of Goa. A much-needed break to recharge and explore new horizons.',
        location: 'South Goa, India',
        coordinates: [73.9116, 15.2993],
        date: 'Nov 2023',
        image: '/journal/goa.jpg',
        category: 'travel',
        era: 'ACADEMIC_BREAK',
    },
    {
        id: 'college-farewell',
        title: 'Final Chapter',
        description: 'Saying goodbye to the halls that saw us grow from students to professionals. A bittersweet celebration of friendships.',
        location: 'Bengaluru, India',
        coordinates: [77.5806, 12.9724],
        date: 'May 2024',
        image: '/journal/farewell.jpg',
        category: 'farewell',
        era: 'THE_END',
    },
    {
        id: 'college-diaries-01',
        title: 'Daily Rhythms',
        description: 'Candid moments between lectures. These small coffee breaks and debates shaped our perspective more than textbooks ever could.',
        location: 'Bengaluru, India',
        coordinates: [77.6101, 12.9352],
        date: 'Feb 2023',
        image: '/journal/college-life.jpg',
        category: 'college',
        era: 'CAMPUS_DAYS',
    }
];

export const getJournalEntriesByCategory = (category: JournalCategory | 'all') => {
    if (category === 'all') return journalEntries;
    return journalEntries.filter(entry => entry.category === category);
};

export const journalCategories: { value: JournalCategory | 'all'; label: string }[] = [
    { value: 'all', label: 'All Entries' },
    { value: 'convocation', label: 'Convocation' },
    { value: 'travel', label: 'Travel' },
    { value: 'farewell', label: 'Farewell' },
    { value: 'college', label: 'College' },
];
