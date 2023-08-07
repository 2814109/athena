import { InputHTMLAttributes } from "react";
import {
  FieldError,
  FieldName,
  FieldValues,
  UseFormRegisterReturn,
} from "react-hook-form";
import { LabelSelectField } from "~/components/Form/LabelSelectField";
import { useGetCategories } from "~/hooks/useGetCategories";

type Props<T extends FieldValues> = {
  label: keyof T;
  errorField: FieldError | undefined;
  register: UseFormRegisterReturn<FieldName<T>>;
} & { props?: InputHTMLAttributes<HTMLInputElement> };

export const CategorySelectFiled = <T extends FieldValues>({
  label,
  register,
  errorField,
}: Props<T>): JSX.Element => {
  const { categories } = useGetCategories();

  return (
    <LabelSelectField<T>
      label={label}
      register={register}
      errorField={errorField}
      options={categories?.data?.categories?.map(
        ({ Classification }) => Classification
      )}
    />
  );
};
