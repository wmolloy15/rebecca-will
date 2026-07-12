// components/Hero.tsx
import Image from "next/image";
import { weddingData } from "@/lib/wedding";

export default function Hero() {
  const { couple, date } = weddingData;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-24 text-center"
    >
      {/* Container for the dancing illustration */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-8">
        <Image
          src="/dancing-illustration.png"
          alt={`${couple.bride} and ${couple.groom} dancing`}
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 16rem, 20rem"
        />
      </div>
      <h1 className="heading text-5xl md:text-7xl lg:text-8xl mb-4">
        {couple.bride} &amp; {couple.groom}
      </h1>
      <p className="subheading text-xl md:text-2xl tracking-[0.2em] uppercase text-ink/80 mb-2">
        Save the Date
      </p>
      <p className="body-text text-lg md:text-xl text-ink/70">
        {formattedDate}
      </p>
    </section>
  );
}