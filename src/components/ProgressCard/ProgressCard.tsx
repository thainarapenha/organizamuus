import { Circle, Svg } from "react-native-svg";

import type { Task } from "@/mocks/tasks";

import {
  Container,
  Content,
  Title,
  Subtitle,
  ProgressContainer,
  ProgressValue,
} from "./ProgressCard.styles";

interface ProgressCardProps {
  tasks: Task[];
}

export const ProgressCard = ({ tasks }: ProgressCardProps) => {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "concluido"
  ).length;

  const progress =
    totalTasks > 0
      ? Math.round((completedTasks / totalTasks) * 100)
      : 0;

  const size = 96;
  const strokeWidth = 9;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  return (
    <Container>
      <Content>
        <Title>Seu progresso da semana</Title>

        <Subtitle>
          Veja como está sua participação esta semana.
        </Subtitle>
      </Content>

      <ProgressContainer>
        <Svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
        >
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e5e5e5"
            strokeWidth={strokeWidth}
            fill="none"
          />

          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#5045e6"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            rotation="-90"
            origin={`${size / 2}, ${size / 2}`}
          />
        </Svg>

        <ProgressValue>
          {progress}%
        </ProgressValue>
      </ProgressContainer>
    </Container>
  );
};