// frontend/src/components/About.jsx
export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-eyebrow">About</p>
          <h2 className="section-title">A mix of dev, design & growth</h2>
          <p className="section-subtitle max-w-2xl">
            I sit at the intersection of{" "}
            <span className="font-semibold">
              UI/UX, full-stack development and performance marketing
            </span>
            . That means I don&apos;t just ship beautiful interfaces – I ship{" "}
            <span className="font-semibold">measurable results.</span>
          </p>
        </div>

        <div className="rounded-2xl border border-base bg-card px-5 py-4 text-xs text-slate-500 dark:text-slate-400 shadow-sm">
          <p>
            Currently Backend Developer at{" "}
            <span className="font-semibold">VirtuGrow Digital</span>, working with
            teams across development & design.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-base bg-card p-5 shadow-sm">
          <p className="mb-2 text-sm font-semibold">01 · Strategy first</p>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Every project starts with understanding{" "}
            <span className="font-semibold">real business goals</span> – not
            just pixels or vanity metrics.
          </p>
        </div>

        <div className="rounded-2xl border border-base bg-card p-5 shadow-sm">
          <p className="mb-2 text-sm font-semibold">02 · UX + CRO</p>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            I design flows that are{" "}
            <span className="font-semibold">easy to use</span> and{" "}
            <span className="font-semibold">built to convert</span> using
            UX/CRO best practices.
          </p>
        </div>

        <div className="rounded-2xl border border-base bg-card p-5 shadow-sm">
          <p className="mb-2 text-sm font-semibold">03 · Full delivery</p>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            From Figma → code – I can take a project from{" "}
            <span className="font-semibold">idea to launch</span> and keep
            iterating based on data.
          </p>
        </div>
      </div>
    </section>
  );
}
