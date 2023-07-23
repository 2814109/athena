// import { cssBundleHref } from "@remix-run/css-bundle";
// import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import App from "./App"
// root.tsx
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useState } from "react";

import { useDehydratedState } from 'use-dehydrated-state'

export default function MyApp() {
  const [queryClient] = useState(() => new QueryClient())

  const dehydratedState = useDehydratedState()

  return (
        <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
      <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <h1>test</h1>
        <Outlet />
        <App />
      </Hydrate>
    </QueryClientProvider>
      <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
 
  )
}

// export const links: LinksFunction = () => [
//   ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
// ];

// export default function App() {
//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width,initial-scale=1" />
//         <Meta />
//         <Links />
//       </head>
//       <body>
//         <Outlet />
//         <ScrollRestoration />
//         <Scripts />
//         <LiveReload />
//       </body>
//     </html>
//   );
// }
