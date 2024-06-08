import { LinkedInIcon, GithubIcon } from "@/assets/icons/social-media";

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
      route: "/testimonials",
      label: "testimonials",
    },
    {
      route: "/about",
      label: "about",
    },
    {
      route: "/contact",
      label: "contact",
    },
    {
      route: "/faq",
      label: "faq",
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
];
export const SOCIAL_MEDIA = [
  { Icon: GithubIcon, label: "github", route: "https://github.com/chouaib-dj" },
  {
    Icon: LinkedInIcon,
    label: "linkedin",
    route: "https://www.linkedin.com/in/chouaib-djaidri-43558b2a7/",
  },
];
