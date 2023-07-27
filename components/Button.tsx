import { twMerge } from "tailwind-merge";
import tw from "../lib/tailwind";

import { cva } from "class-variance-authority";

import { type ThemeProps } from "../styles/design-system";

import { Pressable, Text } from "react-native";
import { useStyles } from "../hooks/useStyles";

// const getButtonStyles = ;

const a = typeof cva;

export function Button({ children }: { children: string }) {
  const buttonStyles = useStyles((t: ThemeProps) =>
    cva(["px-3", "py-1.5", "rounded-lg", "border", "self-start"], {
      variants: {
        intent: {
          primary: ["border-sky-200", t.primaryColor],
        },
        intentAction: {
          primary: [t.primaryColorPressed],
        },
      },
    })
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
        pressed ? <Text>{children}</Text> : <Text>{children}</Text>
      }
    </Pressable>
  );
}
