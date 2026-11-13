# ☕ React Router Framework — Projeto de Estudos

Projeto prático desenvolvido para explorar e consolidar os principais conceitos do **React Router (Framework Mode / v7+)** em aplicações full-stack com React 19 e TypeScript.

---

## 🎯 Objetivo do Projeto

Este repositório tem finalidade **educacional**, focado em compreender na prática como o React Router gerencia roteamento aninhado, carregamento de dados no servidor (`loader`), mutações (`action`), pré-carregamento inteligente (`prefetch`), tratamento de erros (`ErrorBoundary`) e integração com cache em **Redis**.

---

## 🧠 Conceitos Praticados

- **Roteamento Configurado e Aninhado (`routes.ts`)**:
  - Uso de `layout`, `index` e `route` com sub-rotas dinâmicas (`/loaders/:id`) renderizadas via `<Outlet />`.
- **Data Loading (`loader`) + Cache com Redis (`ioredis`)**:
  - Consumo da API pública de cafés ([SampleAPIs Coffee](https://api.sampleapis.com/coffee/hot)) no servidor.
  - Estratégia de cache *Cache-Aside* com **Redis** e TTL configurável para evitar requisições repetidas à API externa.
- **Prefetching de Rotas**:
  - Uso de `<Link prefetch="intent">` para pré-carregar dados e módulos quando o usuário passa o mouse ou foca em um card de café.
- **Actions e Validação de Formulários (`action` + Conform + Zod v4)**:
  - Submissão assíncrona sem reload com `useFetcher` (`fetcher.Form`).
  - Validação compartilhada entre cliente e servidor utilizando `@conform-to/react`, `@conform-to/zod/v4` e `zod`.
- **Tratamento de Erros Isolado (`ErrorBoundary`)**:
  - Captura de falhas por rota e sub-rota sem derrubar o restante da aplicação.
- **Arquitetura em Camadas (`pages` vs `templates`)**:
  - **`app/pages/`**: Camada responsável pela lógica de rota do React Router (`loader`, `action`, `meta`, `ErrorBoundary`).
  - **`app/templates/`**: Camada de apresentação contendo a estrutura HTML/JSX estilizada com **Tailwind CSS v4**.

---

## 🛠️ Tecnologias Utilizadas

- **[React 19](https://react.dev/)** + **[TypeScript](https://www.typescriptlang.org/)**
- **[React Router](https://reactrouter.com/)** (Framework Mode / SSR)
- **[Tailwind CSS v4](https://tailwindcss.com/)** (Estilização com suporte a Dark Mode)
- **[Zod v4](https://zod.dev/)** + **[Conform](https://conform.guide/)** (Validação de formulários e schemas)
- **[Redis](https://redis.io/)** + **[ioredis](https://github.com/redis/ioredis)** (Cache server-side)
- **[Docker Compose](https://docs.docker.com/compose/)** (Container local do Redis)
- **[Vite](https://vite.dev/)** (Bundler e servidor de desenvolvimento)

---

## 📂 Estrutura de Pastas

```text
app/
├── layouts/
│   └── main.tsx          # Layout principal com Navbar e <Outlet />
├── pages/                # Módulos de rota (loader, action, meta, ErrorBoundary)
│   ├── home.tsx
│   ├── loaders.tsx
│   ├── product.tsx
│   └── login.tsx
├── templates/            # Componentes visuais (HTML/JSX das páginas)
│   ├── home.tsx
│   ├── loaders.tsx
│   ├── product.tsx
│   └── login.tsx
├── service/
│   ├── cache.ts          # Instância e configuração do cliente Redis (ioredis)
│   └── coffe.ts          # Consumo da API de cafés com cache no Redis
├── routes.ts             # Definição centralizada das rotas e sub-rotas
└── root.tsx              # Root da aplicação
```

---

## 🚀 Como Executar Localmente

### 1. Pré-requisitos
- **Node.js** (v20+)
- **Docker** e **Docker Compose** (para subir o Redis)

### 2. Instalar dependências

```bash
npm install
```

### 3. Subir o container do Redis

```bash
docker compose up -d
```

> O Redis ficará disponível localmente na porta `6378` (mapeada para a porta `6379` do container).

### 4. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

Acesse a aplicação em `http://localhost:5173`.

---

## 🔗 Rotas Disponíveis

| Rota | Descrição |
| :--- | :--- |
| `/` | Página inicial dentro do layout principal |
| `/loaders` | Catálogo de cafés carregado via `loader` com cache no Redis |
| `/loaders/:id` | Sub-rota aninhada que exibe os detalhes e ingredientes do café selecionado |
| `/login` | Página de autenticação com validação via `useFetcher`, Conform e Zod v4 |

---

Desenvolvido para fins de estudo sobre o ecossistema moderno do **React Router**.
