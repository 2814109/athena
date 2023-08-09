import { CreatePayment } from "~/gql/graphql";
import { LabelInputField } from "~/components/Form/LabelInputField";
import { useFormController } from "../../hooks/useFormController";
import { SubmitButton } from "~/components/Form/SubmitButton";
import { css } from "styled-system/css";
import { CategorySelectFiled } from "~/components/Form/features/CategorySelectFiled";
import { DatePicker } from "rsuite";
import { Controller } from "react-hook-form";
import { PaymentTypeSelectFiled } from "~/components/Form/features/PaymentTypeSelectField";

export const MonthlyForm = () => {
  const { register, handleSubmitAction, control, errors } = useFormController();

  return (
    <>
      <div
        className={css({
          display: "flex",
          justifyContent: "center",
        })}
      >
        <form
          className={css({
            width: "100%",
          })}
          onSubmit={handleSubmitAction()}
        >
          <Controller
            name="paymentAt"
            control={control}
            render={({ field }) => (
              <DatePicker
                className={css({
                  width: "100%",
                })}
                {...field}
                value={new Date()}
              />
            )}
          />

          <LabelInputField<CreatePayment>
            props={{ type: "number" }}
            label={"cost"}
            errorField={errors.label}
            register={register("cost", { required: true })}
          />

          <LabelInputField<CreatePayment>
            label={"label"}
            errorField={errors.label}
            register={register("label", { required: true })}
          />

          <CategorySelectFiled<CreatePayment>
            label={"categoryName"}
            register={register("categoryName", { required: true })}
            errorField={errors.categoryName}
          />

          <PaymentTypeSelectFiled<CreatePayment>
            label={"paymentType"}
            register={register("paymentType", { required: true })}
            errorField={errors.categoryName}
          />
          <SubmitButton />
        </form>
      </div>
    </>
  );
};
