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
  border-color: ${({ theme }) => theme.colors.gray_200};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.white_100};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DropdownText = styled.Text<{ selected: boolean }>`
  font-size: ${({ theme }) => theme.font_size.sm}px;

  color: ${({ theme, selected }) =>
    selected
      ? theme.colors.gray_900
      : theme.colors.gray_200};
`;

export const ModalOverlay = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.white_100};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 20px;
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 16px;
`;

export const ModalTitle = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray_900};
`;

export const CloseButton = styled.TouchableOpacity`
  padding: 4px;
`;

export const CloseText = styled.Text`
  font-size: ${({ theme }) => theme.font_size.lg}px;
  color: ${({ theme }) => theme.colors.gray_900};
`;

export const ConfirmButton = styled.TouchableOpacity`
  height: 48px;

  align-items: center;
  justify-content: center;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.primary};

  margin-top: 16px;
`;

export const ConfirmText = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white_100};
`;