import Image from "next/image";
import { weddingData } from "@/lib/wedding";

export default function Hero() {
  const { couple, date } = weddingData;

  const formattedDate = new Date(`${date}T12:00:00`).toLocaleDateString(
    "en-AU",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center px-4 py-24 text-center"
    >
      <Image
        src="/dancing-illustration.png"
        alt={`${couple.bride} and ${couple.groom} dancing`}
        width={700}
        height={700}
        priority
        className="mx-auto mb-8 h-auto w-64 object-contain md:w-80"
        sizes="(max-width: 768px) 16rem, 20rem"
      />

      <h1 className="heading mb-4 text-5xl md:text-7xl lg:text-8xl">
        {couple.bride} &amp; {couple.groom}
      </h1>

      <p className="subheading mb-2 text-xl uppercase tracking-[0.2em] text-ink/80 md:text-2xl">
        Save the Date
      </p>

      <p className="body-text text-lg text-ink/70 md:text-xl">
        {formattedDate}
      </p>
    </section>
  );
}