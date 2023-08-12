import { ReactNode, useState } from "react";
import { Modal, Button, ButtonToolbar } from "rsuite";
import { Spacer } from "~/components/Spacer";

type Props = {
  children: ReactNode;
  modalTitle: string;
};
export const ModalWrapper = ({ children, modalTitle }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleToggle = () => setIsOpen((pre) => !pre);

  return (
    <>
      <ButtonToolbar>
        <Button appearance="primary" block onClick={handleToggle}>
          {!isOpen ? "open" : "close"}
        </Button>
      </ButtonToolbar>
      <div style={{ height: "24px" }} />

      <Modal open={isOpen} onClose={handleToggle}>
        <Modal.Header>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Spacer size={24} />
        {children}
      </Modal>
    </>
  );
};
