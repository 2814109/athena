import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  UserButton,
} from "@clerk/remix";
import { useUser } from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { css } from "styled-system/css";
import { flex } from "styled-system/patterns";

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }
  return {};
};

export default function Index() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

const Header = () => {
  const { user } = useUser();

  return (
    <>
      <SignedIn>
        <div
          className={css({
            padding: "0.5rem 1rem",
            display: "flex",
            justifyContent: "space-between",
          })}
        >
          <h1>title</h1>
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              justifyContent: "end",
            })}
          >
            {user?.firstName}
            <UserButton />
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};
