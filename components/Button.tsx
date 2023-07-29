import { twMerge } from "tailwind-merge";
import tw from "../lib/tailwind";

import { cva } from "class-variance-authority";

import { type ThemeProps } from "../styles/design-system";

import { Pressable, Text, View } from "react-native";
import { useStyles } from "../hooks/useStyles";

type asd = Parameters<typeof tw.style>[0];
type def = Parameters<typeof twMerge>[0];

export function Button({ children }: { children: string }) {
  const buttonStyles = useStyles((t: ThemeProps) =>
    cva(["px-3", "py-2", "rounded-lg", "border-[0.5px]"], {
      variants: {
        intent: {
          primary: ["border-zinc-100", t.primaryColor],
        },
        intentAction: {
          primary: [t.primaryColorPressed],
        },
      },
    })
  );

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
