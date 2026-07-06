import Countdown from "@/components/Countdown";
import { wedding } from "@/lib/wedding";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-8 py-24">
      <div className="mx-auto w-full max-w-6xl text-center">
        <p className="mb-10 text-sm uppercase tracking-[0.45em]">
          {wedding.saveTheDate}
        </p>

        <h1 className="text-7xl leading-[0.82] tracking-[-0.06em] md:text-[8rem] lg:text-[10rem]">
          {wedding.bride}

          <br />

          <span className="text-5xl md:text-6xl">&amp;</span>

          <br />

          {wedding.groom}
        </h1>

        <p className="mt-12 text-xl opacity-80">
          {wedding.subtitle}
        </p>

        <div className="my-28 flex justify-center">
          <div className="flex h-[420px] w-[420px] max-w-full items-center justify-center rounded-full border border-[var(--stone)] text-sm uppercase tracking-[0.3em] opacity-60">
            Illustration
          </div>
        </div>

        <Countdown />

        <div className="mt-16 space-y-2">
          <h2 className="text-2xl">
            {wedding.venue}
          </h2>

          <p className="opacity-70">
            {wedding.location}
          </p>
        </div>

        <div className="mt-24 animate-bounce text-2xl opacity-40">
          ↓
        </div>
      </div>
    </section>
  );
}