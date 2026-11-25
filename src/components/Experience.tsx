import { experience } from "../data/profile";

export function Experience() {
  return (
    <section className="section shell" id="experiencia">
      <h2 className="section__title">Experiência</h2>
      <ul className="rows">
        {experience.map((job) => (
          <li key={job.company} className="row row--job">
            <span className="row__year meta">{job.period}</span>
            <div className="row__main">
              <h3>{job.role}</h3>
              <p>{job.company}</p>
              {job.summary && <p>{job.summary}</p>}
            </div>
            <span className="meta">{job.place}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
