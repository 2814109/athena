import { Suspense } from "react";
import { css } from "styled-system/css";
import { Spinner } from "~/styles/Spinner";
import { ModalContainer } from "~/features/monthly/components/Modal/index";
import { Summary } from "~/features/monthly/components/Summary";
import { Uploader } from "rsuite";

export default function MonthlyPage() {
  return (
    <>
      <Uploader action="//jsonplaceholder.typicode.com/posts/" draggable>
        <div
          style={{
            height: 150,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span>Click or Drag files to this area to upload</span>
        </div>
      </Uploader>{" "}
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
    </>
  );
}
