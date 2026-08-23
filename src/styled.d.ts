import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: {
      primary_50: string;
      primary_100: string;
      primary_200: string;
      primary_300: string;
      primary_400: string;
      primary_500: string;
      primary_600: string;
      primary_700: string;
      primary_800: string;
      primary_900: string;

      gray_50: string;
      gray_100: string;
      gray_200: string;
      gray_300: string;
      gray_400: string;
      gray_500: string;
      gray_600: string;
      gray_700: string;
      gray_800: string;
      gray_900: string;

      white_50: string;
      white_100: string;
      white_200: string;
      white_300: string;
      white_400: string;
      white_500: string;
      white_600: string;
      white_700: string;
      white_800: string;
      white_900: string;

      success_50: string;
      success_100: string;
      success_200: string;
      success_300: string;
      success_400: string;
      success_500: string;
      success_600: string;
      success_700: string;
      success_800: string;
      success_900: string;

      danger_50: string;
      danger_100: string;
      danger_200: string;
      danger_300: string;
      danger_400: string;
      danger_500: string;
      danger_600: string;
      danger_700: string;
      danger_800: string;
      danger_900: string;

      warning_50: string;
      warning_100: string;
      warning_200: string;
      warning_300: string;
      warning_400: string;
      warning_500: string;
      warning_600: string;
      warning_700: string;
      warning_800: string;
      warning_900: string;

      primary: string;
      success: string;
      danger: string;
      warning: string;
      black: string;
      white: string;
    };

    font_family: {
      regular: string;
      medium: string;
      semibold: string;
      bold: string;
    };

    font_size: {
      ssm: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
      xxxl: number;
    };

    font_weight: {
      regular: string;
      medium: string;
      semibold: string;
      bold: string;
    };
  }
}