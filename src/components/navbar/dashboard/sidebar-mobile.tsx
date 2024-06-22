"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DASHBOARD_NAVBAR_ITEMS } from "@/constants/navbar";
import { Menu, Power, Rocket } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarMenuItem } from "./sidebar-menu-item";

const SidebarMobile = () => {
  const pathname = usePathname();
  return (
    <header className="flex lg:hidden h-16 items-center justify-between gap-4 shadow-sm bg-accent px-4">
      <Link
        href="/"
        className="flex items-center gap-2 font-semibold uppercase"
      >
        <Rocket className="h-6 w-6 lg:h-8 lg:w-8" />
        <span>galaxy meet</span>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" className="shrink-0 lg:hidden h-10 w-10">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex flex-col w-full xs:max-w-[320px] sm:max-w-[320px]"
        >
          <div className="flex-1 flex flex-col gap-1 xs:gap-8 pt-12">
            <div className="xs:flex-1">
              <nav className="grid items-start font-medium">
                <ul className="grid gap-1">
                  {DASHBOARD_NAVBAR_ITEMS[0].map((props) => (
                    <li key={props.route}>
                      <SidebarMenuItem
                        {...props}
                        isActive={pathname.startsWith(props.route)}
                      />
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <nav className="grid items-start font-medium xs:mt-auto">
              <ul className="grid gap-1">
                {DASHBOARD_NAVBAR_ITEMS[1].map((props) => (
                  <li key={props.route}>
                    <SidebarMenuItem
                      {...props}
                      isActive={pathname.startsWith(props.route)}
                    />
                  </li>
                ))}
                <li>
                  <form action="/auth/signout" method="post" className="w-full">
                    <Button
                      variant="ghost"
                      type="submit"
                      className="gap-2 w-full justify-start capitalize hover:bg-destructive/90 hover:text-white"
                    >
                      <Power size={20} />
                      Logout
                    </Button>
                  </form>
                </li>
              </ul>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default SidebarMobile;
