export type PaymentsType = {
  payments:
    | {
        __typename?: "Payment" | undefined;
        id: string;
        label: string;
        categoryName: string;
        cost: number;
        paymentType: string;
        paymentAt: any;
      }[]
    | undefined;
};