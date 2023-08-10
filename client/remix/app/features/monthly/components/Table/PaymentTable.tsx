import { useGetAllPayment } from "../../hooks/useGetAllPayment";
import { Graph } from "../Graph";

export const PaymentTable = () => {
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
      <h1>Table Component</h1>
      <h2>Total : {`${totalCounts}`}</h2>
      <>
        <Graph payments={payments} />
      </>
    </>
  );
};
