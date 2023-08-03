import { useId } from "react";
import {
  FieldError,
  FieldName,
  FieldValues,
  UseFormRegisterReturn,
} from "react-hook-form";
import { css } from "styled-system/css";

type Props<T extends FieldValues> = {
  label: string;
  errors: FieldError | undefined;
  register: UseFormRegisterReturn<FieldName<T>>;
};
export const LabelInputField = <T extends FieldValues>({
  label,
  register,
  errors,
}: Props<T>) => {
  const id = useId();
  return (
    <>
      <label className={css({ display: "block" })} htmlFor={id}>
        {label}
      </label>
      <input id={id} {...register} />
      {errors && <span>This field is required</span>}
    </>
  );
};
