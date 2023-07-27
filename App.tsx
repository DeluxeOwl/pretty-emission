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
import { Themes, type ThemeNames } from "./styles/themes";

import { cva } from "class-variance-authority";

import { atom, useAtom } from "jotai";
import { useCallback } from "react";
import { ThemeProps } from "./styles/design-system";

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

const themeAtom = atom<ThemeNames>("SKY");

init();

export function Button({ children }: { children: string }) {
  const [theme, setTheme] = useAtom(themeAtom);
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
export function Home() {
  const onLayoutRootView = useFontsLoaded()[1];
  const insets = useSafeAreaInsets();
  const [theme, setTheme] = useAtom(themeAtom);

  return (
    <View
      style={tw.style("flex-1 bg-zinc-100 px-2 gap-2", {
        paddingTop: insets.top,
      })}
      onLayout={onLayoutRootView}>
      <Text style={styles.withFont}>Hello!</Text>
      <Button>I am just a simple button ...</Button>
      <Pressable
        onPress={() => setTheme((t) => (t === "SKY" ? "AMBER" : "SKY"))}>
        <Text>Switch theme</Text>
      </Pressable>
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
