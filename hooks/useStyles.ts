import { type ThemeProps } from "../styles/design-system";
import { useTheme } from "./useTheme";

import type { cva } from "class-variance-authority";
import { useCallback } from "react";

type CvaType<T> = typeof cva<T>;
type CvaParams<T> = Parameters<CvaType<T>>;

type ClassValue = CvaParams<any>[0];
type Cfg<T> = CvaParams<T>[1];
type Ret<T> = ReturnType<CvaType<T>>;

export function useStyles(callback: (t: ThemeProps) => any) {
  const theme = useTheme();
  return useCallback(callback(theme), [theme]);
}
