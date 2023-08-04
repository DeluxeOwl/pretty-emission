import tw from "lib/tailwind";

import {
  ButtonVariantProps,
  buttonStyles,
  outerViewStyles,
} from "hooks/useButtonStyles";
import { Pressable, PressableProps, Text, View } from "react-native";
import { useTheme } from "hooks/useTheme";

export interface ButtonProps
  extends Omit<ButtonVariantProps, "isPressed">,
    PressableProps {
  children: React.ReactNode;
}
export function Button({
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const t = useTheme();

  const pressableStyle = ({ pressed }: { pressed: boolean }) =>
    buttonStyles({
      variant: variant,
      isPressed: pressed,
    });

  return (
    <View
      style={outerViewStyles({
        variant: variant,
      })}>
      <Pressable
        style={pressableStyle}
        {...props}
        // android_ripple={{ borderless: true }}
      >
        {({ pressed }) => (
          <Text
            style={tw`self-center font-satoshi-medium text-xl ${
              pressed
                ? t.button.text[variant!].pressed
                : t.button.text[variant!].default
            }`}>
            {children}
          </Text>
        )}
      </Pressable>
    </View>
  );
}
