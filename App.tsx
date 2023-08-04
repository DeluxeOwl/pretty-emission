import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import tw from "./lib/tailwind";

import useFontsLoaded from "./hooks/useFontsLoaded";
import init from "./init";

import { Header } from "components/Header";
import { PalettePicker } from "components/PalettePicker";
import { useDeviceContext } from "twrnc";
import { Button } from "./components/Button";
import { useTheme, useThemeName } from "./hooks/useTheme";

init();

export function Home() {
  useDeviceContext(tw);

  const onLayoutRootView = useFontsLoaded()[1];
  const insets = useSafeAreaInsets();
  const [themeName, _] = useThemeName();
  const t = useTheme();

  return (
    <View
      style={tw`flex-1 justify-center ${
        t.application.background
      } px-3 gap-2 android:pt-[${insets.top + 8}] ios:pt-[${insets.top}]`}
      onLayout={onLayoutRootView}>
      <Header>Hi, how are you?</Header>

      <Button>I am just a simple button ...</Button>
      <PalettePicker />

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
