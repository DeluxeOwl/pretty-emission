import type { ThemeProps } from "./design-system";

const shared = {
  appBackgroundColor: "bg-white dark:bg-black",
  defaultBackground: "bg-neutral-50 dark:bg-neutral-900",
  defaultBorder: "border-neutral-100 dark:border-neutral-700",
  defaultText: "text-neutral-900 dark:text-white",
} as const;

export const Themes = {
  SKY: {
    ...shared,

    color: "sky",

    defaultButtonRoundness: "rounded-3xl",

    defaultTextStrong: "text-sky-800 dark:text-sky-200",
    defaultBackgroundWeak: "bg-sky-200 dark:bg-sky-900",
    defaultBorderWeak: "border-sky-100 dark:border-sky-800",
    defaultBackgroundWeakPressed: "bg-sky-300 dark:bg-sky-700",
    defaultTextStrongPressed: "text-sky-900 dark:text-sky-200",
  },
  AMBER: {
    ...shared,

    color: "amber",

    defaultButtonRoundness: "rounded-3xl",

    defaultTextStrong: "text-amber-800 dark:text-amber-200",
    defaultBackgroundWeak: "bg-amber-200 dark:bg-amber-800",
    defaultBorderWeak: "border-amber-100 dark:border-amber-800",
    defaultBackgroundWeakPressed: "bg-amber-300 dark:bg-amber-700",
    defaultTextStrongPressed: "text-amber-900 dark:text-amber-200",
  },
} as const satisfies Record<string, ThemeProps>;

export type ThemeNames = keyof typeof Themes;

export const ThemeNames: Array<ThemeNames> = Object.keys(
  Themes
) as Array<ThemeNames>;
