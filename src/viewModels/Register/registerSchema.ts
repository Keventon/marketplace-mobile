import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup
    .string()
    .required("Nome é obrigatório")
    .min(4, "Nome deve ter pelo menos 4 caracteres"),
  email: yup.string().email("e-mail inválido").required("E-mail é obrigatório"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .min(6, "Senha deve ter pelo menos 6 caracteres"),
  confirmPassword: yup
    .string()
    .required("Senha é obrigatória")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
  phone: yup
    .string()
    .required("Telefone é obrigatório")
    .matches(/^\d{11}$/, "Telefone deve ter 11 dígitos (DDD + número)"),
});

export type RegisterFormData = yup.InferType<typeof registerSchema>;
