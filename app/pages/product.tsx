import { getUniqueCoffee } from "~/service/coffe";
import type { Route } from "./+types/product";
import { ProductTemplate } from "~/templates/product";

export function ErrorBoundary() {
    return (
        <div className="rounded-2xl border border-rose-200 bg-rose-50/90 p-5 text-center dark:border-rose-500/30 dark:bg-rose-950/40">
            <p className="text-sm font-semibold text-rose-700 dark:text-rose-300">
                Ops! Não foi possível carregar os detalhes deste café.
            </p>
        </div>
    );
}

export async function loader({ params }: Route.LoaderArgs) {
    return await getUniqueCoffee({ id: Number(params.id) })
}

export default function Products({ loaderData }: Route.ComponentProps) {
    return <ProductTemplate coffee={loaderData} />
}
