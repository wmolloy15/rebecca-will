import Image from "next/image";
import { weddingData } from "@/lib/wedding";

export default function Venue() {
  const { location } = weddingData;

  return (
    <section id="venue" className="bg-cream px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="heading mb-8 text-center text-4xl md:text-5xl">
          Venue &amp; Location
        </h2>

        <Image
          src="/euroa-butter-factory.png"
          alt={`Hand-drawn illustration of ${location.name}`}
          width={1200}
          height={900}
          className="mx-auto h-auto w-full rounded-xl object-contain shadow-md"
          sizes="(max-width: 768px) 100vw, 56rem"
        />

        <div className="text-center">
          <h3 className="heading mt-6 text-2xl md:text-3xl">
            {location.name}
          </h3>

          <p className="body-text mt-2 text-lg text-ink/70">
            {location.address}
          </p>

          <a
            href={location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="body-text mt-4 inline-block border-b border-gold/30 pb-1 text-sm uppercase tracking-widest text-gold transition-colors hover:text-ink"
          >
            View on Map
          </a>
        </div>
      </div>
    </section>
  );
}