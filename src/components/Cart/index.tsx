import { FlatList, TouchableOpacity } from 'react-native';
import { Text } from '../shared/Text';
import { Product as ProductType } from '../../mocks/products';
import {
  Actions,
  Item,
  Product,
  ProductDetails,
  QuantityContainer,
  Summary,
  TotalContainer,
} from './styles';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { MinusCircle } from '../Icons/MinusCircle';
import { Button } from '../Button';
import { OrderConfirmedModal } from '../OrderConfirmedModal/OrderConfirmedModal';
import { useState } from 'react';

export interface CartItem {
  product: ProductType;
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  onAddItem: (product: ProductType) => void;
  onRemoveItem: (product: ProductType) => void;
  onConfirmOrder: () => void;
}

export const Cart = ({
  cartItems,
  onAddItem,
  onRemoveItem,
  onConfirmOrder,
}: CartProps) => {
  const [isOrderConfirmedModalVisible, setIsOrderConfirmedModalVisible] =
    useState(false);

  const total = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.product.price * cartItem.quantity,
    0,
  );

  const handleConfirmOrder = () => {
    setIsOrderConfirmedModalVisible(true);
  };

  return (
    <>
      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={(cartItem) => cartItem.product._id}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 16, maxHeight: 150 }}
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
                    {formatCurrency(cartItem.product.price)}
                  </Text>
                </ProductDetails>
              </Product>

              <Actions>
                <TouchableOpacity
                  style={{ marginRight: 24 }}
                  onPress={() => onAddItem(cartItem.product)}
                >
                  <PlusCircle />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => onRemoveItem(cartItem.product)}
                >
                  <MinusCircle />
                </TouchableOpacity>
              </Actions>
            </Item>
          )}
        />
      )}

      <Summary>
        <TotalContainer>
          {cartItems.length > 0 ? (
            <>
              <Text size={14} color="#666">
                Total
              </Text>

              <Text size={20} weight="600">
                {formatCurrency(total)}
              </Text>
            </>
          ) : (
            <Text size={14} color="#666">
              Adicione itens ao pedido
            </Text>
          )}
        </TotalContainer>

        <Button onPress={handleConfirmOrder} disabled={cartItems.length === 0}>
          Confirmar pedido
        </Button>
      </Summary>

      <OrderConfirmedModal
        visible={isOrderConfirmedModalVisible}
        onConfirm={() => {
          setIsOrderConfirmedModalVisible(false);
          onConfirmOrder();
        }}
      />
    </>
  );
};
