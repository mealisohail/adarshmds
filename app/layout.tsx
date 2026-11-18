import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { ADDRESS, DISCOUNT, FAQS, SHOW_PRICES, HOURS, MAPS_URL, NAME, NAME_MR, offerPrice, PACKAGES, PHONES, rupees, SITE_URL } from "./site";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const deva = Noto_Sans_Devanagari({ subsets: ["devanagari"], weight: ["500", "700", "800"], variable: "--font-deva" });

const title = "Adarsh Motor Driving School Akot | Car Driving Classes & RTO Licence Help";
const prices = PACKAGES.map((p) => offerPrice(p.price));
const description = `Government-recognised driving school in Akot, near City Police Station, Akola Road. ${SHOW_PRICES ? `${DISCOUNT}% off all packages: car training ${rupees(offerPrice(3500))}, two-wheeler training from ${rupees(offerPrice(999))}.` : `Car and two-wheeler training with ${DISCOUNT}% off every package.`} Learner & driving licence, RTO work and vehicle insurance. Call 93715 33138.`;

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
      ...(SHOW_PRICES ? { priceRange: `${rupees(Math.min(...prices))} – ${rupees(Math.max(...prices))}` } : {}),
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
        ...(SHOW_PRICES ? { price: offerPrice(p.price), priceCurrency: "INR" } : { description: `${DISCOUNT}% off` }),
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
