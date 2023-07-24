import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { twMerge } from "tailwind-merge";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import tw from "twrnc";

import useFontsLoaded from "./hooks/useFontsLoaded";
import init from "./init";
import { cva } from "class-variance-authority";

import { atom, useAtom } from "jotai";
import { useCallback } from "react";

const PrimaryColors = ["bg-sky-500", "bg-amber-600"] as const;
type PrimaryColor = (typeof PrimaryColors)[number];

const PrimaryPressed = ["bg-sky-500/80", "bg-amber-500/80"] as const;
type PrimaryColorPressed = (typeof PrimaryPressed)[number];

// should add a default as well
// maybe name it color scheme
type Theme = {
  primaryColor: PrimaryColor;
  primaryColorPressed: PrimaryColorPressed;
};
type Themes = Record<string, Theme>;

const t: Themes = {
  sky: {
    primaryColor: "bg-sky-500",
    primaryColorPressed: "bg-sky-500/80",
  },
  amber: {
    primaryColor: "bg-amber-600",
    primaryColorPressed: "bg-amber-500/80",
  },
};

const themeAtom = atom<Theme>(t.sky);

init();

export function Button({ children }: { children: string }) {
  const [theme, setTheme] = useAtom(themeAtom);

  // not good, should also get its type
  const buttonStyles = useCallback(
    cva(["px-3", "py-1.5", "rounded-lg", "border"], {
      variants: {
        intent: {
          primary: ["border-sky-200", theme.primaryColor],
        },
        intentAction: {
          primary: [theme.primaryColorPressed],
        },
      },
    }),
    [theme]
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
export function Home() {
  const onLayoutRootView = useFontsLoaded()[1];
  const insets = useSafeAreaInsets();

  return (
    <View
      style={tw.style("flex-1 bg-zinc-100 px-2 gap-2", {
        paddingTop: insets.top,
      })}
      onLayout={onLayoutRootView}>
      <Text style={styles.withFont}>Hello!</Text>
      <Button>I am just a simple button ...</Button>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  const fontsLoaded = useFontsLoaded()[0];

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  withFont: {
    fontSize: 48,
    fontFamily: "SatoshiBold",
  },
});
