import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { ADDRESS, FAQS, HOURS, MAPS_URL, NAME, NAME_MR, PACKAGES, PHONES, SITE_URL } from "./site";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const deva = Noto_Sans_Devanagari({ subsets: ["devanagari"], weight: ["500", "700", "800"], variable: "--font-deva" });

const title = "Adarsh Motor Driving School Akot | Car Driving Classes & RTO Licence Help";
const description =
  "Government-recognised driving school in Akot, near City Police Station, Akola Road. Car training from ₹3,500, two-wheeler training from ₹999, learner & driving licence, DL renewal, RTO work and vehicle insurance. Call 93715 33138.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "driving school Akot",
    "car driving classes Akot",
    "Adarsh Motor Driving School",
    "driving licence Akot",
    "learner licence Akot",
    "RTO agent Akot",
    "four wheeler training Akot",
    "two wheeler training Akot",
    "driving school Akola district",
    "आदर्श मोटर ड्रायव्हींग स्कुल आकोट",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: NAME,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large" } },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = { themeColor: "#E3211B" };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "DrivingSchool",
      "@id": `${SITE_URL}/#school`,
      name: NAME,
      alternateName: NAME_MR,
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.png`,
      image: [
        `${SITE_URL}/images/storefront-adarsh-driving-school-akot.jpg`,
        `${SITE_URL}/images/training-car-akot-front-side.jpg`,
        `${SITE_URL}/images/office-reception-desk.jpg`,
      ],
      description,
      telephone: PHONES.map((p) => p.e164),
      priceRange: "₹999 – ₹6,750",
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.city,
        addressRegion: ADDRESS.region,
        postalCode: ADDRESS.postalCode,
        addressCountry: "IN",
      },
      hasMap: MAPS_URL,
      areaServed: ["Akot", "Akola district", "Telhara", "Hiwarkhed", "Anjangaon Surji"].map((n) => ({ "@type": "Place", name: n })),
      openingHours: HOURS.map((h) => h.schema),
      makesOffer: PACKAGES.map((p) => ({
        "@type": "Offer",
        price: p.price,
        priceCurrency: "INR",
        itemOffered: { "@type": "Service", name: p.name },
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable} ${deva.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
