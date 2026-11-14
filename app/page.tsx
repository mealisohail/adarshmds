import Image from "next/image";
import EnquiryForm from "./EnquiryForm";
import Header from "./Header";
import { PhoneIcon, WaIcon } from "./icons";
import {
  ADDRESS, ADVANCED_PLAN, FAQS, HOURS, INSURERS, MAPS_URL, NAME, NAME_MR, PACKAGES, PHONES, RTO_SERVICES, rupees, waLink,
} from "./site";

import carFrontSide from "@/public/images/training-car-akot-front-side.jpg";
import carRoof from "@/public/images/training-car-front-roof-sign.jpg";
import carRear from "@/public/images/training-car-rear.jpg";
import carSide from "@/public/images/training-car-side-livery.jpg";
import storefront from "@/public/images/storefront-adarsh-driving-school-akot.jpg";
import reception from "@/public/images/office-reception-desk.jpg";
import logoWall from "@/public/images/reception-logo-wall.jpg";
import signsBoard from "@/public/images/road-signs-classroom-board.jpg";


export default function Home() {
  const [main, alt] = PHONES;
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      <Header />

      <main id="main">
        {/* HERO */}
        <section id="top" className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p aria-hidden className="hero-word" lang="mr">आदर्श</p>
              <p className="hero-kicker" lang="mr">सरकार मान्य, RTO Akola recognised</p>
              <h1>Car driving classes and licence help in Akot</h1>
              <p className="hero-lede">
                Learn to drive with patient, practical lessons on real roads. Car training from {rupees(3500)}, plus learner
                licence, driving licence and every other RTO job under one roof, near City Police Station on Akola Road.
              </p>
              <div className="hero-cta">
                <a className="btn btn-red" href={`tel:${main.e164}`}><PhoneIcon /> Call {main.display}</a>
                <a className="btn btn-wa" href={waLink("Namaste! I want to know about driving classes.")} target="_blank" rel="noopener">
                  <WaIcon /> WhatsApp us
                </a>
              </div>
            </div>
            <figure className="hero-photo">
              <Image
                src={carFrontSide}
                alt="Adarsh Motor Driving School training car, a white Tata Indica Vista with the school's roof sign, in Akot"
                priority
                placeholder="blur"
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </figure>
          </div>
          <div className="lane" aria-hidden />
        </section>

        {/* FEES */}
        <section id="fees" className="section">
          <div className="wrap">
            <h2>Training fees</h2>
            <p className="lede">One price per package. Ask us about batch timings when you call.</p>

            <div className="board">
              <div className="board-head" lang="mr">
                <span className="lplate" aria-hidden>L</span>
                <span>{NAME_MR}</span>
                <span className="lplate" aria-hidden>L</span>
              </div>
              <ul className="board-rows">
                {PACKAGES.map((p) => (
                  <li key={p.name} className="board-row">
                    <div>
                      <h3>
                        {p.name}
                        {p.tag && <span className="tag">{p.tag}</span>}
                      </h3>
                      <ul className="ticks">
                        {p.includes.map((i) => <li key={i}>{i}</li>)}
                      </ul>
                    </div>
                    <div className="board-price">
                      <strong>{rupees(p.price)}</strong>
                      <a href={waLink(`Namaste! I am interested in: ${p.name} (${rupees(p.price)}).`)} target="_blank" rel="noopener">
                        Ask about this
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <p className="note">
              RTO and government test fees are set by the RTO. Confirm with us whether they are included before you pay. The
              licence itself is issued by the RTO after your test.
            </p>

            <h3 className="sub-h">How the 12-day advanced course runs</h3>
            <ol className="road">
              {ADVANCED_PLAN.map((s) => (
                <li key={s.days}>
                  <span className="road-days">{s.days}</span>
                  <strong>{s.title}</strong>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* RTO + INSURANCE */}
        <section id="rto" className="section on-red red-700">
          <div className="wrap split">
            <div>
              <h2>RTO work, done for you</h2>
              <p className="lede">
                No queues or confusing forms. Bring your documents and we handle the application and paperwork with the Akola RTO.
              </p>
              <ul className="services">
                {RTO_SERVICES.map((s) => (
                  <li key={s.en}>
                    <strong>{s.en}</strong>
                    <span lang="mr">{s.mr}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="insure">
              <h2>Vehicle insurance</h2>
              <p className="lede" lang="mr">अधिकृत विमा प्रतिनिधी</p>
              <p>
                We are an authorised insurance agent. Get a new policy or renew your car or bike insurance at the same counter.
              </p>
              <ul className="insurers">
                {INSURERS.map((i) => <li key={i}>{i}</li>)}
              </ul>
              <a className="btn btn-dark" href={waLink("Namaste! I need a vehicle insurance quote.")} target="_blank" rel="noopener">
                <WaIcon /> Get an insurance quote
              </a>
            </div>
          </div>
        </section>

        {/* SCHOOL */}
        <section id="school" className="section">
          <div className="wrap">
            <h2>Visit our school</h2>
            <p className="lede">
              Look for the red <span lang="mr">आदर्श</span> board near City Police Station. Lessons start in our classroom, where
              you learn every road sign on the RTO chart, then move to the car.
            </p>
            <div className="mosaic">
              <figure className="m-tall">
                <Image src={storefront} alt="Storefront of Adarsh Motor Driving School on Akola Road, Akot, with red Marathi signboard" placeholder="blur" sizes="(max-width: 700px) 100vw, 33vw" />
                <figcaption>Our office</figcaption>
              </figure>
              <figure className="m-wide">
                <Image src={signsBoard} alt="Road traffic signs chart in the Adarsh Motor Driving School classroom, recognised by RTO Akola" placeholder="blur" sizes="(max-width: 700px) 100vw, 66vw" />
                <figcaption>Road signs</figcaption>
              </figure>
              <figure>
                <Image src={reception} alt="Reception desk with Adarsh Motor Driving School logo" placeholder="blur" sizes="(max-width: 700px) 50vw, 33vw" />
                <figcaption>Reception</figcaption>
              </figure>
              <figure>
                <Image src={logoWall} alt="Adarsh Motor Driving School Akot logo on the office wall" placeholder="blur" sizes="(max-width: 700px) 50vw, 33vw" />
                <figcaption>Enquiry desk</figcaption>
              </figure>
            </div>

            <h3 className="sub-h">The training car</h3>
            <div className="strip" tabIndex={0} aria-label="Training car photos, scroll sideways">
              <Image src={carRoof} alt="Front view of the training car with the L-plate roof sign showing both phone numbers" placeholder="blur" sizes="(max-width: 700px) 85vw, 33vw" />
              <Image src={carSide} alt="Side view of the training car with Adarsh Motor Driving School Marathi livery" placeholder="blur" sizes="(max-width: 700px) 85vw, 33vw" />
              <Image src={carRear} alt="Rear view of the Tata Indica Vista training car" placeholder="blur" sizes="(max-width: 700px) 85vw, 33vw" />
            </div>
          </div>
        </section>

        {/* ENQUIRE */}
        <section id="enquire" className="section on-red red-600">
          <div className="wrap split">
            <div>
              <h2>Ask about a batch</h2>
              <p className="lede">
                Fill this in and WhatsApp opens with your message ready. Prefer to talk? Call either number below.
              </p>
              <ul className="phones">
                {PHONES.map((p) => (
                  <li key={p.e164}>
                    <a href={`tel:${p.e164}`}><PhoneIcon /> {p.display}</a>
                  </li>
                ))}
              </ul>
            </div>
            <EnquiryForm />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section red-tint">
          <div className="wrap narrow">
            <h2>Common questions</h2>
            <div className="faq">
              {FAQS.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section on-red red-800">
          <div className="wrap split">
            <div>
              <h2>Find us</h2>
              <address className="addr">
                <strong>{NAME}</strong>
                <span lang="mr">{NAME_MR}</span>
                {ADDRESS.street}, {ADDRESS.city}, {ADDRESS.district} district, {ADDRESS.region} {ADDRESS.postalCode}
              </address>
              <dl className="hours">
                {HOURS.map((h) => (
                  <div key={h.days}><dt>{h.days}</dt><dd>{h.time}</dd></div>
                ))}
              </dl>
              <div className="hero-cta">
                <a className="btn btn-red" href={MAPS_URL} target="_blank" rel="noopener">Get directions</a>
                <a className="btn btn-outline" href={`tel:${main.e164}`}><PhoneIcon /> Call us</a>
              </div>
            </div>
            <div className="map">
              <iframe
                title={`Map showing ${NAME}`}
                src="https://maps.google.com/maps?q=Adarsh%20Motor%20Driving%20School%2C%20Akola%20Road%2C%20Akot&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-row">
          <p>
            © {new Date().getFullYear()} {NAME}. <span lang="mr">सरकार मान्य</span> driving school.
          </p>
          <p>
            <a href={`tel:${main.e164}`}>{main.display}</a> / <a href={`tel:${alt.e164}`}>{alt.display}</a>
          </p>
        </div>
      </footer>

      {/* Mobile action bar */}
      <div className="actionbar">
        <a href={`tel:${main.e164}`}><PhoneIcon /> Call</a>
        <a href={waLink("Namaste! I want to know about driving classes.")} target="_blank" rel="noopener" className="ab-wa"><WaIcon /> WhatsApp</a>
      </div>
    </>
  );
}
