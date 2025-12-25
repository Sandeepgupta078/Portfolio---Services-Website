export default function Skills() {
    const skills = {
      frontend: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind", "Redux"],
      backend: ["Node.js", "Express", "REST APIs", "JWT Auth", "WebSockets"],
      databases: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
      devops: ["Git", "GitHub", "Docker", "CI/CD", "Linux Basics"],
    };
  
    return (
      <section id="skills" className="section-container">
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-title">Tech Stack & Expertise</h2>
  
        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category} className="rounded-2xl border border-base bg-card p-6 shadow-sm">
              <h3 className="capitalize text-lg font-semibold mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {list.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-base bg-base/70 px-3 py-1 text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  