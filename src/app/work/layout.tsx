import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Custom Home Portfolio in Southern Oregon",
  description:
    "Explore the portfolio of Blacktail Builders LLC — custom homes, interiors, outdoor living, and outbuildings across Douglas, Coos, and Curry Counties, Oregon.",
  alternates: {
    canonical: "https://www.blacktailbuildersllc.com/work",
  },
  openGraph: {
    title: "Our Work | Blacktail Builders LLC Portfolio",
    description:
      "Custom homes, precision interiors, and quality construction across Southern Oregon.",
    url: "https://www.blacktailbuildersllc.com/work",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
