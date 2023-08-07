import { Suspense } from "react";
import { Spinner } from "~/components/Spinner";
import { CreatePredictCostForm } from "~/features/predictCost/components/CreatePredictCostForm";
import { PredictCostStatistics } from "~/features/predictCost/components/PredictCostStatistics";

export default function PredictCostPage() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <CreatePredictCostForm />
        <PredictCostStatistics />
      </Suspense>
    </>
  );
}
