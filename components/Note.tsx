import { weddingData } from "@/lib/wedding";

export default function Note() {
  return (
    <section id="note" className="py-8 px-4 bg-warm-cream">  {/* Reduced from py-12 */}
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="heading text-4xl md:text-5xl mb-4">A Note From Us</h2>
        <p className="body-text text-lg md:text-xl leading-relaxed text-ink/80">
          Welcome to our Save the Date. You are one of our nearest and dearest and we hope you can help us celebrate our special day.
        </p>
        <p className="body-text text-lg md:text-xl leading-relaxed text-ink/80 mt-4">
          Please keep it free. Formal invite to come!
        </p>
      </div>
    </section>
  );
}