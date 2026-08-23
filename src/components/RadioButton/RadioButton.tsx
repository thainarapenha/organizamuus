import {
  Container,
  Circle,
  InnerCircle,
  Content,
  Title,
  Subtitle,
} from "./RadioButton.styles";

type RadioButtonProps = {
  title: string;
  subtitle: string;
  selected: boolean;
  disabled?: boolean;
  onPress: () => void;
};

export function RadioButton({
  title,
  subtitle,
  selected,
  disabled = false,
  onPress,
}: RadioButtonProps) {
  return (
    <Container
      onPress={onPress}
      disabled={disabled}
      activeOpacity={disabled ? 1 : 0.7}
    >
      <Circle
        selected={selected}
        disabled={disabled}
      >
        {selected && <InnerCircle disabled={disabled} />}
      </Circle>

      <Content>
        <Title disabled={disabled}>
          {title}
        </Title>

        <Subtitle disabled={disabled}>
          {subtitle}
        </Subtitle>
      </Content>
    </Container>
  );
}