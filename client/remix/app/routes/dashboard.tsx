import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { Suspense } from "react";
import { Header } from "~/components/Header";
import { MainContainer } from "~/styles/MainContainer";
import styles from "rsuite/dist/rsuite.min.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

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
      <MainContainer>
        <Suspense fallback={<>Loading</>}>
          <div>
            <Outlet />
          </div>
        </Suspense>
      </MainContainer>
    </>
  );
}
