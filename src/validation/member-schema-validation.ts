import { z } from "zod";

// Define schema
export const memberFormSchema = z.object({
    _id: z.string().optional(), // optional for create
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email(),
    phone: z.string().min(10),
    role: z.string(),
    orgId: z.string(),
    orgType: z.string(),
  isVerified: z.boolean().optional().default(false),
  isActive: z.boolean().optional().default(true),

    createdAt: z.string().optional(),
    createdBy: z.string().optional(),
    updatedAt: z.string().optional(),
    updatedBy: z.string().optional(),
})