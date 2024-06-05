import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignUpForm } from "./_components/sign-up-form";

const Page = () => {
  return (
    <>
      <SignUpForm />
      <div className="text-center">
        Already have an account?{" "}
        <Button asChild variant="link">
          <Link href="/login">Sign in</Link>
        </Button>
      </div>
    </>
  );
};

export default Page;
