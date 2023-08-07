import { css } from "styled-system/css";
import { MarginContainer } from "~/styles/MarginContainer";

export const SubmitButton = () => (
  <div
    className={css({
      display: "flex",
      justifyContent: "center",
    })}
  >
    <MarginContainer>
      <button
        className={css({
          cursor: "pointer",
          borderRadius: "16px",
          padding: "4px 8px",
          border: "1px Solid black",
        })}
        type="submit"
      >
        Submit
      </button>
    </MarginContainer>
  </div>
);
