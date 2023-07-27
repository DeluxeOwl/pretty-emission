import { useThemeName } from "./useTheme";
import { type ThemeProps } from "../styles/design-system";
import { Themes } from "../styles/themes";

import { cva } from "class-variance-authority";
import { useCallback } from "react";

type Callback = (t: ThemeProps) => ReturnType<typeof cva>;

export function useStyles(callback: Callback) {
  const theme = useThemeName()[0];
  return useCallback(callback(Themes[theme]), [theme]);
}
