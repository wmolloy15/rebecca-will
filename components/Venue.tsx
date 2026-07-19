import { weddingData } from "@/lib/wedding";

export default function Venue() {
  const { location } = weddingData;

  return (
    <section id="venue" className="py-20 pb-32 px-4 bg-warm-cream">  {/* Added pb-16 */}
      <div className="max-w-4xl mx-auto">
        <h2 className="heading text-4xl md:text-5xl text-center mb-10">
          Venue &amp; Location
        </h2>
        <div className="w-full h-72 md:h-[500px] rounded-xl overflow-hidden shadow-lg mb-4 bg-transparent">
          <img
            src="/euroa-butter-factory.png"
            alt={location.name}
            className="w-full h-full object-cover"
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