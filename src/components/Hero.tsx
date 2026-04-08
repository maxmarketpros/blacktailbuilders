interface HeroProps {
  imageSrc: string;
  imageMobileSrc?: string;
  imageAlt: string;
  height?: "full" | "half" | "short";
  overlayOpacity?: string;
  children: React.ReactNode;
}

export default function Hero({
  imageSrc,
  imageMobileSrc,
  imageAlt,
  height = "full",
  overlayOpacity = "bg-black/40",
  children,
}: HeroProps) {
  const heightClasses = {
    full: "h-screen min-h-[600px]",
    half: "h-[60vh] min-h-[400px]",
    short: "h-[45vh] min-h-[320px]",
  };

  return (
    <section className={`relative ${heightClasses[height]} overflow-hidden`}>
      {/* Background Image */}
      <picture>
        {imageMobileSrc && (
          <source media="(max-width: 768px)" srcSet={imageMobileSrc} />
        )}
        <img
          src={imageSrc}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
          loading={height === "full" ? "eager" : "lazy"}
        />
      </picture>

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayOpacity}`} />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        {children}
      </div>
    </section>
  );
}
