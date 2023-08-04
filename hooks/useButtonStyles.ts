import { cva } from "class-variance-authority";
import { atom } from "jotai";
import { styles } from "styles/lib";
import type { VarProps } from "util/types.ts";
import { themeAtom } from "./useTheme";

const outerViewStylesAtom = atom((get) => {
  const t = get(themeAtom);
  return cva(["overflow-hidden"], {
    variants: {
      variant: {
        primary: [t.defaultButtonRoundness, "shadow-2xl"],
        secondary: [],
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
      t.defaultButtonRoundness,
      "self-stretch",
    ],
    {
      variants: {
        variant: {
          primary: [t.backgroundWeak, t.borderWeak, "border-[0.5px]"],
          secondary: [],
        },
        isPressed: {
          true: {},
        },
      },
      compoundVariants: [
        {
          variant: "primary",
          isPressed: true,
          class: [t.backgroundWeakPressed, t.textStrongPressed],
        },
        {
          variant: "secondary",
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
