import styled, { css } from "styled-components/native";

type ButtonVariant = "filled" | "outline";

export const Container = styled.TouchableOpacity<{
  variant: ButtonVariant;
}>`
  width: 100%;
  height: 48px;

  border-radius: 99px;

  align-items: center;
  justify-content: center;

  ${({ theme, variant }) =>
    variant === "filled"
      ? css`
          background-color: ${theme.colors.primary};
          border-width: 1px;
          border-color: ${theme.colors.primary};
        `
      : css`
          background-color: transparent;
          border-width: 1px;
          border-color: ${theme.colors.primary};
        `}
`;

export const Text = styled.Text<{
  variant: ButtonVariant;
}>`
  font-size: ${({ theme }) => theme.font_size.md}px;
  font-weight: 600;

  color: ${({ theme, variant }) =>
    variant === "filled"
      ? theme.colors.white_100
      : theme.colors.primary};
`;