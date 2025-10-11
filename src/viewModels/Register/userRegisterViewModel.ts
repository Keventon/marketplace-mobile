import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormData, registerSchema } from "./registerSchema";
import { useRegisterMutation } from "../../shared/queries/auth/userRegisterMutation";

export function userRegisterViewModel() {
  const userRegisterMutation = useRegisterMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "Keventon Guimarães",
      email: "devkeverton@gmail.com",
      password: "crflamengo",
      confirmPassword: "crflamengo",
      phone: "91984828219",
    },
  });

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...registerData } = userData;
    await userRegisterMutation.mutateAsync(registerData);
  });

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
  };
}
