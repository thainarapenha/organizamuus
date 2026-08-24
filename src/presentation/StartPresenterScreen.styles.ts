import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Banner = styled.Image`
  width: 100%;
  height: 60%;
`;

export const Content = styled.View`
  flex: 1;

  padding: 18px 8%;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.xxl}px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray_900};
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md}px;
  text-align: center;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.gray_500};
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  gap: 12px;
  margin-top: 24px;
`;