export default function Sunset() {
  return (
    <section id="sunset" className="py-8 px-4 bg-warm-cream">  {/* Reduced from py-12 */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="heading text-4xl md:text-5xl mb-4">Until We Meet</h2>
        <div className="w-full max-w-md mx-auto h-80 md:h-96 rounded-2xl overflow-hidden bg-transparent">
          <img
            src="/sunset-illustration.png"
            alt="Rebecca and Will looking at sunset"
            className="w-full h-full object-contain p-4"
          />
        </div>
        <p className="body-text text-lg text-ink/70 mt-4">
          Looking forward to celebrating with you!
        </p>
      </div>
    </section>
  );
}