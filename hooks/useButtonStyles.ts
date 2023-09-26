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
        primary: [t.button.roundness, "shadow-xl"],
        secondary: [t.button.roundness],
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
          primary: [t.button.background.primary.default],
          secondary: [t.button.background.secondary.default],
          tertiary: [],
        },
        isPressed: {
          true: {},
        },
      },
      compoundVariants: [
        {
          variant: "primary",
          isPressed: true,
          class: [t.button.background.primary.pressed],
        },
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
