import { InputHTMLAttributes, useId } from "react";
import {
  FieldError,
  FieldName,
  FieldValues,
  UseFormRegisterReturn,
} from "react-hook-form";
import { css } from "styled-system/css";

type Props<T extends FieldValues> = {
  label: keyof T;
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
      <label className={css({ display: "block", width: "100%" })} htmlFor={id}>
        {`${String(label)}`}
      </label>
      <input
        type={props?.type}
        id={id}
        {...register}
        className={css({ width: "100%" })}
      />
      {errorField && <span>This field is required</span>}
    </>
  );
};
