import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./index.css";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary as ErrorBoundaryLib } from "react-error-boundary";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";

import { useDehydratedState } from "use-dehydrated-state";

import { rootAuthLoader } from "@clerk/remix/ssr.server";
import type { LoaderFunction } from "@remix-run/node";
import { ClerkApp, V2_ClerkErrorBoundary } from "@clerk/remix";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Athena" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = (args) => rootAuthLoader(args);
export const ErrorBoundary = V2_ClerkErrorBoundary();

function App() {
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
                <ErrorBoundaryLib
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
                </ErrorBoundaryLib>
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

export default ClerkApp(App);
