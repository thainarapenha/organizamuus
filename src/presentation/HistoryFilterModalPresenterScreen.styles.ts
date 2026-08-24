import styled from "styled-components/native";

export const ModalOverlay = styled.View`
  flex: 1;

  justify-content: flex-end;

  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContainer = styled.View`
  width: 100%;

  padding: 24px 5% 32px;

  background-color: ${({ theme }) => theme.colors.white_100};

  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

export const Header = styled.View`
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.lg}px;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.gray_900};
`;

export const StatusRow = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;

  gap: 8px;
`;

export const Form = styled.View`
  gap: 16px;
`;

export const ButtonsContainer = styled.View`
  gap: 12px;

  margin-top: 24px;
`;