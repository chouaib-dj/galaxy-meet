import { z } from "zod";

export const formSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First Name is required" })
    .min(3, "First Name must be atleast 3 characters")
    .max(30, "First name must be under 30 characters.")
    .regex(/^[A-Za-z]+(?: [A-Za-z]+)?$/, "Invalid first name"),
  lastName: z
    .string()
    .min(1, { message: "Last Name is required" })
    .min(3, "Last Name must be atleast 3 characters")
    .max(20, "Last name must be under 20 characters.")
    .regex(/^[a-zA-Z]+$/, "Invalid last name"),
  email: z.string().min(1, { message: "Email is required" }).email(),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must be atleast 8 characters" })
    .max(30, "Password must be under 30 characters."),
});
export type FormValues = z.infer<typeof formSchema>;
export const DEFAULT_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
