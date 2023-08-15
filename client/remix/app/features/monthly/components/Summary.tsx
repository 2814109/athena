import { IconButton } from "rsuite";
import { CsvDownload } from "./CsvDownload";
import { Graph } from "./Graph";
import { ModalContainer } from "./Modal";
import { TableContainer } from "./Table/TableContainer";
import { FlexEndContainer } from "~/styles/FlexEndContainer";
import AddOutlineIcon from "@rsuite/icons/AddOutline";
import { MonthlyPieChart } from "./PieChart/MonthlyPieChart";
import { Suspense } from "react";
import { PaymentsType } from "../types/PaymentsType";
import { PaymentTypePieChart } from "./PieChart/PaymentTypePieChart";

export const Summary = ({ payments: originPayments }: PaymentsType) => {
  const initialValue = 0;

  const payments = originPayments;

  const totalCounts = payments
    ?.map(({ cost }) => cost)
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );

  return (
    <>
      <Suspense fallback={<>Loading</>}>
        <Graph payments={payments} totalCounts={totalCounts} />

        <MonthlyPieChart payments={payments} />
        <PaymentTypePieChart payments={payments} />

        <FlexEndContainer>
          <ModalContainer />
          <IconButton icon={<AddOutlineIcon />} appearance="primary">
            Bulk
          </IconButton>
          {(originPayments?.length ?? 0) > 0 && (
            <CsvDownload payments={payments} />
          )}
        </FlexEndContainer>
        <TableContainer payments={payments} />
      </Suspense>
    </>
  );
};
