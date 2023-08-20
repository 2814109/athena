import { Button, Drawer, IconButton } from "rsuite";
import AddOutlineIcon from "@rsuite/icons/AddOutline";
import { Uploader } from "rsuite";
import { useState } from "react";
import { TypeAttributes } from "rsuite/esm/@types/common";

export const BulkInsertDrawer = () => {
  const [open, setOpen] = useState(false);

  const [fileState, setFileState] = useState<File>();

  const [placement, setPlacement] = useState<
    TypeAttributes.Placement4 | undefined
  >();

  const handleOpen = (key: TypeAttributes.Placement4 | undefined) => {
    setOpen(true);
    setPlacement(key);
  };

  const handleSubmit = async () => {
    const text = await fileState?.text();
  };
  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e?.target?.files;
    if (files == null) return;

    const fileObject = files[0];
    console.log(fileObject);

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
