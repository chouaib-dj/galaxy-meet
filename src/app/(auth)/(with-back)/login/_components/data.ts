import { z } from "zod";

export const formSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email(),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Invalid password" }),
});
export type FormValues = z.infer<typeof formSchema>;
export type FormKeys = keyof FormValues;
export const DEFAULT_FORM_VALUES = {
  email: "",
  password: "",
};
