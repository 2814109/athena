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

import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

import App from "./App";
// root.tsx
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Suspense, useState } from "react";

import { useDehydratedState } from "use-dehydrated-state";

export default function MyApp() {
  const [queryClient] = useState(() => new QueryClient());

  const dehydratedState = useDehydratedState();

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
            <QueryErrorResetBoundary>
              {({ reset }) => (
                <ErrorBoundary
                  onReset={reset}
                  fallbackRender={({ resetErrorBoundary }) => (
                    <div>
                      There was an error!
                      <button onClick={() => resetErrorBoundary()}>
                        Try again
                      </button>
                    </div>
                  )}
                >
                  <Outlet />
                </ErrorBoundary>
              )}
            </QueryErrorResetBoundary>
          </Hydrate>
        </QueryClientProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
