import { Button } from "components/Button";
import { Header } from "components/Header";
import tw from "lib/tailwind";
import { View, Text, useColorScheme } from "react-native";
import Layout from "screens/Layout";

export default function ProfileScreen({ route, navigation }: any) {
  useColorScheme();

  return (
    <Layout>
      <View style={tw`flex-1 gap-2 justify-center `}>
        <Header>Profile screen</Header>
      </View>
      <View style={tw`flex-1 gap-2`}>
        <Button variant="tertiary" onPress={() => navigation.navigate("Home")}>
          Home
        </Button>
      </View>
    </Layout>
  );
}
