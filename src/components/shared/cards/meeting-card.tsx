import { Button } from "@/components/ui/button";
import { CalendarClock, Clipboard } from "lucide-react";
import React from "react";

const MeetingCard = () => {
  const date = new Date("2024-08-07T15:00:00");
  const formatedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
  }).format(date);
  const formatedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <article className="bg-accent rounded-lg flex flex-col gap-7 p-6 lg:p-8">
      <div className="flex items-center justify-between gap-6">
        <CalendarClock className="h-8 w-8 lg:h-10 lg:w-10" />
        <time
          dateTime={date.toISOString()}
          className="font-medium text-muted-foreground"
        >{`${formatedDate} - ${formatedTime}`}</time>
      </div>
      <div className="space-y-2">
        <h3 className="text-xl xl:text-2xl font-bold line-clamp-1">
          Vue.js 3 Fundamentals with the Composition API
        </h3>
        <p className="text-base text-muted-foreground line-clamp-2">
          Learn the fundamental concepts and get up and running with Vue.js 3
          with the Composition API. Perfect if you haven&rsquo;t touched Vue
          before, or you&rsquo;re just getting started!
        </p>
      </div>
      <div className="flex items-center justify-end gap-2.5">
        <Button
          variant={"secondary"}
          className="gap-2 px-0 py-0 w-11 md:w-11 flex-shrink-0 sm:px-6 sm:py-2 md:px-0 md:py-0 sm:w-fit xl:px-6 xl:py-2 xl:w-fit"
        >
          <Clipboard />
          <span className="hidden sm:inline md:hidden xl:inline">
            Copy Invitation Link
          </span>
        </Button>
        <Button className="w-full md:w-full sm:w-fit xl:w-fit">
          Join Meeting
        </Button>
      </div>
    </article>
  );
};

export default MeetingCard;
