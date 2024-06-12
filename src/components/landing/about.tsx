import Image from "next/image";
import { Badge } from "../ui/badge";
import { ABOUT_CARDS, AboutCardProps } from "@/constants/about";
import { cn } from "@/lib/utils";

export const AboutCard = ({
  id,
  tag,
  title,
  description,
  imageUrl,
  colors,
}: AboutCardProps) => {
  return (
    <article
      className={cn(
        "flex items-stretch rounded-lg overflow-hidden bg-accent w-full h-fit flex-col lg:flex-row",
        id % 2 === 0 && "lg:flex-row-reverse"
      )}
    >
      <div className="flex-1 relative min-h-[300px] lg:min-h-full">
        <Image
          src={imageUrl}
          alt="about us"
          width={1000}
          height={667}
          className="w-full h-full absolute inset-0 object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="flex flex-col justify-center gap-4 p-8">
          <Badge className={cn("text-base w-fit", colors)}>{tag}</Badge>
          <h3 className="text-2xl lg:text-3xl font-semibold mt-1">{title}</h3>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

const About = () => {
  return (
    <section className="pb-28">
      <div className="container px-6 lg:px-8 flex flex-col items-center gap-12 xl:gap-14">
        <div className="flex flex-col gap-5 text-center items-center">
          <Badge className="bg-pink-500/20 hover:bg-pink-500/20 text-pink-400 text-base">
            About Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Discover Our Journey
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-3xl lg:max-w-4xl">
            Learn about our story, values, and mission. We strive to
            revolutionize virtual meetings with advanced features and a
            commitment to excellence, empowering connectivity.
          </p>
        </div>
        <ul className="space-y-8">
          {ABOUT_CARDS.map((props) => (
            <li key={props.id}>
              <AboutCard {...props} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
