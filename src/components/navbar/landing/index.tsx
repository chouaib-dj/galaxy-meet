import Link from "next/link";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import NavbarStyles from "@/styles/navbar.module.css";
import { HOME_NAVBAR_ITEMS } from "@/constants/navbar";
import NavbarMobile from "./navbar-mobile";
const Navbar = () => {
  return (
    <header className="sticky top-0 h-16 lg:h-20 border-b bg-background">
      <div className="h-full flex items-center justify-between container px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold uppercase"
        >
          <Rocket className="h-6 w-6 lg:h-8 lg:w-8" />
          <span>galaxy meet</span>
        </Link>
        <nav className="font-medium flex items-center text-base lg:text-lg">
          <ul
            className={cn(
              "lg:flex gap-4 xl:gap-6 flex-shrink-0 relative hidden",
              NavbarStyles.floatingNav
            )}
          >
            {HOME_NAVBAR_ITEMS[0].map(({ route, label }) => (
              <li key={label}>
                <Link href={route} className="uppercase">
                  <span>{label}</span>
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <NavbarMobile />
        <div className="hidden lg:flex items-center">
          <ul className="flex items-center gap-6">
            {HOME_NAVBAR_ITEMS[1].map(({ label, route }) => (
              <li key={label}>
                <Button
                  className={cn(
                    "uppercase",
                    label !== "login" && "hidden xl:flex"
                  )}
                  asChild
                  variant={label === "login" ? "default" : "link"}
                >
                  <Link href={route}>{label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
