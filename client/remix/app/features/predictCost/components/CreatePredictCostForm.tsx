import { css } from "styled-system/css";
import { useForm } from "react-hook-form";
import { useGetCategories } from "~/features/category/hooks/useGetCategories";
import { useCreatePredictCost } from "~/features/predictCost/hooks/useCreatePredictCost";
import { CreatePredictCost } from "~/gql/graphql";
import { LabelInputField } from "~/components/Form/LabelInputField";
import { LabelSelectField } from "~/components/Form/LabelSelectField";
export const CreatePredictCostForm = () => {
  const { categories } = useGetCategories();

  const { mutation } = useCreatePredictCost();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePredictCost>();
  const onSubmit = (data: CreatePredictCost) => {
    console.log(data);
    const request = {
      ...data,
      ...{ userId: 1 },
    };
    mutation.mutate(request);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
