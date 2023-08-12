import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  UserButton,
} from "@clerk/remix";
import { useUser } from "@clerk/remix";
import { css } from "styled-system/css";

export const Header = () => {
  const { user } = useUser();

  return (
    <>
      <SignedIn>
        <div
          className={css({
            padding: "1rem 3rem",
            display: "flex",
            justifyContent: "space-between",
          })}
        >
          <h1>Athena</h1>
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
