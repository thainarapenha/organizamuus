import styled from "styled-components/native";

export const Container = styled.View`
  position: absolute;
  z-index: 10;

  bottom: 0;

  width: 100%;
  height: 82px;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  padding: 8px 10px 10px;

  background-color: ${({ theme }) => theme.colors.white_50};

  shadow-color: #000;
  shadow-offset: 0px -4px;
  shadow-opacity: 0.24;
  shadow-radius: 12px;

  elevation: 12;
`;

export const MenuItem = styled.TouchableOpacity`
  width: 20%;

  align-items: center;
  justify-content: center;
`;

export const MenuLabel = styled.Text<{ active: boolean }>`
  margin-top: 4px;

  color: ${({ theme, active }) =>
    active
      ? theme.colors.primary_500
      : theme.colors.gray_500};

  font-size: ${({ theme }) => theme.font_size.ssm}px;

  font-family: ${({ theme, active }) =>
    active
      ? theme.font_family.medium
      : theme.font_family.regular};
`;

export const AddButton = styled.TouchableOpacity`
  position: relative;

  top: -22px;

  width: 62px;
  height: 62px;

  align-items: center;
  justify-content: center;

  border-radius: 32px;

  background-color: ${({ theme }) => theme.colors.primary_500};

  elevation: 6;

  shadow-offset: 0px 3px;
  shadow-opacity: 0.2;
  shadow-radius: 5px;
`;

export const AddIcon = styled.Text`
  color: ${({ theme }) => theme.colors.white_50};

  font-size: ${({ theme }) => theme.font_size.xxl}px;
  line-height: 38px;
`;