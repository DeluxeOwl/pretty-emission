import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View, StyleSheet } from "react-native";

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
import { useDeviceContext } from "twrnc";

init();

export function Home() {
  useDeviceContext(tw);

  const onLayoutRootView = useFontsLoaded()[1];
  const insets = useSafeAreaInsets();
  const setThemeName = useThemeName()[1];

  return (
    <View
      style={tw`flex-1 bg-white dark:bg-black px-2 gap-2 android:pt-[${
        insets.top + 8
      }] ios:pt-[${insets.top}]`}
      onLayout={onLayoutRootView}>
      <Text style={tw`text-5xl font-satoshi-bold dark:text-white`}>
        Hello, how are you!
      </Text>
      <Button>I am just a simple button ...</Button>
      {ThemeNames.map((tName) => (
        <Pressable
          key={tName}
          style={tw`bg-black dark:bg-white px-4 py-1 rounded-lg self-start`}
          onPress={() => setThemeName(tName)}>
          <Text style={tw`dark:text-black text-white`}>{tName}</Text>
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
