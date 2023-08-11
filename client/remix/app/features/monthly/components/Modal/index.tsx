import { useState } from "react";
import { MonthlyForm } from "../Form/MonthlyForm";
import { Modal, Button, ButtonToolbar } from "rsuite";
import { Spacer } from "~/components/Spacer";

export const ModalContainer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <ButtonToolbar>
        <Button
          appearance="primary"
          block
          onClick={() => setIsOpen((pre) => !pre)}
        >
          {!isOpen ? "open" : "close"}
        </Button>
      </ButtonToolbar>
      <div style={{ height: "24px" }} />

      <Modal open={isOpen} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Payment</Modal.Title>
        </Modal.Header>
        <Spacer size={24} />
        <MonthlyForm />
      </Modal>
    </>
  );
};
