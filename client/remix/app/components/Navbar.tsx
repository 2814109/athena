import { Nav } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import { Dispatch } from "react";
import { useNavigate } from "@remix-run/react";

export const Navbar = ({
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
