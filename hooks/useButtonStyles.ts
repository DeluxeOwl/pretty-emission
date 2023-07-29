import { cva } from "class-variance-authority";
import { themeAtom } from "./useTheme";
import { atom, useAtom } from "jotai";

const buttonStylesAtom = atom((get) => {
  const t = get(themeAtom);
  return cva(["px-3", "py-2", "rounded-lg", "border-[0.5px]"], {
    variants: {
      intent: {
        primary: ["border-zinc-100", t.primaryColor],
      },
      intentAction: {
        primary: [t.primaryColorPressed],
      },
    },
  });
});

export function useButtonStyles() {
  return useAtom(buttonStylesAtom)[0];
}
