// sentimentUsageProminenceInteraction

// Sentiment described the feeling the color was conveying. Options included default, success, warning, danger, upsell, and beta.
// Usage described the element upon which the color is being applied. Options included background, text, icon, and border.
// Prominence described how much attention the color is drawing. Options included default, weak, medium, and strong.
// Interaction described how the user is interacting with a colored element. Options included default, selected, hover, active, and disabled.

// https://uicolors.app/browse/tailwind-colors
// TODO: strong typing?
export type ThemeProps = {
  appBackgroundColor: "bg-white dark:bg-black";
  text: "text-neutral-900 dark:text-white";

  color: "sky" | "amber";

  defaultButtonRoundness: "rounded-2xl" | "rounded-3xl";

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

  border: "border-neutral-100 dark:border-neutral-700";

  borderWeak:
    | "border-sky-100 dark:border-sky-800"
    | "border-amber-100 dark:border-amber-800";
};
