import { cva } from "class-variance-authority";
import { atom } from "jotai";
import { styles } from "styles/lib";
import type { VarProps } from "util/types.ts";
import { themeAtom } from "./useTheme";
import tw from "lib/tailwind";

const buttonStylesAtom = atom((get) => {
  const t = get(themeAtom);

  return cva(
    [
      "px-3",
      "py-2",
      "rounded-lg",
      "border-[0.5px]",
      "w-full",
      "h-12",
      "justify-center",
    ],
    {
      variants: {
        intent: {
          primary: [t.primaryColor],
        },
        intentAction: {
          primary: [tw.prefixMatch("ios") && t.primaryColorPressed],
        },
      },
    }
  );
});

export const buttonStyles = styles(buttonStylesAtom);

export type ButtonProps = VarProps<typeof buttonStylesAtom>;
