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
    <Drawer.Header>
      <Drawer.Title>
        <Header />
      </Drawer.Title>
      <Drawer.Actions>
        <Button onClick={handleClick}>Close</Button>
      </Drawer.Actions>
    </Drawer.Header>
    <Drawer.Body>
      <Placeholder.Paragraph rows={8} />
    </Drawer.Body>
  </Drawer>
);
