import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HOME_NAVBAR_ITEMS } from "@/constants/navbar";
import { Menu } from "lucide-react";
import Link from "next/link";

const NavbarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="pt-16 w-full xs:max-w-md">
        <nav className="font-medium flex flex-col gap-8 text-lg">
          <ul className="flex flex-col gap-2 w-full">
            {HOME_NAVBAR_ITEMS[0].map(({ route, label }) => (
              <li key={label} className="w-full">
                <Button
                  asChild
                  className="uppercase w-full"
                  variant={"ghost"}
                  size={"sm"}
                >
                  <Link href={route}>
                    <span>{label}</span>
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-2 w-full">
            {HOME_NAVBAR_ITEMS[1].map(({ route, label }) => (
              <li className="w-full" key={label}>
                <Button
                  asChild
                  className="uppercase w-full"
                  variant={label === "login" ? "default" : "ghost"}
                  size={"sm"}
                >
                  <Link href={route}>
                    <span>{label}</span>
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMobile;
