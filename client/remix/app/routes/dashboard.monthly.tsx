import { Suspense } from "react";
import { css } from "styled-system/css";
import { Spinner } from "~/styles/Spinner";
import { ModalContainer } from "~/features/monthly/components/Modal/index";
import { Summary } from "~/features/monthly/components/Summary";

export default function MonthlyPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <div
        className={css({
          width: "800px",
        })}
      >
        <ModalContainer />
      </div>
      <Summary />
    </Suspense>
  );
}
