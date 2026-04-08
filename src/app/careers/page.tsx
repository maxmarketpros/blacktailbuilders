import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Careers | Join the Blacktail Builders Team",
  description:
    "Now hiring Journeyman Carpenter and Construction Foreman positions at Blacktail Builders LLC in Roseburg, Oregon. Competitive pay, custom home projects, and growth opportunities.",
  alternates: {
    canonical: "https://www.blacktailbuildersllc.com/careers",
  },
  openGraph: {
    title: "Careers at Blacktail Builders LLC | Now Hiring",
    description:
      "Join a team of skilled craftsmen building custom homes across Southern Oregon. Open positions available.",
    url: "https://www.blacktailbuildersllc.com/careers",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const benefits = [
  {
    title: "Custom Projects",
    description:
      "Work on unique, custom home projects that showcase your skills and craftsmanship.",
  },
  {
    title: "Supportive Team",
    description:
      "Join a team that values quality, innovation, and professional growth.",
  },
  {
    title: "Competitive Pay",
    description:
      "Competitive compensation with opportunities to grow with a trusted industry leader.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Page Hero */}
      <Hero
        imageSrc="/images/construction-framing.webp"
        imageMobileSrc="/images/construction-framing-mobile.webp"
        imageAlt="Home framing on a hillside with mountain backdrop"
        height="half"
        overlayOpacity="bg-black/50"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-300 font-sans">
          Careers
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-3">
          Build With Us
        </h1>
        <p className="mt-4 text-lg text-gray-200 max-w-xl font-light">
          We&apos;re looking for skilled craftsmen who take pride in their work
        </p>
      </Hero>

      {/* Intro + Benefits */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent font-sans">
              Why Blacktail
            </span>
            <h2 className="font-serif text-3xl md:text-4xl mt-4 text-charcoal">
              More Than a Job
            </h2>
            <p className="mt-6 text-text-secondary text-lg leading-relaxed">
              At Blacktail Builders, you won&apos;t be working on cookie-cutter
              projects. Every build is a custom home that demands real skill and
              rewards real craftsmanship. We invest in our people because the
              quality of our work depends on the quality of our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((b) => (
              <div key={b.title} className="border-t-2 border-accent pt-6">
                <h3 className="font-serif text-xl text-charcoal">{b.title}</h3>
                <p className="text-text-secondary leading-relaxed mt-3 text-sm">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 lg:py-32 bg-warm-gray">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent font-sans">
              Open Positions
            </span>
            <h2 className="font-serif text-3xl md:text-4xl mt-4 text-charcoal">
              Now Hiring
            </h2>
          </div>

          <div className="space-y-12">
            {/* Journeyman Carpenter */}
            <div className="bg-white p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                <div>
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-white bg-accent px-3 py-1 mb-4">
                    Now Hiring
                  </span>
                  <h3 className="font-serif text-2xl lg:text-3xl text-charcoal">
                    Journeyman Carpenter
                  </h3>
                  <p className="text-text-secondary mt-1">
                    Full-time &middot; Roseburg, OR &middot; Reports to Construction Foreman
                  </p>
                </div>
                <a
                  href="mailto:info@blacktailbuildersllc.com?subject=Application%20-%20Journeyman%20Carpenter"
                  className="flex-shrink-0 inline-block text-sm font-semibold uppercase tracking-wider px-8 py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors text-center"
                >
                  Apply Now
                </a>
              </div>

              <p className="text-text-secondary leading-relaxed mb-6">
                A Journeyman Carpenter has at least five years of verifiable
                trade experience and builds to provided specifications with high
                levels of skill and craftsmanship.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal mb-4 font-sans">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2.5 text-text-secondary text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-accent flex-shrink-0" />
                      Read and interpret blueprints, plans, elevations, and details
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-accent flex-shrink-0" />
                      Layout and precisely measure walls, doors, windows, and fixtures
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-accent flex-shrink-0" />
                      Select, cut, and prepare building materials
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-accent flex-shrink-0" />
                      Frame structural elements: walls, floors, and roofs
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-accent flex-shrink-0" />
                      Install finishes: doors, windows, cabinetry, trim, and flooring
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-accent flex-shrink-0" />
                      Maintain jobsite cleanliness and quality control to code
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-accent flex-shrink-0" />
                      Mentor apprentices and oversee assigned tasks
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal mb-4 font-sans">
                    Required Tools (Employee Provides)
                  </h4>
                  <ul className="space-y-2.5 text-text-secondary text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-accent flex-shrink-0" />
                      Tool belt, hard hat, construction boots
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-accent flex-shrink-0" />
                      Tape measure, speed square, torpedo level
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-accent flex-shrink-0" />
                      Hammer, chisel, nail punch, cat&apos;s paw
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-accent flex-shrink-0" />
                      Razor knife, tin snips, tie wire pliers
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-accent flex-shrink-0" />
                      Impact driver &amp; drill with 24-piece bits
                    </li>
                  </ul>

                  <p className="text-text-secondary text-sm mt-6">
                    <strong className="text-charcoal">Work Environment:</strong>{" "}
                    Indoor and outdoor in all weather conditions. Production-based
                    results expected daily.
                  </p>
                </div>
              </div>
            </div>

            {/* Construction Foreman */}
            <div className="bg-white p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                <div>
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-white bg-accent px-3 py-1 mb-4">
                    Now Hiring
                  </span>
                  <h3 className="font-serif text-2xl lg:text-3xl text-charcoal">
                    Construction Foreman
                  </h3>
                  <p className="text-text-secondary mt-1">
                    Full-time &middot; Roseburg, OR &middot; Reports to Project Manager
                  </p>
                </div>
                <a
                  href="mailto:info@blacktailbuildersllc.com?subject=Application%20-%20Construction%20Foreman"
                  className="flex-shrink-0 inline-block text-sm font-semibold uppercase tracking-wider px-8 py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors text-center"
                >
                  Apply Now
                </a>
              </div>

              <p className="text-text-secondary leading-relaxed mb-6">
                An experienced and dedicated Construction Foreman to lead and
                oversee construction projects with a focus on quality, safety,
                and efficiency.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal mb-4 font-sans">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2.5 text-text-secondary text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-accent flex-shrink-0" />
                      Manage daily on-site construction activities and timelines
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-accent flex-shrink-0" />
                      Supervise, motivate, and lead a diverse crew of workers
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-accent flex-shrink-0" />
                      Coordinate with subcontractors to align schedules and resolve issues
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-accent flex-shrink-0" />
                      Enforce safety protocols, conduct regular inspections
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-accent flex-shrink-0" />
                      Monitor work quality to meet or exceed industry standards
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-accent flex-shrink-0" />
                      Provide regular updates and maintain accurate daily logs
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-accent flex-shrink-0" />
                      Guide and mentor less experienced crew members
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal mb-4 font-sans">
                    Qualifications
                  </h4>
                  <ul className="space-y-2.5 text-text-secondary text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-accent flex-shrink-0" />
                      5-7 years construction experience, 2-3 years supervisory
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-accent flex-shrink-0" />
                      In-depth knowledge of construction methods, materials, and tools
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-accent flex-shrink-0" />
                      Excellent verbal and written communication skills
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-accent flex-shrink-0" />
                      Valid driver&apos;s license; OSHA 30-hour certification preferred
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-accent flex-shrink-0" />
                      Experience reading blueprints and construction plans
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-accent flex-shrink-0" />
                      Familiarity with Procore, Buildertrend, or similar software a plus
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-accent flex-shrink-0" />
                      Bilingual skills (English/Spanish) a plus
                    </li>
                  </ul>

                  <p className="text-text-secondary text-sm mt-6">
                    <strong className="text-charcoal">Work Environment:</strong>{" "}
                    Primarily on-site with exposure to outdoor elements. Occasional
                    evening or weekend work may be required. Travel to different
                    job sites may be necessary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent font-sans">
            How to Apply
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mt-4 text-charcoal">
            Ready to Join the Team?
          </h2>
          <p className="mt-6 text-text-secondary text-lg leading-relaxed">
            Send your application and resume to the email below, or mail it to
            our office. We look forward to hearing from you.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left max-w-xl mx-auto">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-accent font-sans mb-2">
                By Email
              </h3>
              <a
                href="mailto:info@blacktailbuildersllc.com?subject=Job%20Application"
                className="text-charcoal hover:text-accent transition-colors font-medium"
              >
                info@blacktailbuildersllc.com
              </a>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-accent font-sans mb-2">
                By Mail
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Blacktail Builders LLC / HR<br />
                1224 NE Walnut St, 208<br />
                Roseburg, OR 97470
              </p>
            </div>
          </div>

          <a
            href="mailto:info@blacktailbuildersllc.com?subject=Job%20Application"
            className="mt-10 inline-block text-sm font-semibold uppercase tracking-wider px-8 py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors"
          >
            Send Your Application
          </a>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Not Sure Yet?"
        subheading="Reach out with questions about our team or open positions. We're happy to talk."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
