export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  beforeAfter?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  serviceUsed: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface QuoteFormData {
  fullName: string;
  mobile: string;
  email: string;
  service: string;
  message: string;
}
