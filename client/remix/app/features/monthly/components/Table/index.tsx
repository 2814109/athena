import { PaymentsType } from "../../types/PaymentsType";
import { PaymentRow } from "./row";
import { Payment } from "~/gql/graphql";

export const Table = ({ payments }: PaymentsType) => {
  return (
    <>
      {payments?.map((payment) => (
        <PaymentRow payment={payment as Payment} />
      ))}
    </>
  );
};
