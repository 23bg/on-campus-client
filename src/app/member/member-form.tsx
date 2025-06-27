import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
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
import { memberFormSchema } from "@/validation/member-schema-validation"


type MemberFormType = z.infer<typeof memberFormSchema>

export function MemberForm() {
    const form = useForm<MemberFormType>({
        resolver: zodResolver(memberFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            role: "",
            orgId: "",
            orgType: "",
            isVerified: false,
            isActive: true,
            createdBy: "",
            updatedBy: "",
        },
    })

    const onSubmit = (values: MemberFormType) => {
        console.log("Member form submitted:", values)
        // API call or dispatch here
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {Object.keys(form.getValues()).map((fieldName) => (
                    <FormField
                        key={fieldName}
                        control={form.control}
                        name={fieldName as keyof MemberFormType}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">{field.name}</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder={field.name}
                                        type={typeof field.value === "boolean" ? "text" : "text"}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ))}
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
