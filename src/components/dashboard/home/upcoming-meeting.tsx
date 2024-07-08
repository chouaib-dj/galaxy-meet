const UpcomingMeeting = () => {
  const now = new Date();
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <article
      className="rounded-lg p-6 font-semibold bg-cover bg-left xs:bg-center relative"
      style={{ backgroundImage: "url(/backgrounds/upcoming.png)" }}
    >
      <div className="bg-accent/20 absolute inset-0 w-full h-full" />
      <div className="flex flex-col justify-between gap-20 relative">
        <p className="px-4 py-2 rounded-lg bg-white/[0.08] w-fit text-sm sm:text-base">
          Upcoming Meeting at: <time dateTime="12:30">12:30 PM</time>
        </p>
        <time dateTime={now.toISOString()}>
          <span className="text-5xl sm:text-6xl font-bold">{time}</span>
          <span className="block text-lg sm:text-xl text-muted-foreground">
            {date}
          </span>
        </time>
      </div>
    </article>
  );
};

export default UpcomingMeeting;
