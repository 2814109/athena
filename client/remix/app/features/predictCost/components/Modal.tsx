import { useState } from "react";
import { CreatePredictCostForm } from "./Form/CreatePredictCostForm";

export const Modal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsOpen((pre) => !pre)}>
        {!isOpen ? "open" : "close"}
      </button>
      {isOpen && <CreatePredictCostForm />}
    </>
  );
};
