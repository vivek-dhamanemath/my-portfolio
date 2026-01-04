import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white selection:bg-zinc-100 dark:bg-black dark:selection:bg-zinc-900">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 sm:px-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="py-12 text-center text-xs text-zinc-500 dark:text-zinc-600">
        © {new Date().getFullYear()} Vivek Dhamanemath. Built with Next.js & Tailwind.
      </footer>
    </div>
  );
}
