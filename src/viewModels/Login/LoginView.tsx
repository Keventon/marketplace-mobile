import { Text, TouchableOpacity, View } from "react-native";
import { AuthFormHeader } from "../../components/AuthFormHeader";
import { AppInput } from "../../components/AppInput";
import { router } from "expo-router";
import { KeyboardContainer } from "../../components/KeyboardContainer";
import { FC } from "react";
import { useLoginViewModel } from "./useLoginViewModel";
import { AppInputController } from "../../components/AppInputController";
import { AppButton } from "../../components/AppButton";

export const LoginView: FC<ReturnType<typeof useLoginViewModel>> = ({
  control,
  onSubmit,
}) => {
  return (
    <KeyboardContainer>
      <View className="flex-1 items-center justify-center px-[40px]">
        <View className="flex-1 w-full items-center justify-center">
          <AuthFormHeader
            title="Acesse sua conta"
            subtitle="Informe seu e-mail e senha para entrar"
          />

          <AppInputController
            control={control}
            name="email"
            leftIcon="mail-outline"
            label="E-MAIL"
            placeholder="mail@example.com.br"
          />
          <AppInputController
            control={control}
            name="password"
            leftIcon="lock-closed-outline"
            label="SENHA"
            secureTextEntry
            placeholder="Sua senha"
          />

          <AppButton
            className="mt-6"
            rightIcon="arrow-forward"
            onPress={onSubmit}
          >
            Acessar
          </AppButton>
        </View>

        <View className="flex-2 pb-10">
          <Text className="text-base mb-6 text-gray-300">
            Ainda não tem uma conta?
          </Text>
          <AppButton
            variant="outlined"
            rightIcon="arrow-forward"
            onPress={() => router.push("/register")}
          >
            Cadastrar
          </AppButton>
        </View>
      </View>
    </KeyboardContainer>
  );
};
