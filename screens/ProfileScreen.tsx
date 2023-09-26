import { Button } from "components/Button";
import { Header } from "components/Header";
import StyledText from "components/StyledText";
import tw from "lib/tailwind";
import { useEffect, useState } from "react";
import { View, useColorScheme } from "react-native";
import Layout from "screens/Layout";

export default function ProfileScreen({ route, navigation }: any) {
  useColorScheme();
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <StyledText onPress={() => setCount((c) => c + 1)}>✨</StyledText>
      ),
    });
  }, [navigation]);

  return (
    <Layout>
      <View style={tw`flex-1 gap-2 justify-center `}>
        <Header>Profile screen</Header>
      </View>
      <View style={tw`flex-1 gap-2`}>
        <StyledText>You have pressed the button {count} times</StyledText>
        <Button variant="tertiary" onPress={() => navigation.navigate("Home")}>
          Home
        </Button>
      </View>
    </Layout>
  );
}
