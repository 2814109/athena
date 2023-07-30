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

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }
  return {};
};

export default function Index() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div>
      <div>Hello, {user.firstName} welcome to Clerk</div>
      <br />
      <SignedIn>
        <h1>Index route</h1>
        <p>You are signed in!</p>
        <UserButton />
      </SignedIn>
      <br />

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      <Outlet />
    </div>
  );
}
