import type { V2_MetaFunction } from "@remix-run/node";
import { Suspense } from "react";
import { css } from "styled-system/css";
import { Category } from "~/features/category/components/Category";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Suspense fallback={<>hey</>}>
        <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
          Hello 🐼!
        </div>

        <Category />
      </Suspense>
    </>
  );
}
