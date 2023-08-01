import { useUser } from "@clerk/remix";
import { Suspense } from "react";
import { useForm } from "react-hook-form";
import { css } from "styled-system/css";
import { Spinner } from "~/components/Spinner";
import { useGetCategories } from "~/features/category/hooks/useGetCategories";
import { useCreatePredictCost } from "~/features/predictCost/hooks/useCreatePredictCost";
import { CreatePredictCost } from "~/gql/graphql";
import { PredictCostTable } from "~/features/predictCost/components/PredictCostTable";
export default function PredictCostPage() {
  const { isLoaded, user } = useUser();

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

  if (!isLoaded) return <Spinner />;

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <div>
          <h1>hello : {user?.id}</h1>
          <h2>{JSON.stringify(categories)}</h2>
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

            <label>category</label>
            <select {...register("categoryName", { required: true })}>
              {categories?.data?.categories?.map(({ Classification }) => (
                <option key={Classification}>{Classification}</option>
              ))}
            </select>
            <br />

            <input className={css({ cursor: "pointer" })} type="submit" />
          </form>
        </div>
      </Suspense>
      <PredictCostTable />
    </>
  );
}
