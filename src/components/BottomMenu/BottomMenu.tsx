import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  MenuItem,
  MenuLabel,
  AddButton,
  AddIcon,
} from "./BottomMenu.styles";

interface BottomMenuProps {
  activeItem?: "inicio" | "historico" | "notificacoes" | "perfil";
  onNavigate?: (
    screen: "inicio" | "historico" | "notificacoes" | "perfil"
  ) => void;
  onAddPress?: () => void;
}

export const BottomMenu = ({
  activeItem = "inicio",
  onNavigate,
  onAddPress,
}: BottomMenuProps) => {
  return (
    <Container>
      <MenuItem onPress={() => onNavigate?.("inicio")}>
        <Ionicons
          name="home"
          size={23}
          color={activeItem === "inicio" ? "#5045E6" : "#8E8E93"}
        />

        <MenuLabel active={activeItem === "inicio"}>
          Início
        </MenuLabel>
      </MenuItem>

      <MenuItem onPress={() => onNavigate?.("historico")}>
        <Ionicons
          name="calendar-outline"
          size={23}
          color={
            activeItem === "historico"
              ? "#5045E6"
              : "#8E8E93"
          }
        />

        <MenuLabel active={activeItem === "historico"}>
          Histórico
        </MenuLabel>
      </MenuItem>

      <AddButton onPress={onAddPress}>
        <AddIcon>+</AddIcon>
      </AddButton>

      <MenuItem onPress={() => onNavigate?.("notificacoes")}>
        <Ionicons
          name="notifications-outline"
          size={23}
          color={
            activeItem === "notificacoes"
              ? "#5045E6"
              : "#8E8E93"
          }
        />

        <MenuLabel active={activeItem === "notificacoes"}>
          Notificações
        </MenuLabel>
      </MenuItem>

      <MenuItem onPress={() => onNavigate?.("perfil")}>
        <Ionicons
          name="person-outline"
          size={23}
          color={
            activeItem === "perfil"
              ? "#5045E6"
              : "#8E8E93"
          }
        />

        <MenuLabel active={activeItem === "perfil"}>
          Perfil
        </MenuLabel>
      </MenuItem>
    </Container>
  );
};