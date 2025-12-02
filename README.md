# VeloTrack

Aplicação React + Vite com rotas, gráficos e layout mobile-first.

## Scripts

```bash
npm install         # instala dependências
npm run dev         # ambiente de desenvolvimento
npm run build       # build de produção (gera docs/)
npm run preview     # serve o build localmente
```

## Publicando no GitHub Pages (branch `master`)

A build de produção agora é gerada para a pasta `docs/`. Basta manter essa pasta versionada na `master` e configurá-la como origem do Pages:

1. Rode `npm run build` (ou `npm run lint` antes, se preferir). O comando limpa e recria `docs/` com o bundle minificado.
2. Faça commit das alterações, incluindo a pasta `docs/`:
	```bash
	git add docs package-lock.json
	git commit -m "chore: build"
	git push origin master
	```
3. No GitHub, vá em **Settings → Pages** e em **Build and deployment** selecione:
	- **Source:** Deploy from a branch
	- **Branch:** `master`
	- **Folder:** `/docs`
4. Clique em **Save**. Quando o Pages terminar o deploy, seu app estará em `https://felipedunder.github.io/PIC/` com o bundle correto.

> **Importante:** Não edite manualmente os arquivos dentro de `docs/`. Sempre gere-os via `npm run build` para garantir paths corretos (`/PIC/...`).

## Extras

- Tailwind CSS 4 (`@apply` e tokens definidos em `src/index.css`).
- React Router configurado com `HashRouter` para garantir navegação estável no Pages.
- Ícones do `lucide-react`, gráficos com `react-chartjs-2` e mapas via `react-leaflet` (dependendo das páginas usadas).
