// ponytail: single source of truth for business facts — page, metadata and JSON-LD all read from here.

// TODO before launch: replace with the real domain once bought.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://adarshmotordrivingschool.in";

// Discount shown on every package. Set to 0 to switch the offer off everywhere.
export const DISCOUNT = 10;
// false = hide rupee amounts and show only the offer; people call/WhatsApp for the fee.
export const SHOW_PRICES = false;
export const rupees = (n: number) => `₹${n.toLocaleString("en-IN")}`;
export const offerPrice = (n: number) => Math.round((n * (100 - DISCOUNT)) / 100);

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
  {
    name: "Two-wheeler training (12 days)",
    price: 1650,
    includes: ["12 days of practical riding lessons", "Balance, braking and riding safely in traffic"],
  },
  {
    name: "Two-wheeler training (6 days)",
    price: 999,
    includes: ["6 days of practical riding lessons", "Balance, braking and riding safely in traffic"],
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
    q: "How much do driving classes cost in Akot?",
    a: !SHOW_PRICES
      ? `Every package currently has ${DISCOUNT}% off. Call or WhatsApp us on 93715 33138 and we will tell you the exact fee for the course you want.`
      : `With our ${DISCOUNT}% discount: car training alone is ${rupees(offerPrice(3500))}. With the four-wheeler licence process it is ${rupees(offerPrice(5750))}, and with both two-wheeler and four-wheeler licences it is ${rupees(offerPrice(6750))}. The 12-day advanced car course is ${rupees(offerPrice(2500))}, and two-wheeler training is ${rupees(offerPrice(999))} for 6 days or ${rupees(offerPrice(1650))} for 12 days.`,
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

