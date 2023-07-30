import { Suspense } from "react";
import App from "~/features/App";

export default function Index() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <h1>Title</h1>
      <App />
    </Suspense>
  );
}