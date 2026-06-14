# Front Row

**Front Row** é um jogo de navegador inspirado em 7a0, onde você assume o
comando de uma agência de moda recém-criada — a Front Row — e enfrenta a
rival consagrada **Velvet House** em busca do título da temporada.

🎮 **Jogue agora:** https://peulucca.github.io/frontflow/

## Sobre o jogo

- Monte seu elenco através de um draft de celebridades.
- A Velvet House também monta o elenco dela, rodada a rodada.
- Dispute uma temporada inteira de eventos de moda.
- Descubra quem vence a temporada: Front Row ou Velvet House.
- Partidas completas em até 3 minutos.

## Como jogar

1. Na tela inicial, toque em **"Começar Temporada"**.
2. Acompanhe a introdução e a apresentação da rivalidade contra a Velvet
   House, depois toque em **"Iniciar Draft"**.
3. No draft, escolha uma celebridade por rodada tocando em **"Escolher"**
   até completar o elenco.
4. Veja o draft da Velvet House e toque em **"Ver a Temporada"**.
5. Acompanhe os eventos da temporada, avançando com **"Próximo Evento"**.
6. No último evento, toque em **"Ver Resultado Final"** para ver o placar e
   o vencedor da temporada.
7. Na tela de resultado, toque em **"Jogar de Novo"** para iniciar uma nova
   temporada.

## Stack técnica

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) como bundler e servidor de desenvolvimento
- [react-router-dom](https://reactrouter.com/) (`HashRouter`, compatível com
  GitHub Pages)
- Motor de jogo em TypeScript puro, separado da camada de UI
- Dados estáticos, sem backend
- Interface 100% em português do Brasil (pt-BR)

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm install` | Instala as dependências do projeto. |
| `npm run dev` | Inicia o servidor de desenvolvimento do Vite. |
| `npm run build` | Gera a versão de produção em `dist/` (`tsc -b && vite build`). |
| `npm run preview` | Serve o conteúdo de `dist/` localmente para validar a build de produção. |

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal (por padrão
`http://localhost:5173/frontflow/`) no navegador.

## Build de produção

```bash
npm run build
npm run preview -- --port 4530
```

O caminho base configurado em `vite.config.ts` (`base: "/frontflow/"`)
corresponde ao nome do repositório no GitHub Pages
(`PeuLucca/frontflow`), garantindo que os assets gerados em `dist/`
resolvam corretamente quando publicados em
`https://peulucca.github.io/frontflow/`.

## Deploy (GitHub Pages)

O deploy é automatizado pelo workflow `.github/workflows/deploy.yml`: a
cada push na branch `master`, o projeto é buildado e publicado
automaticamente no GitHub Pages.

> **Configuração única necessária no repositório:** em *Settings → Pages*,
> defina *Source* como **"GitHub Actions"** para que o workflow consiga
> publicar o site.

## Mobile-first

Front Row é projetado primeiro para smartphones, com layouts validados em
360px, 390px, 414px e desktop, sem rolagem horizontal e com interações
adequadas para uso com o polegar.

## Documentação do projeto

- [`CLAUDE.md`](./CLAUDE.md) — visão de produto, pilares e regras de
  arquitetura.
- [`docs/`](./docs) — especificações técnicas e tarefas de cada sprint.
