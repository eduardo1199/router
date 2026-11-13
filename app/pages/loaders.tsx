import type { Route } from "./+types/loaders";
import { getCoffees, type Coffee } from "~/service/coffe";
import { LoadersTemplate } from "~/templates/loaders";

interface LoaderData {
    loaderData: {
        title: string;
        coffees: Coffee[]
    };
}

export function ErrorBoundary() {
    return (
        <div className="mx-auto max-w-lg rounded-3xl border border-rose-200 bg-rose-50/90 p-8 text-center shadow-lg shadow-rose-200/40 dark:border-rose-500/30 dark:bg-rose-950/40">
            <h2 className="text-lg font-semibold text-rose-700 dark:text-rose-300">
                Ops! Aconteceu um erro ao buscar a lista de cafés.
            </h2>
            <p className="mt-2 text-sm text-rose-600/80 dark:text-rose-400">
                Verifique sua conexão ou tente recarregar a página.
            </p>
        </div>
    );
}

export async function loader() {
    const coffees = await getCoffees()

    return {
        title: "Loaders server response massa!",
        coffees
    };
}

export default function Loaders({ loaderData }: LoaderData) {
    console.log(loaderData.title);

    return (
        <LoadersTemplate
            title={loaderData.title}
            coffees={loaderData.coffees}
        />
    );
}
