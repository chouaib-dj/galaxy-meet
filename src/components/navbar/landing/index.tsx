"use client";

import Link from "next/link";
import { MoveRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import NavbarStyles from "@/styles/navbar.module.css";
import { HOME_NAVBAR_ITEMS } from "@/constants/navbar";
import NavbarMobile from "./navbar-mobile";
import { useContext } from "react";
import { AuthContext, UserProps } from "@/app/contexts/auth-context";
import { Skeleton } from "@/components/ui/skeleton";

const getNavbarButtons = (user: UserProps, loading: boolean) => {
  if (loading) return <Skeleton className="w-full h-11" />;
  else {
    return (
      <ul className="flex items-center gap-6 w-full">
        {HOME_NAVBAR_ITEMS[user ? 2 : 1].map(({ label, route }) => (
          <li
            key={label}
            className={label === "sign up" ? "flex-shrink-0" : "flex-1"}
          >
            <Button
              className={"uppercase gap-2 w-full"}
              asChild
              variant={label === "sign up" ? "link" : "default"}
            >
              <Link href={route}>
                {label} {label === "dashboard" && <MoveRight />}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    );
  }
};

const Navbar = () => {
  const { user, loading } = useContext(AuthContext);
  return (
    <header className="sticky top-0 h-16 lg:h-20 border-b bg-background z-50">
      <div className="h-full flex items-center justify-between container px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold uppercase"
        >
          <Rocket className="h-6 w-6 lg:h-8 lg:w-8" />
          <span>galaxy meet</span>
        </Link>
        <nav className="font-medium flex items-center text-base">
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
        <div className="hidden lg:flex justify-end items-center min-w-[185px]">
          {getNavbarButtons(user, loading)}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
