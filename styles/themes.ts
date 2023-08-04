// `[element][sentiment][importance][state]` - inspired by intuit
// - element: who uses this token (button, card, etc)
// - sentiment: `success|warning|danger|info|neutral` - what it conveys
// - importance: how much does it scream for attention: `primary|secondary|tertiary|accent`
// - state: `selected|hover|active|disabled`

// https://uicolors.app/browse/tailwind-colors

type ColorScheme = "sky" | "amber";

function createTheme(color: ColorScheme) {
  return {
    color: color,
    application: {
      background: "bg-white dark:bg-black",
      text: "text-neutral-900 dark:text-white",
    },

    button: {
      roundness: "rounded-2xl",
      border: {
        secondary: `border-${color}-100 dark:border-${color}-800`,
      },
      background: {
        secondary: {
          default: `bg-${color}-200 dark:bg-${color}-900`,
          pressed: `bg-${color}-300 dark:bg-${color}-700`,
        },
      },
      text: {
        secondary: {
          default: `text-${color}-800 dark:text-${color}-200`,
          pressed: `text-${color}-900 dark:text-${color}-200`,
        },
      },
    },

    card: {
      background: "bg-neutral-50 dark:bg-neutral-900",
      border: "border-neutral-100 dark:border-neutral-700",
    },
  };
}

export const Themes = {
  SKY: createTheme("sky"),
  AMBER: createTheme("amber"),
} as const satisfies Record<string, ReturnType<typeof createTheme>>;

export type ThemeNames = keyof typeof Themes;

export const ThemeNames: Array<ThemeNames> = Object.keys(
  Themes
) as Array<ThemeNames>;
