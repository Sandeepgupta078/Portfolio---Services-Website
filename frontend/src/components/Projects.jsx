// frontend/src/components/Projects.jsx
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <p className="section-eyebrow">Projects</p>
      <h2 className="section-title">Selected work & experiments</h2>
      <p className="section-subtitle max-w-2xl">
        A snapshot of the{" "}
        <span className="font-semibold">
          products, landing pages and growth experiments
        </span>{" "}
        I&apos;ve shipped recently.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <article
            key={p.title ?? i}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-base bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/15"
          >
            {/* Image placeholder / banner */}
            {/* Project Image */}
            <div className="relative h-40 w-full overflow-hidden">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="h-full w-full bg-linear-to-tr from-indigo-500 via-sky-400 to-emerald-400" />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 transition group-hover:opacity-100" />

              {/* Tagline */}
              <div className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 text-[11px] font-medium text-white">
                {p.tagline ?? "Live Production Project"}
              </div>
            </div>


            <div className="flex flex-1 flex-col gap-4 p-5">
              <div>
                <h3 className="text-base font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {p.desc}
                </p>
              </div>

              {p.tags?.length ? (
                <div className="flex flex-wrap gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-base bg-base/70 px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}

              {p.link && (
                <div className="mt-auto">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                  >
                    View live
                    <span>↗</span>
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
