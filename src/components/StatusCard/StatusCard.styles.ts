import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<{
  selected: boolean;
}>`
  flex: 1;
  height: 42px;

  padding: 0 6px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

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
  margin-right: 4px;

  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text<{
  selected: boolean;
}>`
  flex-shrink: 1;

  font-size: ${({ theme }) => theme.font_size.sm}px;
  font-weight: 600;

  color: ${({ theme, selected }) =>
    selected
      ? theme.colors.primary_600
      : theme.colors.gray_900};
`;