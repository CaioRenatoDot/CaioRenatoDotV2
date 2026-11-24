export type ProjectLink = { label: string; href: string };

export type FeaturedProject = {
  name: string;
  year: number;
  summary: string;
  details: string[];
  role: string;
  stack: string[];
  image: { src: string; alt: string };
  links: ProjectLink[];
};

export type Project = {
  name: string;
  year: number;
  summary: string;
  stack: string[];
  /** Repositório privado: aparece sem link para o código. */
  private?: boolean;
  links?: ProjectLink[];
};

const gh = (repo: string) => `https://github.com/CaioRenatoDot/${repo}`;

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Algoky",
    year: 2026,
    summary:
      "Plataforma para estudar algoritmos sem perder o ritmo. Resolve os dois problemas que me travavam: não saber o que estudar em seguida e não manter constância.",
    details: [
      "Trilha com 21 padrões e 192 problemas do LeetCode, conferidos um a um",
      "Revisão espaçada (SM-2 simplificado), streak, XP e meta diária",
      "Visualizadores passo a passo de Two Pointers, Sliding Window e Binary Search",
    ],
    role: "Projeto solo",
    stack: ["TypeScript", "React", "Fastify", "TanStack Query", "Docker", "GitHub Actions"],
    image: { src: "/images/projects/algoky.webp", alt: "Painel do Algoky com streak, meta do dia e heatmap de constância" },
    links: [{ label: "Código", href: gh("Algoky") }],
  },
  {
    name: "Watchd",
    year: 2026,
    summary:
      "Diário de séries no estilo Letterboxd. Você monta sua watchlist, avalia com meia estrela, escolhe as séries favoritas e organiza listas temáticas num perfil público.",
    details: [
      "API REST própria com 6 entidades e exclusão em cascata ao apagar a conta",
      "Sessão por cookie httpOnly, com JWT como alternativa para testar a API",
      "Dados das séries vêm da TVMaze; o banco guarda só o que é do usuário",
    ],
    role: "Projeto solo · front, API, banco e deploy",
    stack: ["React", "Express", "Prisma", "PostgreSQL", "Docker", "GitHub Actions"],
    image: { src: "/images/projects/watchd.webp", alt: "Página inicial do Watchd com busca de séries e uma fileira de pôsteres" },
    links: [
      { label: "Site", href: "https://caiorenatodot.github.io/ProjetoIntegradorMorrissey2/" },
      { label: "Código", href: gh("ProjetoIntegradorMorrissey2") },
    ],
  },
  {
    name: "RiskCare",
    year: 2026,
    summary:
      "Ferramenta educativa de estimativa de risco de câncer de mama, feita para a disciplina de IHC. Não substitui diagnóstico: organiza histórico e estilo de vida num questionário claro e explica o resultado.",
    details: [
      "Questionário em etapas com cálculo de IMC e histórico de avaliações",
      "Tela de resultado com gráficos e comparativos",
      "Modo de alto contraste e integração com VLibras",
    ],
    role: "Equipe de 4 · fiz a tela de resultados, o modo de alto contraste e o deploy",
    stack: ["React", "Vite", "Express", "Prisma", "Supabase"],
    image: { src: "/images/projects/riskcare.webp", alt: "Página inicial do RiskCare com a chamada para iniciar a avaliação" },
    links: [
      { label: "Site", href: "https://riskcare-psi.vercel.app/" },
      { label: "Código", href: gh("riskcare") },
    ],
  },
];

export const otherProjects: Project[] = [
  {
    name: "SIGEC",
    year: 2026,
    summary:
      "Distribui 85 equipes nas 110 salas de um prédio de 9 andares, e cada recomendação vem com a justificativa para conferir. Motor como função pura, 236 testes.",
    stack: ["Next.js", "TypeScript", "Prisma"],
    links: [{ label: "Código", href: gh("ProjetoAmauryPA") }],
  },
  {
    name: "Gestão de Filas para Clínicas-Escola",
    year: 2026,
    summary:
      "Atendimento completo de uma clínica-escola: triagem, senha com prioridade, chamada no telão, alocação e auditoria. Equipe de 5; fiz boa parte do front.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Socket.IO"],
    links: [{ label: "Código", href: gh("Sistema_De_Gestao_de_Filas") }],
  },
  {
    name: "Piano Sheets Online",
    year: 2026,
    summary: "Editor de partituras para piano no navegador. Escreve na pauta, toca com som de piano real e exporta em MIDI.",
    stack: ["TypeScript", "React", "Tone.js", "VexFlow"],
    private: true,
  },
  {
    name: "Controle de Revenda",
    year: 2026,
    summary: "App desktop para quem revende: registra compras e vendas e mostra a margem antes de você confirmar o preço.",
    stack: ["Electron", "React", "TypeScript", "Vitest"],
    private: true,
  },
  {
    name: "Pixel Farm Tycoon",
    year: 2026,
    summary: "Tycoon de fazenda em pixel art com clicker, gerentes e prestígio. Tem um bot que joga sozinho para testar o balanceamento.",
    stack: ["Godot 4", "GDScript"],
    private: true,
  },
  {
    name: "Previsão do Tempo",
    year: 2026,
    summary: "Um layout do Figma levado para um app funcional, com dados da OpenWeatherMap.",
    stack: ["React", "Tailwind CSS"],
    links: [{ label: "Código", href: gh("ForecastingWebsite") }],
  },
  {
    name: "PokeSearch",
    year: 2025,
    summary: "Pokédex com montagem de time, cobertura de tipos, comparação lado a lado e um modo tela de Game Boy.",
    stack: ["React", "Vite", "Motion", "Vitest"],
    links: [
      { label: "Site", href: "https://caiorenatodot.github.io/PokeSearch/" },
      { label: "Código", href: gh("PokeSearch") },
    ],
  },
  {
    name: "RythmImitation",
    year: 2025,
    summary: "Gera ritmos, mostra a partitura e dá nota para a sua imitação batida a batida. Exporta WAV e MIDI em lote.",
    stack: ["Python"],
    links: [{ label: "Código", href: gh("RythmnImittation") }],
  },
];

