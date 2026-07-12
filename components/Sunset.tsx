import Image from "next/image";

export default function Sunset() {
  return (
    <section id="sunset" className="bg-cream px-4 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="heading mb-8 text-4xl md:text-5xl">
          Until We Meet
        </h2>

        <Image
          src="/sunset-illustration.png"
          alt="Rebecca and Will looking at the sunset"
          width={900}
          height={675}
          className="mx-auto h-auto w-full max-w-md object-contain"
          sizes="(max-width: 768px) 100vw, 28rem"
        />

        <p className="body-text mt-6 text-lg text-ink/70">
          Looking forward to celebrating with you!
        </p>
      </div>
    </section>
  );
}