import { TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { Container, OrderHeader, Table } from './styles';

interface HeaderProps {
  selectedTable: string;
  onCancelOrder: () => void;
}

export const Header = ({ selectedTable, onCancelOrder }: HeaderProps) => {
  if (selectedTable) {
    return (
      <Container>
        <OrderHeader>
          <Text size={24} weight="600">
            Pedido
          </Text>
          <TouchableOpacity onPress={onCancelOrder}>
            <Text size={14} color="#D73035" weight="600">
              cancelar pedido
            </Text>
          </TouchableOpacity>
        </OrderHeader>
        <Table>
          <Text color="#666">Mesa {selectedTable}</Text>
        </Table>
      </Container>
    );
  }

  return (
    <Container>
      <>
        <Text size={14} opacity={0.9}>
          Bem vindo ao
        </Text>
        <Text size={24} weight="700">
          KIRIATTI
          <Text size={24} weight="700" color="#FF6B6C">
            SUSHI
          </Text>
        </Text>
      </>
    </Container>
  );
};
