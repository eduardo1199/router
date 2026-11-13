import { NavLink, Outlet, type PrefetchBehavior } from "react-router";

const navItems = [
  { to: "/", label: "Home", end: true, prefetch: 'none' as PrefetchBehavior  },
  { to: "/loaders", label: "Loaders", prefetch: 'intent' as PrefetchBehavior  },
];

export default function MainLayout() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_#c7d2fe_0%,_transparent_50%),radial-gradient(ellipse_at_bottom_right,_#fbcfe8_0%,_transparent_40%)] opacity-70 dark:bg-[radial-gradient(ellipse_at_top,_#312e81_0%,_transparent_45%),radial-gradient(ellipse_at_bottom_right,_#4c1d95_0%,_transparent_38%)]"
      />

      <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/75">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <NavLink
            to="/"
            className="flex items-center gap-3 text-base font-semibold tracking-tight text-slate-900 transition hover:opacity-90 dark:text-white"
          >
            <span className="flex size-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/30">
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
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </span>
            <span>Router App</span>
          </NavLink>

          <ul className="flex items-center gap-1.5 rounded-2xl border border-slate-200/80 bg-slate-100/80 p-1.5 dark:border-white/10 dark:bg-slate-800/70">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive, isPending }) =>
                    [
                      "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/30"
                        : isPending
                          ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300"
                          : "text-slate-600 hover:bg-white/70 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700/60 dark:hover:text-white",
                    ].join(" ")
                  }
                  prefetch={item.prefetch || 'none'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink
            to="/login"
            className="rounded-xl border border-indigo-200 bg-indigo-50/80 px-4 py-2 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100 dark:border-indigo-500/30 dark:bg-indigo-500/15 dark:text-indigo-300 dark:hover:bg-indigo-500/25"
          >
            Entrar
          </NavLink>
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}
