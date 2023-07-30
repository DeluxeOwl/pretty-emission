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
        primary: ["rounded-2xl", "shadow-2xl"],
        secondary: [],
      },
    },
  });
});

export const outerViewStyles = styles(outerViewStylesAtom);
export type OuterViewProps = VarProps<typeof outerViewStylesAtom>;

const buttonStylesAtom = atom((get) => {
  const t = get(themeAtom);

  return cva(["px-3", "py-2", "h-12", "justify-center", "self-stretch"], {
    variants: {
      variant: {
        primary: [
          t.defaultBackgroundWeak,
          t.defaultBorderWeak,
          "border-[0.5px]",
        ],
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
        class: [t.defaultBackgroundWeakPressed, t.defaultTextStrongPressed],
      },
      {
        variant: "secondary",
        isPressed: true,
        class: ["opacity-70"],
      },
    ],
  });
});

export const buttonStyles = styles(buttonStylesAtom);

export type ButtonProps = VarProps<typeof buttonStylesAtom>;
