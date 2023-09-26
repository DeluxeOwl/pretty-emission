import { Header } from "components/Header";
import tw from "lib/tailwind";
import { View } from "react-native";

export default function DetailsScreen() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Header>How about some details mf?</Header>
    </View>
  );
}
