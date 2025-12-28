// frontend/src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { navLinks } from "../data";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);

      // Active section detection
      const offset = 140;
      let current = "home";

      navLinks.forEach((link) => {
        const el = document.getElementById(link.id);
        if (!el) return;

        const top = el.offsetTop - offset;
        const bottom = top + el.offsetHeight;
        if (y >= top && y < bottom) current = link.id;
      });

      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActive(id);
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all ${scrolled ? "backdrop-blur-xl" : "backdrop-blur"
        }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 py-3 ${scrolled
          ? "mt-2 rounded-2xl border border-base bg-card/80 shadow-lg shadow-slate-900/10"
          : ""
          }`}
      >
        {/* Brand */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 via-sky-500 to-emerald-400 text-sm font-semibold text-white shadow-md shadow-sky-500/40">
            SG
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold tracking-tight">
              Sandeep Gupta
            </p>
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
              Software Developer
            </p>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 md:flex">
          <div className="flex items-center gap-5 text-xs font-medium uppercase tracking-[0.24em]">
            {navLinks.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`relative pb-1 transition ${active === n.id
                  ? "text-primary"
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-400"
                  }`}
              >
                {/* {n.label} */}
                <span className="flex items-center gap-1 cursor-pointer">
                  <i className={n.icon}></i>
                  {n.label}
                </span>

                {active === n.id && (
                  <span className="absolute inset-x-0 -bottom-0.5 mx-auto h-0.5 w-5 rounded-full bg-primary" />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="hidden rounded-full border border-base/60 bg-card px-4 py-2 text-xs font-medium text-slate-600 shadow-sm hover:border-primary/50 hover:text-slate-700 dark:text-slate-300 md:inline-flex cursor-pointer"
            >
              Let&apos;s talk
            </button>

            {/* Profile Dropdown */}
            <div className="relative group">
              <button className="text-xl hover:text-primary cursor-pointer">
                <i className="ri-user-3-line"></i>
              </button>

              {/* Dropdown */}
              <div className="absolute right-0 mt-3 w-40 rounded-xl border border-base bg-card shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all cursor-pointer">
                <a href="https://github.com/Sandeepgupta078" target="_blank" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-base">
                  <i className="ri-github-fill"></i> GitHub
                </a>

                <a href="https://linkedin.com/in/sandeepg75" target="_blank" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-base">
                  <i className="ri-linkedin-box-fill"></i> LinkedIn
                </a>

                <a href="https://instagram.com/sandeepgupta0" target="_blank" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-base">
                  <i className="ri-instagram-fill"></i> Instagram
                </a>

                <a href="https://facebook.com/sandeepgupta0" target="_blank" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-base">
                  <i className="ri-facebook-circle-fill"></i> Facebook
                </a>
              </div>
            </div>


            <ThemeToggle />
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-base bg-card cursor-pointer"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-4 rounded-full bg-slate-600 dark:bg-slate-300" />
              <span className="block h-0.5 w-3 rounded-full bg-slate-600 dark:bg-slate-300" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-2 w-full max-w-6xl px-5 md:hidden">
          <div className="space-y-2 rounded-2xl border border-base bg-card/10 p-4 shadow-lg shadow-slate-900/20">
            {navLinks.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm ${active === n.id ? "bg-primary/10 text-primary" : "text-slate-600"
                  }`}
              >
                <span className="flex items-center gap-2 cursor-pointer">
                  <i className={n.icon}></i>
                  {n.label}
                </span>
              </button>
            ))}


            {/* SOCIAL LINKS MOBILE */}
            <div className="mt-4 flex justify-center gap-5 text-xl">
              <a href="https://github.com/YOUR_GITHUB" target="_blank"><i className="ri-github-fill"></i></a>
              <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank"><i className="ri-linkedin-box-fill"></i></a>
              <a href="https://instagram.com/YOUR_INSTAGRAM" target="_blank"><i className="ri-instagram-fill"></i></a>
              <a href="https://facebook.com/YOUR_FACEBOOK" target="_blank"><i className="ri-facebook-circle-fill"></i></a>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}
