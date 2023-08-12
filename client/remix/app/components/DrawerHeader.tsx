import { DispatchWithoutAction } from "react";
import { Button, Drawer, Placeholder } from "rsuite";
import { TypeAttributes } from "rsuite/esm/@types/common";
import { Header } from "./Header";

type Props = {
  handleClick: DispatchWithoutAction;
  openState: boolean;
  placement: TypeAttributes.Placement4 | undefined;
};

export const DrawerHeader = ({ handleClick, openState, placement }: Props) => (
  <Drawer placement={placement} open={openState} onClose={handleClick}>
    <Drawer.Header closeButton={false}>
      <Drawer.Actions>
        <Button onClick={handleClick}>Close</Button>
      </Drawer.Actions>
    </Drawer.Header>
    <Header />
    <Drawer.Body>
      <Placeholder.Paragraph rows={6} />
    </Drawer.Body>
  </Drawer>
);
