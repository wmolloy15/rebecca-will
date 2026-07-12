// components/Note.tsx
import { weddingData } from "@/lib/wedding";

export default function Note() {
  const { couple } = weddingData;
  return (
    <section id="note" className="py-20 px-4 bg-white/50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="heading text-4xl md:text-5xl mb-6">A Personal Note</h2>
        <p className="body-text text-lg md:text-xl leading-relaxed text-ink/80">
          We are overjoyed to invite you to celebrate our love. Your presence
          means the world to us, and we can&apos;t wait to share this special
          day with you. More details to follow – stay tuned!
        </p>
        <p className="body-text text-md text-ink/60 mt-4">
          — {couple.bride} &amp; {couple.groom}
        </p>
      </div>
    </section>
  );
}