import { Suspense } from "react";
import { Spinner } from "~/styles/Spinner";
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
