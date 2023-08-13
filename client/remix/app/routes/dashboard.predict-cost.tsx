import { Suspense } from "react";
import { Spinner } from "~/styles/Spinner";
import { ModalContainer } from "~/features/predictCost/components/Modal";
import { PredictCostStatistics } from "~/features/predictCost/components/PredictCostStatistics";

export default function PredictCostPage() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <PredictCostStatistics />
      </Suspense>
    </>
  );
}
