export const profile = {
  name: "Caio Renato",
  email: "caiorenato146@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/CaioRenatoDot" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/caiorenato/" },
  ],
  /** Endpoint do FormSubmit usado pelo formulário de contato. */
  formEndpoint: "https://formsubmit.co/ajax/196336feed00abcab4c83922663e68d6",
};

export const stack: { group: string; items: string[] }[] = [
  { group: "Linguagens", items: ["TypeScript", "JavaScript", "Python", "Java", "C++", "GDScript"] },
  { group: "Front-end", items: ["React", "Angular", "Next.js", "Vite", "Tailwind CSS", "TanStack Query"] },
  { group: "Back-end e dados", items: ["Node.js", "Express", "Fastify", "NestJS", "Spring Boot", "Prisma", "PostgreSQL"] },
  { group: "Ferramentas", items: ["Git", "GitHub Actions", "Docker", "Vitest", "Electron", "Godot"] },
];

export const experience: { role: string; company: string; period: string; place: string; summary?: string }[] = [
  {
    role: "Residente Tecnológico em PD&I",
    company: "Vertex | Instituto Privado de Tecnologia e Inovação",
    period: "out. 2026 – atual",
    place: "Maceió, AL · híbrido",
    summary: "Desenvolvimento de sistemas com Angular e Spring Boot, com foco principal no front-end.",
  },
  {
    role: "Estagiário · Desenvolvedor Full-Stack",
    company: "INNOVADATA TIC",
    period: "out. 2025 – jul. 2026",
    place: "Maceió, AL · híbrido",
  },
];
