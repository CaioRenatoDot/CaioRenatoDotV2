import { useEffect, useState } from "react";
import { TypedBrand } from "./TypedBrand";

const sections = ["projetos", "experiencia", "sobre", "contato"];

const labels: Record<string, string> = { experiencia: "experiência" };

/** Seção que está ocupando a faixa central da tela. */
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    const targets = ["topo", ...sections].map((id) => document.getElementById(id)).filter((el) => el !== null);
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}

export function Header() {
  const active = useActiveSection();

  return (
    <header className="header">
      <div className="shell header__inner">
        <a href="#topo" className="header__brand">
          <TypedBrand />
        </a>
        <nav aria-label="Seções">
          <ul className="header__nav">
            {sections.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className={active === id ? "is-active" : undefined} aria-current={active === id ? "true" : undefined}>
                  {labels[id] ?? id}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
