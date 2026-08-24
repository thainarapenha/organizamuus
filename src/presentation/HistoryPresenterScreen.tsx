import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { HeaderComponent } from "@/components/Header/Header";
import { HistoryTaskItem } from "@/components/HistoryTaskItem/HistoryTaskItem";
import { tasksMock } from "@/data/mocks/tasks";

import {
  Container,
  Content,
  TitleContainer,
  TitleTextContainer,
  Title,
  Subtitle,
  FilterButton,
  List,
  Section,
  SectionTitle,
  TaskList,
  HeaderContainer,
} from "./HistoryPresenterScreen.styles";
import { useState } from "react";
import { HistoryFilterModalPresenterScreen } from "./HistoryFilterModalPresenterScreen";
import { BottomMenu } from "@/components/BottomMenu/BottomMenu";

export const HistoryPresenterScreen = () => {
  const navigation = useNavigation();

  const todayTasks = tasksMock.filter(
    (task) => task.period === "hoje"
  );

  const lastWeekTasks = tasksMock.filter(
    (task) => task.period === "ultima_semana"
  );

  const [filterVisible, setFilterVisible] = useState(false);

  const [filterPeriod, setFilterPeriod] = useState({
    startDate: "",
    endDate: "",
  });

  const [filterResponsible, setFilterResponsible] = useState("");

  return (
    <Container>
      <HeaderComponent
        title=""
        onPress={() => navigation.goBack()}
      />
      <HeaderContainer>
        <TitleContainer>
          <TitleTextContainer>
            <Title>Histórico</Title>

            <Subtitle>
              Veja o que já foi feito no apê.
            </Subtitle>
          </TitleTextContainer>

          <FilterButton onPress={() => setFilterVisible(true)}>
            <Ionicons
              name="options-outline"
              size={22}
              color="#FFFFFF"
            />
          </FilterButton>
        </TitleContainer>
      </HeaderContainer>

      <Content>
        <List showsVerticalScrollIndicator={false}>
          <Section>
            <SectionTitle>Hoje</SectionTitle>

            <TaskList>
              {todayTasks.map((task) => (
                <HistoryTaskItem
                  key={task.id}
                  task={task}
                />
              ))}
            </TaskList>
          </Section>

          <Section>
            <SectionTitle>Última semana</SectionTitle>

            <TaskList>
              {lastWeekTasks.map((task) => (
                <HistoryTaskItem
                  key={task.id}
                  task={task}
                />
              ))}
            </TaskList>
          </Section>
        </List>
      </Content>

      <BottomMenu
        activeItem="historico"
        onNavigate={(screen) => {
          switch (screen) {
            case "inicio":
              navigation.navigate("Dashboard");
              break;

            case "historico":
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

      <HistoryFilterModalPresenterScreen
        visible={filterVisible}
        period={filterPeriod}
        responsible={filterResponsible}
        onPeriodChange={setFilterPeriod}
        onResponsibleChange={setFilterResponsible}
        onApply={() => {
          setFilterVisible(false);
        }}
        onClear={() => {
          setFilterPeriod({
            startDate: "",
            endDate: "",
          });

          setFilterResponsible("");
        }}
        onClose={() => setFilterVisible(false)}
      />
    </Container>
  );
};