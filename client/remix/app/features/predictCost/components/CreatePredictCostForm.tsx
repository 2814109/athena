import { css } from "styled-system/css";
import { useForm } from "react-hook-form";
import { useGetCategories } from "~/features/category/hooks/useGetCategories";
import { useCreatePredictCost } from "~/features/predictCost/hooks/useCreatePredictCost";
import { CreatePredictCost } from "~/gql/graphql";
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
        <label className={css({ display: "block" })} htmlFor="input-1">
          test
        </label>
        <input
          id="input-1"
          type="number"
          defaultValue={1}
          {...register("amount", { required: true })}
        />
        {errors.amount && <span>This field is required</span>}

        <label className={css({ display: "block" })} htmlFor="input-2">
          test
        </label>
        <input id="input-2" {...register("label", { required: true })} />
        {errors.label && <span>This field is required</span>}
        <br />

        <label className={css({ display: "block" })} htmlFor="input-3">
          category
        </label>
        <select id="input-3" {...register("categoryName", { required: true })}>
          {categories?.data?.categories?.map(({ Classification }) => (
            <option key={Classification}>{Classification}</option>
          ))}
        </select>
        <br />

        <input className={css({ cursor: "pointer" })} type="submit" />
      </form>
    </>
  );
};