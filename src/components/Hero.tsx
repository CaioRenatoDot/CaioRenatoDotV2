import { profile } from "../data/profile";
import { ExternalLink } from "./ExternalLink";

export function Hero() {
  return (
    <section className="hero shell" id="topo">
      <h2 className="section__title">whoami</h2>

      <div className="hero__id">
        <img src="/images/profile.jpeg" alt="" className="hero__avatar" width={64} height={64} />
        <div>
          <h1 className="hero__name">
            Caio <span className="hero__last">Renato</span>
          </h1>
          <p className="meta">estudante de ciência da computação · UNIMA</p>
        </div>
      </div>

      <p className="hero__lead">
        Gosto de levar um projeto do começo ao fim: modelar o banco, escrever a API, cuidar da
        interface e colocar no ar.
      </p>
      <p className="hero__sub">
        No dia a dia uso TypeScript, React e Node. Fora da web, tenho feito jogos em Godot e
        ferramentas de música em Python.
      </p>

      <p className="hero__links">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        {profile.links.map((l) => (
          <ExternalLink key={l.label} href={l.href}>
            {l.label} ↗
          </ExternalLink>
        ))}
      </p>
    </section>
  );
}
