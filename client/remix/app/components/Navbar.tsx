import { Nav } from "rsuite";
import { Dispatch } from "react";
import { useNavigate } from "@remix-run/react";
import { NAV_INDEX } from "~/constants/NAV_INDEX";

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
      {NAV_INDEX.map((nav) => (
        <Nav.Item eventKey={nav.path} onClick={() => navigate(`${nav.path}`)}>
          {nav.title}
        </Nav.Item>
      ))}
    </Nav>
  );
};
