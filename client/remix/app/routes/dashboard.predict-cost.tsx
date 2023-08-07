import { Suspense } from "react";
import { Spinner } from "~/components/Spinner";
import { Modal } from "~/features/predictCost/components/Modal";
import { PredictCostStatistics } from "~/features/predictCost/components/PredictCostStatistics";

export default function PredictCostPage() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Modal />
        <PredictCostStatistics />
      </Suspense>
    </>
  );
}
