import { useUser } from "@clerk/remix";
import { useForm } from "react-hook-form";
import { css } from "styled-system/css";

export default function PredictCostPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <h1>hello : {user?.id}</h1>
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
  );
}
