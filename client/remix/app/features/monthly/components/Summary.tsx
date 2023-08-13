import { IconButton } from "rsuite";
import { useGetAllPayment } from "../hooks/useGetAllPayment";
import { CsvDownload } from "./CsvDownload";
import { Graph } from "./Graph";
import { ModalContainer } from "./Modal";
import { TableContainer } from "./Table/TableContainer";
import { TableOptionContainer } from "~/styles/TableOptionContainer";
import AddOutlineIcon from "@rsuite/icons/AddOutline";

export const Summary = () => {
  const { payments } = useGetAllPayment();

  const initialValue = 0;

  const totalCounts = payments
    ?.map(({ cost }) => cost)
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
  return (
    <>
      <Graph payments={payments} totalCounts={totalCounts} />
      <TableOptionContainer>
        <ModalContainer />
        <IconButton icon={<AddOutlineIcon />} appearance="primary">
          Bulk
        </IconButton>
        <CsvDownload payments={payments} />
      </TableOptionContainer>
      <TableContainer payments={payments} />
    </>
  );
};
