import { PaymentsType } from "../../types/PaymentsType";
import { Table, Button } from "rsuite";
import { formatDate } from "~/libs/formatDate";
import { useDeletePayment } from "../../hooks/useDeletePayment";

const { Column, HeaderCell, Cell } = Table;
export const TableContainer = ({ payments }: PaymentsType) => {
  const rowData = payments?.map((data) => ({
    ...data,
    paymentAt: formatDate(new Date(data.paymentAt)),
  }));

  const { mutation } = useDeletePayment();

  const handleOnClick = (paymentId: number) => {
    mutation.mutate(paymentId);
  };
  return (
    <>
      {/* {payments?.map((payment) => (
        <PaymentRow payment={payment as Payment} />
      ))} */}

      <Table
        height={400}
        data={rowData}
        onRowClick={(rowData) => {
          console.log(rowData);
        }}
      >
        <Column width={60} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={200}>
          <HeaderCell>Label</HeaderCell>
          <Cell dataKey="label" />
        </Column>

        <Column width={150}>
          <HeaderCell>Category</HeaderCell>
          <Cell dataKey="categoryName" />
        </Column>

        <Column width={100}>
          <HeaderCell>Cost</HeaderCell>
          <Cell dataKey="cost" />
        </Column>

        <Column width={200}>
          <HeaderCell>PaymentAt</HeaderCell>
          <Cell dataKey="paymentAt" />
        </Column>

        <Column width={100} fixed="right">
          <HeaderCell>...</HeaderCell>

          <Cell style={{ padding: "6px" }}>
            {(rowData) => (
              <Button
                appearance="link"
                onClick={() => handleOnClick(rowData.id)}
              >
                Delete
              </Button>
            )}
          </Cell>
        </Column>
      </Table>
    </>
  );
};
