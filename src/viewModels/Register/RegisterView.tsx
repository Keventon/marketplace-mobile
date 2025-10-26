import { FC, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { userRegisterViewModel } from "./userRegisterViewModel";
import { AppInput } from "../../components/AppInput";
import { Controller } from "react-hook-form";
import { AppInputController } from "../../components/AppInputController";
import { AuthFormHeader } from "../../components/AuthFormHeader";
import { KeyboardContainer } from "../../components/KeyboardContainer";
import { AppButton } from "../../components/AppButton";
import { router } from "expo-router";

type RegisterViewProps = ReturnType<typeof userRegisterViewModel>;

export const RegisterView: FC<RegisterViewProps> = ({ onSubmit, control }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardContainer>
      <ScrollView
        className="flex-1 px-[40px]"
        showsVerticalScrollIndicator={false}
      >
        <AuthFormHeader
          title="Crie sua conta"
          subtitle="Informe seus dados pessoais e de acesso"
        />
        <AppInputController
          label="NOME"
          leftIcon="person-outline"
          control={control}
          name="name"
          placeholder="Seu nome completo"
        />

        <AppInputController
          label="TELEFONE"
          leftIcon="call-outline"
          control={control}
          name="phone"
          placeholder="(00) 00000-0000"
        />

        <Text className="text-base mt-6 font-bold text-gray-500">Acesso</Text>

        <AppInputController
          label="E-MAIL"
          leftIcon="mail-outline"
          control={control}
          name="email"
          placeholder="mail@example.com.br"
        />
        <AppInputController
          label="SENHA"
          leftIcon="lock-closed-outline"
          control={control}
          name="password"
          secureTextEntry
          placeholder="Sua senha"
        />
        <AppInputController
          label="COMFIRMAR SENHA"
          leftIcon="lock-closed-outline"
          control={control}
          name="confirmPassword"
          secureTextEntry
          placeholder="Comfirme a senha"
        />

        <AppButton className="mt-6" onPress={onSubmit}>
          Registrar
        </AppButton>

        <View className="mt-16">
          <Text className="text-base text-gray-300 mb-6">
            Já tem uma conta?
          </Text>
          <AppButton variant="outlined" onPress={() => router.back()}>
            Login
          </AppButton>
        </View>
      </ScrollView>
    </KeyboardContainer>
  );
};
