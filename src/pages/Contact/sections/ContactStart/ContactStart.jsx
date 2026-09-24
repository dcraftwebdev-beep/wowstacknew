import { useState, useRef, useEffect } from "react";
import DotMark from "@components/ui/DotMark/DotMark.jsx";
import { submitContact } from "@services/api/contact.js";
import styles from "./ContactStart.module.css";

const SERVICES = [
  "Web Design & Development",
  "App Development",
  "Custom Dashboards",
  "Ecommerce",
  "SEO & Growth Engines",
  "AEO Optimization",
  "UI/UX Design",
  "Automation & AI",
  "Maintenance & Support",
  "Something else",
];

const BUDGETS = ["Under ₹50k", "₹50k – ₹2L", "₹2L – ₹5L", "₹5L+"];

const EMPTY = { name: "", email: "", service: "", budget: "", message: "" };

/** Custom dropdown — replaces the native <select> for full styling control. */
function CustomSelect({ value, onChange, options, placeholder }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={styles.select} ref={ref}>
      <button
        type="button"
        className={styles.selectBtn}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={value ? styles.selectValue : styles.selectPlaceholder}>
          {value || placeholder}
        </span>
        <svg className={`${styles.chev} ${open ? styles.chevOpen : ""}`} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul className={styles.options} role="listbox">
          {options.map((opt) => (
            <li
              key={opt}
              role="option"
              aria-selected={value === opt}
              className={`${styles.option} ${value === opt ? styles.optionActive : ""}`}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ContactStart() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [serviceError, setServiceError] = useState(false);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const setField = (key) => (val) => setForm((f) => ({ ...f, [key]: val }));

  async function onSubmit(e) {
    e.preventDefault();
    if (!form.service) {
      setServiceError(true);
      return;
    }
    setServiceError(false);
    setStatus("sending");
    // Fold the service + budget into the message so it stores with the enquiry.
    const message =
      `Service: ${form.service || "—"}\n` +
      `Budget: ${form.budget || "—"}\n\n` +
      form.message;
    const res = await submitContact({ name: form.name, email: form.email, message });
    if (res.ok) {
      setStatus("sent");
      setForm(EMPTY);
    } else {
      setStatus("error");
    }
  }

  return (
    <section className={styles.section} id="start" aria-label="Start a project">
      <div className={styles.card}>
        {/* Left — dark panel with headline + contact details */}
        <div className={styles.left}>
          <h2 className={styles.leftHeading}>
            Convert your ideas into a
            <span className={styles.accent}> business that wins.</span>
          </h2>

          <div className={styles.bottom}>
            <ul className={styles.contacts}>
              <li>
                <a className={styles.contact} href="mailto:hello@wowstack.com">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                  hello@wowstack.com
                </a>
              </li>
              <li>
                <a className={styles.contact} href="tel:+910000000000">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8.1 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" />
                  </svg>
                  +91 00000 00000
                </a>
              </li>
              <li>
                <a className={styles.contact} href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.1-5.3A8.5 8.5 0 1 1 21 11.5z" />
                    <path d="M8.5 9c0 3.6 2.9 6.5 6.5 6.5" />
                  </svg>
                  WhatsApp us
                </a>
              </li>
            </ul>

            <p className={styles.leftNote}>
              No queues, no juniors &mdash; just senior people who ship.
            </p>
          </div>
        </div>

        {/* Right — enquiry form */}
        <div className={styles.right}>
          <DotMark className={styles.mark} />
          <h3 className={styles.title}>Start a project</h3>
          <p className={styles.sub}>Tell us what you need &mdash; we&rsquo;ll reply within a business day.</p>

          <form className={styles.form} onSubmit={onSubmit}>
            <label className={styles.field}>
              <span>Your name</span>
              <input name="name" value={form.name} onChange={update} placeholder="Jane Doe" required />
            </label>

            <label className={styles.field}>
              <span>Your email</span>
              <input type="email" name="email" value={form.email} onChange={update} placeholder="jane@company.com" required />
            </label>

            <div className={styles.field}>
              <span>What do you need?</span>
              <CustomSelect
                value={form.service}
                onChange={(val) => {
                  setField("service")(val);
                  setServiceError(false);
                }}
                options={SERVICES}
                placeholder="Choose a service"
              />
              {serviceError && <span className={styles.fieldErr}>Please choose a service.</span>}
            </div>

            <div className={styles.field}>
              <span>Budget range <em>(optional)</em></span>
              <CustomSelect
                value={form.budget}
                onChange={setField("budget")}
                options={BUDGETS}
                placeholder="Prefer not to say"
              />
            </div>

            <label className={styles.field}>
              <span>Project details</span>
              <textarea name="message" rows={4} value={form.message} onChange={update} placeholder="A few lines about your goals, timeline and where you are today." required />
            </label>

            <button type="submit" className={styles.submit} disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Put us to work"}
            </button>

            {status === "sent" && (
              <p className={styles.ok} role="status">Got it — we&rsquo;ll be in touch shortly.</p>
            )}
            {status === "error" && (
              <p className={styles.err} role="alert">
                Something went wrong. Email hello@wowstack.com instead.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
