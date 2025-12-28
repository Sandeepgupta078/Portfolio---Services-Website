// frontend/src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
// import Education from "./components/Education";
// import Resume from "./components/Resume";


export default function App() {
  return (
    <div className="bg-base text-base min-h-screen relative">
      {/* Soft gradient blobs behind everything */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-16 h-72 w-72 rounded-full bg-indigo-500/25 blur-3xl" />
        <div className="absolute top-40 -right-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-400/15 blur-3xl" />
      </div>

      <Navbar />

      <main className="pt-24 space-y-4">
        <Hero />
        <About />
        <Skills />
        {/* <Education /> */}
        <Experience />
        <Services />
        <Projects />
        {/* <Resume /> */}
        <Contact />
      </main>

      <Footer />

      <a
        href="tel:+917007155078"
        className="fixed bottom-5 right-5 z-9999 flex items-center gap-3 rounded-full bg-linear-to-r from-indigo-500 to-emerald-400 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-900/20 hover:scale-105 transition"
      >
        📞 Call Now
      </a>

    </div>
  );
}
