import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white_300};
`;

export const HeaderContainer = styled.View`
  padding: 0 8% 24px;
  background-color: ${({ theme }) => theme.colors.white_300};
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 8% 0;
  background-color: ${({ theme }) => theme.colors.gray_50};
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const TitleTextContainer = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.xxl}px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray_900};
`;

export const Subtitle = styled.Text`
  margin-top: 6px;

  font-size: ${({ theme }) => theme.font_size.sm}px;
  color: ${({ theme }) => theme.colors.gray_500};
`;

export const FilterButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;

  margin-left: 16px;

  border-radius: 23px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const List = styled.ScrollView`
  flex: 1;
  margin-top: 28px;
`;

export const Section = styled.View`
  width: 100%;
  margin-bottom: 24px;
`;

export const SectionTitle = styled.Text`
  margin-bottom: 12px;

  font-size: ${({ theme }) => theme.font_size.md}px;
  font-weight: 600;

  color: ${({ theme }) => theme.colors.gray_900};
`;

export const TaskList = styled.View`
  gap: 10px;
`;