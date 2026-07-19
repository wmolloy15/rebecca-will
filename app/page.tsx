import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Venue from "@/components/Venue";
import Note from "@/components/Note";
import Sunset from "@/components/Sunset";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-0">  {/* Changed from pt-14 to pt-0 */}
        <Hero />
        <Countdown />
        <Venue />
        <Note />
        <Sunset />
        <Footer />
      </main>
    </>
  );
}