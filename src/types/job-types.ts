export interface JobType {
  id: string;
  title: string;
  description: string;
  location: string;
  salary: number;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  postedAt: string; // ISO date string
  company: {
    name: string;
    logoUrl?: string;
    website?: string;
  };
  tags?: string[];
  isRemote?: boolean;
}
