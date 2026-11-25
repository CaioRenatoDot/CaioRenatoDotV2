import { education, experience } from "../data/profile";

type Item = (typeof experience)[number];

function Rows({ items }: { items: Item[] }) {
  return (
    <ul className="rows">
      {items.map((item) => (
        <li key={item.company} className="row row--job">
          <span className="row__year meta">{item.period}</span>
          <div className="row__main">
            <h3>{item.role}</h3>
            <p>{item.company}</p>
            {item.summary && <p>{item.summary}</p>}
          </div>
          <span className="meta">{item.place}</span>
        </li>
      ))}
    </ul>
  );
}

export function Experience() {
  return (
    <section className="section shell" id="experiencia">
      <h2 className="section__title">Experiência</h2>
      <Rows items={experience} />

      <h2 className="section__title section__title--sub">Formação</h2>
      <Rows items={education} />
    </section>
  );
}
