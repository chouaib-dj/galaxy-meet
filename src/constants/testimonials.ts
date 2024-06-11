export type FeedbackCardProps = {
  id: number;
  feedback: string;
  fullName: string;
  avatar: {
    src: string;
    fallback: string;
  };
};

export const FEEDBACKS_CARDS = [
  {
    id: 1,
    feedback:
      "Easy navigation. More video layout customization would enhance user experience.",
    fullName: "Emily Parker",
    avatar: {
      src: "/avatars/avatar-1.jpg",
      fallback: "EP",
    },
  },
  {
    id: 2,
    feedback:
      "High quality video and seamless screen sharing. Optimize load time for slow connections.",
    fullName: "Olivia Bennett",
    avatar: {
      src: "/avatars/avatar-2.jpg",
      fallback: "OB",
    },
  },
  {
    id: 3,
    feedback:
      "Robust features. Useful virtual backgrounds. Add an integrated whiteboard tool.",
    fullName: "Alexander Reed",
    avatar: {
      src: "/avatars/avatar-3.jpg",
      fallback: "AR",
    },
  },
];
