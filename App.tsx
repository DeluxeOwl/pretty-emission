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
const themes = {
  sky: {
    primaryColor: "bg-sky-500",
    primaryColorPressed: "bg-sky-500/80",
  },
  amber: {
    primaryColor: "bg-amber-600",
    primaryColorPressed: "bg-amber-500/80",
  },
} as const;

type themeNames = keyof typeof themes;

const getButtonStyles = (t: Theme) => {
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

const themeAtom = atom<themeNames>("sky");

init();

export function Button({ children }: { children: string }) {
  const [theme, setTheme] = useAtom(themeAtom);
  const buttonStyles = useCallback(getButtonStyles(themes[theme]), [theme]);

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
        onPress={() => setTheme((t) => (t === "sky" ? "amber" : "sky"))}>
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
