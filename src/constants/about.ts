export type AboutCardProps = {
  id: number;
  tag: string;
  title: string;
  description: string;
  imageUrl: string;
  colors: string;
};

export const ABOUT_CARDS: AboutCardProps[] = [
  {
    id: 1,
    tag: "Our Story",
    title: "Journey to Innovation",
    description:
      "From humble beginnings to a leading platform, discover the story behind our mission to revolutionize virtual meetings and collaboration. Our journey is filled with dedication, perseverance, and a constant drive to push the boundaries of technology and user experience. We started with a simple idea and grew into a platform that empowers millions of users worldwide.",
    imageUrl: "/landing/about-1.jpg",
    colors: "bg-primary hover:bg-primary",
  },
  {
    id: 2,
    tag: "Our Values",
    title: "Excellence Commitment",
    description:
      "Our core values drive everything we do. Learn about the principles that guide our commitment to providing the best virtual meeting experience. We prioritize integrity, innovation, and customer satisfaction, ensuring that every feature we develop meets the highest standards of quality and reliability. Our values reflect our dedication to making a positive impact on the lives of our users and the communities we serve.",
    imageUrl: "/landing/about-2.jpg",
    colors: "bg-pink-600 hover:bg-pink-600",
  },
  {
    id: 3,
    tag: "Our Mission",
    title: "Fostering Connections",
    description:
      "We aim to enhance connectivity and collaboration through innovative features and user-centric design. Discover our mission to make virtual meetings seamless and effective. By continuously evolving our platform, we empower users to communicate effortlessly and achieve their goals through exceptional virtual meeting experiences. Our mission is to break down barriers and create a world where distance is no longer an obstacle to meaningful communication and collaboration.",
    imageUrl: "/landing/about-3.jpg",
    colors: "bg-teal-600 hover:bg-teal-600",
  },
];
