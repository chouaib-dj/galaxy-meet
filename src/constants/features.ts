import {
  Home,
  LucideIcon,
  SlidersVertical,
  Users,
  History,
} from "lucide-react";

export type FeatureCardProps = {
  id: number;
  Icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
};

export const FEATURES_CARDS: FeatureCardProps[] = [
  {
    id: 1,
    Icon: SlidersVertical,
    title: "Meeting Management",
    description: "Create, schedule and join meetings with ease.",
    bgColor: "bg-indigo-500",
  },
  {
    id: 2,
    Icon: Users,
    title: "Participant Control",
    description: "Control and manage meetings with ease.",
    bgColor: "bg-pink-500",
  },
  {
    id: 3,
    Icon: History,
    title: "Meeting History",
    description: "Access and review past meetings anytime.",
    bgColor: "bg-teal-500",
  },
  {
    id: 4,
    Icon: Home,
    title: "Personal Room",
    description: "Instantly create a meeting with a unique link.",
    bgColor: "bg-orange-500",
  },
];
