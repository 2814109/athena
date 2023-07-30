import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, redirect } from "@remix-run/node";

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (userId) {
    return redirect("/dashboard");
  } else {
    return redirect("/sign-in");
  }
};
