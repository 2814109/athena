import { Suspense } from "react";
import { Spinner } from "~/styles/Spinner";
import { Summary } from "~/features/monthly/components/Summary";
import { DatePicker } from "rsuite";
import { FlexEndContainer } from "~/styles/FlexEndContainer";

import { useMonthly } from "~/hooks/states/useMonthly";

export default function MonthlyPage() {
  const { monthly, handleSetMontly } = useMonthly();
  return (
    <>
      <FlexEndContainer>
        <DatePicker
          onChange={(event) => {
            handleSetMontly(event ?? new Date());
          }}
          format="yyyy-MM"
          ranges={[]}
          style={{ width: 200 }}
          value={monthly}
        />
      </FlexEndContainer>

      <Suspense fallback={<Spinner />}>
        <Summary />
      </Suspense>
    </>
  );
}
