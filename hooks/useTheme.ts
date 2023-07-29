import { atom, useAtom } from "jotai";
import { ThemeNames, Themes } from "../styles/themes";

const themeNameAtom = atom<ThemeNames>("SKY");
const themeAtom = atom((get) => Themes[get(themeNameAtom)]);

export function useThemeName() {
  return useAtom(themeNameAtom);
}

export function useTheme() {
  return useAtom(themeAtom)[0];
}
