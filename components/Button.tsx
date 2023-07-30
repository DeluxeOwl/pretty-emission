import tw from "lib/tailwind";

import { buttonStyles } from "hooks/useButtonStyles";
import { Pressable, Text, View } from "react-native";
import { useTheme } from "hooks/useTheme";

export function Button({ children }: { children: string }) {
  const pressableStyle = ({ pressed }: { pressed: boolean }) =>
    buttonStyles({
      intent: "primary",
      intentAction: pressed ? "primary" : null,
    });

  const t = useTheme();

  return (
    <View style={tw`overflow-hidden rounded-2xl shadow-2xl`}>
      {/* If you want to customize the ripple, useTheme or depending on the button props*/}
      <Pressable style={pressableStyle} android_ripple={{ borderless: true }}>
        {({ pressed }) => (
          <Text
            style={tw`self-center ${
              pressed ? t.defaultTextStrongPressed : t.defaultTextStrong
            }`}>
            {children}
          </Text>
        )}
      </Pressable>
    </View>
  );
}
