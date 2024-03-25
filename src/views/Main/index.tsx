import { useState } from 'react';
import { Button } from '../../components/Button';
import { Categories } from '../../components/Categories';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { TableModal } from '../../components/TableModal';
import {
  Container,
  CategorieContainer,
  FooterContainer,
  MenuContainer,
  Footer,
} from './styles';
import { Cart, CartItem } from '../../components/Cart';
import { Product } from '../../mocks/products';

export const Main = () => {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState<string>('');
  const [cartItems, setCartItems] = useState([] as CartItem[]);

  const onSaveTable = (table: string) => {
    setIsTableModalVisible(false);
    setSelectedTable(table);
    alert(`Mesa ${table} selecionada`);
  };

  const handleFinishOrder = () => {
    setSelectedTable('');
    setCartItems([]);
  };

  const handleAddToCart = (product: Product) => {
    if (!selectedTable) {
      alert('Selecione uma mesa para adicionar ao carrinho');
      setIsTableModalVisible(true);
      return;
    }

    setCartItems((prev) => {
      const existingItem = prev.find(
        (cartItem) => cartItem.product._id === product._id,
      );

      if (existingItem) {
        return prev.map((item) =>
          item.product._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (cartItem) => cartItem.product._id === product._id,
      );

      if (existingItem && existingItem.quantity > 1) {
        return prev.map((item) =>
          item.product._id === product._id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      }

      return prev.filter((item) => item.product._id !== product._id);
    });
  };

  return (
    <Container>
      <Header selectedTable={selectedTable} onCancelOrder={handleFinishOrder} />

      <CategorieContainer>
        <Categories />
      </CategorieContainer>

      <MenuContainer>
        <Menu onAddToCart={handleAddToCart} />
      </MenuContainer>

      <Footer>
        <FooterContainer>
          {!selectedTable ? (
            <Button onPress={() => setIsTableModalVisible(true)}>
              Novo pedido
            </Button>
          ) : (
            <Cart
              cartItems={cartItems}
              onAddItem={handleAddToCart}
              onRemoveItem={handleRemoveFromCart}
              onConfirmOrder={handleFinishOrder}
            />
          )}
        </FooterContainer>
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={onSaveTable}
      />
    </Container>
  );
};
