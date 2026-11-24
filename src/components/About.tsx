import { stack } from "../data/profile";

export function About() {
  return (
    <section className="section shell about" id="sobre">
      <h2 className="section__title">Sobre</h2>
      <div className="about__grid">
        <div className="about__text">
          <p>
            Comecei vendo meu irmão desmontar computadores e formatar máquinas. Eu queria entender
            como aquilo funcionava por dentro, e a curiosidade virou vontade de construir.
          </p>
          <p>
            Depois vieram scripts pequenos em Python, depois sites, e hoje sistemas com banco,
            autenticação e deploy. Na faculdade aprendi a trabalhar em equipe com issues, code
            review e especificação de cliente. Por conta própria, gosto de projetos que eu mesmo
            usaria: foi assim que nasceram o Algoky e o Controle de Revenda.
          </p>
          <p>
            Ultimamente tenho me interessado por testes que dizem algo de verdade (simulação,
            invariantes, bots que jogam o próprio jogo) e por áudio e música no código.
          </p>
        </div>
        <dl className="about__stack">
          {stack.map((g) => (
            <div key={g.group}>
              <dt>{g.group}</dt>
              <dd>{g.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
