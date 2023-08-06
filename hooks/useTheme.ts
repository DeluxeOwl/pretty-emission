import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { ThemeNames, Themes } from "../styles/themes";

// TODO: save theme in storage
const themeNameAtom = atomWithStorage<ThemeNames>("theme", "SKY");
export const themeAtom = atom((get) => Themes[get(themeNameAtom)]);

export function useThemeName() {
  return useAtom(themeNameAtom);
}

export function useTheme() {
  return useAtom(themeAtom)[0];
}
