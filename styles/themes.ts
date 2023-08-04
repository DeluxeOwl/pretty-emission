import type { ColorScheme } from "./design-system";

const shared = {
  appBackgroundColor: "bg-white dark:bg-black",
  background: "bg-neutral-50 dark:bg-neutral-900",
  border: "border-neutral-100 dark:border-neutral-700",
  text: "text-neutral-900 dark:text-white",
} as const;

export const Themes = {
  SKY: {
    ...shared,

    color: "sky",

    buttonRoundness: "rounded-3xl",

    textStrong: "text-sky-800 dark:text-sky-200",
    backgroundWeak: "bg-sky-200 dark:bg-sky-900",
    borderWeak: "border-sky-100 dark:border-sky-800",
    backgroundWeakPressed: "bg-sky-300 dark:bg-sky-700",
    textStrongPressed: "text-sky-900 dark:text-sky-200",
  },
  AMBER: {
    ...shared,

    color: "amber",

    buttonRoundness: "rounded-3xl",

    textStrong: "text-amber-800 dark:text-amber-200",
    backgroundWeak: "bg-amber-200 dark:bg-amber-800",
    borderWeak: "border-amber-100 dark:border-amber-800",
    backgroundWeakPressed: "bg-amber-300 dark:bg-amber-700",
    textStrongPressed: "text-amber-900 dark:text-amber-200",
  },
} as const satisfies Record<string, ColorScheme>;

export type ThemeNames = keyof typeof Themes;

export const ThemeNames: Array<ThemeNames> = Object.keys(
  Themes
) as Array<ThemeNames>;
