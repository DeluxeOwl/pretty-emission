import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import tw from "./lib/tailwind";

import useFontsLoaded from "./hooks/useFontsLoaded";
import init from "./init";
import { ThemeNames } from "./styles/themes";

import { Button } from "./components/Button";
import { useThemeName } from "./hooks/useTheme";

init();

export function Home() {
  const onLayoutRootView = useFontsLoaded()[1];
  const insets = useSafeAreaInsets();
  const setThemeName = useThemeName()[1];

  return (
    <View
      style={tw.style("flex-1 bg-zinc-100 px-2 gap-2", {
        paddingTop: insets.top,
      })}
      onLayout={onLayoutRootView}>
      <Text style={tw`text-5xl font-satoshi-bold`}>Hello!</Text>
      <Button>I am just a simple button ...</Button>
      {ThemeNames.map((tName) => (
        <Pressable
          key={tName}
          style={tw`bg-black px-4 py-1 rounded-lg self-start`}
          onPress={() => setThemeName(tName)}>
          <Text style={tw`text-white`}>{tName}</Text>
        </Pressable>
      ))}
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
