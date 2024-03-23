import { Text } from '../Text';
import { Container } from './styles';

export const Header = () => {
  return (
    <Container>
      <Text size={14} opacity={0.9}>
        Bem vindo ao
      </Text>
      <Text size={24} weight="700">
        KIRIATTI
        <Text size={24} weight="700" color="#FF6B6C">
          SUSHI
        </Text>
      </Text>
    </Container>
  );
};
