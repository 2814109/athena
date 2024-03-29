import { Button, Drawer, IconButton } from "rsuite";
import AddOutlineIcon from "@rsuite/icons/AddOutline";
import { useState } from "react";
import { TypeAttributes } from "rsuite/esm/@types/common";
import { useCreatePayment } from "~/hooks/features/payment/useCreatePayment";
import { CreatePayment, Scalars } from "~/gql/graphql";

export const BulkInsertDrawer = () => {
  const [open, setOpen] = useState(false);

  const [fileState, setFileState] = useState<File>();

  const { mutation } = useCreatePayment();

  const [placement, setPlacement] = useState<
    TypeAttributes.Placement4 | undefined
  >("bottom");

  const handleOpen = (key: TypeAttributes.Placement4 | undefined) => {
    setOpen(true);
    setPlacement(key);
  };

  const handleSubmit = async () => {
    const text = await fileState?.text();
    const arrayOfCSV = text?.split("\n");
    arrayOfCSV?.slice(1)?.forEach(async (line, index) => {
      const lineElement = line.split(",");
      console.log(lineElement[2]);
      const requestData: CreatePayment = {
        categoryName: lineElement[2].replace(/"/g, ""),
        label: lineElement[1].replace(/"/g, ""),
        cost: Number(lineElement[3]),
        paymentType: lineElement[4].replace(/"/g, ""),
        paymentAt: new Date(lineElement[5].replace(/"/g, "")),
        userId: 1,
      };
      mutation.mutate(requestData);
    });
  };
  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e?.target?.files;
    if (files == null) return;
    const fileObject = files[0];
    setFileState(fileObject);
  };

  return (
    <>
      <IconButton
        icon={<AddOutlineIcon />}
        onClick={() => handleOpen("bottom")}
        appearance="primary"
      >
        Bulk
      </IconButton>

      <Drawer
        size={"sm"}
        placement={placement}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Drawer.Header>
          <Drawer.Title></Drawer.Title>
          <Drawer.Actions>
            <Button appearance="primary" onClick={handleSubmit}>
              Insert
            </Button>

            <Button onClick={() => setOpen(false)}>Cancel</Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
          <div
            style={{
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input
              type="file"
              accept=".csv"
              multiple={false}
              onChange={onFileInputChange}
            />
          </div>
        </Drawer.Body>
      </Drawer>
    </>
  );
};
