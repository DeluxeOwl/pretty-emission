import { useAtom, type Atom } from "jotai";
import tw from "lib/tailwind";
import { twMerge } from "tailwind-merge";
import type { ClassInput, ExtractTypeFromAtom } from "util/types.ts";

// Maybe tailwind-variants would've helped
// Otherwise I'd use shopify's restyle
// avoid tamagui, too much magic IMO but they have some cool ideas

// Requires you to pass an atom that returns `cva`
// Allows you to use CVA with props with tw.style class inputs
// Also does twMerge on the CVA result
export function styles<T extends (...args: any) => any>(atom: Atom<T>) {
  type AtomType = ExtractTypeFromAtom<typeof atom>;
  type Props = Parameters<AtomType>[0];

  return (props: Props, ...inputs: ClassInput[]) =>
    tw.style(twMerge(useAtom(atom)[0](props)), ...inputs);
}
