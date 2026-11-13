import { useFetcher } from "react-router";
import type { Route } from "./+types/login";
import { useForm } from "@conform-to/react";
import { z } from "zod";
import { parseWithZod } from "@conform-to/zod/v4";
import { LoginTemplate } from "~/templates/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Entre com email e senha" },
  ];
}

const schema = z.object({
  email: z.email("Informe um email válido."),
  password: z
    .string({ error: "A senha é obrigatória." })
    .min(6, "A senha precisa ter pelo menos 6 caracteres."),
});

/**
 * 
 * @param request - The request object
 * @returns - The action data
 * @returns { ok: false, errors: { email: string, password: string }, email: string } if the form is invalid
 * @returns { ok: true, email: string } if the form is valid
 * @example
 * {
 *   "ok": false,
 *   "errors": {
 *     "email": "Informe um email válido.",
 *     "password": "A senha precisa ter pelo menos 6 caracteres."
 *   },
 *   "email": "teste@teste.com"
 * }
 */
export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  const submission = parseWithZod(formData, { schema });

  console.log(submission);

  if (submission.status === "error") {
    return submission.reply();
  }

  return submission.payload;
}

export default function Login({ actionData }: Route.ComponentProps) {
  const fetcher = useFetcher();
  const busy = fetcher.state !== "idle";

  const [form, fields] = useForm({
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
    lastResult: actionData,
  });

  return (
    <LoginTemplate
      fetcher={fetcher}
      busy={busy}
      form={form}
      fields={fields}
    />
  );
}
