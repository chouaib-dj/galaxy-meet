"use client";

import { Button } from "@/components/ui/button";
import { MoveLeftIcon } from "lucide-react";
import Link from "next/link";
import { LoginForm } from "./_components/login-form";

const Page = () => {
  return (
    <div className="flex flex-col min-h-dvh">
      <div className="h-14 xs:h-16 px-6 flex-shrink-0 flex items-center">
        <Button variant="link" asChild className="gap-2">
          <Link href="/">
            <MoveLeftIcon />
            Back to home page
          </Link>
        </Button>
      </div>
      <div className="flex flex-col gap-4 flex-1 justify-center items-center">
        <LoginForm />
        <div className="text-center">
          Don&apos;t have an account?{" "}
          <Button asChild variant="link">
            <Link href="#">Sign up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
