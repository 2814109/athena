import { Button, Drawer, IconButton } from "rsuite";
import AddOutlineIcon from "@rsuite/icons/AddOutline";

import { useState } from "react";
import { TypeAttributes } from "rsuite/esm/@types/common";

export const BulkInsertDrawer = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<
    TypeAttributes.Placement4 | undefined
  >();

  const handleOpen = (key: TypeAttributes.Placement4 | undefined) => {
    setOpen(true);
    setPlacement(key);
  };

  return (
    <>
      <IconButton
        icon={<AddOutlineIcon />}
        onClick={() => handleOpen("bottom")}
        appearance="primary"
      >
        Bulk
      </IconButton>

      <Drawer
        size={"sm"}
        placement={placement}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Drawer.Header>
          <Drawer.Title></Drawer.Title>
          <Drawer.Actions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>{/* <MonthlyForm /> */}</Drawer.Body>
      </Drawer>
    </>
  );
};
