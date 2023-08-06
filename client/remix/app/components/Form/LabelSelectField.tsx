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
  options,
}: Props<T>) => {
  const id = useId();
  return (
    <>
      <label className={css({ display: "block", width: "100%" })} htmlFor={id}>
        {`${String(label)}`}
      </label>
      <select
        id={id}
        {...register}
        className={css({ width: "100%", borderRadius: "8px", height: "2rem" })}
      >
        {options?.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>

      {errorField && <span>This field is required</span>}
    </>
  );
};
