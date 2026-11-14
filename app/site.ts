// ponytail: single source of truth for business facts — page, metadata and JSON-LD all read from here.

// TODO before launch: replace with the real domain once bought.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://adarshmotordrivingschool.in";

export const NAME = "Adarsh Motor Driving School Akot";
export const NAME_MR = "आदर्श मोटर ड्रायव्हींग स्कुल आकोट";

export const PHONES = [
  { display: "93715 33138", e164: "+919371533138" },
  { display: "77988 17656", e164: "+917798817656" },
];
export const WHATSAPP = "919371533138";
export const waLink = (text: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

export const ADDRESS = {
  street: "Near City Police Station, Akola Road",
  city: "Akot",
  district: "Akola",
  region: "Maharashtra",
  postalCode: "444101",
};

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Adarsh+Motor+Driving+School+near+City+Police+Station+Akola+Road+Akot";

// TODO confirm with owner — taken from the earlier draft site.
export const HOURS = [
  { days: "Mon – Sat", time: "7:00 AM – 8:00 PM", schema: "Mo-Sa 07:00-20:00" },
  { days: "Sunday", time: "8:00 AM – 2:00 PM", schema: "Su 08:00-14:00" },
];

export type Pkg = { name: string; price: number; tag?: string; includes: string[] };

export const PACKAGES: Pkg[] = [
  {
    name: "Car training + two-wheeler & four-wheeler licence",
    price: 6750,
    tag: "Complete package",
    includes: [
      "Four-wheeler basic driving training",
      "Licence process for both two-wheeler and four-wheeler",
      "Help with documents and application steps",
    ],
  },
  {
    name: "Car training + four-wheeler licence",
    price: 5750,
    includes: ["Four-wheeler driving training", "Four-wheeler licence process", "Help with documents and application steps"],
  },
  {
    name: "Car training only",
    price: 3500,
    includes: ["Four-wheeler driving training", "Practical, step-by-step lessons", "No licence work included"],
  },
  {
    name: "Advanced driving course (12 days)",
    price: 2500,
    includes: ["Day driving, reverse & box parking, night driving", "For learners who already know the basics"],
  },
];

export const ADVANCED_PLAN = [
  { days: "Days 1–4", title: "Day driving", text: "Traffic, lane discipline and confident gear changes on real Akot roads." },
  { days: "Days 5–8", title: "Reverse & box parking", text: "Reversing straight and around corners, parking in tight boxes." },
  { days: "Days 9–12", title: "Night driving", text: "Headlight use, judging distance in the dark, handling oncoming glare." },
];

// From the school's storefront banner.
export const RTO_SERVICES = [
  { mr: "शिक्षण परवाना", en: "Learner licence (LL)" },
  { mr: "वाहन परवाना", en: "Driving licence (DL)" },
  { mr: "वाहन परवाना नूतनीकरण", en: "Driving licence renewal" },
  { mr: "वाहन नोंदणी बदल", en: "Ownership transfer (RC)" },
  { mr: "RTO संबंधित सर्व कामे", en: "All other RTO work" },
];

export const INSURERS = [
  "SBI General",
  "HDFC ERGO",
  "Reliance General",
  "Chola MS",
  "Kotak General",
  "Digit",
  "Zurich Kotak",
  "Tata AIG",
  "Allianz",
  "IFFCO-Tokio",
];

export const FAQS = [
  {
    q: "How much do car driving classes cost in Akot?",
    a: "Car training alone is ₹3,500. With the four-wheeler licence process it is ₹5,750, and with both two-wheeler and four-wheeler licences it is ₹6,750. The 12-day advanced course is ₹2,500.",
  },
  {
    q: "Are RTO and government fees included in the package?",
    a: "Please confirm this with us before you pay. Government fees and test fees are set by the RTO, and we will tell you exactly what your package covers.",
  },
  {
    q: "What is the minimum age for a driving licence?",
    a: "It depends on the vehicle class. For a car (LMV) licence it is generally 18 years. Check current rules on the official Parivahan portal, or ask us and we will guide you.",
  },
  {
    q: "Which documents do I need for a learner licence?",
    a: "Usually proof of age, proof of address and photos. The exact list can change, so call or WhatsApp us and we will send you the current checklist.",
  },
  {
    q: "Do you guarantee that I will pass the driving test?",
    a: "No school can promise that, because the RTO decides the result. We focus on practical, safe driving so you are ready for the test and for real roads.",
  },
  {
    q: "Can I choose morning or evening timings?",
    a: "Yes. Tell us your preferred time when you enquire and we will confirm which batch slots are free.",
  },
  {
    q: "Do you also help with vehicle insurance?",
    a: "Yes. We are an authorised agent for several insurers including SBI General, HDFC ERGO, Tata AIG, Digit and more. Ask us for a quote.",
  },
];

export const rupees = (n: number) => `₹${n.toLocaleString("en-IN")}`;
