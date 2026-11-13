import { Link } from "react-router";
import type { Coffee } from "~/service/coffe";

interface ProductTemplateProps {
  coffee: Coffee;
}

export function ProductTemplate({ coffee }: ProductTemplateProps) {
  const ingredients = Array.isArray(coffee.ingredients) ? coffee.ingredients : [];

  return (
    <article className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
      {/* Imagem ou Ícone do Café */}
      {coffee.image ? (
        <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-2xl border border-amber-200/60 bg-amber-100/50 shadow-md sm:h-44 sm:w-44 dark:border-white/10 dark:bg-slate-800">
          <img
            src={coffee.image}
            alt={coffee.title}
            className="size-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-lg shadow-amber-500/30">
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="size-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
            <line x1="6" y1="2" x2="6" y2="4" />
            <line x1="10" y1="2" x2="10" y2="4" />
            <line x1="14" y1="2" x2="14" y2="4" />
          </svg>
        </div>
      )}

      {/* Conteúdo e Detalhes */}
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-400/15 dark:text-amber-300">
              <span className="size-1.5 rounded-full bg-amber-500" />
              Café em destaque
            </span>
            {coffee.id ? (
              <span className="rounded-full bg-white/80 px-2.5 py-0.5 text-xs font-medium text-slate-500 shadow-2xs dark:bg-slate-800 dark:text-slate-400">
                #{coffee.id}
              </span>
            ) : null}
          </div>

          <Link
            to="/loaders"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-slate-300 hover:bg-white hover:text-slate-900 dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <span>Fechar</span>
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="size-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </Link>
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {coffee.title}
          </h2>
          {coffee.description ? (
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {coffee.description}
            </p>
          ) : null}
        </div>

        {ingredients.length > 0 ? (
          <div className="flex flex-col gap-2 pt-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Ingredientes
            </span>
            <div className="flex flex-wrap gap-2">
              {ingredients.map((ingredient) => (
                <span
                  key={ingredient}
                  className="rounded-xl border border-amber-200/80 bg-white/90 px-3 py-1 text-xs font-medium text-amber-900 shadow-2xs dark:border-amber-500/25 dark:bg-slate-800/90 dark:text-amber-200"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}
