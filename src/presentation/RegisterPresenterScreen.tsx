import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { HeaderComponent } from "@/components/Header/Header";
import { Button } from "@/components/Button/Button";

import {
  Container,
  Content,
  Title,
  Subtitle,
  Form,
  FieldContainer,
  Label,
  Input,
  ButtonContainer,
} from "./RegisterPresenterScreen.styles";

export const RegisterPresenterScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [houseName, setHouseName] = useState("");

  return (
    <Container>
      <HeaderComponent
        onPress={() => navigation.goBack()}
        title=""
      />

      <Content>
        <Title>Vamos começar?</Title>
        <Subtitle>Leva menos de 1 minuto.</Subtitle>

        <Form>
          <FieldContainer>
            <Label>Como podemos te chamar?</Label>

            <Input
              placeholder="Maria da Silva"
              value={name}
              onChangeText={setName}
              placeholderTextColor="#8E8E93"
            />
          </FieldContainer>

          <FieldContainer>
            <Label>Telefone (WhatsApp)</Label>

            <Input
              placeholder="(00)0 0000-0000"
              value={whatsapp}
              onChangeText={setWhatsapp}
              placeholderTextColor="#8E8E93"
              keyboardType="phone-pad"
            />
          </FieldContainer>

          <FieldContainer>
            <Label>Qual nome do seu apê?</Label>

            <Input
              placeholder="Ex.: República Aurora"
              value={houseName}
              onChangeText={setHouseName}
              placeholderTextColor="#8E8E93"
            />
          </FieldContainer>
        </Form>

        <ButtonContainer>
          <Button
            title="Cadastrar"
            variant="filled"
            onPress={() => navigation.navigate("Dashboard")}
          />
        </ButtonContainer>
      </Content>
    </Container>
  );
};