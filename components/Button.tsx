import tw from "lib/tailwind";
import { twMerge } from "tailwind-merge";

import { useButtonStyles } from "hooks/useButtonStyles";
import { Pressable, Text, View } from "react-native";

export function Button({ children }: { children: string }) {
  const buttonStyles = useButtonStyles();

  const pressableStyle = ({ pressed }: { pressed: boolean }) =>
    tw.style(
      twMerge(
        buttonStyles({
          intent: "primary",
          intentAction: pressed ? "primary" : null,
        })
      )
    );
  return (
    <View style={tw`overflow-hidden rounded-lg shadow-2xl`}>
      <Pressable style={pressableStyle} android_ripple={tw`text-red-500`}>
        <Text style={tw`self-center`}>{children}</Text>
      </Pressable>
    </View>
  );
}
