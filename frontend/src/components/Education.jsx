import { motion } from "framer-motion";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="section-container">
      <p className="section-eyebrow">Education</p>
      <h2 className="section-title">Academic Background</h2>

      <div className="relative mt-12 max-w-3xl">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-border" />

        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative mb-10 pl-12"
          >
            {/* Dot */}
            <span className="absolute left-2 top-2 h-4 w-4 rounded-full bg-primary" />

            <div className="card">
              <h3 className="card-title">{item.degree}</h3>
              <p className="card-subtitle">
                {item.institute} · {item.period}
              </p>

              <ul className="mt-3 list-disc pl-5 space-y-1 text-muted-foreground">
                {item.desc.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
