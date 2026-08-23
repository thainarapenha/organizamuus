import styled from "styled-components/native";

export const Container = styled.View`
  position: absolute;
  z-index: 2;

  width: 90%;

  top: 20%;

  min-height: 138px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 20px;

  border-radius: 20px;

  background-color: ${({ theme }) => theme.colors.white_50};

  elevation: 8;

  shadow-color: ${({ theme }) => theme.colors.gray_900};
  shadow-offset: 0px 4px;
  shadow-opacity: 0.12;
  shadow-radius: 12px;
`;

export const Content = styled.View`
  flex: 1;
  padding-right: 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray_900};

  font-size: ${({ theme }) => theme.font_size.lg}px;
  font-family: ${({ theme }) => theme.font_family.bold};

  line-height: 24px;
`;

export const Subtitle = styled.Text`
  margin-top: 8px;

  color: ${({ theme }) => theme.colors.gray_500};

  font-size: ${({ theme }) => theme.font_size.sm}px;
  font-family: ${({ theme }) => theme.font_family.regular};

  line-height: 18px;
`;

export const ProgressContainer = styled.View`
  width: 96px;
  height: 96px;

  align-items: center;
  justify-content: center;
`;

export const ProgressValue = styled.Text`
  position: absolute;

  color: ${({ theme }) => theme.colors.primary_500};

  font-size: ${({ theme }) => theme.font_size.xl}px;
  font-family: ${({ theme }) => theme.font_family.bold};
`;