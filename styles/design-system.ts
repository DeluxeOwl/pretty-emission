// `[element][sentiment][importance][state]` - inspired by intuit
// - element: who uses this token (button, card, etc)
// - sentiment: `success|warning|danger|info|neutral` - what it conveys
// - importance: how much does it scream for attention: `primary|secondary|tertiary|accent`
// - state: `selected|hover|active|disabled`

// https://uicolors.app/browse/tailwind-colors
export type ColorScheme = {
  // TODO: should be an array probably
  color: "sky" | "amber";

  application: {
    background: "bg-white dark:bg-black";
    text: "text-neutral-900 dark:text-white";
  };

  button: {
    roundness: "rounded-2xl" | "rounded-3xl";
    border: {
      secondary:
        | "border-sky-100 dark:border-sky-800"
        | "border-amber-100 dark:border-amber-800";
    };
    background: {
      secondary: {
        default:
          | "bg-sky-200 dark:bg-sky-900"
          | "bg-amber-200 dark:bg-amber-800";
        pressed:
          | "bg-sky-300 dark:bg-sky-700"
          | "bg-amber-300 dark:bg-amber-700";
      };
    };
    text: {
      secondary: {
        default:
          | "text-sky-800 dark:text-sky-200"
          | "text-amber-800 dark:text-amber-200";
        pressed:
          | "text-sky-900 dark:text-sky-200"
          | "text-amber-900 dark:text-amber-200";
      };
    };
  };

  card: {
    background: "bg-neutral-50 dark:bg-neutral-900";
    border: "border-neutral-100 dark:border-neutral-700";
  };

  appBackgroundColor: "bg-white dark:bg-black";
  text: "text-neutral-900 dark:text-white";

  buttonRoundness: "rounded-2xl" | "rounded-3xl";

  background: "bg-neutral-50 dark:bg-neutral-900";

  backgroundWeak:
    | "bg-sky-200 dark:bg-sky-900"
    | "bg-amber-200 dark:bg-amber-800";
  backgroundWeakPressed:
    | "bg-sky-300 dark:bg-sky-700"
    | "bg-amber-300 dark:bg-amber-700";

  textStrong:
    | "text-sky-800 dark:text-sky-200"
    | "text-amber-800 dark:text-amber-200";
  textStrongPressed:
    | "text-sky-900 dark:text-sky-200"
    | "text-amber-900 dark:text-amber-200";

  borderWeak:
    | "border-sky-100 dark:border-sky-800"
    | "border-amber-100 dark:border-amber-800";

  border: "border-neutral-100 dark:border-neutral-700";
};
