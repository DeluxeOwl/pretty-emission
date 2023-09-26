import { cva } from "class-variance-authority";
import { atom } from "jotai";
import { styles } from "styles/lib";
import type { VarProps } from "util/types.ts";
import { themeAtom } from "./useTheme";

const headerStylesAtom = atom((get) => {
  const t = get(themeAtom);
  return cva(
    [
      t.application.text,
      "font-satoshi-bold",
      "-tracking-tighter",
      "max-w-[300px]",
    ],
    {
      variants: {
        size: {
          large: ["text-4xl"],
          medium: ["text-3xl"],
          small: ["text-2xl"],
        },
      },
    }
  );
});

export const headerStyles = styles(headerStylesAtom);

export type HeaderVariantProps = VarProps<typeof headerStylesAtom>;
