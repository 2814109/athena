import { Dispatch, DispatchWithoutAction, useEffect, useState } from "react";
import { Button, Drawer } from "rsuite";
import { TypeAttributes } from "rsuite/esm/@types/common";
import { Header } from "./Header";
import { Nav } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import { useLocation, useNavigate } from "@remix-run/react";

type Props = {
  handleClick: DispatchWithoutAction;
  openState: boolean;
  placement: TypeAttributes.Placement4 | undefined;
};

export const DrawerHeader = ({ handleClick, openState, placement }: Props) => {
  const location = useLocation();
  const [active, setActive] = useState<string>(location.pathname.split("/")[2]);

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

const Navbar = ({
  active,
  onSelect,
  ...props
}: {
  active: string;
  onSelect: Dispatch<React.SetStateAction<string>>;
}) => {
  const navigate = useNavigate();

  return (
    <Nav
      {...props}
      activeKey={active}
      onSelect={onSelect}
      style={{ marginBottom: 50 }}
    >
      <Nav.Item
        eventKey="home"
        icon={<HomeIcon />}
        onClick={() => navigate(`/dashboard`)}
      >
        Home
      </Nav.Item>
      <Nav.Item
        eventKey="predict-cost"
        onClick={() => navigate(`/dashboard/predict-cost`)}
      >
        Predict Cost
      </Nav.Item>
      <Nav.Item
        eventKey="monthly"
        onClick={() => navigate(`/dashboard/monthly`)}
      >
        monthly
      </Nav.Item>
    </Nav>
  );
};
