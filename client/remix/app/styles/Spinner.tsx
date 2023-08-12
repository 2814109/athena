import { css } from "styled-system/css";

export const Spinner = () => (
  <div
    className={css({
      position: "relative",
      width: "26px",
      height: "26px",
      border: "1px #6c47ff solid",
      animation: "spin",
    })}
  />
);
