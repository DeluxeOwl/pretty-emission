import { atom, useAtom } from "jotai";
import { ThemeNames } from "../styles/themes";

const themeAtom = atom<ThemeNames>("SKY");

export function useTheme() {
  return useAtom(themeAtom);
}
