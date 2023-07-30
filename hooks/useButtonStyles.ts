import { cva } from "class-variance-authority";
import { atom } from "jotai";
import { styles } from "styles/lib";
import type { VarProps } from "util/types.ts";
import { themeAtom } from "./useTheme";

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

export const buttonStyles = styles(buttonStylesAtom);

export type ButtonProps = VarProps<typeof buttonStylesAtom>;
