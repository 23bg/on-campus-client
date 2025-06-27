export interface MemberTypes {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password?: string;
  role: string;
  orgId: string;
  orgType: string;
  designation?: string;
  department?: string;
  subjects: string[];
  experienceYears?: number;
  profileImageUrl?: string;
  isVerified: boolean;
  isActive: boolean;
  createdAt: string;
  createdBy?: string;
  updatedAt: string;
  updatedBy?: string;
}