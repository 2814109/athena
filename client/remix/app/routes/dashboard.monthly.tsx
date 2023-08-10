import { Suspense } from "react";
import { css } from "styled-system/css";
import { Spinner } from "~/components/Spinner";
import { Modal } from "~/features/monthly/components/Modal/index";
import { Summary } from "~/features/monthly/components/Summary";
import { useGetAllPayment } from "~/features/monthly/hooks/useGetAllPayment";

export default function MonthlyPage() {
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
        <Summary />
      </Suspense>
    </>
  );
}
