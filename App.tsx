import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import tw from "twrnc";

import useFontsLoaded from "./hooks/useFontsLoaded";
import init from "./init";
import { cva } from "class-variance-authority";

init();

export function Button({ children }: { children: string }) {
  return (
    <Pressable>
      <Text>{children}</Text>
    </Pressable>
  );
}
export function Home() {
  const onLayoutRootView = useFontsLoaded()[1];
  const insets = useSafeAreaInsets();

  return (
    <View
      style={tw.style("flex-1 bg-zinc-100 px-2", {
        paddingTop: insets.top,
      })}
      onLayout={onLayoutRootView}>
      <Text style={styles.withFont}>Hello!</Text>
      <Button>Press me please</Button>
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
    fontFamily: "Satoshi-Medium",
  },
});
