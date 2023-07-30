import tw from "lib/tailwind";
import type { VariantProps } from "class-variance-authority";
import type { Atom } from "jotai";

type ClassInput = Parameters<typeof tw.style>[0];
type ExtractTypeFromAtom<T> = T extends Atom<infer U> ? U : never;

type VarProps<T> = T extends Atom<infer U extends (...args: any) => any>
  ? VariantProps<U>
  : never;

export type { ClassInput, VarProps, ExtractTypeFromAtom };
