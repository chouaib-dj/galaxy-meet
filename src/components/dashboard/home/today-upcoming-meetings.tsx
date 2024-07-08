import MeetingCard from "@/components/shared/cards/meeting-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const TodayUpcomingMeetings = () => {
  return (
    <section className="space-y-6 mt-4">
      <div className="flex justify-between xs:items-center gap-4">
        <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold max-w-[250px] xs:max-w-fit">
          Today&rsquo;s Upcoming Meetings
        </h2>
        <Button
          asChild
          variant="link"
          className="lg:text-lg text-muted-foreground hover:text-foreground"
        >
          <Link href={"#"}>See All</Link>
        </Button>
      </div>
      <ul className="grid md:grid-cols-2 gap-6">
        <li>
          <MeetingCard />
        </li>
        <li>
          <MeetingCard />
        </li>
      </ul>
    </section>
  );
};

export default TodayUpcomingMeetings;
