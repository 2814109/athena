import { IconButton } from "rsuite";
import { CsvDownload } from "./CsvDownload";
import { Graph } from "./Graph";
import { TableContainer } from "./Table/TableContainer";
import { FlexEndContainer } from "~/styles/FlexEndContainer";
import AddOutlineIcon from "@rsuite/icons/AddOutline";
import { MonthlyPieChart } from "./PieChart/MonthlyPieChart";
import { Suspense } from "react";
import { PaymentsType } from "../types/PaymentsType";
import { PaymentTypePieChart } from "./PieChart/PaymentTypePieChart";
import { BulkInsertDrawer } from "./Drawer/BulkInsertDrawer";

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
        {(originPayments?.length ?? 0) > 0 && (
          <>
            <MonthlyPieChart payments={payments} />
            <PaymentTypePieChart payments={payments} />
          </>
        )}
        <FlexEndContainer>
          <BulkInsertDrawer />
          {(originPayments?.length ?? 0) > 0 && (
            <CsvDownload payments={payments} />
          )}
        </FlexEndContainer>
        <TableContainer payments={payments} />
      </Suspense>
    </>
  );
};
