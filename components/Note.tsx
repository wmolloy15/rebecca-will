import { wedding } from "@/lib/wedding";

export default function Note() {
  return (
    <section className="px-6 py-32 md:px-8 md:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="site-heading">
          A little note
        </h2>

        <div className="mx-auto mt-12 max-w-2xl space-y-7">
          <p className="site-copy">
            {wedding.note}
          </p>

          <p className="site-copy">
            Thank you for saving the date.
          </p>
        </div>

        <p className="site-smallcaps mt-14">
          {wedding.signoff}
        </p>
      </div>
    </section>
  );
}