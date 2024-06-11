import Footer from "@/components/footer";
import Features from "@/components/landing/features";
import Hero from "@/components/landing/hero";
import Testimonials from "@/components/landing/testimonials";
import Navbar from "@/components/navbar/landing";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100dvh-128px)] lg:min-h-[calc(100dvh-160px)]">
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
