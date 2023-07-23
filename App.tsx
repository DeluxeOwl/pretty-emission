import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";

import useFontsLoaded from "./hooks/useFontsLoaded";
import init from "./init";

init();

export default function App() {
  const [fontsLoaded, onLayoutRootView] = useFontsLoaded();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={tw`flex-1 bg-red-100`} onLayout={onLayoutRootView}>
      <Text style={styles.withFont}>Hello, world!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  withFont: {
    fontFamily: "Satoshi-Medium",
  },
});
