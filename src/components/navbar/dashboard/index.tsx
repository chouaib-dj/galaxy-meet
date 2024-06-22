"use client";

import { Button } from "@/components/ui/button";
import { DASHBOARD_NAVBAR_ITEMS } from "@/constants/navbar";
import { Power, Rocket } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarMenuItem } from "./sidebar-menu-item";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="hidden bg-accent lg:block">
      <div className="flex h-full max-h-screen flex-col">
        <div className="flex items-center border-b-2 h-20 px-10">
          <Link
            href="/"
            className="flex items-center gap-3 font-semibold text-lg uppercase"
          >
            <Rocket className="h-8 w-8" />
            <span>galaxy meet</span>
          </Link>
        </div>
        <div className="flex-1 flex flex-col gap-8 py-8">
          <div className="flex-1">
            <nav className="grid items-start font-medium px-4">
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
          <nav className="grid items-start font-medium px-4 mt-auto">
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
      </div>
    </aside>
  );
};

export default Sidebar;
