import { Suspense } from "react";
import { css } from "styled-system/css";
import { Spinner } from "~/components/Spinner";
import { Modal } from "~/features/predictCost/components/Modal";

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
      </Suspense>
    </>
  );
}
