import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, MoveRightIcon } from "lucide-react";

const Hero = () => {
  return (
    <section className="xl:min-h-[calc(100dvh-80px)] flex items-center justify-center py-24">
      <div className="container px-6 lg:px-8 flex flex-col items-center gap-8 lg:gap-12">
        <p className="border-2 p-1.5 lg:p-2 pl-6 lg:pl-6 rounded-full border-primary flex items-center gap-4 w-fit text-sm sm:text-base">
          Check out our features
          <Button
            size={"icon"}
            asChild
            className="rounded-full h-6 w-6 sm:w-8 sm:h-8 lg:h-9 lg:w-9"
          >
            <Link href={"#"}>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </Link>
          </Button>
        </p>
        <div className="flex flex-col gap-6 text-center items-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold max-w-sm lg:max-w-4xl">
            Your Ultimate <span className="text-primary">Virtual Meeting</span>{" "}
            Space
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-3xl lg:max-w-4xl">
            Galaxy Meet redefines online communication, providing a seamless and
            intuitive experience for all your virtual interactions. Join us to
            connect effortlessly, whether for education, or personal use.
          </p>
        </div>
        <Button
          asChild
          className="gap-2 rounded-full px-14 h-10 lg:h-11 text-base lg:text-lg"
        >
          <Link href="/login">
            Get Started
            <MoveRightIcon />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
