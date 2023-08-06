import { css } from "styled-system/css";

export const SubmitButton = () => {
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
      })}
    >
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
    </div>
  );
};
