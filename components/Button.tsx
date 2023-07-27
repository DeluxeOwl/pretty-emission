import { twMerge } from "tailwind-merge";
import tw from "../lib/tailwind";

import { cva } from "class-variance-authority";

import { useCallback } from "react";
import { useTheme } from "../hooks/useTheme";
import { type ThemeProps } from "../styles/design-system";
import { Themes } from "../styles/themes";

import { Pressable, Text } from "react-native";

const getButtonStyles = (t: ThemeProps) => {
  return cva(["px-3", "py-1.5", "rounded-lg", "border"], {
    variants: {
      intent: {
        primary: ["border-sky-200", t.primaryColor],
      },
      intentAction: {
        primary: [t.primaryColorPressed],
      },
    },
  });
};

type VarProps = ReturnType<typeof getButtonStyles>;

export function Button({ children }: { children: string }) {
  const [theme, setTheme] = useTheme();
  const buttonStyles = useCallback(getButtonStyles(Themes[theme]), [theme]);

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
          <Text style={{ fontFamily: "SatoshiMedium" }}>
            {children} but PRESSED
          </Text>
        ) : (
          <Text style={{ fontFamily: "SatoshiMedium" }}>{children}</Text>
        )
      }
    </Pressable>
  );
}
