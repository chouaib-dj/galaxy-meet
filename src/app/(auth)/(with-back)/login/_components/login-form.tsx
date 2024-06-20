"use client";

import { Button } from "@/components/ui/button";
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
import Link from "next/link";
import { useForm } from "react-hook-form";
import { DEFAULT_FORM_VALUES, FormKeys, FormValues, formSchema } from "./data";
import SubmitButton from "@/components/shared/submit-button";
import { login } from "../actions";
import { useFormState } from "react-dom";
import { useEffect } from "react";

export function LoginForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: DEFAULT_FORM_VALUES,
    mode: "onBlur",
  });
  const [state, action] = useFormState(login, null);
  useEffect(() => {
    if (state?.err) {
      if (state.err.data) {
        Object.entries(state.err.data).forEach(([field, message]) => {
          form.setError(field as FormKeys, { message });
        });
      } else {
        toast({
          title: state.err.msg.title,
          description: state.err.msg.description,
          variant: "destructive",
        });
      }
    }
  }, [state]);
  return (
    <Card className="mx-auto w-full rounded-none xs:rounded-lg xs:max-w-md px-1 xs:px-2 py-4">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form action={action} noValidate>
            <div className="space-y-8">
              <div className="flex flex-col gap-4">
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
                <Button
                  asChild
                  variant="link"
                  className="text-sm ml-auto self-end"
                >
                  <Link href="/forgot-password">Forgot your password?</Link>
                </Button>
                <SubmitButton
                  btnLabel={{ active: "Login" }}
                  className="w-full"
                  disabled={!form.formState.isValid}
                />
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
