// components/Venue.tsx
import Image from "next/image";
import { weddingData } from "@/lib/wedding";

export default function Venue() {
  const { location } = weddingData;

  return (
    <section id="venue" className="py-20 px-4 bg-cream">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading text-4xl md:text-5xl text-center mb-8">
          Venue &amp; Location
        </h2>
        {/* Euroa Butter Factory image */}
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-md mb-6">
          <Image
            src="/euroa-butter-factory.png"
            alt={location.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="text-center">
          <h3 className="heading text-2xl md:text-3xl">{location.name}</h3>
          <p className="body-text text-lg text-ink/70 mt-2">
            {location.address}
          </p>
          <a
            href={location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 body-text text-sm uppercase tracking-widest text-gold hover:text-ink transition-colors border-b border-gold/30 pb-1"
          >
            View on Map
          </a>
        </div>
      </div>
    </section>
  );
}