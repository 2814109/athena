import { MonthlyForm } from "../Form/MonthlyForm";

import { ModalWrapper } from "~/components/ModalWrapper";

export const ModalContainer = () => (
  <ModalWrapper modalTitle={"Payment"}>
    <MonthlyForm />
  </ModalWrapper>
);
