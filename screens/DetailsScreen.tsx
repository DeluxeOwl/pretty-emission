import { Button } from "components/Button";
import { Header } from "components/Header";
import tw from "lib/tailwind";
import { View } from "react-native";

export default function DetailsScreen({ navigation }: { navigation: any }) {
  return (
    <View style={tw`flex-1 justify-center items-center gap-2`}>
      <Header>How about some details mf?</Header>
      <Button onPress={() => navigation.push("Details")}>
        Navigate to details, yet again
      </Button>
      <Button variant="secondary" onPress={() => navigation.goBack()}>
        Go back
      </Button>
      <Button variant="tertiary" onPress={() => navigation.navigate("Home")}>
        Home
      </Button>
    </View>
  );
}
