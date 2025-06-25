import { Artist, BookingRequest } from '@/types/artist';

export const categories = [
  'Singers',
  'Dancers',
  'Speakers',
  'DJs',
  'Musicians',
  'Comedians',
  'Magicians',
  'Bands'
];

export const languages = [
  'English',
  'Hindi',
  'Spanish',
  'French',
  'German',
  'Italian',
  'Portuguese',
  'Japanese',
  'Korean',
  'Chinese'
];

export const feeRanges = [
  'Under $500',
  '$500 - $1,000',
  '$1,000 - $2,500',
  '$2,500 - $5,000',
  '$5,000 - $10,000',
  'Above $10,000'
];

export const locations = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose'
];

export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    bio: 'Professional vocalist with 10+ years of experience in jazz and contemporary music.',
    category: ['Singers'],
    languages: ['English', 'Spanish'],
    feeRange: '$1,000 - $2,500',
    location: 'New York',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400',
    rating: 4.8,
    experience: '10+ years',
    availability: true
  },
  {
    id: '2',
    name: 'Michael Chen',
    bio: 'Award-winning DJ specializing in electronic and hip-hop music for corporate events.',
    category: ['DJs'],
    languages: ['English', 'Chinese'],
    feeRange: '$500 - $1,000',
    location: 'Los Angeles',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    rating: 4.9,
    experience: '8+ years',
    availability: true
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    bio: 'Contemporary dancer and choreographer with expertise in Latin and modern dance.',
    category: ['Dancers'],
    languages: ['English', 'Spanish'],
    feeRange: '$2,500 - $5,000',
    location: 'Miami',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    rating: 4.7,
    experience: '12+ years',
    availability: false
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    bio: 'Motivational speaker and business consultant with expertise in leadership and innovation.',
    category: ['Speakers'],
    languages: ['English'],
    feeRange: '$5,000 - $10,000',
    location: 'Chicago',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    rating: 4.9,
    experience: '15+ years',
    availability: true
  },
  {
    id: '5',
    name: 'The Midnight Band',
    bio: 'Versatile 5-piece band playing everything from classic rock to modern pop hits.',
    category: ['Musicians', 'Bands'],
    languages: ['English'],
    feeRange: '$2,500 - $5,000',
    location: 'Austin',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400',
    rating: 4.6,
    experience: '7+ years',
    availability: true
  },
  {
    id: '6',
    name: 'Comedy Central Tom',
    bio: 'Stand-up comedian with appearances on major TV shows and corporate events.',
    category: ['Comedians'],
    languages: ['English'],
    feeRange: '$1,000 - $2,500',
    location: 'Las Vegas',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
    rating: 4.5,
    experience: '9+ years',
    availability: true
  }
];

export const mockBookings: BookingRequest[] = [
  {
    id: '1',
    artistId: '1',
    eventPlannerName: 'Alice Cooper Events',
    eventDate: '2025-07-15',
    eventType: 'Corporate Gala',
    location: 'Manhattan, NY',
    budget: '$2,000',
    status: 'pending',
    createdAt: '2025-06-20'
  },
  {
    id: '2',
    artistId: '2',
    eventPlannerName: 'Sunset Productions',
    eventDate: '2025-08-01',
    eventType: 'Wedding Reception',
    location: 'Beverly Hills, CA',
    budget: '$800',
    status: 'accepted',
    createdAt: '2025-06-18'
  }
];