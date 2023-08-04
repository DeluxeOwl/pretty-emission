import { Pressable, View } from "react-native";

import tw from "lib/tailwind";

import { ThemeNames, Themes } from "styles/themes";

import { useTheme, useThemeName } from "hooks/useTheme";

export function PalettePicker() {
  const [themeName, setThemeName] = useThemeName();
  const t = useTheme();

  return (
    <View
      style={tw`flex-row gap-2 mt-8 p-4 border-[1px] ${t.card.background} ${t.card.border} w-full h-32 rounded-3xl `}>
      {ThemeNames.map((name) => (
        <Pressable
          onPress={() => setThemeName(name)}
          key={name}
          // rounded is rounded-3xl minus padding
          // w-24 is h-32 - pt+pb
          style={tw`${
            themeName == name
              ? "border-[3px] dark:border-neutral-50 border-neutral-600"
              : ""
          } flex-row w-24 rounded-[16px] h-full overflow-hidden`}>
          <View
            style={tw`${Themes[name].button.background.secondary.default} h-full flex-1`}></View>
          <View style={tw`bg-${Themes[name].color}-950 h-full flex-1`}></View>
          <View
            style={tw`${Themes[name].button.background.secondary.pressed} h-full flex-1`}></View>

          <View style={tw`bg-${Themes[name].color}-200 h-full flex-1`}></View>
        </Pressable>
      ))}
    </View>
  );
}
