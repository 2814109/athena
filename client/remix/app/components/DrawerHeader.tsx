import { DispatchWithoutAction, useState } from "react";
import { Button, Drawer } from "rsuite";
import { TypeAttributes } from "rsuite/esm/@types/common";
import { Header } from "./Header";

import { useLocation } from "@remix-run/react";
import { Navbar } from "./Navbar";

type Props = {
  handleClick: DispatchWithoutAction;
  openState: boolean;
  placement: TypeAttributes.Placement4 | undefined;
};

export const DrawerHeader = ({ handleClick, openState, placement }: Props) => {
  const location = useLocation();
  const pathKey = location.pathname.split("/")[2] ?? "home";
  const [active, setActive] = useState<string>(pathKey);

  return (
    <Drawer placement={placement} open={openState} onClose={handleClick}>
      <Drawer.Header closeButton={false}>
        <Drawer.Actions>
          <Button onClick={handleClick}>Close</Button>
        </Drawer.Actions>
      </Drawer.Header>
      <Header />
      <Drawer.Body>
        <Navbar active={active} onSelect={setActive} />
      </Drawer.Body>
    </Drawer>
  );
};
