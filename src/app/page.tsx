import Footer from "@/components/footer";
import Hero from "@/components/landing/hero";
import Navbar from "@/components/navbar/landing";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100dvh-128px)] lg:min-h-[calc(100dvh-160px)]">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
