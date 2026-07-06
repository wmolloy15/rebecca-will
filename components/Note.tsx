import { wedding } from "@/lib/wedding";

export default function Note() {
  return (
    <section className="px-8 py-40">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-10 text-5xl tracking-[-0.04em]">
          A little note
        </h2>

        <p className="text-xl leading-10">
          {wedding.note}

          <br />
          <br />

          Thank you for saving the date.
        </p>

        <p className="mt-12 text-sm uppercase tracking-[0.3em] opacity-60">
          {wedding.signoff}
        </p>
      </div>
    </section>
  );
}