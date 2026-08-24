import {
  Container,
  Text,
} from "./Button.styles";

type ButtonVariant = "filled" | "outline";

type ButtonProps = {
  title: string;
  variant?: ButtonVariant;
  onPress: () => void;
  disabled?: boolean;
};

export const Button = ({
  title,
  variant = "filled",
  onPress,
  disabled = false,
}: ButtonProps) => {
  return (
    <Container
      variant={variant}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text variant={variant}>
        {title}
      </Text>
    </Container>
  );
}