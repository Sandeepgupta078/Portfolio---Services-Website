// frontend/src/components/Experience.jsx
import { experiences } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <p className="section-eyebrow">Experience</p>
      <h2 className="section-title">Where I’ve been hands-on</h2>
      <p className="section-subtitle max-w-2xl">
        From managing teams to running campaigns end-to-end, here&apos;s a quick
        snapshot of my experience so far.
      </p>

      <div className="relative mt-6 space-y-6">
        <div className="absolute left-3 top-0 h-full w-px bg-slate-200 dark:bg-slate-800" />

        {experiences.map((e, i) => (
          <div key={e.role + i} className="relative pl-10">
            <div className="absolute left-1 top-3 h-3 w-3 rounded-full border border-slate-300 bg-slate-100 dark:border-slate-600 dark:bg-slate-900" />

            <div className="rounded-2xl border border-base bg-card p-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400 mb-1">
                {e.period}
              </p>
              <h3 className="text-lg font-semibold tracking-tight">
                {e.role}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-300 mb-3">
                {e.company}
              </p>

              <ul className="mt-1 space-y-1.5 text-sm text-slate-600 dark:text-slate-300 list-disc list-inside">
                {e.list?.map((l, idx) => (
                  <li key={idx}>{l}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
