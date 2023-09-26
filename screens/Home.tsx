import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import tw from "lib/tailwind";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import useFontsLoaded from "hooks/useFontsLoaded";

import { Button } from "components/Button";
import { Header } from "components/Header";
import { PalettePicker } from "components/PalettePicker";
import { useTheme } from "hooks/useTheme";
import { useDeviceContext } from "twrnc";

export default function Home({ navigation }: { navigation: any }) {
  useDeviceContext(tw);

  const onLayoutRootView = useFontsLoaded()[1];
  const insets = useSafeAreaInsets();

  const t = useTheme();

  return (
    <View
      style={tw`flex-1 justify-start ${
        t.application.background
      } px-3 gap-2 android:pt-[${insets.top + 8}] ios:pt-[${insets.top}]`}
      onLayout={onLayoutRootView}
    >
      <Header>Hi, how are you?</Header>

      <Button>Primary button</Button>
      <Button variant="secondary">Secondary button</Button>
      <Button variant="tertiary">Tertiary button</Button>
      <PalettePicker />

      <Button onPress={() => navigation.navigate("Details")}>
        Navigate to details
      </Button>

      <StatusBar style="auto" />
    </View>
  );
}
