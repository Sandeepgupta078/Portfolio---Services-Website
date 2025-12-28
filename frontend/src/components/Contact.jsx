// frontend/src/components/Contact.jsx
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const sendMessage = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:4000/api/contact",
        form
      );
      setStatus(res.data?.message || "Message sent!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus(
        err.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-container">
      <p className="section-eyebrow">Contact</p>
      <h2 className="section-title">Let&apos;s build something together</h2>
      <p className="section-subtitle max-w-2xl">
        Share a bit about your product, brand or idea. I&apos;ll reply with{" "}
        <span className="font-semibold">next steps within 24 hours</span>.
      </p>

      <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
        {/* Left info column */}
        <div className="flex flex-col justify-between gap-6 rounded-2xl border border-base bg-card p-6 shadow-sm">
          <div>
            <h3 className="mb-3 text-sm font-semibold tracking-tight">
              What works best
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-500">
              <li>• Local businesses that want predictable leads</li>
              <li>• Landing pages + funnels for ads</li>
              <li>• Full-stack web apps that tie into marketing</li>
            </ul>
          </div>

          <div className="space-y-2 text-sm text-slate-600 dark:text-slate-500">
            <p className="font-semibold text-slate-700 dark:text-slate-400">
              Prefer WhatsApp or email?
            </p>
            <p>📧 sandeepmgs078@gmail.com</p>
            <p>📍 Lucknow, India</p>
          </div>
        </div>

        {/* Right form column */}
        <form
          onSubmit={sendMessage}
          className="rounded-2xl border border-base bg-card p-6 shadow-sm space-y-4"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-500">
                Name
              </label>
              <input
                className="w-full rounded-xl border border-base bg-base px-3 py-2 text-sm outline-none focus:border-primary/70"
                name="name"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-500">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-xl border border-base bg-base px-3 py-2 text-sm outline-none focus:border-primary/70"
                name="email"
                placeholder="you@gmail.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-500">
              Project / subject
            </label>
            <input
              className="w-full rounded-xl border border-base bg-base px-3 py-2 text-sm outline-none focus:border-primary/70"
              name="subject"
              placeholder="Landing page for fashion brand, full-stack app, etc."
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-500">
              Message
            </label>
            <textarea
              className="h-32 w-full rounded-xl border border-base bg-base px-3 py-2 text-sm outline-none focus:border-primary/70"
              name="message"
              placeholder="Tell me about your goals, timelines and budget range."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full justify-center"
            disabled={loading}
          >
            {loading ? "Sending…" : "Send message"}
          </button>

          {status && (
            <p className="text-xs text-emerald-500 dark:text-emerald-400 mt-2">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
