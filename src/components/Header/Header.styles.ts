import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 70px;
  flex-direction: row;

  top: 4%;
  width: 100%;
  padding: 0 5%;
  flex-direction: row;
`;

export const Title = styled.Text`
  margin-left: 14px;
  color: ${({ theme }) => theme.colors.gray_900};
  font-size: ${({ theme }) => theme.font_size.xl};
  font-family: ${({ theme }) => theme.font_family.medium};
`;