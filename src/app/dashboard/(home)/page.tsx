import MeetingModalCards from "@/components/dashboard/home/meeting-modal-cards";
import TodayUpcomingMeetings from "@/components/dashboard/home/today-upcoming-meetings";
import UpcomingMeeting from "@/components/dashboard/home/upcoming-meeting";

const Page = () => {
  return (
    <>
      <UpcomingMeeting />
      <MeetingModalCards />
      <TodayUpcomingMeetings />
    </>
  );
};

export default Page;
