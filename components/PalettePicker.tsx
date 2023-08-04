import { Pressable, ScrollView, View, Text } from "react-native";

import tw from "lib/tailwind";

import { ThemeNames, Themes } from "styles/themes";

import { useTheme, useThemeName } from "hooks/useTheme";

export function PalettePicker() {
  const [themeName, setThemeName] = useThemeName();
  const t = useTheme();

  return (
    <View
      style={tw`mt-8 p-4 border-[1px] ${t.card.background} ${t.card.border} w-full flex rounded-3xl `}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={tw`flex-row gap-2`}
        showsHorizontalScrollIndicator={false}>
        {ThemeNames.map((name) => (
          <View>
            <Pressable
              onPress={() => setThemeName(name)}
              key={name}
              // rounded is rounded-3xl minus padding
              // w-24 is h-32 - pt+pb
              style={tw`${
                themeName == name
                  ? "border-[3px] dark:border-neutral-50 border-neutral-600"
                  : ""
              } flex-row w-24 rounded-[16px] h-24 overflow-hidden`}>
              <View
                style={tw`${Themes[name].button.background.secondary.default} h-full flex-1`}></View>
              <View
                style={tw`bg-${Themes[name].color}-950 h-full flex-1`}></View>
              <View
                style={tw`${Themes[name].button.background.secondary.pressed} h-full flex-1`}></View>

              <View
                style={tw`bg-${Themes[name].color}-200 h-full flex-1`}></View>
            </Pressable>
            <Text
              style={tw`${Themes[name].button.text.secondary.default} mt-1 self-center font-satoshi-bold`}>
              {name.toUpperCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
