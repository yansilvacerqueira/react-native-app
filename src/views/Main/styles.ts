import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  background: #fafafa;
  flex: 1;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
`;

export const CategorieContainer = styled.View`
  height: 74px;
  margin-top: 34px;
`;

export const MenuContainer = styled.View`
  flex: 1;
`;

export const FooterContainer = styled.SafeAreaView``;

export const Footer = styled.View`
  min-height: 100px;
  background: #fff;
  padding: 16px 24px;
`;
