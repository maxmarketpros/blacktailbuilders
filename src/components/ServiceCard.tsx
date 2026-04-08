import Link from "next/link";

interface ServiceCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({
  imageSrc,
  imageAlt,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="font-serif text-xl lg:text-2xl mt-6 text-charcoal group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed mt-3">
        {description}
      </p>
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mt-4">
        Learn More
        <svg
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="square" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
