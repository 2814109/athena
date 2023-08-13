import { ReactNode } from "react";
import { css } from "styled-system/css";

export const MainContainer = ({ children }: { children: ReactNode }) => (
  <div
    className={css({
      display: "flex",
      justifyContent: "center",
      paddingTop: "clamp(2rem,10vw,2rem)",
    })}
  >
    {children}
  </div>
);
