import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { userRegisterViewModel } from "./userRegisterViewModel";
import { AppInput } from "../../components/AppInput";

type RegisterViewProps = ReturnType<typeof userRegisterViewModel>;

export const RegisterView: FC<RegisterViewProps> = ({ onSubmit }) => {
  return (
    <View className="flex-1 justify-center items-center">
      <AppInput />
      <TouchableOpacity onPress={onSubmit}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};
