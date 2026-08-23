import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import type { Task } from "@/data/mocks/tasks";

import {
  Container,
  IconContainer,
  InfoContainer,
  Title,
  StatusContainer,
  Status,
  Date,
  Checkbox,
} from "./TaskItem.styles";

interface TaskItemProps {
  task: Task;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  const [completed, setCompleted] = useState(
    task.status === "concluido"
  );

  const handleToggle = () => {
    setCompleted((current) => !current);
  };

  const currentStatus = completed
    ? "concluido"
    : task.status;

  return (
    <Container>
      <IconContainer>
        <Ionicons
          name={task.icon as keyof typeof Ionicons.glyphMap}
          size={22}
        />
      </IconContainer>

      <InfoContainer>
        <Title completed={completed}>
          {task.title}
        </Title>

        <StatusContainer>
          <Status status={currentStatus}>
            {currentStatus}
          </Status>

          <Date>
            {task.date}
          </Date>
        </StatusContainer>
      </InfoContainer>

      <Checkbox
        selected={completed}
        onPress={handleToggle}
      >
        {completed ? (
          <Ionicons
            name="checkmark"
            size={16}
            color="#ffffff"
          />
        ) : null}
      </Checkbox>
    </Container>
  );
};