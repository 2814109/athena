import { useUser } from "@clerk/remix";
import { Suspense } from "react";
import { Spinner } from "~/components/Spinner";
import { CreatePredictCostForm } from "~/features/predictCost/components/CreatePredictCostForm";
import { PredictCostPieChart } from "~/features/predictCost/components/PredictCostPieChart";
import { PredictCostStatistics } from "~/features/predictCost/components/PredictCostStatistics";

export default function PredictCostPage() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <div>
          <h1>hello</h1>
          <CreatePredictCostForm />
        </div>
        <PredictCostStatistics />
      </Suspense>
    </>
  );
}
