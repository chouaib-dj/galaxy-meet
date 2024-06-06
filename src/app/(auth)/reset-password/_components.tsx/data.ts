import { z } from "zod";

export const formSchema = z
  .object({
    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password must be atleast 8 characters" })
      .max(30, "Password must be under 30 characters."),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
export type FormValues = z.infer<typeof formSchema>;
export const DEFAULT_FORM_VALUES = {
  password: "",
  confirmPassword: "",
};
