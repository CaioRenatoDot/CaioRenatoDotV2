import { featuredProjects, otherProjects, type FeaturedProject, type Project } from "../data/projects";
import { ExternalLink } from "./ExternalLink";

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="stack-list" aria-label="Tecnologias">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function Featured({ project, index }: { project: FeaturedProject; index: number }) {
  const main = project.links[0];
  return (
    <article className="featured">
      <ExternalLink href={main.href} className="featured__media">
        <img src={project.image.src} alt={project.image.alt} loading={index === 0 ? "eager" : "lazy"} />
      </ExternalLink>
      <div className="featured__body">
        <p className="meta">
          {String(index + 1).padStart(2, "0")} · {project.year}
        </p>
        <h3>{project.name}</h3>
        <p className="featured__summary">{project.summary}</p>
        <ul className="featured__details">
          {project.details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        <p className="featured__role">{project.role}</p>
        <Stack items={project.stack} />
        <p className="featured__links">
          {project.links.map((l) => (
            <ExternalLink key={l.href} href={l.href}>
              {l.label} ↗
            </ExternalLink>
          ))}
        </p>
      </div>
    </article>
  );
}

function Row({ project }: { project: Project }) {
  return (
    <li className="row">
      <span className="row__year meta">{project.year}</span>
      <div className="row__main">
        <h3>
          {project.name}
          {project.private && <span className="badge">código privado</span>}
        </h3>
        <p>{project.summary}</p>
        <Stack items={project.stack} />
      </div>
      <div className="row__links">
        {project.links?.map((l) => (
          <ExternalLink key={l.href} href={l.href}>
            {l.label} ↗
          </ExternalLink>
        ))}
      </div>
    </li>
  );
}

export function Projects() {
  return (
    <section className="section shell" id="projetos">
      <h2 className="section__title">Projetos</h2>
      <div className="featured-list">
        {featuredProjects.map((p, i) => (
          <Featured key={p.name} project={p} index={i} />
        ))}
      </div>

      <h2 className="section__title section__title--sub">Outros projetos</h2>
      <ul className="rows">
        {otherProjects.map((p) => (
          <Row key={p.name} project={p} />
        ))}
      </ul>
      <p className="more">
        Exercícios de faculdade, LeetCode e o resto estão no{" "}
        <ExternalLink href="https://github.com/CaioRenatoDot?tab=repositories">GitHub</ExternalLink>.
      </p>
    </section>
  );
}
