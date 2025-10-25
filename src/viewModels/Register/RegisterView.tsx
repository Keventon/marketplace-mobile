import { FC, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { userRegisterViewModel } from "./userRegisterViewModel";
import { AppInput } from "../../components/AppInput";
import { Controller } from "react-hook-form";
import { AppInputController } from "../../components/AppInputController";

type RegisterViewProps = ReturnType<typeof userRegisterViewModel>;

export const RegisterView: FC<RegisterViewProps> = ({ onSubmit, control }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="flex-1 justify-center items-center">
      <AppInputController
        label="E-MAIL"
        leftIcon="mail-outline"
        control={control}
        name="email"
      />
      <AppInputController
        label="SENHA"
        leftIcon="lock-closed-outline"
        control={control}
        name="password"
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={onSubmit}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};
