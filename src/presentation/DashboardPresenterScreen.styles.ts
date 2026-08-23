import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary_500};
`;

export const HeaderContainer = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 16% 6%;
`;

export const HeaderTextContainer = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white_50};

  font-size: ${({ theme }) => theme.font_size.xxl}px;
  font-family: ${({ theme }) => theme.font_family.bold};
`;

export const Subtitle = styled.Text`
  margin-top: 4px;

  color: ${({ theme }) => theme.colors.white_200};

  font-size: ${({ theme }) => theme.font_size.sm}px;
  font-family: ${({ theme }) => theme.font_family.regular};
`;

export const UserImage = styled.Image`
  width: 56px;
  height: 56px;

  margin-left: 16px;

  border-radius: 28px;
`;

export const ContainerText = styled.View`
  position: absolute;
  z-index: 1;

  bottom: 0;

  width: 100%;
  height: 70%;

  padding: 18% 8% 8%;

  border-top-left-radius: 42px;
  border-top-right-radius: 42px;

  background-color: ${({ theme }) => theme.colors.white_300};
`;

export const ScrollContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 80,
  },
})`
  flex: 1;
  width: 100%;
`;

export const ContainerInfo = styled.View`
  width: 100%;
  gap: 16px;
`;

export const TitleSection = styled.Text`
  margin-bottom: 16px;

  color: ${({ theme }) => theme.colors.gray_900};
  font-size: ${({ theme }) => theme.font_size.xl}px;
  font-family: ${({ theme }) => theme.font_family.bold};
`;