import { useForm } from "react-hook-form";
import { CreatePayment } from "~/gql/graphql";
import { useCreatePayment } from "~/hooks/features/payment/useCreatePayment";

export const useFormController = () => {
    const { mutation } = useCreatePayment();
  const {
      control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreatePayment>();
  const onSubmit = (data: CreatePayment) => {
    const request = {
      ...data,
      ...{ userId: 1 },
    };
    mutation.mutate(request);
  };
    
    const handleSubmitAction = () => handleSubmit(onSubmit)

    return {register,handleSubmitAction,control, errors }
}