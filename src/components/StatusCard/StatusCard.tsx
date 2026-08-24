import { ReactNode } from "react";

import {
  Container,
  IconContainer,
  Label,
} from "./StatusCard.styles";

interface StatusCardProps {
  label: string;
  icon: ReactNode;
  selected?: boolean;
  onPress?: () => void;
}

export function StatusCard({
  label,
  icon,
  selected = false,
  onPress,
}: StatusCardProps) {
  return (
    <Container
      selected={selected}
      onPress={onPress}
    >
      <IconContainer>
        {icon}
      </IconContainer>

      <Label selected={selected}>
        {label}
      </Label>
    </Container>
  );
}