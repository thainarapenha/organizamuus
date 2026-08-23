import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white_300};
`;

export const FormScroll = styled.ScrollView`
  flex: 1;
`;

export const ContainerForm = styled.View`
  width: 100%;
  gap: 16px;
  padding: 5%;
  padding-bottom: 120px;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 16px 5%;

  background-color: ${({ theme }) => theme.colors.white_300};
`;

export const HeaderButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray_900};
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md}px;
  color: ${({ theme }) => theme.colors.gray_900};
`;

export const SelectionSection = styled.View`
  width: 100%;
`;

export const SelectionLabel = styled.Text`
  font-size: ${({ theme }) => theme.font_size.sm}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray_900};
  margin-bottom: 8px;
`;

export const SelectionGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
`;