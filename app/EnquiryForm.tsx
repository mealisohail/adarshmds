"use client";

import { PACKAGES, rupees, waLink } from "./site";

// ponytail: no backend — the form just composes a WhatsApp message. Add an API route if they want leads stored.
export default function EnquiryForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const lines = [
      "Namaste Adarsh Motor Driving School!",
      `Name: ${f.get("name")}`,
      `Mobile: ${f.get("phone")}`,
      `Course: ${f.get("course")}`,
      f.get("time") && `Preferred time: ${f.get("time")}`,
      f.get("message") && `Message: ${f.get("message")}`,
      "Please share batch availability and next steps.",
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank", "noopener");
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row">
        <label>
          Your name
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          Mobile number
          <input name="phone" type="tel" required inputMode="numeric" pattern="[0-9+ ]{10,14}" autoComplete="tel" placeholder="10-digit number" />
        </label>
      </div>
      <label>
        Course
        <select name="course" required defaultValue="">
          <option value="" disabled>Choose a course</option>
          {PACKAGES.map((p) => (
            <option key={p.name}>{`${p.name} — ${rupees(p.price)}`}</option>
          ))}
          <option>RTO / licence work only</option>
          <option>Vehicle insurance</option>
        </select>
      </label>
      <label>
        Preferred time
        <select name="time" defaultValue="">
          <option value="">Any time</option>
          <option>Morning</option>
          <option>Afternoon</option>
          <option>Evening</option>
        </select>
      </label>
      <label>
        Question (optional)
        <textarea name="message" rows={3} />
      </label>
      <button className="btn btn-red btn-block" type="submit">Send on WhatsApp</button>
      <p className="form-note">This opens WhatsApp with your details filled in. Nothing is sent until you tap send there.</p>
    </form>
  );
}
