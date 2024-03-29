import {
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
  ComposedChart,
} from "recharts";
import { PaymentsType } from "../../types/PaymentsType";
import { getAllDatesInMonth } from "~/libs/getAllDatesInMonth";
import { isDatesEqual } from "~/libs/isDatesEqual";
import { formatDate } from "~/libs/formatDate";
import { IconButton, InputNumber } from "rsuite";
import { useEffect, useState } from "react";
import ReloadIcon from "@rsuite/icons/Reload";
import { Spacer } from "~/components/Spacer";
import { useMonthly } from "~/hooks/states/useMonthly";
type Props = {
  totalCounts: number | undefined;
} & PaymentsType;
export const Graph = ({ payments, totalCounts }: Props) => {
  const { monthly } = useMonthly();

  const today = monthly;
  const targetYear = today.getFullYear();
  const targetMonth = today.getMonth() + 1;
  const averageCost = (totalCounts ?? 0) / today.getDate();

  const [predictionCostPerDay, setPredictionCostOerDay] =
    useState<number>(averageCost);

  useEffect(() => {
    setPredictionCostOerDay((totalCounts ?? 0) / today.getDate());
  }, [monthly]);

  const handleReset = () => {
    setPredictionCostOerDay(() => averageCost);
  };

  const allDatesInMonth = getAllDatesInMonth(targetYear, targetMonth);
  const restDates = allDatesInMonth.length - today.getDate();
  const datesDataset = allDatesInMonth.map((element) => ({
    date: element,
    count: 0,
  }));

  const dataSet = datesDataset.map((dateObject, _) => {
    const countByDate = payments
      ?.filter(({ paymentAt }) =>
        isDatesEqual(dateObject.date, new Date(paymentAt))
      )
      .map(({ cost }) => cost)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return {
      date: formatDate(dateObject.date),
      count: countByDate,
      predictCount: 0,
    };
  });

  console.log(predictionCostPerDay);
  console.log(restDates);

  const restCost = predictionCostPerDay * restDates;

  const restDataset = datesDataset.slice(today.getDate()).map((dateObject) => ({
    date: formatDate(dateObject.date),
    count: 0,
    predictCount: predictionCostPerDay,
  }));

  const mergeData = [...dataSet.slice(0, today.getDate()), ...restDataset];

  const addAccumulateCount = mergeData.map((data, index, array) => {
    const originAccumulateCount = array
      .slice(0, index + 1)
      .map(({ count, predictCount }) => Number(count) + predictCount)
      .reduce(
        (accumulator, currentValue) => (accumulator ?? 0) + (currentValue ?? 0),
        0
      );
    const accumulateCount = Math.ceil(originAccumulateCount);

    return { accumulateCount, date: data.date, count: data.count };
  });

  return (
    <>
      <h2>
        Total : ¥{`${totalCounts?.toLocaleString()}`} (Prediction : ¥
        {Math.ceil(restCost + (totalCounts ?? 0)).toLocaleString()})
      </h2>

      <div>
        Average：¥
        <Spacer horizontal size={8} />
        <div style={{ width: 160, display: "inline-block" }}>
          <InputNumber
            postfix="￥"
            step={10}
            value={Math.ceil(predictionCostPerDay)}
            onChange={(event) => {
              setPredictionCostOerDay(Number(event));
            }}
          />
        </div>
        <Spacer horizontal size={12} />
        <IconButton onClick={handleReset} icon={<ReloadIcon />} circle />
      </div>

      <ComposedChart
        width={800}
        height={300}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
        barSize={20}
        data={addAccumulateCount}
      >
        <XAxis dataKey="date" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" />

        <Line type="monotone" dataKey="accumulateCount" stroke="#ff7300" />

        <CartesianGrid strokeDasharray="4 6" />
      </ComposedChart>
    </>
  );
};
