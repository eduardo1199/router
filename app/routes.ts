import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layouts/main.tsx", [
        index("pages/home.tsx"),
        route("loaders", "pages/loaders.tsx", [
            route(":id", "pages/product.tsx")
        ])
    ]),
    route("login", "pages/login.tsx")
] satisfies RouteConfig;
