import { css } from "styled-system/css";
import { PaymentsType } from "../../types/PaymentsType";

export function EngelCoefficient({ payments }: PaymentsType) {
  const initialValue = 0;

  const foodExpenses = payments
    ?.filter(({ categoryName }) => {
      return categoryName == "食料品";
    })
    ?.map(({ cost }) => cost)
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );

  const totalCounts = payments
    ?.map(({ cost }) => cost)
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );

  const engelCoefficient = ((foodExpenses ?? 0) / (totalCounts ?? 0)) * 100;
  console.log(foodExpenses);
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        paddingTop: "clamp(2rem,10vw,5rem)",
      })}
    >
      Engel {`${Math.round(engelCoefficient)}%`}
    </div>
  );
}
