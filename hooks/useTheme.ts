import { atom, useAtom, useAtomValue } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";
import { ThemeNames, Themes } from "../styles/themes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = createJSONStorage(() => AsyncStorage);

const themeNameAtom = atomWithStorage<ThemeNames>("theme", "SKY");
export const themeAtom = atom((get) => Themes[get(themeNameAtom)]);

export function useThemeName() {
  return useAtom(themeNameAtom);
}

export function useTheme() {
  return useAtomValue(themeAtom);
}
