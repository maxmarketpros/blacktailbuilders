import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Blacktail Builders LLC | Roseburg Oregon General Contractor",
  description:
    "Meet the team behind Blacktail Builders LLC — artisans and craftsmen rooted in Riddle, Oregon. Founded by a master builder with experience from Montana custom homes, now serving Douglas, Coos, and Curry Counties.",
  alternates: {
    canonical: "https://www.blacktailbuildersllc.com/about",
  },
  openGraph: {
    title: "About Blacktail Builders LLC | Roseburg Oregon General Contractor",
    description:
      "Artisans and craftsmen rooted in Riddle, Oregon, bringing Montana-level custom home building quality to Southern Oregon.",
    url: "https://www.blacktailbuildersllc.com/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const values = [
  {
    title: "Craftsmanship",
    description:
      "Every joint, every finish, every structural detail is built to a standard we would put in our own homes. Quality is not a line item — it is built into everything we do.",
  },
  {
    title: "Transparency",
    description:
      "Honest communication, clear budgets, and realistic timelines. We keep you informed at every stage and stand behind every decision we make together.",
  },
  {
    title: "Stewardship",
    description:
      "Respect for the land, the materials, and the communities we build in. We approach every project with care for the environment and the people around us.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <Hero
        imageSrc="/images/hero-sunset.webp"
        imageMobileSrc="/images/hero-sunset-mobile.webp"
        imageAlt="Sunset over mountains in Southern Oregon"
        height="half"
        overlayOpacity="bg-black/40"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-300 font-sans">
          About Us
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-3">
          The Blacktail Story
        </h1>
      </Hero>

      {/* Company Story */}
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
              <SectionHeading
                number="01"
                label="Our Story"
                heading="Rooted in Craftsmanship"
              />
              <p className="mt-8 text-text-secondary leading-relaxed">
                Blacktail Builders LLC was founded by a master builder whose
                career was shaped constructing custom homes across Montana. From
                rustic mountain lodges to contemporary steel-and-timber
                residences, that experience forged a commitment to quality that
                defines everything we build today.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Rooted in Riddle, Oregon, we brought that Montana-level
                craftsmanship to the diverse landscapes of Southern Oregon. Our
                team of artisans and skilled tradespeople shares a common
                belief: that every home should be built with intention,
                precision, and respect for both the land and the people who
                will live in it.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                We are not just builders. We are partners in the process,
                committed to realizing your vision from the first conversation
                through the final walkthrough.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Bleed Image */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img
          src="/images/home-ranch-exterior.webp"
          alt="Large custom ranch home at dusk with dramatic sky"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionHeading
            number="02"
            label="Our Values"
            heading="What We Stand For"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mt-16">
            {values.map((value) => (
              <div key={value.title} className="border-t-2 border-accent pt-6">
                <h3 className="font-serif text-2xl text-charcoal">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mt-4">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 lg:py-32 bg-warm-gray">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeading
            number="03"
            label="Service Area"
            heading="Where We Build"
            centered
          />
          <p className="mt-8 text-text-secondary text-lg leading-relaxed">
            Based in Roseburg, Oregon, Blacktail Builders serves homeowners
            across Southern Oregon. Our work spans Douglas County, Coos County,
            Curry County, and the surrounding communities. From inland valleys
            to the Oregon coast, we bring the same standard of quality to every
            project, wherever it takes us.
          </p>
        </div>
      </section>

      {/* Careers */}
      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeading
            label="Careers"
            heading="Join the Team"
            centered
          />
          <p className="mt-8 text-text-secondary text-lg leading-relaxed">
            We are always looking for skilled craftsmen and tradespeople who
            share our commitment to quality. If you take pride in your work and
            want to build homes that stand the test of time, we want to hear
            from you.
          </p>
          {/* PLACEHOLDER: Update with current openings */}
          <p className="mt-4 text-text-secondary leading-relaxed">
            Currently hiring: Journeyman Carpenter and Construction Foreman.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block text-sm font-semibold uppercase tracking-wider px-8 py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors"
          >
            Contact Us to Apply
          </Link>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Ready to Build?"
        subheading="Let's start the conversation about your next project."
        buttonText="Contact Us"
        buttonHref="/contact"
        imageSrc="/images/interior-ceiling-beams.webp"
        imageAlt="Vaulted wood ceiling with steel beams"
      />
    </>
  );
}
