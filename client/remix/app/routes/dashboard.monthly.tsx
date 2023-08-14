import { Suspense } from "react";
import { Spinner } from "~/styles/Spinner";
import { Summary } from "~/features/monthly/components/Summary";
import { Button, DatePicker } from "rsuite";
import { FlexEndContainer } from "~/styles/FlexEndContainer";

import { useMonthly } from "~/hooks/states/useMonthly";
import { useGetAllPayment } from "~/features/monthly/hooks/useGetAllPayment";
import { isMonthEqual } from "~/libs/isDatesEqual";

export default function MonthlyPage() {
  const { monthly, handleSetMontly } = useMonthly();
  const { payments: originPayments } = useGetAllPayment();

  const payments = originPayments?.filter(({ paymentAt }) => {
    return isMonthEqual(new Date(paymentAt), monthly);
  });

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
        <Button
          appearance="default"
          active
          onClick={() => {
            handleSetMontly(new Date());
          }}
        >
          Today
        </Button>
      </FlexEndContainer>

      <Suspense fallback={<Spinner />}>
        <Summary payments={payments} />
      </Suspense>
    </>
  );
}
