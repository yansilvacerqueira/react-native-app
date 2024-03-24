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

export const Main = () => {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState<string>('');

  const onSaveTable = (table: string) => {
    setIsTableModalVisible(false);
    setSelectedTable(table);
    alert(`Mesa ${table} selecionada`);
  };

  return (
    <Container>
      <Header />

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
