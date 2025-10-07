import { FC } from "react";
import { Text, View } from "react-native";
import { userRegisterViewModel } from "./userRegisterViewModel";

type RegisterViewProps = ReturnType<typeof userRegisterViewModel>;

export const RegisterView: FC<RegisterViewProps> = ({
  setUserData,
  userData,
}) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>{userData.name}</Text>
    </View>
  );
};
