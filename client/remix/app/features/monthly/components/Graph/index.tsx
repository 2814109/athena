import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { PaymentsType } from "../../types/PaymentsType";
import { getAllDatesInMonth } from "~/libs/getAllDatesInMonth";
import { isDatesEqual } from "~/libs/isDatesEqual";

type Props = {
  totalCounts: number | undefined;
} & PaymentsType;
export const Graph = ({ payments, totalCounts }: Props) => {
  const today = new Date();
  const targetYear = today.getFullYear();
  const targetMonth = today.getMonth() + 1;

  const allDatesInMonth = getAllDatesInMonth(targetYear, targetMonth);

  const restDates = allDatesInMonth.length - today.getDate();
  const datesDataset = allDatesInMonth.map((element) => ({
    date: element,
    count: 0,
  }));

  const dataSet = datesDataset.map((dateObject) => {
    const countByDate = payments
      ?.filter(({ paymentAt }) =>
        isDatesEqual(dateObject.date, new Date(paymentAt))
      )
      .map(({ cost }) => cost)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const formatDate = (date: Date): string =>
      `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

    return {
      date: formatDate(dateObject.date),
      count: countByDate,
    };
  });

  const averageConst = (totalCounts ?? 0) / today.getDate();

  const restCost = averageConst * restDates;

  console.log(restCost + (totalCounts ?? 0));

  return (
    <>
      <h2>prediction : {restCost + (totalCounts ?? 0)}</h2>
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
        data={dataSet}
      >
        <XAxis dataKey="date" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="4 6" />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </>
  );
};
