import { CreatePredictCost } from "~/gql/graphql";
import { LabelInputField } from "~/components/Form/LabelInputField";
import { useFormController } from "../../hooks/useFormController";
import { SubmitButton } from "~/components/Form/SubmitButton";
import { css } from "styled-system/css";
import { CategorySelectFiled } from "~/components/Form/features/CategorySelectFiled";
import { DatePicker } from "rsuite";

export const MonthlyForm = () => {
  const { register, handleSubmitAction, errors } = useFormController();

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
          <DatePicker
            className={css({
              width: "100%",
            })}
          />

          <LabelInputField<CreatePredictCost>
            props={{ type: "number" }}
            label={"amount"}
            errorField={errors.label}
            register={register("amount", { required: true })}
          />

          <LabelInputField<CreatePredictCost>
            label={"label"}
            errorField={errors.label}
            register={register("label", { required: true })}
          />

          <CategorySelectFiled<CreatePredictCost>
            label={"categoryName"}
            register={register("categoryName", { required: true })}
            errorField={errors.categoryName}
          />
          <SubmitButton />
        </form>
      </div>
    </>
  );
};
