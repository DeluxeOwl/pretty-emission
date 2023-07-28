import { twMerge } from "tailwind-merge";
import tw from "../lib/tailwind";

import { cva } from "class-variance-authority";

import { type ThemeProps } from "../styles/design-system";

import { Pressable, Text } from "react-native";
import { useStyles } from "../hooks/useStyles";

export function Button({ children }: { children: string }) {
  const buttonStyles = useStyles((t: ThemeProps) =>
    cva(
      [
        "px-3",
        "py-1.5",
        "rounded-lg",
        "border-[0.5px]",
        "self-start",
        "shadow-md",
      ],
      {
        variants: {
          intent: {
            primary: ["border-zinc-100", t.primaryColor],
          },
          intentAction: {
            primary: [t.primaryColorPressed],
          },
        },
      }
    )
  );

  return (
    <Pressable
      style={({ pressed }) => {
        return tw.style(
          twMerge(
            buttonStyles({
              intent: "primary",
              intentAction: pressed ? "primary" : null,
            })
          )
        );
      }}>
      {({ pressed }) =>
        pressed ? (
          <Text style={tw`text-white`}>{children}</Text>
        ) : (
          <Text style={tw`text-white`}>{children}</Text>
        )
      }
    </Pressable>
  );
}
