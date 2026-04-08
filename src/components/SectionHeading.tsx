interface SectionHeadingProps {
  number?: string;
  label: string;
  heading: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  number,
  label,
  heading,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <span
        className={`text-xs font-semibold uppercase tracking-[0.2em] font-sans ${
          light ? "text-gray-400" : "text-accent"
        }`}
      >
        {number && <span className="mr-2">{number} /</span>}
        {label}
      </span>
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl mt-3 ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {heading}
      </h2>
    </div>
  );
}
