// components/Sunset.tsx
import Image from "next/image";

export default function Sunset() {
  return (
    <section id="sunset" className="py-20 px-4 bg-cream">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="heading text-4xl md:text-5xl mb-8">Until We Meet</h2>
        {/* Container for the sunset illustration */}
        <div className="relative w-full max-w-md mx-auto h-80 md:h-96">
          <Image
            src="/sunset-illustration.png"
            alt="Rebecca and Will looking at sunset"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <p className="body-text text-lg text-ink/70 mt-6">
          Looking forward to celebrating with you!
        </p>
      </div>
    </section>
  );
}