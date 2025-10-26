import { useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "./loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginMutation } from "../../shared/queries/auth/userLoginMutation";
import { useUserStore } from "../../shared/store/userStore";

export const useLoginViewModel = () => {
  const { user } = useUserStore();
  console.log(user);

  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useLoginMutation();

  const onSubmit = handleSubmit(async (userFormData) => {
    const userData = await loginMutation.mutateAsync(userFormData);
    console.log(userData);
  });

  return {
    control,
    onSubmit,
  };
};
