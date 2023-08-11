import { isDatesEqual } from "~/libs/isDatesEqual";
import { PaymentsType } from "../../types/PaymentsType";
import { PaymentRow } from "./row";
import { Payment } from "~/gql/graphql";

import { getAllDatesInMonth } from "~/libs/getAllDatesInMonth";

export const Table = ({ payments }: PaymentsType) => {
  const targetYear = 2023; // 対象の年
  const targetMonth = 8; // 対象の月 (1 月: 1, 2 月: 2, ... 12 月: 12)

  const allDatesInMonth = getAllDatesInMonth(targetYear, targetMonth);

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

    return {
      date: dateObject.date,
      count: countByDate,
    };
  });

  console.log(dataSet);

  return (
    <>
      {payments?.map((payment) => (
        <PaymentRow payment={payment as Payment} />
      ))}
    </>
  );
};
