import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32 lg:py-48 flex-1 flex items-center justify-center">
      <div className="max-w-xl mx-auto px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent font-sans">
          Page Not Found
        </span>
        <h1 className="font-serif text-6xl md:text-8xl mt-4 text-charcoal">
          404
        </h1>
        <p className="mt-6 text-text-secondary text-lg leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block text-sm font-semibold uppercase tracking-wider px-8 py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
