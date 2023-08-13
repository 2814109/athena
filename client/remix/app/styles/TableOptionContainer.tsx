import { ReactNode } from "react";
import { ButtonToolbar, FlexboxGrid } from "rsuite";

type Props = {
  children: ReactNode;
};
export const TableOptionContainer = ({ children }: Props) => (
  <FlexboxGrid justify="end">
    <ButtonToolbar>{children}</ButtonToolbar>
  </FlexboxGrid>
);
