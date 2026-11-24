import { useState, type FormEvent } from "react";
import { profile } from "../data/profile";
import { ExternalLink } from "./ExternalLink";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch(profile.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section shell contact" id="contato">
      <h2 className="section__title">Contato</h2>
      <div className="contact__grid">
        <div>
          <p className="contact__lead">
            Estágio, projeto ou só uma dúvida sobre algum repositório: pode escrever.
          </p>
          <dl className="contact__channels">
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
            </div>
            {profile.links.map((l) => (
              <div key={l.label}>
                <dt>{l.label}</dt>
                <dd>
                  <ExternalLink href={l.href}>{l.href.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, "")}</ExternalLink>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="Nova mensagem pelo portfólio" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" className="form__honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <label className="field">
            <span className="field__label">nome</span>
            <input type="text" name="name" required autoComplete="name" placeholder="Como você se chama" />
          </label>
          <label className="field">
            <span className="field__label">email</span>
            <input type="email" name="email" required autoComplete="email" placeholder="voce@exemplo.com" />
          </label>
          <label className="field">
            <span className="field__label">mensagem</span>
            <textarea name="message" rows={5} required placeholder="Sobre o que você quer conversar?" />
          </label>

          <div className="form__footer">
            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "enviando..." : "enviar →"}
            </button>
            <p className="form__status" role="status">
              {status === "sent" && "Mensagem enviada. Respondo pelo email que você informou."}
              {status === "error" && (
                <>
                  Não consegui enviar agora. Tente pelo <a href={`mailto:${profile.email}`}>email</a>.
                </>
              )}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
