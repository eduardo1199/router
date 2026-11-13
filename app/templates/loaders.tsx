import { Link, Outlet } from "react-router";
import type { Coffee } from "~/service/coffe";

interface LoadersTemplateProps {
  title: string;
  coffees: Coffee[];
}

/**
 * Defines the data and module prefetching behavior for the link.

    <Link /> // default
    <Link prefetch="none" />
    <Link pre fetch="intent" />
    <Link prefetch="render" />
    <Link prefetch="viewport" />
    none — default, no prefetching
    intent — prefetches when the user hovers or focuses the link
    render — prefetches when the link renders
    viewport — prefetches when the link is in the viewport, very useful for mobile
 * 
 */

export function LoadersTemplate({ title, coffees }: LoadersTemplateProps) {
  return (
    <section className="flex flex-col gap-8">
      {/* Header da página */}
      <div className="flex flex-col items-center text-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/15 dark:text-indigo-300">
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="size-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
            <line x1="6" y1="2" x2="6" y2="4" />
            <line x1="10" y1="2" x2="10" y2="4" />
            <line x1="14" y1="2" x2="14" y2="4" />
          </svg>
          Catálogo de Cafés ({coffees.length})
        </span>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          {title}
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          Selecione um café abaixo para visualizar os detalhes carregados sob demanda na sub-rota.
        </p>
      </div>

      {/* Área da sub-rota (oculta automaticamente quando vazia) */}
      <div className="empty:hidden rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/90 via-white/90 to-orange-50/80 p-6 shadow-lg shadow-amber-200/30 backdrop-blur-sm dark:border-amber-500/20 dark:from-amber-950/40 dark:via-slate-900/80 dark:to-orange-950/30 dark:shadow-black/30">
        <Outlet />
      </div>

      {/* Grid de cards de cafés */}
      {coffees.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white/60 p-12 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400">
          Nenhum café encontrado no momento.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {coffees.map((coffee) => {
            return (
              <Link
                key={coffee.id}
                to={`/loaders/${coffee.id}`}
                prefetch="intent"
                className="group relative flex flex-col justify-between gap-4 rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-200/40 dark:border-white/10 dark:bg-slate-900/80 dark:hover:border-indigo-500/40 dark:hover:shadow-black/40"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 transition-colors group-hover:bg-indigo-600 group-hover:text-white dark:bg-amber-500/15 dark:text-amber-300 dark:group-hover:bg-indigo-500 dark:group-hover:text-white">
                      <svg
                        aria-hidden
                        viewBox="0 0 24 24"
                        className="size-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                      </svg>
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                      #{coffee.id}
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                    {coffee.title}
                  </h2>

                  {coffee.description ? (
                    <p className="line-clamp-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      {coffee.description}
                    </p>
                  ) : null}
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-indigo-600 dark:border-slate-800 dark:text-indigo-400">
                  <span>Ver detalhes</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
