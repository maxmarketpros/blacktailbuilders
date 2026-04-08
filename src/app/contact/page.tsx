import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Contact Blacktail Builders LLC | (541) 378-6971 | Roseburg OR",
  description:
    "Contact Blacktail Builders LLC for a consultation on your custom home or construction project. Call (541) 378-6971 or email Info@blacktailbuildersllc.com. Serving Douglas, Coos, and Curry Counties, Oregon.",
  alternates: {
    canonical: "https://www.blacktailbuildersllc.com/contact",
  },
  openGraph: {
    title: "Contact Blacktail Builders LLC | Request a Consultation",
    description:
      "Get in touch for your custom home or construction project in Southern Oregon. Call (541) 378-6971.",
    url: "https://www.blacktailbuildersllc.com/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <Hero
        imageSrc="/images/exterior-siding-detail.webp"
        imageMobileSrc="/images/exterior-siding-detail-mobile.webp"
        imageAlt="Natural wood board-and-batten siding detail"
        height="short"
        overlayOpacity="bg-black/50"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-300 font-sans">
          Contact
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-3">
          Let&apos;s Build Together
        </h1>
      </Hero>

      {/* Contact Content */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl text-charcoal">
                Get in Touch
              </h2>
              <p className="mt-6 text-text-secondary leading-relaxed">
                Ready to start your project? Have questions about our services?
                We&apos;d love to hear from you. Reach out directly or fill out
                the form and we&apos;ll get back to you promptly.
              </p>

              <div className="mt-10 space-y-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-accent font-sans mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+15413786971"
                    className="text-charcoal hover:text-accent transition-colors text-lg"
                  >
                    (541) 378-6971
                  </a>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-accent font-sans mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:Info@blacktailbuildersllc.com"
                    className="text-charcoal hover:text-accent transition-colors"
                  >
                    Info@blacktailbuildersllc.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-accent font-sans mb-2">
                    Location
                  </h3>
                  <p className="text-text-secondary">
                    Roseburg, Oregon 97471
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-accent font-sans mb-2">
                    Service Area
                  </h3>
                  <p className="text-text-secondary">
                    Douglas County, Coos County &amp; Curry County, Oregon
                  </p>
                </div>
              </div>
            </div>

            {/* Form Iframe */}
            <div className="lg:col-span-3">
              <div className="bg-warm-gray p-6 lg:p-10" style={{ minHeight: "1122px" }}>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/1K6UB0HtxoYe8YayjbkA"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    minHeight: "1050px",
                  }}
                  id="inline-1K6UB0HtxoYe8YayjbkA"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Website Form 1"
                  data-height="1122"
                  data-layout-iframe-id="inline-1K6UB0HtxoYe8YayjbkA"
                  data-form-id="1K6UB0HtxoYe8YayjbkA"
                  title="Website Form 1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
