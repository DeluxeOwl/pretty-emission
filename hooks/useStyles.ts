import { type ThemeProps } from "../styles/design-system";
import { useTheme } from "./useTheme";

import { useCallback } from "react";

export function useStyles(callback: (t: ThemeProps) => any) {
  const theme = useTheme();
  return useCallback(callback(theme), [theme]);
}
