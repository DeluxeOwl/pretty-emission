// `[element][sentiment][importance][state]` - inspired by intuit
// - element: who uses this token (button, card, etc)
// - sentiment: `success|warning|danger|info|neutral` - what it conveys
// - importance: how much does it scream for attention: `primary|secondary|tertiary|accent`
// - state: `selected|hover|active|disabled`

// https://uicolors.app/browse/tailwind-colors

// TODO: refactor this
type ColorPalette = {
  primary: string;
  secondary?: string;
  tertiary?: string;
  accent?: string;
};

const ColorSchemeColors = [
  "sky",
  "green",
  "amber",
  "rose",
  "indigo",
  "cyan",
  "teal",
  "slate",
] as const;

type ColorScheme = (typeof ColorSchemeColors)[number];

// TODO: add a color for the grays
function createTheme(color: ColorScheme) {
  return {
    color: color,
    application: {
      background: "bg-white dark:bg-black",
      text: "text-neutral-900 dark:text-white",
    },

    button: {
      roundness: "rounded-2xl",

      background: {
        primary: {
          default: `bg-${color}-500`,
          pressed: `bg-${color}-600`,
        },
        secondary: {
          default: `border-${color}-400/80 dark:border-${color}-800 border-2`,
          pressed: `bg-${color}-100 dark:bg-${color}-700`,
        },
      },
      text: {
        primary: {
          default: `text-${color}-50`,
          pressed: `text-${color}-50`,
        },
        secondary: {
          default: `text-${color}-800 dark:text-${color}-200`,
          pressed: `text-${color}-900 dark:text-${color}-200`,
        },
        tertiary: {
          default: `text-${color}-800 dark:text-${color}-200 underline`,
          pressed: `text-${color}-900 dark:text-${color}-200 underline`,
        },
      },
    },

    card: {
      background: "bg-neutral-50 dark:bg-neutral-900",
      border: "border-neutral-100 dark:border-neutral-700",
    },
  };
}

// generates colors from the default color schemes
const generatedColors = ColorSchemeColors.reduce(
  (acc, color) => ({ ...acc, [color.toUpperCase()]: createTheme(color) }),
  {}
) as Record<Uppercase<ColorScheme>, ReturnType<typeof createTheme>>;

export const Themes = {
  ...generatedColors,
} as const satisfies Record<string, ReturnType<typeof createTheme>>;

export type ThemeNames = keyof typeof Themes;

export const ThemeNames: Array<ThemeNames> = Object.keys(
  Themes
) as Array<ThemeNames>;
