"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import Lightbox from "@/components/Lightbox";

const categories = ["All", "Custom Homes", "Interiors", "Outdoor Living", "Outbuildings", "In Progress"];

const projects = [
  {
    imageSrc: "/images/home-ranch-exterior.webp",
    imageAlt: "Large custom ranch home with dramatic sky",
    category: "Custom Homes",
  },
  {
    imageSrc: "/images/interior-great-room.webp",
    imageAlt: "Great room with vaulted ceiling and timber trusses",
    category: "Interiors",
  },
  {
    imageSrc: "/images/exterior-deck-panoramic.webp",
    imageAlt: "Wraparound deck with fall foliage",
    category: "Outdoor Living",
  },
  {
    imageSrc: "/images/home-coastal-aerial.webp",
    imageAlt: "Aerial view of coastal home with pool",
    category: "Custom Homes",
  },
  {
    imageSrc: "/images/interior-kitchen.webp",
    imageAlt: "Custom kitchen with dark walnut cabinetry",
    category: "Interiors",
  },
  {
    imageSrc: "/images/outbuilding-barn-dark.webp",
    imageAlt: "Dark wood-clad shop building",
    category: "Outbuildings",
  },
  {
    imageSrc: "/images/exterior-winter-home.webp",
    imageAlt: "Mountain home with massive windows in winter",
    category: "Custom Homes",
  },
  {
    imageSrc: "/images/interior-bathroom-vanity.webp",
    imageAlt: "Modern bathroom with double vanity",
    category: "Interiors",
  },
  {
    imageSrc: "/images/exterior-deck-foggy.webp",
    imageAlt: "Furnished deck in foggy Pacific Northwest forest",
    category: "Outdoor Living",
  },
  {
    imageSrc: "/images/home-ranch-front.webp",
    imageAlt: "Large custom home under construction",
    category: "Custom Homes",
  },
  {
    imageSrc: "/images/interior-shower-tile.webp",
    imageAlt: "Tiled shower with marble-look tile and hexagonal accent",
    category: "Interiors",
  },
  {
    imageSrc: "/images/outbuilding-ag-barn.webp",
    imageAlt: "Agricultural barn with timber post construction",
    category: "Outbuildings",
  },
  {
    imageSrc: "/images/exterior-siding-detail.webp",
    imageAlt: "Natural wood board-and-batten siding detail",
    category: "Custom Homes",
  },
  {
    imageSrc: "/images/interior-ceiling-beams.webp",
    imageAlt: "Vaulted wood ceiling with steel beams",
    category: "Interiors",
  },
  {
    imageSrc: "/images/construction-framing.webp",
    imageAlt: "Home framing on hillside with mountains",
    category: "In Progress",
  },
  {
    imageSrc: "/images/construction-roof.webp",
    imageAlt: "Roof framing in progress",
    category: "In Progress",
  },
  {
    imageSrc: "/images/construction-deck-ramp.webp",
    imageAlt: "Completed deck with ramp and railing",
    category: "Outdoor Living",
  },
  {
    imageSrc: "/images/home-modern-hillside.webp",
    imageAlt: "Modern farmhouse under construction on hillside",
    category: "In Progress",
  },
  {
    imageSrc: "/images/construction-shop-progress.webp",
    imageAlt: "Barn-style building under construction",
    category: "In Progress",
  },
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Page Hero */}
      <Hero
        imageSrc="/images/home-coastal-aerial.webp"
        imageMobileSrc="/images/home-coastal-aerial-mobile.webp"
        imageAlt="Aerial view of custom home with pool"
        height="half"
        overlayOpacity="bg-black/50"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-300 font-sans">
          Our Work
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-3">
          A Portfolio of Craft
        </h1>
      </Hero>

      {/* Intro */}
      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-text-secondary text-lg leading-relaxed">
            From custom mountain homes to coastal retreats, from precision
            interior finishes to rugged outbuildings, our work spans the full
            range of residential construction. Each project reflects our
            commitment to quality and our dedication to realizing each
            client&apos;s unique vision.
          </p>
        </div>
      </section>

      {/* Filter + Gallery */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-semibold uppercase tracking-wider px-5 py-2.5 border transition-colors ${
                  activeCategory === cat
                    ? "bg-charcoal text-white border-charcoal"
                    : "bg-transparent text-text-secondary border-gray-300 hover:border-charcoal hover:text-charcoal"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((project, i) => (
              <ProjectCard
                key={`${project.imageSrc}-${i}`}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                category={project.category}
                onClick={() =>
                  setLightboxImage({
                    src: project.imageSrc,
                    alt: project.imageAlt,
                  })
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Inspired?"
        subheading="Let's discuss your project and how we can bring your vision to life."
        buttonText="Get in Touch"
        buttonHref="/contact"
        imageSrc="/images/hero-sunset.webp"
        imageAlt="Sunset over Southern Oregon mountains"
      />

      {/* Lightbox */}
      {lightboxImage && (
        <Lightbox
          imageSrc={lightboxImage.src}
          imageAlt={lightboxImage.alt}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </>
  );
}
