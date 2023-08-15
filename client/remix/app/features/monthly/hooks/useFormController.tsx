import { useForm } from "react-hook-form";
import { CreatePayment } from "~/gql/graphql";
import { useCreatePayment } from "~/hooks/features/payment/useCreatePayment";
import { NotificationMessage } from "../components/NotificationMessage";
import { useToaster } from "rsuite";

export const useFormController = () => {
  const { mutation } = useCreatePayment();
  const toaster = useToaster();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePayment>({ defaultValues: { paymentAt: new Date() } });
  const onSubmit = (data: CreatePayment) => {
    const request = {
      ...data,
      ...{ userId: 1 },
    };
    mutation.mutate(request);

    toaster.push(<NotificationMessage />, { placement: "topStart" });
  };

  const handleSubmitAction = () => handleSubmit(onSubmit);

  return { register, handleSubmitAction, control, errors };
};
