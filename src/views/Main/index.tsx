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
import { CartItem } from '../../components/Cart';

export const Main = () => {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState<string>('');
  const [cartItems, setCartItems] = useState([] as CartItem[]);

  const onSaveTable = (table: string) => {
    setIsTableModalVisible(false);
    setSelectedTable(table);
    alert(`Mesa ${table} selecionada`);
  };

  const handleCancelOrder = () => {
    setSelectedTable('');
  };

  return (
    <Container>
      <Header selectedTable={selectedTable} onCancelOrder={handleCancelOrder} />

      <CategorieContainer>
        <Categories />
      </CategorieContainer>

      <MenuContainer>
        <Menu />
      </MenuContainer>

      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <Button onPress={() => setIsTableModalVisible(true)}>
              Novo pedido
            </Button>
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
