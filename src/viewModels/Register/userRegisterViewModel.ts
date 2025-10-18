import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormData, registerSchema } from "./registerSchema";
import { useRegisterMutation } from "../../shared/queries/auth/userRegisterMutation";
import { useUserStore } from "../../shared/store/userStore";

export function userRegisterViewModel() {
  const userRegisterMutation = useRegisterMutation();
  const { setSession, user } = useUserStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "Keverton",
      email: "keverton@gmail.com",
      password: "crflamengo",
      confirmPassword: "crflamengo",
      phone: "91984828219",
    },
  });

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...registerData } = userData;
    const mutationResponse = await userRegisterMutation.mutateAsync(
      registerData
    );
    setSession({
      refreshToken: mutationResponse.refreshToken,
      token: mutationResponse.token,
      user: mutationResponse.user,
    });
  });

  console.log(user);

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
  };
}
