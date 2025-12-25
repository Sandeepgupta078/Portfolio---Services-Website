// frontend/src/components/Hero.jsx
import { motion } from "framer-motion";

const stats = [
  { label: "Years experience", value: "1+" },
  { label: "Projects shipped", value: "2+" },
  { label: "Brands grown", value: "2+" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="section-container pt-28 md:pt-32 lg:pt-36 flex items-center"
    >
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="space-y-7"
        >
          <p className="section-eyebrow flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Building growth-focused experiences
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
            Software Developer &{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
              MERN Developer
            </span>{" "}
            building scalable web applications.
          </h1>


          <p className="max-w-xl text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I build modern, high-performance web applications using{" "}
            <span className="font-semibold">
              React, Node.js, Express, MongoDB, SQL
            </span>{" "}
            and scalable backend architectures.
          </p>


          <div className="flex flex-wrap items-center gap-4">
            {/* <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary"
            >
              Book a free call
              <span className="text-lg">↗</span>
            </button> */}
            <a href="tel:+917007155078" className="btn-primary">
              Book a Call
              <span className="text-lg">📞</span>
            </a>

            <a
              href="https://wa.me/917007155078?text=Hi%20I%20want%20to%20discuss%20my%20project"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-base bg-card px-4 py-2 text-xs font-medium text-slate-700 shadow-sm hover:border-primary/50 hover:text-slate-900 dark:text-slate-200"
            >
              Chat on WhatsApp
              <span className="text-base">💬</span>
            </a>

            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 rounded-full border border-base bg-card px-4 py-2 text-xs font-medium text-slate-700 shadow-sm hover:border-primary/50 hover:text-slate-900 dark:text-slate-200"
            >
              View selected work
              <span className="text-base">⚡</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-2 rounded-full border border-base/70 bg-card px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Software Development
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-base/70 bg-card px-3 py-1">
              🧩 MERN stack
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-base/70 bg-card px-3 py-1">
              🎨 UX-first landing pages
            </span>
          </div>
        </motion.div>

        {/* Right: avatar + stats card */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -top-10 -right-6 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-3 h-36 w-36 rounded-full bg-emerald-400/25 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-base bg-card px-7 py-8 shadow-xl shadow-slate-900/15">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="h-16 w-16 rounded-2xl bg-linear-to-tr from-indigo-500 via-sky-500 to-emerald-400 p-0.5">
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-950/90 text-2xl font-semibold text-white">
                    SG
                  </div>
                </div>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-emerald-400 px-2 py-0.5 text-[11px] font-medium text-slate-900 shadow-sm">
                  Available
                </span>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500">
                  Portfolio of
                </p>
                <p className="text-lg font-semibold tracking-tight">
                  Sandeep Gupta
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Software Developer · MERN Developer · Backend Developer
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 text-xs">
              {stats.map((s) => (
                <div key={s.label} className="space-y-1">
                  <p className="text-lg font-semibold tracking-tight">
                    {s.value}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-dashed border-base/80 bg-base/50 p-4 text-xs text-slate-500 dark:text-slate-400">
              <p className="mb-1 font-medium text-slate-700 dark:text-slate-200">
                What I love working on:
              </p>
              <p>
                Scaling local businesses with{" "}
                <span className="font-semibold">
                  smart funnels, retargeting & high-intent creatives
                </span>{" "}
                backed by modern full-stack tooling.
              </p>
            </div>
          </div>
          {/* --- SOCIAL ICONS --- */}
          <div className="flex gap-5 mt-6 text-2xl text-slate-600 dark:text-slate-300 cursor-pointer">
            <a href="https://github.com/Sandeepgupta078" target="_blank" className="hover:text-primary">
              <i className="ri-github-fill"></i>
            </a>
            <a href="https://linkedin.com/in/sandeepg75" target="_blank" className="hover:text-primary">
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a href="https://instagram.com/sandeepgupta0" target="_blank" className="hover:text-primary">
              <i className="ri-instagram-fill"></i>
            </a>
            <a href="https://facebook.com/sandeepgupta0" target="_blank" className="hover:text-primary">
              <i className="ri-facebook-circle-fill"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
