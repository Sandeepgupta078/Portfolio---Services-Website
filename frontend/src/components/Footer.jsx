// frontend/src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="border-t border-base/60 py-6 text-center text-xs text-slate-500 dark:text-slate-400 mt-10">

      <div className="flex justify-center gap-6 text-2xl mb-4 text-slate-600 dark:text-slate-300">
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
      © {new Date().getFullYear()} Portfolio · Built by Sandeep Gupta

      <section className="section-container text-center">
        <h2 className="text-3xl font-semibold tracking-tight">
          Ready to grow your business?
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Let’s build something amazing together.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="tel:+917007155078"
            className="btn-primary"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/917007155078?text=Hi%20I%20want%20to%20discuss%20my%20project"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-base bg-card px-4 py-2 text-xs font-medium text-slate-700 shadow-sm hover:border-primary/50 hover:text-slate-900 dark:text-slate-200"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>

    </footer>
  );
}
