import { SafeAreaProvider } from "react-native-safe-area-context";

import useFontsLoaded from "./hooks/useFontsLoaded";
import init from "./init";

import Home from "screens/Home";

init();

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
