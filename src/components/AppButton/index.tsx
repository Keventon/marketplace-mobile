import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { ButtonVariants, buttonVariants } from "./buttonVariants";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../styles/colors";

interface AppButtonProps extends TouchableOpacityProps, ButtonVariants {
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  children: string;
}

export function AppButton({
  leftIcon,
  rightIcon,
  children,
  variant = "field",
  isDisabled,
  isLoading,
  className,
  ...rest
}: AppButtonProps) {
  const contentColor =
    variant === "field" ? colors.white : colors["purple-base"];

  const styles = buttonVariants({
    hasIcon: !!leftIcon || !!rightIcon,
    variant,
    isDisabled,
    isLoading,
  });

  function renderContent() {
    if (isLoading) {
      return <ActivityIndicator size="small" color={contentColor} />;
    }

    return (
      <>
        {leftIcon && (
          <Ionicons name={leftIcon} color={contentColor} size={20} />
        )}
        <Text className={styles.text()}>{children}</Text>

        {rightIcon && (
          <Ionicons name={rightIcon} color={contentColor} size={20} />
        )}
      </>
    );
  }

  return (
    <TouchableOpacity className={styles.base({ className })} {...rest}>
      {renderContent()}
    </TouchableOpacity>
  );
}
