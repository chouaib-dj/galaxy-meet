import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LoginForm } from "./_components/login-form";

const Page = () => {
  return (
    <>
      <LoginForm />
      <div className="text-center">
        Don&apos;t have an account?{" "}
        <Button asChild variant="link">
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </div>
    </>
  );
};

export default Page;
