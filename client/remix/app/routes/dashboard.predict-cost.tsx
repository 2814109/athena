import { useUser } from "@clerk/remix";
import { Suspense } from "react";
import { useForm } from "react-hook-form";
import { css } from "styled-system/css";
import { Spinner } from "~/components/Spinner";
import { useGetCategories } from "~/features/category/hooks/useGetCategories";

export default function PredictCostPage() {
  const { isLoaded, user } = useUser();

  const { categories } = useGetCategories();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  if (!isLoaded) return <Spinner />;

  return (
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
            defaultValue="default value of test"
            {...register("example")}
          />
          <label className={css({ display: "block" })} htmlFor="input-2">
            test
          </label>
          <input
            id="input-2"
            {...register("exampleRequired", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <br />

          <input className={css({ cursor: "pointer" })} type="submit" />
        </form>
      </div>
    </Suspense>
  );
}
