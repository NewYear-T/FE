import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import normalizeCSS from "~/styles/normalize.css";
import globalCSS from "~/styles/global.css";
import fontsCSS from "~/styles/fonts.css";
import "nes.css/css/nes.min.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: normalizeCSS },
  { rel: "stylesheet", href: globalCSS },
  { rel: "stylesheet", href: fontsCSS },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
