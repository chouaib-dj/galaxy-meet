import { Button } from "@/components/ui/button";
import { MoveLeftIcon } from "lucide-react";
import Link from "next/link";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col min-h-dvh">
      <div className="h-14 xs:h-16 px-4 xs:px-6 flex-shrink-0 flex items-center">
        <Button variant="link" asChild className="gap-2">
          <Link href="/">
            <MoveLeftIcon />
            Back to home page
          </Link>
        </Button>
      </div>
      <div className="flex flex-col gap-4 flex-1 justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;
