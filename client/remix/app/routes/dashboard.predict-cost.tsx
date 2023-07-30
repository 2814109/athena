import { useUser } from "@clerk/remix";
import { useForm } from "react-hook-form";

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
    <>
      <h1>hello : {user?.id}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="default value of test" {...register("example")} />
        <br />
        <input {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <br />

        <input type="submit" />
      </form>
    </>
  );
}
