import { SafeAreaProvider } from "react-native-safe-area-context";

import useFontsLoaded from "./hooks/useFontsLoaded";
import init from "./init";

import Home from "screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "screens/DetailsScreen";
import ProfileScreen from "screens/ProfileScreen";
import { useTheme } from "hooks/useTheme";
import { Button } from "components/Button";
import { useColorScheme } from "react-native";
import tw from "lib/tailwind";
import StyledText from "components/StyledText";

init();

const Stack = createNativeStackNavigator();

export default function App() {
  const fontsLoaded = useFontsLoaded()[0];
  const t = useTheme();
  useColorScheme();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          // headerTransparent: true,
          headerStyle: {
            backgroundColor: tw.style(`text-${t.color}-600`).color as string,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Overview" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          // Can have initial params
          initialParams={{ id: 42 }}
          // react navigation calls the function with { navigation, route }
          options={({ route }) => ({
            // @ts-ignore
            title: `Details ${route.params.id}`,
          })}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          // You can pass a component
          options={{
            headerTitle: () => (
              <StyledText
                onPress={() => console.warn("Pressed button in title")}
              >
                Profile 🫠
              </StyledText>
            ),
            headerRight: () => <StyledText>✨</StyledText>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
