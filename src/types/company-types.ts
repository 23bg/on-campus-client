export interface CompanyType {
  id: string;
  name: string;
  type: string;
  sector: string;
  industry: string;
  foundedYear: number;
  companySize: string;
  cin: string;
  gstin: string;
  panNumber: string;
  registrationAuthority: string;
  isRegisteredStartup: boolean;
  email: string;
  phone: string;
  website: string;
  address: string;
  logoUrl: string;
  coverImageUrl: string;
  themeColor: string;
  membersCount: number;
  adminsCount: number;
  jobPostsCount: number;
  isVerified: boolean;
  verificationStatus: string;
  status: string;
  createdAt: string; // ISO string or Date object depending on backend
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  internalMeta: Record<string, any>;
}
