import { PredictCost } from "~/gql/graphql";
import { Table, Button } from "rsuite";
import { useDeletePredictCost } from "../../hooks/useDeletePredictCost";
const { Column, HeaderCell, Cell } = Table;

type Props = {
  predictCosts: PredictCost[] | undefined;
};
export const PredictCostTable = ({ predictCosts }: Props) => {
  const { mutation } = useDeletePredictCost();

  const handleOnClick = (predictCostId: number) => {
    mutation.mutate(predictCostId);
  };

  const tableData = predictCosts?.map((data) => ({
    ...data,
    amount: `¥${data.amount.toLocaleString()}`,
  }));
  return (
    <>
      <Table
        height={400}
        data={tableData}
        onRowClick={(rowData) => {
          console.log(rowData);
        }}
      >
        <Column width={200}>
          <HeaderCell>Label</HeaderCell>
          <Cell dataKey="label" />
        </Column>

        <Column width={200}>
          <HeaderCell>Category</HeaderCell>
          <Cell dataKey="categoryName" />
        </Column>

        <Column width={200}>
          <HeaderCell>Amount</HeaderCell>
          <Cell dataKey="amount" />
        </Column>

        <Column width={200} fixed="right">
          <HeaderCell>...</HeaderCell>

          <Cell style={{ padding: "6px" }}>
            {(rowData) => (
              <Button
                appearance="link"
                color="red"
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
