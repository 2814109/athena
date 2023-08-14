import { Button, Drawer, IconButton, Placeholder } from "rsuite";
import { MonthlyForm } from "../Form/MonthlyForm";
import AngleRightIcon from "@rsuite/icons/legacy/AngleRight";
import PlusIcon from "@rsuite/icons/Plus";

import { ModalWrapper } from "~/components/ModalWrapper";
import { useState } from "react";
import { TypeAttributes } from "rsuite/esm/@types/common";

export const ModalContainer = () => {
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
        icon={<AngleRightIcon />}
        onClick={() => handleOpen("right")}
        appearance="primary"
      >
        Add
      </IconButton>

      <Drawer
        size={"sm"}
        placement={placement}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Drawer.Header>
          <Drawer.Title>Drawer Title</Drawer.Title>
          <Drawer.Actions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
          <MonthlyForm />
        </Drawer.Body>
      </Drawer>
    </>
  );
};
