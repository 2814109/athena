import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { PaymentsType } from "../../types/PaymentsType";

export const Graph = ({ payments }: PaymentsType) => {
  return (
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
      <CartesianGrid strokeDasharray="4 6" />
      <Bar dataKey="cost" fill="#8884d8" />
    </BarChart>
  );
};
