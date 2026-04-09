import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Custom Home Builder in Southern Oregon | Blacktail Builders LLC",
  description:
    "Blacktail Builders LLC is a full-service custom home builder in Roseburg, Oregon. Design-build, planning, and quality construction across Douglas, Coos, and Curry Counties. Call (541) 378-6971.",
  alternates: {
    canonical: "https://www.blacktailbuildersllc.com",
  },
  openGraph: {
    title: "Custom Home Builder in Southern Oregon | Blacktail Builders LLC",
    description:
      "Full-service residential construction — custom homes, design-build, and quality craftsmanship across Southern Oregon.",
    url: "https://www.blacktailbuildersllc.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero
        imageSrc="/images/home-coastal-aerial.webp"
        imageMobileSrc="/images/home-coastal-aerial-mobile.webp"
        imageAlt="Aerial view of custom home with pool overlooking the Oregon coast"
        height="full"
        overlayOpacity="bg-black/35"
      >
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight max-w-3xl">
          Custom Home Builders in Southern Oregon
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl font-light">
          Full-service design, planning, and quality construction across Douglas, Coos &amp; Curry Counties
        </p>
        <Link
          href="/services"
          className="mt-8 inline-block text-sm font-semibold uppercase tracking-wider px-8 py-3 border border-white text-white hover:bg-white hover:text-charcoal transition-colors"
        >
          Learn More
        </Link>
      </Hero>

      {/* Brand Introduction */}
      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent font-sans">
            Blacktail Builders LLC
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 text-charcoal">
            Building With Purpose
          </h2>
          <p className="mt-8 text-text-secondary text-lg leading-relaxed">
            Blacktail Builders is a full-service residential construction
            company with deep roots in Southern Oregon. Our team brings
            experience from building custom homes across Montana to the diverse
            landscapes of Douglas, Coos, and Curry Counties. We approach every
            project with the same commitment: precision craftsmanship,
            transparent communication, and an unwavering dedication to quality.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 lg:py-32 bg-warm-gray">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionHeading
            label="What We Do"
            heading="Our Services"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-16">
            <ServiceCard
              imageSrc="/images/interior-great-room.webp"
              imageAlt="Custom great room with vaulted ceiling and timber trusses"
              title="Full Service Design + Build"
              description="From initial concept through final walkthrough. We manage every phase of your custom home project, uniting design vision with expert construction under one roof."
              href="/services"
            />
            <ServiceCard
              imageSrc="/images/construction-framing.webp"
              imageAlt="Home framing on a hillside with mountain backdrop"
              title="Planning & Management"
              description="Detailed project planning, permitting, budgeting, and coordination. We keep your build on schedule and on budget with clear communication at every milestone."
              href="/services"
            />
            <ServiceCard
              imageSrc="/images/exterior-siding-detail.webp"
              imageAlt="Natural wood board-and-batten siding with black-framed windows"
              title="Quality Construction"
              description="Expert craftsmanship in framing, finishes, and every detail in between. Built with the materials and standards that stand the test of time."
              href="/services"
            />
          </div>
        </div>
      </section>

      {/* Work Preview - Full Bleed */}
      <CTASection
        heading="Craftsmanship You Can See"
        subheading="From custom homes to precision interiors, explore the work that defines Blacktail Builders."
        buttonText="View Our Work"
        buttonHref="/work"
        imageSrc="/images/hero-panoramic.webp"
        imageMobileSrc="/images/hero-panoramic-mobile.webp"
        imageAlt="Custom log home in a mountain valley at sunset"
      />

      {/* Project Gallery */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionHeading
            label="Recent Projects"
            heading="Our Work"
            centered
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mt-16">
            {[
              { src: "/images/home-coastal-aerial.webp", alt: "Aerial view of coastal custom home with pool" },
              { src: "/images/interior-great-room.webp", alt: "Great room with vaulted ceiling and timber trusses" },
              { src: "/images/home-ranch-exterior.webp", alt: "Large custom ranch home with dramatic sky" },
              { src: "/images/interior-kitchen.webp", alt: "Custom kitchen with dark walnut cabinetry" },
              { src: "/images/exterior-winter-home.webp", alt: "Mountain home with massive windows in winter" },
              { src: "/images/exterior-siding-detail.webp", alt: "Natural wood board-and-batten siding" },
              { src: "/images/home-ranch-front.webp", alt: "Custom home front elevation" },
              { src: "/images/interior-ceiling-beams.webp", alt: "Vaulted wood ceiling with steel beams" },
            ].map((img) => (
              <Link key={img.src} href="/work" className="group block overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/work"
              className="inline-block text-sm font-semibold uppercase tracking-wider px-8 py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="overflow-hidden">
              <img
                src="/images/about-horseback-flag.webp"
                alt="Blacktail Builders team member on horseback with company flag"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <SectionHeading label="About Us" heading="Rooted in Roseburg, Oregon" />
              <p className="mt-8 text-text-secondary text-base leading-relaxed">
                Blacktail Builders LLC was founded by a craftsman whose career
                was shaped building award-winning custom homes in Montana. That
                same commitment to precision and quality now drives every project
                we take on across Southern Oregon.
              </p>
              <p className="mt-4 text-text-secondary text-base leading-relaxed">
                We are a team of artisans and builders who believe every home
                should reflect both the vision of the people who live in it and
                the landscape it sits on. Whether it&apos;s a modern mountain
                retreat or a coastal family home, we bring the same standard of
                care to every build.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent hover:text-charcoal transition-colors"
              >
                Our Story
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="square" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTASection
        heading="Ready to Start Your Project?"
        subheading="Let's build something extraordinary together."
        buttonText="Contact Us"
        buttonHref="/contact"
        imageSrc="/images/hero-sunset.webp"
        imageAlt="Sunset over mountains in Southern Oregon"
      />
    </>
  );
}
