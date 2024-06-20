"use server";

import { createClient } from "@/utils/supabase/server";
import { formSchema } from "./_components/data";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type FormState = {
  err: {
    msg: { title: string; description?: string };
    data: {
      [key: string]: string;
    } | null;
  };
} | null;

export async function login(prevState: FormState, formData: FormData) {
  const validationResult = formSchema.safeParse({
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
    return { err: { msg: { title: "validation error" }, data: errors } };
  }

  const supabase = createClient();
  const loginData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const { error } = await supabase.auth.signInWithPassword(loginData);
  if (error)
    return {
      err: {
        msg: { title: "Login Failed", description: error.message },
        data: null,
      },
    };

  revalidatePath("/", "layout");
  redirect("/dashboard");
}
