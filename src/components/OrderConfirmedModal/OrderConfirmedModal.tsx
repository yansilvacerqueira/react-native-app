import { Modal } from 'react-native';
import { Button, Container } from './styles';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../shared/Text';

interface OrderConfirmedModalProps {
  visible: boolean;
  onConfirm: () => void;
}

export const OrderConfirmedModal = ({
  visible,
  onConfirm,
}: OrderConfirmedModalProps) => {
  return (
    <Modal visible={visible} animationType="fade">
      <Container>
        <CheckCircle />

        <Text size={24} color="#fff" weight="600" style={{ marginTop: 16 }}>
          Pedido confirmado! 🎉
        </Text>

        <Text color="#fff" opacity={0.9} style={{ marginTop: 8 }}>
          Seu pedido está sendo preparado e em breve chegará até você.
        </Text>

        <Button onPress={onConfirm}>
          <Text color="#d73035" weight="600">
            Ok
          </Text>
        </Button>
      </Container>
    </Modal>
  );
};
