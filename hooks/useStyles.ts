import { type ThemeProps } from "styles/design-system";
import { useTheme } from "./useTheme";

import { useCallback } from "react";

export function useStyles<A>(
  callback: (t: ThemeProps) => (...args: A[]) => string
) {
  const theme = useTheme();
  return useCallback(callback(theme), [theme]);
}
