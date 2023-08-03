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
  options: string[] | undefined;
} & { props?: InputHTMLAttributes<HTMLInputElement> };
export const LabelSelectField = <T extends FieldValues>({
  label,
  register,
  errorField,
  props,
  options,
}: Props<T>) => {
  const id = useId();
  return (
    <>
      <label className={css({ display: "block" })} htmlFor="input-3">
        {`${String(label)}`}
      </label>
      <select id="input-3" {...register}>
        {options?.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>

      {errorField && <span>This field is required</span>}
    </>
  );
};
