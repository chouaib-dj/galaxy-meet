import { z } from "zod";

export const formSchema = z.object({
  fullName: z
    .string()
    .min(1, { message: "Full Name is required" })
    .min(3, "Full Name must be atleast 3 characters")
    .max(50, "Full name must be under 50 characters.")
    .regex(/^[A-Za-z]+(?: [A-Za-z]+)?$/, "Invalid first name"),
  email: z.string().min(1, { message: "Email is required" }).email(),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .min(8, { message: "Message must be atleast 8 characters" })
    .max(255, "Message must be under 255 characters."),
});
export type FormValues = z.infer<typeof formSchema>;
export const DEFAULT_FORM_VALUES = {
  fullName: "",
  email: "",
  message: "",
};
