import { useUser } from "@clerk/remix";
import { Suspense } from "react";
import { Spinner } from "~/components/Spinner";
import { CreatePredictCostForm } from "~/features/predictCost/components/CreatePredictCostForm";

import { PredictCostTable } from "~/features/predictCost/components/PredictCostTable";
export default function PredictCostPage() {
  const { isLoaded, user } = useUser();

  if (!isLoaded) return <Spinner />;

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <div>
          <h1>hello</h1>
          <CreatePredictCostForm />
        </div>
        <PredictCostTable />
      </Suspense>
    </>
  );
}
