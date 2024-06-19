"use client";

import SubmitButton from "@/components/shared/submit-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { signup } from "../actions";
import { DEFAULT_FORM_VALUES, FormKeys, FormValues, formSchema } from "./data";

export function SignUpForm() {
  const router = useRouter();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: DEFAULT_FORM_VALUES,
    mode: "onChange",
  });
  const [state, action] = useFormState(signup, null);
  useEffect(() => {
    if (state?.err) {
      if (state.err.data) {
        Object.entries(state.err.data).forEach(([field, message]) => {
          form.setError(field as FormKeys, { message });
        });
      } else {
        toast({
          title: state.err.msg,
          variant: "destructive",
        });
      }
    }
    if (state?.msg) {
      toast({
        title: state.msg.title,
        description: state.msg.description,
        variant: "success",
      });
      router.push("/login");
    }
  }, [state]);

  return (
    <Card className="mx-auto w-full rounded-none xs:rounded-lg xs:max-w-md px-1 xs:px-2 py-4">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form action={action} noValidate>
            <div className="space-y-8">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col xs:flex-row gap-4 xs:gap-2">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Chouaib" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Djaidri" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="djaidri.chouaib.24@gmail.com"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="••••••••"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <SubmitButton
                  btnLabel={{ active: "Create an account" }}
                  className="w-full mt-4"
                />
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
