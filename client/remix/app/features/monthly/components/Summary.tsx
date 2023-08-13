import { ButtonToolbar, FlexboxGrid } from "rsuite";
import { useGetAllPayment } from "../hooks/useGetAllPayment";
import { CsvDownload } from "./CsvDownload";
import { Graph } from "./Graph";
import { ModalContainer } from "./Modal";
import { TableContainer } from "./Table/TableContainer";
import { ReactNode } from "react";

export const Summary = () => {
  const { payments } = useGetAllPayment();

  const initialValue = 0;

  const totalCounts = payments
    ?.map(({ cost }) => cost)
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
  return (
    <>
      <h2>Total : ¥{`${totalCounts?.toLocaleString()}`}</h2>
      <Graph payments={payments} totalCounts={totalCounts} />
      <ButtonContainer>
        <ModalContainer />
        <CsvDownload payments={payments} />
      </ButtonContainer>
      <TableContainer payments={payments} />
    </>
  );
};

type ButtonContainerProps = {
  children: ReactNode;
};
const ButtonContainer = ({ children }: ButtonContainerProps) => (
  <FlexboxGrid justify="end">
    <ButtonToolbar>{children}</ButtonToolbar>
  </FlexboxGrid>
);
