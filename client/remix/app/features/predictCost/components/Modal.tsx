import { CreatePredictCostForm } from "./Form/CreatePredictCostForm";
import { ModalWrapper } from "~/components/ModalWrapper";

export const ModalContainer = () => (
  <ModalWrapper modalTitle={"Predict Cost"}>
    <CreatePredictCostForm />
  </ModalWrapper>
);
