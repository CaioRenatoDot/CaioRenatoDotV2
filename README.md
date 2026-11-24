# caiorenato

Meu portfólio: [caiorenatodot.vercel.app](https://caiorenatodot.vercel.app)

React + Vite + TypeScript, CSS puro e fontes IBM Plex servidas localmente.

## Rodar

```bash
npm install
npm run dev
```

## Adicionar um projeto

Tudo fica em [`src/data/projects.ts`](src/data/projects.ts):

- `featuredProjects`: os destaques com imagem. A imagem vai em `public/images/projects/` (16:9, ~1200px, `.webp`).
- `otherProjects`: a lista abaixo dos destaques. Use `private: true` para repositórios privados.

Stack e links de contato ficam em [`src/data/profile.ts`](src/data/profile.ts).

## Deploy

Vercel, configurado em [`vercel.json`](vercel.json). Os endereços antigos (`/aboutme.html`, `/contato.html`) redirecionam para as seções da página.
