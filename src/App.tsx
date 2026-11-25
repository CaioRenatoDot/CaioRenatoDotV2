import { useEffect } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";

export default function App() {
  // A página é montada depois que o navegador já tentou rolar até o #hash,
  // então links diretos como /#sobre precisam ser resolvidos aqui.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
      <footer className="footer shell">
        <span>© {new Date().getFullYear()} Caio Renato</span>
        <a href="https://github.com/CaioRenatoDot/CaioRenatoDotV2" target="_blank" rel="noopener noreferrer">
          Código deste site ↗
        </a>
      </footer>
    </>
  );
}
