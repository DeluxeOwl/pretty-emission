import { StatusBar } from "expo-status-bar";
import { View, Text, Pressable } from "react-native";

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import tw from "./lib/tailwind";

import useFontsLoaded from "./hooks/useFontsLoaded";
import init from "./init";
import { ThemeNames, Themes } from "./styles/themes";

import { Header } from "components/Header";
import { useDeviceContext } from "twrnc";
import { Button } from "./components/Button";
import { useThemeName } from "./hooks/useTheme";

init();

export function Home() {
  useDeviceContext(tw);

  const onLayoutRootView = useFontsLoaded()[1];
  const insets = useSafeAreaInsets();
  const [themeName, setThemeName] = useThemeName();

  return (
    <View
      style={tw`flex-1 justify-center bg-white dark:bg-black px-3 gap-2 android:pt-[${
        insets.top + 8
      }] ios:pt-[${insets.top}]`}
      onLayout={onLayoutRootView}>
      <Header>Hi, how are you?</Header>
      <Header size="small">Current theme: {themeName}</Header>

      <Button>I am just a simple button ...</Button>

      <View
        style={tw`flex-row gap-2 mt-8 p-4 border-[1px] border-gray-100 dark:border-zinc-700 bg-slate-100 dark:bg-zinc-900 w-full h-32 rounded-3xl `}>
        {ThemeNames.map((name) => (
          <Pressable
            onPress={() => setThemeName(name)}
            key={name}
            // rounded is rounded-3xl minus padding
            // w-24 is h-32 - pt+pb
            style={tw`${
              themeName == name
                ? "border-[3px] dark:border-zinc-50 border-zinc-600"
                : ""
            } flex-row w-24 rounded-[16px] h-full overflow-hidden`}>
            <View
              style={tw`${Themes[name].defaultBackgroundWeak} h-full flex-1`}></View>
            <View
              style={tw`${Themes[name].defaultBorderWeak} h-full flex-1`}></View>
            <View
              style={tw`${Themes[name].defaultBackgroundWeakPressed} h-full flex-1`}></View>

            <View
              style={tw`${Themes[name].defaultTextStrongPressed} h-full flex-1`}></View>
          </Pressable>
        ))}
      </View>

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
