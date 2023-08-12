import { useState } from "react";
import { CreatePredictCostForm } from "./Form/CreatePredictCostForm";
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
          <Modal.Title>Predict Cost</Modal.Title>
        </Modal.Header>
        <Spacer size={24} />
        <CreatePredictCostForm />
      </Modal>
    </>
  );
};
