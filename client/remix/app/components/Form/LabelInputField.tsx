import { InputHTMLAttributes, useId } from "react";
import {
  FieldError,
  FieldName,
  FieldValues,
  UseFormRegisterReturn,
} from "react-hook-form";
import { css } from "styled-system/css";

type Props<T extends FieldValues> = {
  label: string;
  errorField: FieldError | undefined;
  register: UseFormRegisterReturn<FieldName<T>>;
} & { props?: InputHTMLAttributes<HTMLInputElement> };
export const LabelInputField = <T extends FieldValues>({
  label,
  register,
  errorField,
  props,
}: Props<T>) => {
  const id = useId();
  return (
    <>
      <label className={css({ display: "block" })} htmlFor={id}>
        {label}
      </label>
      <input type={props?.type} id={id} {...register} />
      {errorField && <span>This field is required</span>}
    </>
  );
};
