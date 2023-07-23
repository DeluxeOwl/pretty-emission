import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import tw from "twrnc";

import useFontsLoaded from "./hooks/useFontsLoaded";
import init from "./init";

init();

export function Home() {
  const onLayoutRootView = useFontsLoaded()[1];
  const insets = useSafeAreaInsets();

  return (
    <View
      style={tw.style("flex-1 bg-zinc-100", { paddingTop: insets.top })}
      onLayout={onLayoutRootView}>
      <Text style={styles.withFont}>Hello, world!</Text>
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
