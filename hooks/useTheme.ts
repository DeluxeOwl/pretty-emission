import { atom, useAtom } from "jotai";
import { ThemeNames, Themes } from "../styles/themes";

const themeAtom = atom<ThemeNames>("SKY");

export function useThemeName() {
  return useAtom(themeAtom);
}

export function useTheme() {
  const themeName = useAtom(themeAtom)[0];
  return Themes[themeName];
}
