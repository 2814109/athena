import { ReactNode } from "react";
import { css } from "styled-system/css";

export const MarginContainer = ({ children }: { children: ReactNode }) => (
  <div
    className={css({
      p: "4",
    })}
  >
    {children}
  </div>
);
