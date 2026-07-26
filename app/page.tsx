import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Venue from "@/components/Venue";
import Note from "@/components/Note";
import GuestList from "@/components/GuestList";
import Sunset from "@/components/Sunset";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <Hero />
        <Countdown />
        <Venue />
        <Note />
        <GuestList />
        <Sunset />
        <Footer />
      </main>
    </>
  );
}