import { cva } from "class-variance-authority";
import { atom } from "jotai";
import { styles } from "styles/lib";
import type { VarProps } from "util/types.ts";
import { themeAtom } from "./useTheme";

const outerViewStylesAtom = atom((get) => {
  const t = get(themeAtom);
  return cva(["overflow-hidden", "bg-transparent"], {
    variants: {
      variant: {
        primary: [],
        secondary: [t.button.roundness, "shadow-2xl"],
        tertiary: [],
      },
    },
  });
});

const buttonStylesAtom = atom((get) => {
  const t = get(themeAtom);

  return cva(
    [
      "px-3",
      "py-2",
      "h-12",
      "justify-center",
      t.button.roundness,
      "self-stretch",
    ],
    {
      variants: {
        variant: {
          primary: [],
          secondary: [
            t.button.background.secondary.default,
            t.button.border.secondary,
            "border-[0.5px]",
          ],
          tertiary: [],
        },
        isPressed: {
          true: {},
        },
      },
      compoundVariants: [
        {
          variant: "secondary",
          isPressed: true,
          class: [
            t.button.background.secondary.pressed,
            t.button.text.secondary.pressed,
          ],
        },
        {
          variant: "tertiary",
          isPressed: true,
          class: ["opacity-70"],
        },
      ],
    }
  );
});

export const outerViewStyles = styles(outerViewStylesAtom);
export const buttonStyles = styles(buttonStylesAtom);

export type OuterViewVariantProps = VarProps<typeof outerViewStylesAtom>;
export type ButtonVariantProps = VarProps<typeof buttonStylesAtom>;
