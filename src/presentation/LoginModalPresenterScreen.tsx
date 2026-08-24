import { useState } from "react";
import { Modal } from "react-native";

import {
  ModalOverlay,
  ModalContainer,
  Header,
  Title,
  Form,
  Label,
  Input,
  ButtonsContainer,
} from "./LoginModalPresenterScreen.styles";

import { Button } from "@/components/Button/Button";
import { useNavigation } from "@react-navigation/native";

type LoginModalProps = {
  visible: boolean;
  onClose: () => void;
};

export const LoginModalPresenterScreen = ({visible, onClose}: LoginModalProps) => {
  const navigation = useNavigation();
  
  const [whatsapp, setWhatsapp] = useState("");

  const handleNext = () => {
    onClose
    navigation.navigate("Dashboard");
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <ModalOverlay>
        <ModalContainer>
          <Header>
            <Title>Bem-vindo de volta!</Title>
          </Header>

          <Form>
            <Label>Confirme seu número de WhatsApp para continuar</Label>

            <Input
              placeholder="(00)0 0000-0000"
              value={whatsapp}
              onChangeText={setWhatsapp}
              keyboardType="phone-pad"
              placeholderTextColor="#8E8E93"
            />
          </Form>

          <ButtonsContainer>
            <Button
              title="Próximo"
              variant="filled"
              onPress={handleNext}
            />

            <Button
              title="Voltar"
              variant="outline"
              onPress={onClose}
            />
          </ButtonsContainer>
        </ModalContainer>
      </ModalOverlay>
    </Modal>
  );
}