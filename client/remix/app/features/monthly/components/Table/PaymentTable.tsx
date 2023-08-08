import { Payment } from "~/gql/graphql";
import { useGetAllPayment } from "../../hooks/useGetAllPayment";
// import { PredictCostRow } from "../../../predictCost/components/Table/PredictCostRow";

export const PaymentTable = () => {
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
      <h1>Table Component</h1>
      <h2>Total : {`${totalCounts}`}</h2>
      <>
        {payments?.map((payment) => (
          <></>
          // <PredictCostRow key={predictCost.id} predictCost={predictCost} />
        ))}
      </>
    </>
  );
};
