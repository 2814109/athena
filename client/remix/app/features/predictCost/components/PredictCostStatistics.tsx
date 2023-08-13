import { css } from "styled-system/css";
import { useGetAllPredictCost } from "../hooks/useAllPredictCost";
import { PredictCostPieChart } from "./PieChart/PredictCostPieChart";
import { PredictCostTable } from "./Table/PredictCostTable";
import { CsvDownload } from "./CsvDownload";
import { TableOptionContainer } from "~/styles/TableOptionContainer";
import { ModalContainer } from "./Modal";

export const PredictCostStatistics = () => {
  const { predictCosts } = useGetAllPredictCost();

  const setPredictCost = new Set(
    predictCosts?.map(({ categoryName }) => categoryName)
  );

  const predictCostData = [...setPredictCost.values()];
  const result = predictCostData.map((key) => {
    const calcValue = predictCosts
      ?.filter(({ categoryName }) => categoryName === key)
      .map((element) => element.amount)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return { name: key, value: calcValue ?? 0 };
  });

  const initCount = 0;
  const totalCount = result
    .map((element) => element.value)
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initCount
    );

  return (
    <>
      <h1
        className={css({
          display: "flex",
          justifyContent: "center",
        })}
      >
        Total Count ¥{totalCount.toLocaleString()}
      </h1>
      <div>
        <PredictCostPieChart pieChartData={result} />
      </div>
      <TableOptionContainer>
        <ModalContainer />

        <CsvDownload predictCosts={predictCosts} />
      </TableOptionContainer>
      <PredictCostTable predictCosts={predictCosts} />
    </>
  );
};
