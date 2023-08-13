import { Suspense } from "react";
import { Spinner } from "~/styles/Spinner";
import { Summary } from "~/features/monthly/components/Summary";

export default function MonthlyPage() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Summary />
      </Suspense>
    </>
  );
}
