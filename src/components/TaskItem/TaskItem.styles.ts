import styled from "styled-components/native";

import type { TaskStatus } from "@/data/mocks/tasks";

interface TitleProps {
  completed: boolean;
}

interface StatusProps {
  status: TaskStatus;
}

interface CheckboxProps {
  selected: boolean;
}

export const Container = styled.View`
  width: 100%;
  min-height: 72px;

  flex-direction: row;
  align-items: center;

  padding: 12px;

  border-radius: 12px;

  background-color: ${({ theme }) => theme.colors.white_100};
`;

export const IconContainer = styled.View`
  width: 42px;
  height: 42px;

  align-items: center;
  justify-content: center;

  margin-right: 12px;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.primary_50};
`;

export const InfoContainer = styled.View`
  flex: 1;
`;

export const Title = styled.Text<TitleProps>`
  color: ${({ theme }) => theme.colors.gray_900};

  font-size: ${({ theme }) => theme.font_size.md}px;
  font-family: ${({ theme }) => theme.font_family.semibold};

  text-decoration-line: ${({ completed }) =>
    completed ? "line-through" : "none"};
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 4px;
`;

export const Status = styled.Text<StatusProps>`
  color: ${({ theme, status }) => {
    if (status === "concluido") {
      return theme.colors.success_600;
    }

    if (status === "atrasado") {
      return theme.colors.danger_600;
    }

    return theme.colors.warning_600;
  }};

  font-size: ${({ theme }) => theme.font_size.sm}px;
  font-family: ${({ theme }) => theme.font_family.medium};
`;

export const Date = styled.Text`
  margin-left: 8px;

  color: ${({ theme }) => theme.colors.gray_500};

  font-size: ${({ theme }) => theme.font_size.sm}px;
  font-family: ${({ theme }) => theme.font_family.regular};
`;

export const Checkbox = styled.TouchableOpacity<CheckboxProps>`
  width: 24px;
  height: 24px;

  align-items: center;
  justify-content: center;

  margin-left: 8px;

  border-width: 2px;
  border-radius: 6px;

  border-color: ${({ theme, selected }) =>
    selected
      ? theme.colors.success_700
      : theme.colors.gray_300};

  background-color: ${({ theme, selected }) =>
    selected
      ? theme.colors.success_700
      : theme.colors.white_50};
`;