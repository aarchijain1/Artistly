export interface Artist {
  id: string;
  name: string;
  bio: string;
  category: string[];
  languages: string[];
  feeRange: string;
  location: string;
  image?: string;
  rating?: number;
  experience?: string;
  availability?: boolean;
}

export interface BookingRequest {
  id: string;
  artistId: string;
  eventPlannerName: string;
  eventDate: string;
  eventType: string;
  location: string;
  budget: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
}

export interface FilterOptions {
  category: string[];
  location: string[];
  priceRange: string[];
}