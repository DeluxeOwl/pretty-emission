import tw from "lib/tailwind";

import {
  ButtonVariantProps,
  buttonStyles,
  outerViewStyles,
} from "hooks/useButtonStyles";
import { Pressable, PressableProps, Text, View } from "react-native";
import { useTheme } from "hooks/useTheme";

// TODO: keys are actually nullable
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
      })}
    >
      <Pressable
        style={pressableStyle}
        {...props}
        // Slight color hue when not tertiary derived from the main color
        android_ripple={
          variant !== "tertiary"
            ? {
                borderless: true,
                color:
                  tw`${t.button.background.primary.default}/10 dark:${t.button.background.primary.default}/90`[
                    "backgroundColor"
                  ] as string,
              }
            : null
        }
      >
        {({ pressed }) => (
          <Text
            style={tw`self-center font-satoshi-medium text-xl ${
              pressed && !!variant
                ? t.button.text[variant!].pressed
                : t.button.text[variant!].default
            }`}
          >
            {children}
          </Text>
        )}
      </Pressable>
    </View>
  );
}
