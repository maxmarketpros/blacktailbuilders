import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { ServiceSchema } from "@/components/LocalBusinessSchema";

export const metadata: Metadata = {
  title: "Residential Construction Services in Southern Oregon",
  description:
    "Design-build, project planning, and quality home construction services from Blacktail Builders LLC. Custom homes, renovations, decks, and outbuildings across Douglas, Coos, and Curry Counties.",
  alternates: {
    canonical: "https://www.blacktailbuildersllc.com/services",
  },
  openGraph: {
    title: "Residential Construction Services | Blacktail Builders LLC",
    description:
      "Design-build, planning & management, and quality construction services across Southern Oregon.",
    url: "https://www.blacktailbuildersllc.com/services",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const additionalServices = [
  {
    title: "Decks & Outdoor Living",
    description:
      "Custom decks, patios, and outdoor spaces designed to extend your living area and complement the natural landscape.",
    imageSrc: "/images/exterior-deck-foggy.webp",
    imageAlt: "Custom deck with furniture in foggy Pacific Northwest forest",
  },
  {
    title: "Outbuildings & Shops",
    description:
      "Barns, workshops, and accessory structures built to the same standards as our homes, blending function with lasting quality.",
    imageSrc: "/images/outbuilding-barn-dark.webp",
    imageAlt: "Dark wood-clad shop building with metal accents",
  },
  {
    title: "Interior Finish Work",
    description:
      "Kitchens, bathrooms, custom cabinetry, and fine detail work that elevates the interior of any home.",
    imageSrc: "/images/interior-kitchen.webp",
    imageAlt: "Custom kitchen with dark walnut cabinetry and modern finishes",
  },
  {
    title: "Renovations & Additions",
    description:
      "Thoughtful renovations that respect the original character of your home while expanding its function and value.",
    imageSrc: "/images/construction-roof.webp",
    imageAlt: "Roof framing in progress for a home addition",
  },
];

export default function ServicesPage() {
  return (
    <>
      <ServiceSchema />
      {/* Page Hero */}
      <Hero
        imageSrc="/images/interior-kitchen.webp"
        imageMobileSrc="/images/interior-kitchen-mobile.webp"
        imageAlt="Custom kitchen with dark walnut cabinetry"
        height="half"
        overlayOpacity="bg-black/50"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-300 font-sans">
          Our Services
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-3">
          Built Around Your Vision
        </h1>
      </Hero>

      {/* Intro */}
      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-text-secondary text-lg leading-relaxed">
            Blacktail Builders provides comprehensive residential construction
            services, from initial concept through final walkthrough. Our three
            core service areas work together to deliver homes built with
            precision, managed with transparency, and finished with
            craftsmanship that lasts.
          </p>
        </div>
      </section>

      {/* 01 - Full Service Design + Build */}
      <section className="py-24 lg:py-32 bg-warm-gray">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                number="01"
                label="Full Service Design + Build"
                heading="From Concept to Completion"
              />
              <p className="mt-8 text-text-secondary leading-relaxed">
                Our design-build approach puts your entire project under one
                roof. We work with you from the earliest sketches through
                architectural plans, permitting, construction, and final
                finishes. This integrated process eliminates the gaps that
                happen when design and construction are handled separately.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Every project begins with understanding your vision. We
                collaborate with architects and designers to translate that
                vision into a plan that works within your site, budget, and
                timeline. Then we build it with the precision and care that
                defines our work.
              </p>
              {/* PLACEHOLDER: Add specific service bullet points once client provides final copy */}
              <ul className="mt-6 space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 bg-accent flex-shrink-0" />
                  Custom home design coordination
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 bg-accent flex-shrink-0" />
                  Architectural collaboration and planning
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 bg-accent flex-shrink-0" />
                  Full construction management
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 bg-accent flex-shrink-0" />
                  Interior and exterior finish work
                </li>
              </ul>
            </div>
            <div className="overflow-hidden">
              <img
                src="/images/home-ranch-exterior.webp"
                alt="Large custom ranch home with dramatic sky"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 02 - Planning & Management */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="overflow-hidden order-2 lg:order-1">
              <img
                src="/images/construction-framing.webp"
                alt="Home framing in progress on a hillside lot"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading
                number="02"
                label="Planning & Management"
                heading="Success From Planning"
              />
              <p className="mt-8 text-text-secondary leading-relaxed">
                Great homes start with great planning. We manage the details
                that keep your project on track: permits, budgets, timelines,
                subcontractor coordination, and material procurement. Our
                proven process keeps you informed and in control from day one.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Whether you&apos;re building new, adding on, or renovating, our
                management approach ensures clear communication, realistic
                scheduling, and accountability at every stage. We serve as your
                advocate throughout the entire construction process.
              </p>
              <ul className="mt-6 space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 bg-accent flex-shrink-0" />
                  Budget development and cost management
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 bg-accent flex-shrink-0" />
                  Permitting and regulatory coordination
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 bg-accent flex-shrink-0" />
                  Subcontractor selection and management
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 bg-accent flex-shrink-0" />
                  Scheduling and milestone tracking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 03 - Quality Construction */}
      <section className="py-24 lg:py-32 bg-warm-gray">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                number="03"
                label="Quality Construction"
                heading="Craftsmanship That Lasts"
              />
              <p className="mt-8 text-text-secondary leading-relaxed">
                Every joint, every finish, every structural element is built to
                a standard that we would put in our own homes. Our team of
                experienced carpenters and craftsmen take pride in work that
                will stand for generations.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                From framing and structural work to fine interior finishes, we
                hold ourselves to the highest standards. We use quality
                materials, proven building techniques, and the kind of
                attention to detail that shows in the finished product.
              </p>
              <ul className="mt-6 space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 bg-accent flex-shrink-0" />
                  Structural framing and rough carpentry
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 bg-accent flex-shrink-0" />
                  Precision finish carpentry
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 bg-accent flex-shrink-0" />
                  Material selection and procurement
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 bg-accent flex-shrink-0" />
                  Quality assurance at every phase
                </li>
              </ul>
            </div>
            <div className="overflow-hidden">
              <img
                src="/images/exterior-winter-home.webp"
                alt="Large mountain home with massive windows in winter setting"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full-Bleed Image Break */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img
          src="/images/interior-ceiling-beams.webp"
          alt="Vaulted wood plank ceiling with exposed steel beams"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* Additional Capabilities */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionHeading
            label="Additional Capabilities"
            heading="Beyond the Build"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {additionalServices.map((service) => (
              <div key={service.title} className="group">
                <div className="overflow-hidden">
                  <img
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-serif text-lg mt-5 text-charcoal">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mt-2">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Start Your Project"
        subheading="Tell us about your vision and let's discuss how we can bring it to life."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
