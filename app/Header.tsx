"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PhoneIcon } from "./icons";
import { NAME, PHONES } from "./site";
import logo from "@/public/images/logo.png";

const NAV = [
  ["#fees", "Fees"],
  ["#rto", "RTO work"],
  ["#school", "Our school"],
  ["#enquire", "Enquire"],
  ["#faq", "FAQ"],
  ["#contact", "Contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const phone = PHONES[0];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`header${open ? " is-open" : ""}`}>
      <div className="wrap header-row">
        <a href="#top" className="brand" aria-label={`${NAME} home`} onClick={close}>
          <Image src={logo} alt="" width={44} height={44} priority />
          <span>
            <strong>Adarsh Motor Driving School</strong>
            <small>Akot</small>
          </span>
        </a>
        <nav id="site-nav" aria-label="Sections" className="nav">
          {NAV.map(([href, label]) => (
            <a key={href} href={href} onClick={close}>{label}</a>
          ))}
          <a className="btn btn-red nav-call-mobile" href={`tel:${phone.e164}`}>
            <PhoneIcon /> Call {phone.display}
          </a>
        </nav>
        <a className="btn btn-red btn-sm header-call" href={`tel:${phone.e164}`} aria-label={`Call ${phone.display}`}>
          <PhoneIcon /> <span>{phone.display}</span>
        </a>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <span aria-hidden />
        </button>
      </div>
    </header>
  );
}
