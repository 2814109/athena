import { css } from "styled-system/css";

export const SubmitButton = () => {
  return (
    <div>
      <button className={css({ cursor: "pointer" })} type="submit">
        Submit
      </button>
    </div>
  );
};
