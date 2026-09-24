import { useState } from "react";
import Button from "@components/ui/Button/Button.jsx";
import { submitContact } from "@services/api/contact.js";
import styles from "./ContactForm.module.css";

const EMPTY = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const res = await submitContact(form);
    if (res.ok) {
      setStatus("sent");
      setForm(EMPTY);
    } else {
      setStatus("error");
    }
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.field}>
        <span>Name</span>
        <input name="name" value={form.name} onChange={update} required />
      </label>
      <label className={styles.field}>
        <span>Email</span>
        <input type="email" name="email" value={form.email} onChange={update} required />
      </label>
      <label className={styles.field}>
        <span>Project details</span>
        <textarea name="message" rows={5} value={form.message} onChange={update} required />
      </label>

      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </Button>

      {status === "sent" && <p className={styles.ok} role="status">Thanks — we'll be in touch.</p>}
      {status === "error" && (
        <p className={styles.err} role="alert">Something went wrong. Email hello@wowstack.com instead.</p>
      )}
    </form>
  );
}
