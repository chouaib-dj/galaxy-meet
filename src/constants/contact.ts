import { Github, LinkedIn, Whatsapp } from "@/assets/icons/social-media";
import { LucideIcon, Mail, MapPin, Phone } from "lucide-react";

export type ContactAddressProps = {
  id: number;
  Icon: LucideIcon;
  title: string;
};
export type SocialMediaProp = {
  id: string;
  route: string;
  Icon: ({ className }: { className?: string | undefined }) => JSX.Element;
};

export const CONTACT_ADDRESSES: ContactAddressProps[] = [
  { id: 1, Icon: Phone, title: "+213774333628" },
  { id: 2, Icon: Mail, title: "djaidri.chouaib.24@gmail.com" },
  { id: 3, Icon: MapPin, title: "Algeria, Setif" },
];

export const SOCIAL_MEDIA: SocialMediaProp[] = [
  { id: "github", Icon: Github, route: "https://github.com/chouaib-dj" },
  {
    id: "linkedin",
    Icon: LinkedIn,
    route: "https://www.linkedin.com/in/chouaib-djaidri-43558b2a7",
  },
  { id: "whatsapp", Icon: Whatsapp, route: "https://wa.me/213774333628" },
];
