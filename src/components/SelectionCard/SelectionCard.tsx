import { ReactNode } from "react";

import {
  Container,
  IconContainer,
  Label,
} from "./SelectionCard.styles";

type SelectionCardProps = {
  label: string;
  icon: ReactNode;
  selected: boolean;
  onPress: () => void;
};

export const SelectionCard = ({
  label,
  icon,
  selected,
  onPress,
}: SelectionCardProps) => {
  return (
    <Container
      selected={selected}
      onPress={onPress}
      activeOpacity={0.7}
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