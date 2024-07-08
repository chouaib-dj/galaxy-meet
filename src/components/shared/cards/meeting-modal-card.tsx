import { MeetingModalCardProps } from "@/constants/meeting-cards";
import { cn } from "@/lib/utils";

const MeetingModalCard = ({
  className,
  title,
  description,
  Icon,
  onClick,
}: MeetingModalCardProps & { onClick: () => void }) => {
  return (
    <article
      className={cn(
        "p-4 rounded-lg flex flex-col justify-between gap-10 cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 xl:h-16 xl:w-16 rounded-lg bg-foreground/20 flex justify-center items-center">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 xl:w-9 xl:h-9" />
      </div>
      <div className="space-y-1">
        <h2 className="text-xl xl:text-2xl font-semibold">{title}</h2>
        <p className="text-foreground/90 font-medium text-sm sm:text-base">
          {description}
        </p>
      </div>
    </article>
  );
};
export default MeetingModalCard;
