import { useCreatePredictCost } from "~/features/predictCost/hooks/useCreatePredictCost";
import { useForm } from "react-hook-form";
import { CreatePredictCost } from "~/gql/graphql";

export const useFormController = () => {
    const { mutation } = useCreatePredictCost();
  const {
      control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreatePredictCost>();
  const onSubmit = (data: CreatePredictCost) => {
    const request = {
      ...data,
      ...{ userId: 1 },
    };
    mutation.mutate(request);
  };
    
    const handleSubmitAction = () => handleSubmit(onSubmit)

    return {register,handleSubmitAction,control, errors }
}