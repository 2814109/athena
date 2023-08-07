import { useState } from "react";
import { MonthlyForm } from "../Form/MonthlyForm";

export const Modal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <>
      <button onClick={() => setIsOpen((pre) => !pre)}>
        {!isOpen ? "open" : "close"}
      </button>
      {isOpen && <MonthlyForm />}
    </>
  );
};
