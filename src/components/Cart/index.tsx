import { FlatList, TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { Product as ProductType } from '../../mocks/products';
import {
  Actions,
  Item,
  Product,
  ProductDetails,
  QuantityContainer,
} from './styles';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { MinusCircle } from '../Icons/MinusCircle';

export interface CartItem {
  product: ProductType;
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
}

export const Cart = ({ cartItems }: CartProps) => {
  return (
    <FlatList
      data={cartItems}
      keyExtractor={(cartItem) => cartItem.product._id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item: cartItem }) => (
        <Item>
          <Product>
            <QuantityContainer>
              <Text size={14} color="#666">
                {cartItem.quantity}x
              </Text>
            </QuantityContainer>

            <ProductDetails>
              <Text size={14} weight="600">
                {cartItem.product.name}
              </Text>

              <Text size={16} color="#666">
                {formatCurrency(cartItem.product.price * cartItem.quantity)}
              </Text>
            </ProductDetails>
          </Product>

          <Actions>
            <TouchableOpacity style={{ marginRight: 24 }}>
              <PlusCircle />
            </TouchableOpacity>

            <TouchableOpacity>
              <MinusCircle />
            </TouchableOpacity>
          </Actions>
        </Item>
      )}
    />
  );
};
