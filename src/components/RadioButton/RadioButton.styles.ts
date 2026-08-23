import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<{ disabled: boolean }>`
  flex-direction: row;
  align-items: flex-start;

  width: 100%;

  padding: 14px 16px;

  border-width: 1px;
  border-radius: 10px;

  border-color: ${({ theme, disabled }) =>
    disabled
      ? theme.colors.gray_200
      : theme.colors.gray_200};

  background-color: ${({ theme, disabled }) =>
    disabled
      ? theme.colors.white
      : theme.colors.white_100};

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const RadioGroup = styled.View`
  width: 100%;
  gap: 10px;
`;

export const Circle = styled.View<{ selected: boolean; disabled: boolean }>`
  width: 20px;
  height: 20px;

  border-radius: 10px;
  border-width: 2px;

  border-color: ${({ theme, selected, disabled }) =>
    disabled
      ? theme.colors.gray_500
      : selected
        ? theme.colors.primary
        : theme.colors.gray_500};

  align-items: center;
  justify-content: center;

  margin-top: 2px;
`;

export const InnerCircle = styled.View<{ disabled: boolean }>`
  width: 10px;
  height: 10px;

  border-radius: 5px;

  background-color: ${({ theme, disabled }) =>
    disabled
      ? theme.colors.gray_500
      : theme.colors.primary};
`;

export const Content = styled.View`
  flex: 1;
  margin-left: 12px;
`;

export const Title = styled.Text<{ disabled: boolean }>`
  font-size: ${({ theme }) => theme.font_size.md}px;
  font-weight: 600;

  color: ${({ theme, disabled }) =>
    disabled
      ? theme.colors.gray_500
      : theme.colors.gray_900};
`;

export const Subtitle = styled.Text<{ disabled: boolean }>`
  font-size: ${({ theme }) => theme.font_size.sm}px;

  margin-top: 4px;

  color: ${({ theme, disabled }) =>
    disabled
      ? theme.colors.gray_500
      : theme.colors.gray_900};
`;