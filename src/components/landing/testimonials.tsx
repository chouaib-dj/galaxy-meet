import { Quote, Star } from "@/assets/icons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { FEEDBACKS_CARDS, FeedbackCardProps } from "@/constants/testimonials";
import { cn } from "@/lib/utils";

const STARTS = [1, 2, 3, 4, 5];

const FeedbackCard = ({
  feedback,
  fullName,
  avatar: { fallback, src },
}: FeedbackCardProps) => {
  return (
    <figure>
      <Quote className="mx-auto" />
      <blockquote className="text-center text-base sm:text-lg lg:text-xl mt-2 mb-4 lg:mt-4 lg:mb-6 max-w-sm mx-auto">
        {feedback}
      </blockquote>
      <figcaption className="flex items-center justify-center gap-2">
        <Avatar>
          <AvatarImage src={src} />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
        <p className="font-semibold">{fullName}</p>
        <div className="w-0.5 h-6 bg-muted-foreground mx-2" />
        <div className="flex gap-2 items-center">
          {STARTS.map((star) => (
            <Star key={star} isActive className="h-4" />
          ))}
        </div>
      </figcaption>
    </figure>
  );
};

const Testimonials = () => {
  return (
    <section className="pb-28">
      <div className="container px-6 lg:px-8 flex flex-col items-center gap-12 xl:gap-14">
        <div className="flex flex-col gap-5 text-center items-center">
          <Badge className="bg-teal-500/20 hover:bg-teal-500/20 text-teal-400 text-base">
            Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            What our user says!
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-3xl lg:max-w-4xl">
            Discover how our platform has revolutionized virtual meetings,
            making it easier to connect, collaborate, and communicate seamlessly
            with your team and clients.
          </p>
        </div>
        <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {FEEDBACKS_CARDS.map((props) => (
            <li
              key={props.id}
              className={cn(props.id === 3 && "md:col-span-2 xl:col-span-1")}
            >
              <FeedbackCard {...props} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
