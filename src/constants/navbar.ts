import {
  CalendarClock,
  History,
  Home,
  LucideIcon,
  Plus,
  Settings,
  Video,
} from "lucide-react";

export type SidebarMenuItemProps = {
  route: string;
  label: string;
  Icon: LucideIcon;
};

export const HOME_NAVBAR_ITEMS = [
  [
    {
      route: "/",
      label: "home",
    },
    {
      route: "/features",
      label: "features",
    },
    {
      route: "/about",
      label: "about",
    },
    {
      route: "/testimonials",
      label: "testimonials",
    },
    {
      route: "/contact",
      label: "contact",
    },
  ],
  [
    {
      route: "/sign-up",
      label: "sign up",
    },
    {
      route: "/login",
      label: "login",
    },
  ],
  [
    {
      route: "/dashboard",
      label: "dashboard",
    },
  ],
];

export const DASHBOARD_NAVBAR_ITEMS: SidebarMenuItemProps[][] = [
  [
    {
      route: "/",
      label: "home",
      Icon: Home,
    },
    {
      route: "/upcoming",
      label: "upcoming",
      Icon: CalendarClock,
    },
    {
      route: "/previous",
      label: "previous",
      Icon: History,
    },
    {
      route: "/recordings",
      label: "recordings",
      Icon: Video,
    },
    {
      route: "/personal-room",
      label: "personal room",
      Icon: Plus,
    },
  ],
  [
    {
      route: "/settings",
      label: "settings",
      Icon: Settings,
    },
  ],
];
