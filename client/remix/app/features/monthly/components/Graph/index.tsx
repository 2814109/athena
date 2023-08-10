import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

type Props = {
  payments:
    | {
        __typename?: "Payment" | undefined;
        id: string;
        label: string;
        categoryName: string;
        cost: number;
        paymentType: string;
        paymentAt: any;
      }[]
    | undefined;
};
export const Graph = ({ payments }: Props) => {
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
      {/* <Legend /> */}
      <CartesianGrid strokeDasharray="4 6" />
      <Bar dataKey="cost" fill="#8884d8" />
    </BarChart>
  );
};
