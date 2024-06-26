import { Platform } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android';

export const Category = styled.TouchableOpacity`
  align-items: center;
  margin-left: 16px;
`;

export const Icon = styled.View`
  background: #fff;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
  elevation: 2;
`;
// Elevation is just for Android, it's the shadow effect
