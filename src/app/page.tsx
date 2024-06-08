import Footer from "@/components/footer";
import Navbar from "@/components/navbar/landing";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100dvh-128px)] lg:min-h-[calc(100dvh-160px)] py-8">
        <h1 className="text-3xl text-center">Galaxy Meet</h1>
      </main>
      <Footer />
    </>
  );
}
