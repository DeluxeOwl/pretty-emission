export const PrimaryColors = ["bg-sky-500", "bg-amber-600"] as const;
export type PrimaryColor = (typeof PrimaryColors)[number];

export const PrimaryPressed = ["bg-sky-500/80", "bg-amber-500/80"] as const;
export type PrimaryColorPressed = (typeof PrimaryPressed)[number];

export type ThemeProps = {
  primaryColor: PrimaryColor;
  primaryColorPressed: PrimaryColorPressed;
};
