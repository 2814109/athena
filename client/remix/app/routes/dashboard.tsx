import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { Suspense, useState } from "react";
import { MainContainer } from "~/styles/MainContainer";
import styles from "rsuite/dist/rsuite.min.css";
import { IconButton, ButtonToolbar } from "rsuite";
import { TypeAttributes } from "rsuite/esm/@types/common";
import { DrawerHeader } from "~/components/DrawerHeader";

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
      <ButtonToolbar>
        <IconButton onClick={() => handleOpen("top")}>Top</IconButton>
      </ButtonToolbar>
      <DrawerHeader
        handleClick={handleClose}
        openState={open}
        placement={placement}
      />

      <MainContainer>
        <Suspense fallback={<>Loading</>}>
          <div>
            <Outlet />
          </div>
        </Suspense>
      </MainContainer>
    </>
  );
}
