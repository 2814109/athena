import { Payment } from "~/gql/graphql";
import { useDeletePayment } from "../../hooks/useDeletePayment";

type Props = {
  payment: Payment | undefined;
};

export const PaymentRow = ({ payment }: Props) => {
  const { mutation } = useDeletePayment();

  const handleOnClick = (paymentId: number) => {
    mutation.mutate(paymentId);
  };
  return (
    <>
      <div>
        {JSON.stringify(payment)}
        <button
          type="button"
          onClick={() => {
            handleOnClick(Number(payment?.id));
          }}
        >
          delete
        </button>
      </div>
    </>
  );
};
