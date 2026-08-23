import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white_300};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray_900};

  font-size: ${({ theme }) => theme.font_size.xxl}px;
  font-family: ${({ theme }) => theme.font_family.bold};
`;