import { Button } from "components/Button";
import { Header } from "components/Header";
import tw from "lib/tailwind";
import { View, Text } from "react-native";

export default function ProfileScreen({ route, navigation }: any) {
  return (
    <View style={tw`flex-1 px-3`}>
      <View style={tw`flex-1 gap-2 justify-center `}>
        <Header>Profile screen</Header>
      </View>
      <View style={tw`flex-1 gap-2`}>
        <Button variant="tertiary" onPress={() => navigation.navigate("Home")}>
          Home
        </Button>
      </View>
    </View>
  );
}
