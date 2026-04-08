interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  category: string;
  onClick?: () => void;
}

export default function ProjectCard({
  imageSrc,
  imageAlt,
  category,
  onClick,
}: ProjectCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative block w-full overflow-hidden cursor-pointer"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end justify-start p-6">
        <span className="text-white text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
          {category}
        </span>
      </div>
    </button>
  );
}
