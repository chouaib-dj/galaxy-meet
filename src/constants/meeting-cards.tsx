import {
  NewMeeting,
  JoinMeeting,
  ScheduleMeeting,
} from "@/components/dashboard/home/modals-content";
import { Calendar, LucideIcon, Plus, UserRoundPlus, Video } from "lucide-react";

export type MeetingModalCardProps = {
  id: MeetingIds;
  className: string;
  Icon: LucideIcon;
  title: string;
  description: string;
};

export type MeetinModalProps = {
  title: string;
  children?: React.ReactNode;
};

export type MeetingModalIds =
  | "new-meeting"
  | "join-meeting"
  | "schedule-meeting";

export type MeetingIds = MeetingModalIds | "view-recordings";

export const MEETING_MODAL_CARDS: MeetingModalCardProps[] = [
  {
    id: "new-meeting",
    Icon: Plus,
    title: "New Meeting",
    description: "Create a new meeting.",
    className: "bg-red-500",
  },
  {
    id: "join-meeting",
    Icon: UserRoundPlus,
    title: "Join Meeting",
    description: "Join an existing meeting.",
    className: "bg-orange-500",
  },
  {
    id: "schedule-meeting",
    Icon: Calendar,
    title: "Schedule Meeting",
    description: "Schedule a future meeting.",
    className: "bg-purple-500",
  },
  {
    id: "view-recordings",
    Icon: Video,
    title: "View Recordings",
    description: "Watch past recordings.",
    className: "bg-teal-500",
  },
];

export const getMeetingModalContent = (activeModal: MeetingModalIds) => {
  switch (activeModal) {
    case "new-meeting":
      return <NewMeeting />;
    case "join-meeting":
      return <JoinMeeting />;
    case "schedule-meeting":
      return <ScheduleMeeting />;
    default:
      return;
  }
};
