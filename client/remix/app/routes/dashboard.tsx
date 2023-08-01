import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { Suspense } from "react";
import { css } from "styled-system/css";
import { Header } from "~/components/Header";

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }
  return {};
};

export default function Index() {
  return (
    <>
      <Header />
      <div
        className={css({
          display: "flex",
          justifyContent: "center",
          paddingTop: "clamp(2rem,10vw,5rem)",
        })}
      >
        <Suspense fallback={<>Loading</>}>
          <div>
            <Outlet />
          </div>
        </Suspense>
      </div>
    </>
  );
}
