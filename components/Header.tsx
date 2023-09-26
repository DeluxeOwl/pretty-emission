import { HeaderVariantProps, headerStyles } from "hooks/useHeaderStyles";

import { Text } from "react-native";

interface HeaderProps extends HeaderVariantProps {
  children: React.ReactNode;
}

export function Header({ size = "large", children }: HeaderProps) {
  return (
    <Text
      style={headerStyles({
        size: size,
      })}
    >
      {children}
    </Text>
  );
}
