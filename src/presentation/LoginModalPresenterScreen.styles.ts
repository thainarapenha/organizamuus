import styled from "styled-components/native";

export const Modal = styled.Modal``;

export const ModalOverlay = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;

  justify-content: flex-end;

  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContainer = styled.View`
  height: 80%;

  padding: 32px 5%;

  background-color: ${({ theme }) => theme.colors.white_300};

  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

export const Header = styled.View`
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.xxl}px;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.gray_900};
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 40px;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.font_size.sm}px;

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

export const ButtonsContainer = styled.View`
  width: 100%;

  gap: 12px;

  margin-top: auto;
`;