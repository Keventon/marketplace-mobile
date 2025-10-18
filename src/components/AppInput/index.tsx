import { Pressable, TextInput, TouchableOpacity, View } from "react-native";
import { appInputVariants } from "./inputVariants";
import { Ionicons } from "@expo/vector-icons";

export function AppInput() {
  const styles = appInputVariants({});

  return (
    <View>
      <Pressable>
        <Ionicons name="person" />
        <TextInput />

        <TouchableOpacity>
          <Ionicons name="eye-off-outline" />
        </TouchableOpacity>
      </Pressable>
    </View>
  );
}
