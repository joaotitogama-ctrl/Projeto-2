export interface Modality {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  intensity: 'Moderada' | 'Alta' | 'Extrema' | 'Personalizada';
  calories: string;
  duration: string;
  image: string;
}

export interface Plan {
  id: string;
  name: string;
  tagline: string;
  priceMonth: number;
  featured?: boolean;
  badge?: string;
  features: { text: string; included: boolean }[];
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  certifications: string;
  bio: string;
  image: string;
  instagram: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  stars: number;
  content: string;
  timeWithUs: string;
}

export interface StructureItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  highlights: string[];
}
