import { useState } from "react";
import { motion } from "framer-motion";
import { resume } from "../data";

export default function Resume() {
  const [open, setOpen] = useState(false);

  return (
    <section id="resume" className="section-container">
      <p className="section-eyebrow">Resume</p>
      <h2 className="section-title">{resume.title}</h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-8 max-w-2xl"
      >
        <p className="section-subtitle">{resume.summary}</p>

        <ul className="mt-6 grid gap-2 sm:grid-cols-2 text-muted-foreground">
          {resume.highlights.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-primary">✓</span> {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => setOpen(true)}
            className="rounded-xl border px-6 py-3 font-medium hover:bg-muted transition"
          >
            👁 Preview
          </button>

          <a
            href={resume.file}
            download
            className="rounded-xl bg-primary px-6 py-3 text-white font-medium hover:opacity-90 transition"
          >
            ⬇ Download
          </a>
        </div>
      </motion.div>

      {/* Resume Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative h-[90vh] w-full max-w-4xl rounded-xl bg-background">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-xl"
            >
              ✕
            </button>

            <iframe
              src={resume.file}
              title="Resume Preview"
              className="h-full w-full rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
