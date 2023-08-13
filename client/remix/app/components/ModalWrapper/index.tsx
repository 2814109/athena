import { ReactNode, useState } from "react";
import { Modal, IconButton } from "rsuite";
import { Spacer } from "~/components/Spacer";
import PlusIcon from "@rsuite/icons/Plus";

type Props = {
  children: ReactNode;
  modalTitle: string;
};
export const ModalWrapper = ({ children, modalTitle }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleToggle = () => setIsOpen((pre) => !pre);

  return (
    <>
      <IconButton
        onClick={handleToggle}
        icon={<PlusIcon />}
        circle
        color="blue"
        appearance="primary"
      />

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
