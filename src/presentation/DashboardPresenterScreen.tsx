import { useState } from "react";

import { tasksMock } from "@/mocks/tasks";
import { TaskItem } from "@/components/TaskItem/TaskItem";

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
    </Container>
  );
};