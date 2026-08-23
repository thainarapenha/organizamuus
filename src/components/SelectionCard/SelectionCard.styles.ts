import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<{ selected: boolean }>`
  width: 48%;
  height: 46px;

  flex-direction: row;
  align-items: center;

  padding: 0 14px;

  border-width: 1px;
  border-radius: 10px;

  border-color: ${({ theme, selected }) =>
    selected
      ? theme.colors.primary_600
      : theme.colors.gray_200};

  background-color: ${({ theme, selected }) =>
    selected
      ? theme.colors.primary_50
      : theme.colors.white_100};
`;

export const IconContainer = styled.View`
  margin-right: 10px;
`;

export const Label = styled.Text<{ selected: boolean }>`
  font-size: ${({ theme }) => theme.font_size.md}px;

  color: ${({ theme, selected }) =>
    selected
      ? theme.colors.primary_600
      : theme.colors.gray_900};
`;