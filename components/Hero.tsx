import { wedding } from "@/lib/wedding";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-8">
      <div className="w-full max-w-6xl text-center">

        <p className="mb-12 text-sm uppercase tracking-[0.45em]">
          {wedding.saveTheDate}
        </p>

        <h1
          className="
            text-7xl
            leading-[0.82]
            tracking-[-0.06em]
            md:text-[8rem]
            lg:text-[10rem]
          "
        >
          {wedding.couple.bride}

          <br />

          <span className="text-5xl md:text-6xl">&amp;</span>

          <br />

          {wedding.couple.groom}
        </h1>

        <p className="mt-12 text-xl opacity-80">
          {wedding.heading}
        </p>

        <div className="my-28 flex justify-center">

          <div className="flex h-96 w-96 items-center justify-center rounded-full border border-[var(--stone)] text-sm uppercase tracking-[0.2em]">

            Illustration

          </div>

        </div>

        <div className="space-y-3">

          <h2 className="text-4xl md:text-5xl">
            {wedding.date}
          </h2>

          <p>{wedding.venue}</p>

          <p>{wedding.location}</p>

        </div>

        <div className="mt-28 text-2xl opacity-40">
          ↓
        </div>

      </div>
    </section>
  );
}