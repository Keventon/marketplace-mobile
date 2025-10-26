import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email("e-mail inválido").required("E-mail é obrigatório"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export type LoginFormData = yup.InferType<typeof loginSchema>;
