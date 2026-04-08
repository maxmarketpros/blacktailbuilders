import Link from "next/link";

interface CTASectionProps {
  heading: string;
  subheading?: string;
  buttonText: string;
  buttonHref: string;
  imageSrc?: string;
  imageMobileSrc?: string;
  imageAlt?: string;
  dark?: boolean;
}

export default function CTASection({
  heading,
  subheading,
  buttonText,
  buttonHref,
  imageSrc,
  imageMobileSrc,
  imageAlt,
  dark = true,
}: CTASectionProps) {
  if (imageSrc) {
    return (
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <picture>
          {imageMobileSrc && (
            <source media="(max-width: 768px)" srcSet={imageMobileSrc} />
          )}
          <img
            src={imageSrc}
            alt={imageAlt || ""}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </picture>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            {heading}
          </h2>
          {subheading && (
            <p className="text-gray-300 mt-4 max-w-lg text-lg">{subheading}</p>
          )}
          <Link
            href={buttonHref}
            className="mt-8 inline-block text-sm font-semibold uppercase tracking-wider px-8 py-3 border border-white text-white hover:bg-white hover:text-charcoal transition-colors"
          >
            {buttonText}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`py-24 lg:py-32 ${dark ? "bg-charcoal text-white" : "bg-warm-gray text-charcoal"}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
          {heading}
        </h2>
        {subheading && (
          <p className={`mt-4 max-w-lg mx-auto text-lg ${dark ? "text-gray-400" : "text-text-secondary"}`}>
            {subheading}
          </p>
        )}
        <Link
          href={buttonHref}
          className={`mt-8 inline-block text-sm font-semibold uppercase tracking-wider px-8 py-3 border transition-colors ${
            dark
              ? "border-white text-white hover:bg-white hover:text-charcoal"
              : "border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
          }`}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
