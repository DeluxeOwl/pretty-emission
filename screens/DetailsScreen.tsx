import { Button } from "components/Button";
import { Header } from "components/Header";
import StyledText from "components/StyledText";
import tw from "lib/tailwind";
import { View, Text, useColorScheme } from "react-native";
import Layout from "screens/Layout";

export default function DetailsScreen({ route, navigation }: any) {
  useColorScheme();
  // undefined otherwise it throws
  const params = route.params ?? {};

  return (
    <Layout>
      <View style={tw`flex-1 gap-2 justify-center `}>
        <Header>Here are the params for details:</Header>
        <StyledText>id: {params.id}</StyledText>
        <StyledText>otherParam: {params.otherParam}</StyledText>
      </View>
      <View style={tw`flex-1 gap-2`}>
        <Button
          onPress={() =>
            navigation.push("Details", {
              id: Math.floor(Math.random() * 100),
              otherParam: "nice typesafety lmao",
            })
          }
        >
          Navigate to details, yet again
        </Button>
        <Button variant="secondary" onPress={() => navigation.goBack()}>
          Go back
        </Button>
        <Button variant="tertiary" onPress={() => navigation.popToTop()}>
          Go back to the first screen in the stack
        </Button>
        <Button variant="tertiary" onPress={() => navigation.navigate("Home")}>
          Home
        </Button>
        <Button
          variant="tertiary"
          onPress={() =>
            navigation.setParams({
              id: 100,
              otherParam: "Like URL state",
            })
          }
        >
          I can also update my own params
        </Button>
        <Button
          variant="tertiary"
          onPress={() =>
            navigation.setOptions({
              title: "Updated!",
            })
          }
        >
          And route options
        </Button>
      </View>
    </Layout>
  );
}
