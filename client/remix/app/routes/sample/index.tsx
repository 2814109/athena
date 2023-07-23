import { Suspense } from "react";
import App from "~/App";

export default function Index() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <App />
    </Suspense>
  );
}
