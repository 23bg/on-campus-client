"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { collegeFormSchema } from "@/validation/college-schema-validation"

type CollegeFormType = z.infer<typeof collegeFormSchema>

export function CollegeForm() {
  const form = useForm<CollegeFormType>({
    resolver: zodResolver(collegeFormSchema),
    defaultValues: {
      name: "",
      code: "",
      type: "",
      university: "",
      establishedYear: "",
      aicteApproved: "",
      naacGrade: "",
      naccScore: "",
      collegeCode: "",
      affiliationNumber: "",
      panNumber: "",
      email: "",
      phone: "",
      website: "",
      address: "",
      logoUrl: "",
      coverImageUrl: "",
      themeColor: "",
      studentsCount: "",
      teachersCount: "",
      membersCount: "",
      adminsCount: "",
      placementYearStart: "",
      isVerified: false,
      verificationStatus: "",
      status: "",
      createdAt: "",
      createdBy: "",
      updatedAt: "",
      updatedBy: "",
      internalMeta: "",
    },
  })

  const onSubmit = (values: CollegeFormType) => {
    console.log("Form submitted:", values)
    // Send to backend or dispatch Redux action
  }

  return (
    <div className="p-10">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold mb-2">Basic Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["name", "code", "type", "university", "establishedYear"].map((fieldName) => (
              <FormField
                key={fieldName}
                control={form.control}
                name={fieldName as keyof CollegeFormType}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">{field.name}</FormLabel>
                    <FormControl>
                      <Input placeholder={field.name} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Regulatory & Accreditation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "aicteApproved",
              "naacGrade",
              "naccScore",
              "collegeCode",
              "affiliationNumber",
              "panNumber",
            ].map((fieldName) => (
              <FormField
                key={fieldName}
                control={form.control}
                name={fieldName as keyof CollegeFormType}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">{field.name}</FormLabel>
                    <FormControl>
                      <Input placeholder={field.name} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Contact & Media</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["email", "phone", "website", "address", "logoUrl", "coverImageUrl", "themeColor"].map(
              (fieldName) => (
                <FormField
                  key={fieldName}
                  control={form.control}
                  name={fieldName as keyof CollegeFormType}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="capitalize">{field.name}</FormLabel>
                      <FormControl>
                        <Input placeholder={field.name} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )
            )}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Stats & Meta</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "studentsCount",
              "teachersCount",
              "membersCount",
              "adminsCount",
              "placementYearStart",
              "isVerified",
              "verificationStatus",
              "status",
              "internalMeta",
              "createdAt",
              "createdBy",
              "updatedAt",
              "updatedBy",
            ].map((fieldName) => (
              <FormField
                key={fieldName}
                control={form.control}
                name={fieldName as keyof CollegeFormType}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">{field.name}</FormLabel>
                    <FormControl>
                      <Input placeholder={field.name} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
        </section>

        <div className="pt-6">
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
      </form>
    </Form>
    </div>
  )
}
