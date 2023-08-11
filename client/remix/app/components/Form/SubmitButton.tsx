import { Button } from "rsuite";
import { css } from "styled-system/css";

export const SubmitButton = () => (
  <div
    className={css({
      display: "flex",
      justifyContent: "center",
      p: "4",
    })}
  >
    <Button type="submit" appearance="primary">
      Submit
    </Button>
  </div>
);
