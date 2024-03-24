import styled from 'styled-components/native';

export const Product = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 120px;
  height: 96px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

export const ProductDetails = styled.View`
  margin-left: 16px;
  flex: 1;
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background: rgba(204, 204, 204, 0.3);
  margin: 24px 0;
`;

export const AddCart = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  bottom: 0;
`;
