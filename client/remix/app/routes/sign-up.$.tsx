import { SignUp } from "@clerk/remix";
import { css } from "styled-system/css";

export default function SignUpPage() {
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        paddingTop: "clamp(2rem,10vw,5rem)",
      })}
    >
      <SignUp routing={"path"} path={"/sign-up"} />

      <div
        className={css({
          bgColor: "#6c47ff",
          color: "#fff",
          fontSize: "14px",
          padding: "1rem 2rem",
          position: "fixed",
          textAlign: "center",
          bottom: "0",
          width: "100vw",
          zIndex: "20",
        })}
      >
        <p>Sign up or sign in to continue.</p>
      </div>
    </div>
  );
}
