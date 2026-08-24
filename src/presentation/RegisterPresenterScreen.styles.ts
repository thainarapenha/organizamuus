import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white_300};
`;

export const Content = styled.View`
  flex: 1;
  padding: 18px 8%;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.xxl}px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray_900};
`;

export const Subtitle = styled.Text`
  margin-top: 8px;

  font-size: ${({ theme }) => theme.font_size.md}px;
  color: ${({ theme }) => theme.colors.gray_500};
`;

export const Form = styled.View`
  width: 100%;
  gap: 16px;
  margin-top: 32px;
`;

export const FieldContainer = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md}px;
  color: ${({ theme }) => theme.colors.gray_900};
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  height: 58px;

  padding: 0 16px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_200};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.white_100};

  font-size: ${({ theme }) => theme.font_size.sm}px;
  color: ${({ theme }) => theme.colors.gray_900};
`;

export const ButtonContainer = styled.View`
  margin-top: 24px;
`;