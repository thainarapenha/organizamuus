import styled from "styled-components/native";
import type { TaskStatus } from "@/data/mocks/tasks";

export const Container = styled.View`
  width: 100%;
  min-height: 76px;

  padding: 12px;

  flex-direction: row;
  align-items: center;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.white_100};
`;

export const IconContainer = styled.View`
  width: 42px;
  height: 42px;

  margin-right: 12px;

  border-radius: 21px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.white_300};
`;

export const Content = styled.View`
  flex: 1;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TaskInfo = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md}px;
  font-weight: 600;

  color: ${({ theme }) => theme.colors.gray_900};
`;

export const Date = styled.Text`
  margin-top: 4px;

  font-size: ${({ theme }) => theme.font_size.sm}px;

  color: ${({ theme }) => theme.colors.gray_500};
`;

export const StatusContainer = styled.View`
  align-items: flex-end;
  margin-left: 12px;
`;

export const Status = styled.Text<{ status: TaskStatus }>`
  font-size: ${({ theme }) => theme.font_size.ssm}px;
  font-weight: 600;

  color: ${({ theme, status }) => {
    switch (status) {
      case "concluido":
        return theme.colors.success;

      case "atrasado":
        return theme.colors.danger;

      default:
        return theme.colors.primary;
    }
  }};
`;

export const Responsible = styled.Text`
  margin-top: 4px;

  font-size: ${({ theme }) => theme.font_size.ssm}px;

  color: ${({ theme }) => theme.colors.gray_500};
`;