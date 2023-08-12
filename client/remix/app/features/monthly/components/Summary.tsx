import { useGetAllPayment } from "../hooks/useGetAllPayment";
import { CsvDownload } from "./CsvDownload";
import { Graph } from "./Graph";
import { TableContainer } from "./Table/TableContainer";

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
      <h2>Total : ¥{`${totalCounts?.toLocaleString()}`}</h2>
      <Graph payments={payments} totalCounts={totalCounts} />
      <CsvDownload payments={payments} />
      <TableContainer payments={payments} />
    </>
  );
};
