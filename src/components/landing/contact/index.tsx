import { CONTACT_ADDRESSES, SOCIAL_MEDIA } from "@/constants/contact";
import { ContactForm } from "./contact-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="pb-28">
      <div className="container px-6 lg:px-8">
        <div className="relative">
          <div className="bg-primary p-8 sm:p-10 lg:p-14 rounded-t-lg">
            <div className="lg:w-1/2 space-y-5 text-center lg:text-start">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Get In Touch
              </h2>
              <p className="text-sm sm:text-base lg:text-lg lg:pr-6 font-medium opacity-90">
                {`Have questions or need help? Our team is here to assist you. Whether it's setting up meetings, troubleshooting, or learning about features, we're just a message away. Contact us for prompt support to ensure a seamless experience.`}
              </p>
            </div>
          </div>
          <div className="border-2 border-t-0 rounded-b-lg">
            <ContactForm />
            <div className="p-8 sm:p-10 lg:p-14 lg:w-1/2">
              <ul className="space-y-4 lg:space-y-5 md:text-lg font-medium">
                {CONTACT_ADDRESSES.map(({ Icon, id, title }) => (
                  <li
                    key={id}
                    className="flex items-center gap-3 flex-col sm:flex-row sm:justify-center lg:justify-start"
                  >
                    <Icon />
                    {title}
                  </li>
                ))}
              </ul>
              <ul className="flex justify-center lg:justify-start items-center gap-2 mt-6 lg:mt-8 ">
                {SOCIAL_MEDIA.map(({ id, route, Icon }) => (
                  <li key={id}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-input hover:bg-primary h-10 w-10"
                      asChild
                    >
                      <Link
                        href={route}
                        title={id}
                        className="w-11 h-11"
                        target="_blank"
                      >
                        <Icon />
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
