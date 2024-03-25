import styled from 'styled-components/native';

export const Item = styled.View`
  padding: 16px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Product = styled.View`
  flex-direction: row;
`;

export const ProductDetails = styled.View``;

export const Actions = styled.View`
  flex-direction: row;
`;

export const QuantityContainer = styled.View`
  min-width: 20px;
`;

export const Image = styled.ImageBackground`
  width: 48px;
  height: 48px;
  border-radius: 8px;
`;
