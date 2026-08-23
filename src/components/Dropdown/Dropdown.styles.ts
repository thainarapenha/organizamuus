import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md}px;
  color: ${({ theme }) => theme.colors.gray_900};
  margin-bottom: 8px;
`;

export const DropdownButton = styled.TouchableOpacity`
  height: 58px;
  padding: 0 16px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_500};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.white_100};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DropdownText = styled.Text`
  font-size: ${({ theme }) => theme.font_size.sm}px;
  color: ${({ theme }) => theme.colors.gray_900};
`;

export const OptionsContainer = styled.View`
  margin-top: 4px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_500};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.white_100};

  overflow: hidden;

  z-index: 1000;
  elevation: 5;
`;

export const Option = styled.TouchableOpacity`
  padding: 14px 16px;
`;

export const OptionText = styled.Text`
  font-size: ${({ theme }) => theme.font_size.sm}px;
  color: ${({ theme }) => theme.colors.gray_900};
`;