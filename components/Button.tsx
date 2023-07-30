import tw from "lib/tailwind";

import { buttonStyles, outerViewStyles } from "hooks/useButtonStyles";
import { Pressable, Text, View } from "react-native";
import { useTheme } from "hooks/useTheme";

export function Button({ children }: { children: string }) {
  const pressableStyle = ({ pressed }: { pressed: boolean }) =>
    buttonStyles({
      variant: "secondary",
      isPressed: pressed,
    });

  const t = useTheme();

  return (
    <View
      style={outerViewStyles({
        variant: "secondary",
      })}>
      <Pressable style={pressableStyle}>
        {({ pressed }) => {
          console.log(
            tw`self-center ${
              pressed ? t.defaultTextStrongPressed : t.defaultTextStrong
            }`
          );
          return (
            <Text
              style={tw`self-center text-xl ${
                pressed ? t.defaultTextStrongPressed : t.defaultTextStrong
              }`}>
              {children}
            </Text>
          );
        }}
      </Pressable>
    </View>
  );
}
