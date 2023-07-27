import type { ThemeProps } from "./design-system";

export const Themes = {
  SKY: {
    primaryColor: "bg-sky-500",
    primaryColorPressed: "bg-sky-500/80",
  },
  AMBER: {
    primaryColor: "bg-amber-600",
    primaryColorPressed: "bg-amber-500/80",
  },
} as const satisfies Record<string, ThemeProps>;

export type ThemeNames = keyof typeof Themes;

export const ThemeNames: Array<ThemeNames> = Object.keys(
  Themes
) as Array<ThemeNames>;
