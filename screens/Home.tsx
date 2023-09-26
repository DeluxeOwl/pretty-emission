import { StatusBar } from "expo-status-bar";

import { Button } from "components/Button";
import { Header } from "components/Header";
import { PalettePicker } from "components/PalettePicker";
import Layout from "screens/Layout";
import { useColorScheme } from "react-native";

export default function Home({ navigation }: any) {
  useColorScheme();
  return (
    <Layout>
      <Header>Hi, how are you?</Header>

      <Button>Primary button</Button>
      <Button variant="secondary">Secondary button</Button>
      <Button variant="tertiary">Tertiary button</Button>
      <PalettePicker />

      <Button
        onPress={() =>
          navigation.navigate("Details", {
            id: 96,
            otherParam: "nice typesafety",
          })
        }
      >
        Navigate to details
      </Button>
      <Button onPress={() => navigation.navigate("Profile")}>Profile</Button>

      <StatusBar style="auto" />
    </Layout>
  );
}
