export interface CollegeType {
  id: string;
  name: string;
  code: string;
  type: string;
  university: string;
  establishedYear: number;
  aicteApproved: boolean;
  naacGrade: string;
  naccScore: number;
  collegeCode: string;
  affiliationNumber: string;
  panNumber: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  logoUrl: string;
  coverImageUrl: string;
  themeColor: string;
  studentsCount: number;
  teachersCount: number;
  membersCount: number;
  adminsCount: number;
  placementYearStart: number;
  isVerified: boolean;
  verificationStatus: string;
  status: string;
  createdAt: string; // ISO string or Date type if needed
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  internalMeta: Record<string, any>; // or a more specific type if known
}
