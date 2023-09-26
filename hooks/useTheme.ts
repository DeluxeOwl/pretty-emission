import { atom, useAtom, useAtomValue } from "jotai";
import { atomWithStorage, createJSONStorage, unwrap } from "jotai/utils";
import { ThemeNames, Themes } from "../styles/themes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = createJSONStorage<ThemeNames>(() => AsyncStorage);

const themeNameAtom = unwrap(
  atomWithStorage<ThemeNames>("theme", "SKY", storage),
  (prev) => prev ?? "SKY"
);

export const themeAtom = atom((get) => Themes[get(themeNameAtom)]);

export function useThemeName() {
  return useAtom(themeNameAtom);
}

export function useTheme() {
  return useAtomValue(themeAtom);
}
