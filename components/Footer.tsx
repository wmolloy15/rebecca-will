// components/Footer.tsx
import { weddingData } from "@/lib/wedding";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream py-8 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="heading text-sm uppercase tracking-widest">
          Rebecca &amp; Will
        </p>
        <p className="body-text text-xs mt-2 opacity-70">
          For questions, please email{" "}
          <a
            href={`mailto:${weddingData.rsvpEmail}`}
            className="underline hover:opacity-100 transition-opacity"
          >
            {weddingData.rsvpEmail}
          </a>
        </p>
        <p className="body-text text-xs mt-4 opacity-50">
          &copy; {new Date().getFullYear()} · Save the Date
        </p>
      </div>
    </footer>
  );
}