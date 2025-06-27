export interface StudentType {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  studentId: string;
  collegeId: string;
  course: string;
  department: string;
  yearOfAdmission: number;
  graduationYear: number;
  currentYear: number;
  profileImageUrl?: string;
  resumeUrl?: string;
  skills: string[];
  isVerified: boolean;
  isActive: boolean;
  createdAt: string; // ISO timestamp
  createdBy?: string;
  updatedAt: string;
  updatedBy?: string;
}
