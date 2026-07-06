import Countdown from "@/components/Countdown";
import MoonCoupleIllustration from "@/components/illustrations/MoonCoupleIllustration";
import { wedding } from "@/lib/wedding";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <p className="site-eyebrow">
          {wedding.saveTheDate}
        </p>

        <h1 className="site-display mt-16 md:mt-20">
          <span>{wedding.bride}</span>

          <span className="site-display-amp">&amp;</span>

          <span>{wedding.groom}</span>
        </h1>

        <p className="site-copy mt-16 md:mt-20">
          {wedding.subtitle}
        </p>

        <p className="site-smallcaps mt-6">
          {wedding.dateDisplay}
        </p>

        <div className="my-16 flex w-full justify-center md:my-20">
          <figure className="stationery-card w-full max-w-[390px] px-8 py-10 md:max-w-[420px] md:px-10 md:py-12">
            <MoonCoupleIllustration className="mx-auto h-auto w-full" />
          </figure>
        </div>

        <Countdown />

        <div className="mt-14 space-y-3">
          <h2 className="site-subheading">
            {wedding.venue}
          </h2>

          <p className="site-copy">
            {wedding.location}
          </p>
        </div>

        <div className="mt-14 animate-bounce text-xl opacity-35">
          ↓
        </div>
      </div>
    </section>
  );
}