import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";

export default function useFontsLoaded(): [
  fontsLoaded: boolean,
  onLayoutRootView: () => Promise<void>
] {
  const [fontsLoaded] = useFonts({
    SatoshiBlack: require("../assets/fonts/Satoshi-Black.otf"),
    SatoshiBlackItalic: require("../assets/fonts/Satoshi-BlackItalic.otf"),
    SatoshiBold: require("../assets/fonts/Satoshi-Bold.otf"),
    SatoshiBoldItalic: require("../assets/fonts/Satoshi-BoldItalic.otf"),
    SatoshiItalic: require("../assets/fonts/Satoshi-Italic.otf"),
    SatoshiLight: require("../assets/fonts/Satoshi-Light.otf"),
    SatoshiLightItalic: require("../assets/fonts/Satoshi-LightItalic.otf"),
    SatoshiMedium: require("../assets/fonts/Satoshi-Medium.otf"),
    SatoshiMediumItalic: require("../assets/fonts/Satoshi-MediumItalic.otf"),
    SatoshiRegular: require("../assets/fonts/Satoshi-Regular.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return [fontsLoaded, onLayoutRootView];
}
