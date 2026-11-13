import { getInputProps, type FieldMetadata, type FormMetadata } from "@conform-to/react";
import type { FetcherWithComponents } from "react-router";

const fieldClassName =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-500/20";

interface LoginTemplateProps {
  fetcher: FetcherWithComponents<unknown>;
  busy: boolean;
  form: FormMetadata<{ email: string; password: string }>;
  fields: Required<{
    email: FieldMetadata<string, { email: string; password: string }, string[]>;
    password: FieldMetadata<string, { email: string; password: string }, string[]>;
  }>;
}

export function LoginTemplate({ fetcher, busy, form, fields }: LoginTemplateProps) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#c7d2fe_0%,_transparent_55%),radial-gradient(ellipse_at_bottom_right,_#fbcfe8_0%,_transparent_42%)] dark:bg-[radial-gradient(ellipse_at_top,_#312e81_0%,_transparent_48%),radial-gradient(ellipse_at_bottom_right,_#4c1d95_0%,_transparent_40%)]"
      />

      <fetcher.Form
        id={form.id}
        onSubmit={form.onSubmit}
        method="post"
        className="relative flex w-full max-w-md flex-col gap-6 rounded-3xl border border-white/80 bg-white/90 p-8 shadow-xl shadow-indigo-200/50 backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/85 dark:shadow-black/40"
      >
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/30">
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="size-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
          </span>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
            Bem-vindo de volta
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
            Entre com seu email e senha para continuar.
          </p>
        </div>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
          Email
          <input
            {...getInputProps(fields.email, { type: "email" })}
            placeholder="exempla@gmail.com"
            aria-invalid={fields.email.errorId ? true : undefined}
            className={fieldClassName}
          />
          {fields.email.errorId ? (
            <span id={fields.email.errorId} className="text-xs font-medium text-rose-600">
              {fields.email.errors?.[0]}
            </span>
          ) : null}
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
          Senha
          <input
            {...getInputProps(fields.password, { type: "password" })}
            placeholder="Mínimo de 6 caracteres"
            aria-invalid={fields.password.errorId ? true : undefined}
            className={fieldClassName}
          />
          {fields.password.errorId ? (
            <span id={fields.password.errorId} className="text-xs font-medium text-rose-600">
              {fields.password.errors?.[0]}
            </span>
          ) : null}
        </label>

        <button
          type="submit"
          disabled={busy}
          className="rounded-2xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {busy ? "Entrando..." : "Entrar"}
        </button>
      </fetcher.Form>
    </main>
  );
}
