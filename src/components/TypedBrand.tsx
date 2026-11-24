import { useEffect, useState } from "react";

const FIRST = "caio";
const LAST = "renato";
const FULL = FIRST + LAST;

const START_DELAY = 400;
const CHAR_DELAY = 90;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Nome digitado como num terminal, com cursor piscando no final. */
export function TypedBrand() {
  const [count, setCount] = useState(() => (prefersReducedMotion() ? FULL.length : 0));

  useEffect(() => {
    if (count >= FULL.length) return;
    const timer = window.setTimeout(() => setCount((c) => c + 1), count === 0 ? START_DELAY : CHAR_DELAY);
    return () => window.clearTimeout(timer);
  }, [count]);

  const typed = FULL.slice(0, count);

  return (
    <span className="typed" aria-label="Caio Renato">
      <span aria-hidden="true">
        <span className={count >= FULL.length ? "typed__cursor is-done" : "typed__cursor"} />
        {typed.slice(0, FIRST.length)}
        <span className="typed__last">{typed.slice(FIRST.length)}</span>
      </span>
    </span>
  );
}
