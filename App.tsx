import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import useFontsLoaded from "./hooks/useFontsLoaded";
import init from "./init";

init();

export default function App() {
  const [fontsLoaded, onLayoutRootView] = useFontsLoaded();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.withFont}>
        Open up App.tsx to start working on your app!!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  withFont: {
    fontFamily: "Satoshi-Medium",
  },
});
