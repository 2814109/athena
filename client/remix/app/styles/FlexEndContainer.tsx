import { ReactNode } from "react";
import { ButtonToolbar, FlexboxGrid } from "rsuite";

type Props = {
  children: ReactNode;
};
export const FlexEndContainer = ({ children }: Props) => (
  <FlexboxGrid justify="end">
    <ButtonToolbar>{children}</ButtonToolbar>
  </FlexboxGrid>
);
