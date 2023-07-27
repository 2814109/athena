import { Suspense } from "react";
import { Todos } from "~/features/Todos";

export default function Index() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Todos />
    </Suspense>
  );
}
