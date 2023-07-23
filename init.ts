import * as SplashScreen from "expo-splash-screen";

// This runs on start, outside react's context
export default function init() {
  SplashScreen.preventAutoHideAsync();
}
