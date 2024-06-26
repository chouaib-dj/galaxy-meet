import { FEATURES_CARDS, FeatureCardProps } from "@/constants/features";
import { Badge } from "../ui/badge";

const FeatureCard = ({
  Icon,
  title,
  description,
  bgColor,
}: FeatureCardProps) => (
  <article className="flex flex-col gap-3 lg:gap-5 items-center text-center">
    <div
      className={`flex justify-center items-center w-20 h-20 lg:w-24 lg:h-24 rounded-lg ${bgColor}`}
    >
      <Icon size={36} />
    </div>
    <h3 className="text-xl lg:text-2xl font-semibold mt-2 lg:max-w-[150px] xl:max-w-full">
      {title}
    </h3>
    <p className="text-muted-foreground text-sm sm:text-base">{description}</p>
  </article>
);

const Features = () => {
  return (
    <section className="pb-28">
      <div className="container px-6 lg:px-8 flex flex-col items-center gap-12 xl:gap-14">
        <div className="flex flex-col gap-5 text-center items-center">
          <Badge className="bg-indigo-500/20 hover:bg-indigo-500/20 text-indigo-400 text-base">
            Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Revolutionary Features
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-3xl lg:max-w-4xl">
            Explore our advanced features including meeting management,
            participant control, meeting history access, and personal rooms.
            Enhance your virtual meetings with ease and efficiency
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:max-w-xl lg:max-w-7xl">
          {FEATURES_CARDS.map((props) => (
            <li key={props.id}>
              <FeatureCard {...props} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
