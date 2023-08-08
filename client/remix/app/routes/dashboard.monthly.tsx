import { Suspense } from "react";
import { css } from "styled-system/css";
import { Spinner } from "~/components/Spinner";
import { Modal } from "~/features/monthly/components/Modal/index";
import { PaymentTable } from "~/features/monthly/components/Table/PaymentTable";
import { useGetAllPayment } from "~/features/monthly/hooks/useAllPatment";

export default function MonthlyPage() {
  const { payments } = useGetAllPayment();

  console.log(payments);
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <div
          className={css({
            width: "800px",
          })}
        >
          <Modal />
        </div>
        <PaymentTable payments={payments} />
      </Suspense>
    </>
  );
}
