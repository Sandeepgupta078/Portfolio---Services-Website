// frontend/src/components/Services.jsx
import { services } from "../data";

const icons = ["💻", "🎨", "📈", "📱", "🧪", "🤝"];

export default function Services() {
  return (
    <section id="services" className="section-container">
      <p className="section-eyebrow">Services</p>
      <h2 className="section-title">How I can plug into your team</h2>
      <p className="section-subtitle max-w-2xl">
        Pick the mix of{" "}
        <span className="font-semibold">
          development, design and marketing
        </span>{" "}
        you need. I&apos;m comfortable owning the full funnel, or collaborating
        with existing teams.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="relative overflow-hidden rounded-2xl border border-base bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-base/70 bg-base/70 px-3 py-1 text-xs text-slate-500">
              <span className="text-base">
                {icons[i] ?? "✨"}
              </span>
              <span>Service #{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="mb-2 text-lg font-semibold tracking-tight">
              {s.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
