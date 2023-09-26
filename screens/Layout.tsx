import { View, useColorScheme } from "react-native";

import tw from "lib/tailwind";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import useFontsLoaded from "hooks/useFontsLoaded";

import { useTheme } from "hooks/useTheme";
import { useDeviceContext } from "twrnc";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
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
      {children}
    </View>
  );
}
