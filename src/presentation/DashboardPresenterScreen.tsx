import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { tasksMock } from "@/data/mocks/tasks";
import { TaskItem } from "@/components/TaskItem/TaskItem";
import { ProgressCard } from "@/components/ProgressCard/ProgressCard";
import { BottomMenu } from "@/components/BottomMenu/BottomMenu";

import {
  Container,
  ContainerInfo,
  ContainerText,
  HeaderContainer,
  HeaderTextContainer,
  ScrollContainer,
  Subtitle,
  Title,
  TitleSection,
  UserImage,
} from "./DashboardPresenterScreen.styles";

export const DashboardPresenterScreen = () => {
  const navigation = useNavigation();
  
  const [tasks] = useState(tasksMock);
  return (
    <Container>
      <HeaderContainer>
        <HeaderTextContainer>
          <Title>Olá, Pedro!</Title>
          <Subtitle>Vamos organizar a casa?</Subtitle>
        </HeaderTextContainer>

        <UserImage
          source={{
            uri: "https://i.pravatar.cc/150?img=12",
          }}
        />
      </HeaderContainer>


      <ProgressCard tasks={tasks} />
      <ContainerText>
        <TitleSection>
          Próximas tarefas
        </TitleSection>

        <ScrollContainer>
          <ContainerInfo>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
              />
            ))}
          </ContainerInfo>
        </ScrollContainer>
      </ContainerText>

      <BottomMenu
        activeItem="inicio"
        onNavigate={(screen) => {
          switch (screen) {
            case "inicio":
              navigation.navigate("Dashboard");
              break;

            case "historico":
              navigation.navigate("History");
              break;

            case "notificacoes":
              navigation.navigate("Notifications");
              break;

            case "perfil":
              navigation.navigate("Profile");
              break;
          }
        }}
        onAddPress={() => navigation.navigate("CreateTask")}
      />
    </Container>
  );
};