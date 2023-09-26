import { useTheme } from "hooks/useTheme";
import tw from "lib/tailwind";
import type { TextProps } from "react-native";
import { Text } from "react-native";

interface StyledTextProps extends TextProps {}

export default function StyledText({ children, ...props }: StyledTextProps) {
  const t = useTheme();
  return <Text style={tw`${t.application.text}`}>{children}</Text>;
}
