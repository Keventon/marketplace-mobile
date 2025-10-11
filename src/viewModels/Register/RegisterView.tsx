import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { userRegisterViewModel } from "./userRegisterViewModel";

type RegisterViewProps = ReturnType<typeof userRegisterViewModel>;

export const RegisterView: FC<RegisterViewProps> = ({ onSubmit }) => {
  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity onPress={onSubmit}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};
