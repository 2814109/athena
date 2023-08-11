import { useGetAllPayment } from "../hooks/useGetAllPayment";
import { Graph } from "./Graph";
import { Table } from "./Table";

export const Summary = () => {
  const { payments } = useGetAllPayment();

  const initialValue = 0;

  const totalCounts = payments
    ?.map(({ cost }) => cost)
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
  console.log(payments);
  return (
    <>
      <h2>Total : ¥{`${totalCounts?.toLocaleString()}`}</h2>
      <Graph payments={payments} totalCounts={totalCounts} />

      <Table payments={payments} />
    </>
  );
};
