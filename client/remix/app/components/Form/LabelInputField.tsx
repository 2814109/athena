import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { css } from "styled-system/css";

type Props<T extends FieldValues> = {
  label: string;
  errors: FieldErrors;
  register: UseFormRegister<T>;
};
export const LabelInputField = ({
  label,
  register,
  errors,
}: Props<FieldValues>) => {
  return (
    <>
      <label className={css({ display: "block" })} htmlFor="input-2">
        {label}
      </label>
      <input id="input-2" {...register(label, { required: true })} />
      {errors && <span>This field is required</span>}
    </>
  );
};
