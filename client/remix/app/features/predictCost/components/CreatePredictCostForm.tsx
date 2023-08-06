import { css } from "styled-system/css";
import { useGetCategories } from "~/features/category/hooks/useGetCategories";
import { CreatePredictCost } from "~/gql/graphql";
import { LabelInputField } from "~/components/Form/LabelInputField";
import { LabelSelectField } from "~/components/Form/LabelSelectField";
import { useFormController } from "../hooks/useFormController";
export const CreatePredictCostForm = () => {
  const { categories } = useGetCategories();
  const { register, handleSubmitAction, errors } = useFormController();

  return (
    <>
      <form onSubmit={handleSubmitAction()}>
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

        <LabelSelectField<CreatePredictCost>
          label={"categoryName"}
          register={register("categoryName", { required: true })}
          errorField={errors.categoryName}
          options={categories?.data?.categories?.map(
            ({ Classification }) => Classification
          )}
        />

        <br />

        <input className={css({ cursor: "pointer" })} type="submit" />
      </form>
    </>
  );
};
