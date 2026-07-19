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
      className="w-full flex flex-col items-center justify-start px-4 pt-20 pb-16 text-center bg-warm-cream"  // pb-8 → pb-16
    >
      <div className="w-72 md:w-96 h-80 md:h-[440px] mx-auto mb-4 rounded-2xl overflow-hidden bg-transparent">
        <img
          src="/dancing-illustration.png"
          alt={`${couple.bride} and ${couple.groom} dancing`}
          className="w-full h-full object-contain p-4"
        />
      </div>
      <h1 className="heading text-5xl md:text-7xl lg:text-8xl mb-2">
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