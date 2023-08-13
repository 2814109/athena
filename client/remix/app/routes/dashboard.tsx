import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { Suspense, useState } from "react";
import styles from "rsuite/dist/rsuite.min.css";
import { TypeAttributes } from "rsuite/esm/@types/common";
import { DrawerHeader } from "~/components/DrawerHeader";
import { createIconFont } from "@rsuite/icons";
import Header from "rsuite/Header";
import { css } from "styled-system/css";

const IconFont = createIconFont({
  scriptUrl: "//at.alicdn.com/t/font_2144422_r174s9i1orl.js",
  commonProps: { style: { fontSize: 30, color: "#1675e0" } },
  onLoaded: () => {
    console.log("onLoaded");
  },
});
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }
  return {};
};

export default function Index() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<TypeAttributes.Placement4>();
  const handleOpen = (key: TypeAttributes.Placement4) => {
    setOpen(true);
    setPlacement(key);
  };

  const handleClose = () => {
    setOpen((pre) => !pre);
  };
  return (
    <>
      <Header className={css({ px: 10, py: 4, textAlign: "right" })}>
        <IconFont
          className={css({ cursor: "pointer" })}
          onClick={() => handleOpen("top")}
          icon="rs-icongear-16"
          spin
        />
      </Header>
      <DrawerHeader
        handleClick={handleClose}
        openState={open}
        placement={placement}
      />
      <div
        className={css({
          display: "flex",
          justifyContent: "center",
          paddingTop: "clamp(2rem,10vw,2rem)",
        })}
      >
        <Suspense fallback={<>Loading</>}>
          <div>
            <Outlet />
          </div>
        </Suspense>
      </div>
    </>
  );
}
