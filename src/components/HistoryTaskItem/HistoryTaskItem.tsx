import { Ionicons } from "@expo/vector-icons";

import type { Task } from "@/data/mocks/tasks";
import { peopleOptions } from "@/data/mocks/peopleOptions";
import theme from "@/theme/lightTheme";

import {
  Container,
  IconContainer,
  Content,
  TaskInfo,
  Title,
  Date,
  StatusContainer,
  Status,
  Responsible,
} from "./HistoryTaskItem.styles";

interface HistoryTaskItemProps {
  task: Task;
}

export const HistoryTaskItem = ({
  task,
}: HistoryTaskItemProps) => {
  const responsibleName =
    peopleOptions.find(
      (person) => person.value === task.responsible
    )?.label ?? "Não informado";

  return (
    <Container>
      <IconContainer>
        <Ionicons
          name={task.icon as keyof typeof Ionicons.glyphMap}
          size={22}
          color={theme.colors.gray_900}
        />
      </IconContainer>

      <Content>
        <TaskInfo>
          <Title>{task.title}</Title>
          <Date>{task.date}</Date>
        </TaskInfo>

        <StatusContainer>
          <Status status={task.status}>
            {task.status}
          </Status>

          <Responsible>
            {responsibleName}
          </Responsible>
        </StatusContainer>
      </Content>
    </Container>
  );
}