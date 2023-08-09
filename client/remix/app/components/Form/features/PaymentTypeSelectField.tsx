import { InputHTMLAttributes } from "react";
import {
  FieldError,
  FieldName,
  FieldValues,
  UseFormRegisterReturn,
} from "react-hook-form";
import { LabelSelectField } from "~/components/Form/LabelSelectField";
import { useGetPaymentTypes } from "~/hooks/features/paymentType/useGetPatmentTypes";

type Props<T extends FieldValues> = {
  label: keyof T;
  errorField: FieldError | undefined;
  register: UseFormRegisterReturn<FieldName<T>>;
} & { props?: InputHTMLAttributes<HTMLInputElement> };

export const PaymentTypeSelectFiled = <T extends FieldValues>({
  label,
  register,
  errorField,
}: Props<T>): JSX.Element => {
  const { paymentTypes } = useGetPaymentTypes();

  return (
    <LabelSelectField<T>
      label={label}
      register={register}
      errorField={errorField}
      options={paymentTypes?.data?.paymentTypes.map(({ label }) => label)}
    />
  );
};
