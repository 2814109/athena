import { useGetAllPayment } from "../../hooks/useGetAllPayment";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

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
        <BarChart
          width={800}
          height={300}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
          data={payments}
        >
          <XAxis dataKey="paymentAt" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="cost" fill="#8884d8" />
        </BarChart>
      </>
    </>
  );
};
