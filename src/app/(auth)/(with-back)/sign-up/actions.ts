"use server";

import { createClient } from "@/utils/supabase/server";
import { formSchema } from "./_components/data";
import { revalidatePath } from "next/cache";

export type FormState =
  | {
      err: {
        msg: string;
        data: {
          [key: string]: string;
        } | null;
      };
    }
  | { msg: { title: string; description: string } }
  | null;

export const signup = async (state: FormState, formData: FormData) => {
  const validationResult = formSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!validationResult.success) {
    const errors = validationResult.error.issues.reduce((acc, issue) => {
      const issueField = issue.path[0] as string;
      if (!acc[issueField]) {
        acc[issueField] = issue.message;
      }
      return acc;
    }, {} as { [key: string]: string });
    return { err: { msg: "validation error", data: errors } };
  }

  const supabase = createClient();
  const signUpData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const signUpAdditionalData = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
  };
  const { error } = await supabase.auth.signUp({
    ...signUpData,
    options: {
      data: signUpAdditionalData,
    },
  });
  if (error) return { err: { msg: error.message, data: null } };

  revalidatePath("/", "layout");
  return {
    msg: {
      title: "Account Created Successfully!",
      description: "Check your email to activate your account.",
    },
  };
};
