import theme from "@/theme/lightTheme";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Container, Title } from "./Header.styles";

interface IHeaderProps {
  title: string;
  onPress?: () => void;
}

export const HeaderComponent: React.FC<IHeaderProps> = ({ title, onPress }) => {
  const navigation = useNavigation<any>();

  return (
    <Container onPress={onPress}>
      <Feather
        name="arrow-left"
        size={30}
        color={theme.colors.gray_900}
      />
      <Title>{title}</Title>
    </Container>
  );
}