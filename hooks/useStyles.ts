import { type ColorScheme } from "styles/design-system";
import { useTheme } from "./useTheme";

import { useCallback } from "react";

export function useStyles<A>(
  callback: (t: ColorScheme) => (...args: A[]) => string
) {
  const theme = useTheme();
  return useCallback(callback(theme), [theme]);
}
