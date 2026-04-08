import Link from "next/link";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/careers", label: "Careers" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {/* Logo & Tagline */}
          <div>
            <Link href="/">
              <img
                src="/logos/logo-header.png"
                alt="Blacktail Builders LLC"
                className="h-14 w-auto invert brightness-200 mb-6"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Full-service residential construction rooted in craftsmanship and
              built on trust. Serving Southern Oregon.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6 font-sans">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6 font-sans">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a
                  href="tel:+15413786971"
                  className="hover:text-white transition-colors"
                >
                  (541) 378-6971
                </a>
              </li>
              <li>
                <a
                  href="mailto:Info@blacktailbuildersllc.com"
                  className="hover:text-white transition-colors"
                >
                  Info@blacktailbuildersllc.com
                </a>
              </li>
              <li>Roseburg, Oregon 97471</li>
              <li className="pt-2 text-gray-400">
                Serving Douglas County, Coos County &amp; Curry County
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Blacktail Builders LLC. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
