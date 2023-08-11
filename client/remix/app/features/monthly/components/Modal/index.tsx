import { useState, forwardRef } from "react";
import { MonthlyForm } from "../Form/MonthlyForm";
import { Button, ButtonToolbar, Animation } from "rsuite";

export const Modal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

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
      {isOpen && <MonthlyForm />}
    </>
  );
};
