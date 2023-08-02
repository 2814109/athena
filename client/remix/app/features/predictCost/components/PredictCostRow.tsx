import { PredictCost } from "~/gql/graphql";
import { useDeletePredictCost } from "../hooks/useDeletePredictCost";

type Props = {
  predictCost: PredictCost;
};
export const PredictCostRow = ({ predictCost }: Props) => {
  const { mutation } = useDeletePredictCost();

  const handleOnClick = (predictCostId: number) => {
    mutation.mutate(predictCostId);
  };
  return (
    <>
      <div>
        {JSON.stringify(predictCost)}
        <button
          type="button"
          onClick={() => {
            handleOnClick(Number(predictCost.id));
          }}
        >
          delete
        </button>
      </div>
    </>
  );
};
