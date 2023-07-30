import tw from "lib/tailwind";

import { buttonStyles } from "hooks/useButtonStyles";
import { Pressable, Text, View } from "react-native";

export function Button({ children }: { children: string }) {
  const pressableStyle = ({ pressed }: { pressed: boolean }) =>
    buttonStyles({
      intent: "primary",
      intentAction: pressed ? "primary" : null,
    });

  return (
    <View style={tw`overflow-hidden rounded-lg shadow-2xl`}>
      {/* If you want to customize the ripple, useTheme or depending on the button props*/}
      <Pressable style={pressableStyle} android_ripple={{ borderless: true }}>
        <Text style={tw`self-center`}>{children}</Text>
      </Pressable>
    </View>
  );
}
