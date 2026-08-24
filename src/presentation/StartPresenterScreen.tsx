import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Button } from "@/components/Button/Button";

import {
  Container,
  Banner,
  Content,
  Title,
  Subtitle,
  ButtonsContainer,
} from "./StartPresenterScreen.styles";
import { LoginModalPresenterScreen } from "./LoginModalPresenterScreen";

export const StartPresenterScreen = () => {
  const navigation = useNavigation();
  const [loginVisible, setLoginVisible] = useState(false);

  return (
    <Container>
      <Banner
        source={require("@/assets/png/banner.png")}
        resizeMode="cover"
      />

      <Content>
        <Title>
          Vamuus organizar esse apê?
        </Title>

        <Subtitle>
          Tarefas claras, menos estresse no dia a dia.
        </Subtitle>

        <ButtonsContainer>
          <Button
            title="Cadastre-se"
            variant="filled"
            onPress={() => navigation.navigate("Register")}
          />

          <Button
            title="Já tem uma conta? Entre"
            variant="outline"
            onPress={() => setLoginVisible(true)}
          />
        </ButtonsContainer>
      </Content>

      <LoginModalPresenterScreen
        visible={loginVisible}
        onClose={() => setLoginVisible(false)}
      />
    </Container>
  );
}